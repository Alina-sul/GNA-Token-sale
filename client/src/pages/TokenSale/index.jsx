import React, { useState } from 'react';

// COMPONENTS
import EnableAccount from './enableAccount';
import BuyTokens from './buyTokens';

// STYLES
import './index.scss';

function TokenSale() {
  const [enabledAccount, setEnabledAccount] = useState({ address: '' });

  return (
    <div className="token-sale-page">
      <h1>GNA TOKENS</h1>
      <EnableAccount setEnabledAccount={setEnabledAccount} />
      <BuyTokens enabledAccount={enabledAccount} />
    </div>
  );
}

export default TokenSale;
