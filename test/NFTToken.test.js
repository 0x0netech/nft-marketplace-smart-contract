const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NappyToken', () => {
  it('Should return the correct symbol', async () => {
    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(
      '0xd8b934580fce35a11b58c6d73adee468a2833fa8'
    );
    await nftToken.deployed();

    expect(await nftToken.symbol()).to.equal('NPFT');
  });

  it('Should return the correct name', async () => {
    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(
      '0xd8b934580fce35a11b58c6d73adee468a2833fa8'
    );
    await nftToken.deployed();

    expect(await nftToken.name()).to.equal('NFTToken');
  });

  it('Should mint the nft', async () => {
    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(
      '0xd8b934580fce35a11b58c6d73adee468a2833fa8'
    );
    await nftToken.deployed();
    let mint = await nftToken.createToken('https://www.json.com/jsef');
    await mint.wait();
  });
});
