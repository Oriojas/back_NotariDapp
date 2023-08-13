require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

const dotenv = require('dotenv');
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.8.1",
        settings: {},
      },
    ],
  },
  networks: {
    // for optimisim
    "optimisc-goerli": {
      url: 'https://goerli.optimism.io/',
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
      chainId: 420
    },
    // for base
    "base-goerli": {
      url: "https://goerli.base.org",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
      chainId: 84531
    },
    // for zora
    "zora-goerli": {
      url: "https://testnet.rpc.zora.energy/",
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 1000000000,
      chainId: 999
    },
  },
};

