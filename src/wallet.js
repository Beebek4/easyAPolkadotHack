
import React, { useState, useEffect } from 'react';
import { web3Accounts, web3Enable, isWeb3Injected } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api';
//import React, { useState, useEffect } from 'react';

const WalletConnect = () => {
  const [api, setApi] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const connectWallet = async () => {
      if (isWeb3Injected) {
        await web3Enable('Your App Name');
        const accounts = await web3Accounts();
        setAccounts(accounts);
        const provider = new WsProvider('wss://rpc.polkadot.io');
        const api = await ApiPromise.create({ provider });
        setApi(api);
      } else {
        console.log('Polkadot extension not installed');
      }
    };

    connectWallet();
  }, []);

  // Render your wallet connection components and UI here
  return (
    <div>
      {accounts.length > 0 ? (
        <div>
          <h3>Connected Accounts:</h3>
          <ul>
            {accounts.map((account) => (
              <li key={account.address}>{account.address}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No accounts connected</div>
      )}
    </div>
  );
};

export default WalletConnect;
