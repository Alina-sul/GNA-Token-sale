import React, { useState } from 'react';
import { Button, Card, Input, Space } from 'antd';
import PropTypes from 'prop-types';

function EnableAccount({ setEnabledAccount }) {
  const [address, setAddress] = useState('');

  const onInputChange = e => {
    setAddress(e.target.value);
  };

  const onClickEnable = () => {
    setEnabledAccount({ address });
  };

  return (
    <div className="token-sale-page__enable-account">
      <Card hoverable className="token-sale-page__enable-account-card">
        <span>Add address to Whitelist:</span>

        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeHolder="Enter your address"
            onChange={onInputChange}
            value={address}
          />
          <Button type="primary" onClick={onClickEnable}>
            ENABLE ACCOUNT
          </Button>
        </Space.Compact>
      </Card>
    </div>
  );
}

EnableAccount.propTypes = {
  setEnabledAccount: PropTypes.func.isRequired,
};

export default EnableAccount;
