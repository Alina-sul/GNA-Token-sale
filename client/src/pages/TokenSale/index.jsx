import React, { useState } from 'react';

// COMPONENTS
import EnableAccount from './enableAccount';
import BuyTokens from './buyTokens';

// STYLES
import './index.scss';
import useEth from '../../contexts/EthContext/useEth';

function TokenSale() {
  const {
    state: { loading },
  } = useEth();
  const [enabledAccount, setEnabledAccount] = useState({ address: '' });

  return (
    <div className="token-sale-page">
      {loading && <div className="loading">Loading...</div>}
      {!loading && (
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
