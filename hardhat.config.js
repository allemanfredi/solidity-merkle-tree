require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-gas-reporter')
require('@nomicfoundation/hardhat-chai-matchers')
require('hardhat-spdx-license-identifier')
require('hardhat-log-remover')
require('solidity-coverage')
require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  solidity: {
    version: '0.8.18',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: true
        }
      }
    }
  },
  networks: {
    hardhat: {}
  },
  gasReporter: {
    enabled: true
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: false
  },
  mocha: {
    timeout: 100000000
  }
}
