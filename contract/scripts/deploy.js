// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const VehicleChain = await hre.ethers.getContractFactory("VehicleChain");
  const vehicleChain = await VehicleChain.deploy();

  await vehicleChain.deployed();

  console.log("VehicleChain deployed to:", vehicleChain.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
