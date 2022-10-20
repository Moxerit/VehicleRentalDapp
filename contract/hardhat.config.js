require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
      fuji: {
        url: process.env.URL,
        accounts: ['0x' + process.env.ACCOUNTS],
        chainID: 43113,
      },
  },
};
