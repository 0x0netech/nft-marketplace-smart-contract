// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NappyToken is ERC20 {

    constructor(uint256 initialSupply) ERC20('NappyToken' ,'NPT') {
        _mint(msg.sender, initialSupply);

    }

}
