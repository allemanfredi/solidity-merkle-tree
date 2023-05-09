pragma solidity ^0.8.18;

import {MerkleTree} from "../MerkleTree.sol";

contract MyContract {
    address[] addresses;

    event Root(bytes32 root);

    constructor(address[] memory _addresses) {
        for (uint256 i = 0; i < _addresses.length; i++) {
            addresses.push(_addresses[i]);
        }
    }

    function getRoot() external {
        bytes[] memory addressesData = new bytes[](addresses.length);

        for (uint256 i = 0; i < addresses.length; i++) {
            addressesData[i] = abi.encodePacked(addresses[i]);
        }

        emit Root(MerkleTree.getRoot(addressesData));
    }
}
