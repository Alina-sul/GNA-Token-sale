import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function BuyTokens({ enabledAccount }) {
  return (
    <div className="token-sale-page__buy-tokens">
      <div>
        <span style={{ fontWeight: '500' }}>Sent Ether to this address:</span>{' '}
        {!enabledAccount.address && (
          <span
            style={{ fontStyle: 'italic', color: '#ababab', fontWeight: '300' }}
          >
            no address inserted
          </span>
        )}
        {enabledAccount.address}
      </div>
      <div>
        <span style={{ fontWeight: '500' }}>Token Balance:</span> 0
      </div>
      <div className="token-sale-page__buy-tokens-button">
        <Button size={'large'}> BUY TOKENS</Button>{' '}
      </div>
    </div>
  );
}

BuyTokens.propTypes = {
  enabledAccount: PropTypes.object.isRequired,
};

export default BuyTokens;
