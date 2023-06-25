const { ApiPromise, WsProvider } = require('@polkadot/api');
async function connectToNode() {
    const provider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider });
  
    return api;
  }
  
  // Call the connectToNode function to establish a connection
  connectToNode().then((api) => {
    // You can start interacting with the Polkadot network here
    console.log('Connected to the Polkadot network');
  }).catch((err) => {
    console.error('Error connecting to the Polkadot network:', err);
  });
  