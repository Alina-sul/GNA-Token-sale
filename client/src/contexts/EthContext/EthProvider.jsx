import React, { useReducer, useCallback, useEffect } from 'react';
import Web3 from 'web3';
import EthContext from './EthContext';
import { reducer, actions, initialState } from './state';

import GNAToken from '../../contracts/GNAToken.json';
import GNATokenSale from '../../contracts/GNATokenSale.json';
import KycContract from '../../contracts/KycContract.json';

function EthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // initialize contract
  const initContract = useCallback(
    async (artifact, contractKey) => {
      if (artifact) {
        const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
        const accounts = await web3.eth.requestAccounts();
        const networkID = '5777';
        const { abi } = artifact;

        let address, contract;
        try {
          address = artifact.networks[networkID].address;
          contract = new web3.eth.Contract(abi, address);
        } catch (err) {
          console.error(err);
        }
        dispatch({
          type: actions.init,
          data: {
            [contractKey]: { artifact, web3, accounts, networkID, contract },
          },
        });
      }
    },
    [dispatch]
  );

  // call init for all contracts
  const init = useCallback(async () => {
    await initContract(GNAToken, 'gnaToken');
    await initContract(GNATokenSale, 'gnaTokenSale');
    await initContract(KycContract, 'kycContract');
  }, [initContract]);

  useEffect(() => {
    const tryInit = async () => {
      try {
        dispatch({ type: actions.setLoading, data: true });
        await init();
        dispatch({ type: actions.setLoading, data: false });
      } catch (err) {
        console.error(err);
      }
    };

    tryInit().then();
  }, [init]);

  useEffect(() => {
    const events = ['chainChanged', 'accountsChanged'];
    const handleChange = () => {
      init().then();
    };

    events.forEach(e => window.ethereum.on(e, handleChange));
    return () => {
      events.forEach(e => window.ethereum.removeListener(e, handleChange));
    };
  }, [init]);

  return (
    <EthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </EthContext.Provider>
  );
}

export default EthProvider;
