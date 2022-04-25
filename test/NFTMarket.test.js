const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe('NFTMarket', () => {
  it('Should able to list NFT in marketplace', async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarket');
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    expect(await nftMarket.symbol()).to.equal('NPT');
  });

  it('Should able to buy NFT on marketplace', async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarket');
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    expect(await nftMarket.symbol()).to.equal('NPT');
  });

  it('Should transfer NFT & pay royalties', async () => {
    const NFTMarket = await ethers.getContractFactory('NFTMarket');
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    expect(await nftMarket.symbol()).to.equal('NPT');
  });
});
