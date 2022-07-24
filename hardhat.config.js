require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    georli: {
      url: process.env.REACT_APP_ALCHEMY_API_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

// If you don't see any errors or warnings, your smart contract was successfully deployed!
// You should be able to see the address it was deployed to and the ABI of the smart contract in src/Marketplace.json
