const GNAToken = artifacts.require("GNAToken.sol");
const GNATokenSale = artifacts.require("GNATokenSale");

module.exports = async function(deployer) {
    let address = await web3.eth.getAccounts();
    await deployer.deploy(GNAToken, 1000000);
    await deployer.deploy(GNATokenSale, 1, address[0], GNAToken.address);
    let instance = await GNAToken.deployed();
    await instance.transfer(GNATokenSale.address, 1000000);
};