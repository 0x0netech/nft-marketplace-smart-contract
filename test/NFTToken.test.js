const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NappyToken', function () {
  it('Should return the correct symbol', async function () {
    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(
      '0xd8b934580fce35a11b58c6d73adee468a2833fa8'
    );
    await nftToken.deployed();

    expect(await nftToken.symbol()).to.equal('NPFT');
  });

  it('Should return the correct name', async function () {
    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(
      '0xd8b934580fce35a11b58c6d73adee468a2833fa8'
    );
    await nftToken.deployed();

    expect(await nftToken.name()).to.equal('NFTToken');
  });
});
