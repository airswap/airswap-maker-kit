const chalk = require('chalk')
const ethers = require('ethers')
const wallet = ethers.Wallet.createRandom()

console.log(chalk.white.bold.underline('\r\nRandomly Generated Wallet\r\n'))
console.log(`Private Key: ${wallet.privateKey}`)
console.log(`Address:     ${wallet.address}`)
console.log()