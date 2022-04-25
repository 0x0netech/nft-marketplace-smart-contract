// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";


contract NFTMarket { 

   using Counters for Counters.Counter;
    Counters.Counter private _nftIds;
    Counters.Counter private _nftSold;
    IERC20 public tokenAddress;
    uint256 public platformFee = 25;
    uint256 public deno = 1000;

    address payable owner;

    constructor(address _tokenAddress) {
        owner = payable(msg.sender);
        tokenAddress = IERC20(_tokenAddress);
    }

    struct NFTMarketItem{
        uint256 nftId;
        uint256 tokenId;
        uint256 price;
        uint256 royalty;
        address payable seller;
        address payable owner;
        address nftContract;
        bool sold;
    }

    mapping(uint256 => NFTMarketItem) private marketItem;

    function listNft(address nftContract,uint256 tokenId, uint256 price, uint256 royalty) public  {
        require(royalty >= 0, 'royalty should be between 0 to 30');
        require(royalty < 29, 'royalty should be less than 30');

        _nftIds.increment();
        uint256 nftId = _nftIds.current();

        marketItem[nftId] = NFTMarketItem(
            nftId,
            tokenId,
            price,
            royalty,
            payable(msg.sender),
            payable(address(0)),
            nftContract,
            false
        );
        IERC721(nftContract).transferFrom(msg.sender,address(this),tokenId);
    }

    function buyNft(uint256 tokenId) public payable {
        uint256 price = marketItem[tokenId].price ;
        uint256 royaltyPer = price * marketItem[tokenId].royalty / deno;
        uint256 marketFee = price * platformFee / deno;

        tokenAddress.transferFrom(msg.sender, address(this), price);
        tokenAddress.transferFrom(msg.sender, address(owner), royaltyPer);
        tokenAddress.transferFrom(msg.sender, address(this), marketFee);


        marketItem[tokenId].owner = payable(msg.sender);
        _nftSold.increment();
        
        IERC721(marketItem[tokenId].nftContract).transferFrom(address(this), msg.sender, tokenId);

    }

   
}

