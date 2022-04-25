const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

let owner;
let listNFT;
let sellNFT;
let addr1;
let addr2;

describe('NFTMarket', () => {
  it('Should able to deploy NFT marketplace contract', async () => {
    [owner, creator, addr1, addr2] = await ethers.getSigners();
    const NFTMarket = await ethers.getContractFactory('NFTMarket');
    const nftMarket = await NFTMarket.deploy(addr1.address);
    await nftMarket.deployed();
    const nftAddress = nftMarket.address;

    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(nftAddress);
    await nftToken.deployed();
    const nftContractAddress = nftToken.address;

    await nftToken.createToken('https://www.json.com/JuG8');

    listNFT = await nftMarket.listNft(nftContractAddress, 1, 234, 11);
    await nftToken.balanceOf(owner.address);

    // buyNFT = await nftMarket.buyNft(1);
    // await nftToken.balanceOf(addr2.address);

    const amount = await nftToken.balanceOf(owner.address);
    console.log(amount.toString());
  });
});
