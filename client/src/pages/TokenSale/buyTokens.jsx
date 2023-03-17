import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function BuyTokens({ enabledAccount }) {
  return (
    <div className="token-sale-page__buy-tokens">
      <div>
        Sent Ether to this address:{' '}
        {!enabledAccount.address && (
          <span
            style={{ fontStyle: 'italic', color: '#ababab', fontWeight: '300' }}
          >
            no address selected
          </span>
        )}
        {enabledAccount.address}
      </div>
      <div>Token Balance: 0</div>
      <div className="token-sale-page__buy-tokens-button">
        <Button size={'large'}> BUY TOKENS</Button>{' '}
      </div>
    </div>
  );
}

BuyTokens.propTypes = {
  enabledAccount: PropTypes.string.isRequired,
};

export default BuyTokens;
