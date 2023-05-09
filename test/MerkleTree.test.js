const { expect } = require('chai')
const { ethers } = require('hardhat')
const { MerkleTree } = require('merkletreejs')

let signers

describe('MerkleTree', () => {
  beforeEach(async () => {
    signers = await ethers.getSigners()
  })

  it('should be able to generate the correct root when leaves are even', async () => {
    const MyContract = await ethers.getContractFactory('MyContract')
    const myContract = await MyContract.deploy(signers.map(({ address }) => address))
    const leaves = signers.map(({ address }) => ethers.utils.solidityKeccak256(['address'], [address]))
    const tree = new MerkleTree(leaves, ethers.utils.keccak256)
    await expect(myContract.getRoot()).to.emit(myContract, 'Root').withArgs(tree.getHexRoot())
  })

  it('should be able to generate the correct root when leaves are even', async () => {
    const MyContract = await ethers.getContractFactory('MyContract')
    const myContract = await MyContract.deploy(signers.slice(1).map(({ address }) => address))
    const leaves = signers.slice(1).map(({ address }) => ethers.utils.solidityKeccak256(['address'], [address]))
    const tree = new MerkleTree(leaves, ethers.utils.keccak256)
    await expect(myContract.getRoot()).to.emit(myContract, 'Root').withArgs(tree.getHexRoot())
  })
})
