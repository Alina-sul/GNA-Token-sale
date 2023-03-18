import React, { useCallback, useEffect, useReducer, useState } from 'react';

// COMPONENTS
import EnableAccount from './enableAccount';
import BuyTokens from './buyTokens';

// CONTEXT
import useEth from '../../contexts/EthContext/useEth';
import { actions, initialState, reducer } from '../../contexts/EthContext';

// STYLES
import './index.scss';

function TokenSale() {
  const { state } = useEth();
  const [enabledAccount, setEnabledAccount] = useState({ address: '' });

  return (
    <div className="token-sale-page">
      {state.loading && <div className="loading">Loading...</div>}
      {!state.loading && (
        <>
          <h1>GNA TOKENS</h1>
          <EnableAccount setEnabledAccount={setEnabledAccount} />
          <BuyTokens enabledAccount={enabledAccount} />
        </>
      )}
    </div>
  );
}

export default TokenSale;
