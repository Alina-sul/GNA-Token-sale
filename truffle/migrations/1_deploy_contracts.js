const GNAToken = artifacts.require("GNAToken.sol");
const GNATokenSale = artifacts.require("GNATokenSale");
var KycContract = artifacts.require("KycContract");
require('dotenv').config({ path: '../.env' });


module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(GNAToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(KycContract);
    await deployer.deploy(GNATokenSale, 1, addr[0], GNAToken.address, KycContract.address);
    let instance = await GNAToken.deployed();
    await instance.transfer(GNATokenSale.address, process.env.INITIAL_TOKENS);
};