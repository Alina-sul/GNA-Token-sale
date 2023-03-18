import React, { useCallback, useReducer } from 'react';
import { Button } from 'antd';
import { actions, reducer, useEth } from '../../contexts/EthContext';

function BuyTokens({ enabledAccount }) {
  const { state } = useEth();
  const [dispatch] = useReducer(reducer);

  const updateUserTokens = useCallback(async () => {
    const { gnaToken } = state;
    const userTokens = await gnaToken.contract.methods
      .balanceOf(gnaToken.accounts[0])
      .call();

    dispatch({ type: actions.setUserTokens, data: userTokens });
  }, [state?.gnaToken?.contract?.methods, dispatch]);

  const handleBuyTokens = async () => {
    const { gnaTokenSale } = state;
    await gnaTokenSale?.contract.methods
      .buyTokens(enabledAccount?.address)
      .send({
        from: enabledAccount?.address,
        value: gnaTokenSale?.web3.utils.toWei('1', 'wei'),
      });
    await updateUserTokens();
  };

  return (
    <div className="token-sale-page__buy-tokens">
      <div>
        <span style={{ fontWeight: '500' }}>
          To buy tokens send wei to this address:{' '}
          <span
            style={{ fontStyle: 'italic', color: '#ababab', fontWeight: '300' }}
          >
            {state?.kycContract?.address}
          </span>
        </span>
      </div>
      <div>
        <br />
        <span style={{ fontWeight: '500' }}>Token Balance:</span>{' '}
        {state.userTokens}
      </div>
      <div className="token-sale-page__buy-tokens-button">
        <Button size={'large'} onClick={handleBuyTokens}>
          {' '}
          BUY TOKENS
        </Button>{' '}
      </div>
    </div>
  );
}

export default BuyTokens;
