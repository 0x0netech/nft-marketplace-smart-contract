const hre = require('hardhat');
const { BigNumber } = require('ethers');

async function main() {
  const NappyToken = await hre.ethers.getContractFactory('NappyToken');
  const initialSupply = BigNumber.from(1000000);
  const nappyToken = await NappyToken.deploy(initialSupply);

  await nappyToken.deployed();

  console.log('NappyToken deployed to:', nappyToken.address);

  // For NFTMarket Place

  const NFTMarket = await hre.ethers.getContractFactory('NFTMarket');
  const nftMarket = await NFTMarket.deploy(nappyToken.address);

  await nftMarket.deployed();

  console.log('NFTMarket deployed to:', nftMarket.address);

  // For NFTToken

  const NFTToken = await hre.ethers.getContractFactory('NFTToken');
  const nftToken = await NFTToken.deploy(nftMarket.address);

  await nftToken.deployed();

  console.log('NFTToken deployed to:', nftToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
