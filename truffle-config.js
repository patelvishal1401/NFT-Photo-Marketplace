require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
      
  rinkeby: {
        provider: () => new HDWalletProvider('repeat icon under anxiety west exchange code unfold guitar gas grant minor', 'https://rinkeby.infura.io/v3/3f8b708518614dc99c274e4069e5e404'),
        network_id: 4,       // Ropsten's id
        gas: 5500000,        // Ropsten has a lower block limit than mainnet
        confirmations: 2,    // # of confs to wait between deployments. (default: 0)
        timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      },
  },
compilers: {
  solc: {
    //version: "0.5.16",  /// Final version of solidity-v0.5.x
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
}


