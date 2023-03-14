const GNAToken = artifacts.require("GNAToken.sol");

module.exports = async function(deployer) {
    await deployer.deploy(GNAToken, 1000000);
};