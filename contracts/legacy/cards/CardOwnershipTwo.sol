pragma solidity ^0.5.8;

import "@openzeppelin/contracts/token/ERC721/ERC721Enumerable.sol";

contract CardOwnershipTwo is ERC721Enumerable {

    function transferFrom(address from, address to, uint id) public {
        super.transferFrom(from, to, id);
    }

}