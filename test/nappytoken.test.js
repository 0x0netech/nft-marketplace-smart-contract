const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe('NappyToken', () => {
  it('Should return the correct symbol', async () => {
    const NappyToken = await ethers.getContractFactory('NappyToken');
    const initialSupply = BigNumber.from(1000000);
    const nappyToken = await NappyToken.deploy(initialSupply);
    await nappyToken.deployed();

    expect(await nappyToken.symbol()).to.equal('NPT');
  });

  it('Should return the correct name', async () => {
    const NappyToken = await ethers.getContractFactory('NappyToken');
    const initialSupply = BigNumber.from(1000000);
    const nappyToken = await NappyToken.deploy(initialSupply);
    await nappyToken.deployed(initialSupply);

    expect(await nappyToken.name()).to.equal('NappyToken');
  });
});
