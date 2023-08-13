require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');

const dotenv = require('dotenv');
dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
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

