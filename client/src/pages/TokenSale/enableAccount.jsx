import React, { useCallback, useState } from 'react';
import { Button, Card, Input, Space } from 'antd';
import PropTypes from 'prop-types';

// CONTEXT
import { useEth } from '../../contexts/EthContext';

function EnableAccount({ setEnabledAccount }) {
  const { state } = useEth();
  const [address, setAddress] = useState('');

  const handleKycWhitelisting = useCallback(async () => {
    const { kycContract } = state;
    console.log('kycContract', kycContract);
    await kycContract.contract.methods
      .setKycCompleted(address)
      .send({ from: kycContract.accounts[0] });
    alert('Account whitelisted!');
  }, [address, state?.kycContract?.methods]);

  const onInputChange = e => {
    setAddress(e.target.value);
  };

  const onClickEnable = async () => {
    setEnabledAccount({ address });
    await handleKycWhitelisting();
  };

  return (
    <div className="token-sale-page__enable-account">
      <Card hoverable className="token-sale-page__enable-account-card">
        <span>Add address to Whitelist:</span>

        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="Enter your address"
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
