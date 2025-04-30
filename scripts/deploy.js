const hre = require("hardhat");

async function main() {
  // Define the lock duration (e.g., 1 week from now)
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
  const lockDuration = 7 * 24 * 60 * 60; // 1 week
  const unlockTime = currentTimestamp + lockDuration;

  console.log(
    `Deploying Lock contract. Unlock time: ${unlockTime} (${new Date(
      unlockTime * 1000
    )})`
  );

  // Get the contract factory
  const Lock = await hre.ethers.getContractFactory("Lock");

  // Deploy the contract with the unlock time as a parameter
  const lock = await Lock.deploy(unlockTime);

  console.log(`Lock deployed to: ${lock.target}`);
}

// Handle async errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
