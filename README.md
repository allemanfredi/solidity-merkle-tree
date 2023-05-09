# solidity-merkle-tree

Merkle Tree solidity implementation. For proofs verification you can use the one from openzeppelin.

&nbsp;

---

&nbsp;

# :rocket: Usage

```sol

import {MerkleTree} from "solidity-merkle-tree"

contract myContract {
    address[] addresses;

    function getRoot() external {
        bytes[] memory addressesData = new bytes[](addresses.length);

        for (uint256 i = 0; i < addresses.length; i++) {
            addressesData[i] = abi.encodePacked(addresses[i]);
        }

        bytes32 memory root = MerkleTree.getRoot(addressesData);

        ...
    }
}


```
