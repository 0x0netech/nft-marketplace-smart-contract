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

    const NappyToken = await ethers.getContractFactory('NappyToken');
    const initialSupply = BigNumber.from(1000000);
    const nappyToken = await NappyToken.deploy(initialSupply);
    await nappyToken.deployed();
    const nappyTokenAddress = nappyToken.address;

    const NFTMarket = await ethers.getContractFactory('NFTMarket');
    const nftMarket = await NFTMarket.deploy(nappyTokenAddress);
    await nftMarket.deployed();
    const nftContractAddress = nftMarket.address;

    const NFTToken = await ethers.getContractFactory('NFTToken');
    const nftToken = await NFTToken.deploy(nftContractAddress);
    await nftToken.deployed();
    const nftAddress = nftToken.address;

    await nftToken.createToken('https://www.json.com/JuG8');

    listNFT = await nftMarket.listNft(nftAddress, 1, 234, 11);
    await nftToken.balanceOf(owner.address);

    await nappyToken.approve(
      nftContractAddress,
      BigNumber.from(23400).mul(BigNumber.from(10).pow(18))
    );
    await nftToken.balanceOf(owner.address);

    await nftMarket.connect(owner).buyNft(1);

    // await nftMarket.connect(addr1.address).buyNft(1);
    // await buyNFT.wait();
    // await nftToken.balanceOf(nftAddress);

    const amount = await nftToken.balanceOf(nftAddress);
    console.log(amount.toString());
  });
});
