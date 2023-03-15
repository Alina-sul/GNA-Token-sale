const Token = artifacts.require("GNAToken");

let chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token test", async accounts => {

    it("all tokens should be in my account", async () => {
        let instance = await Token.deployed();
        let totalSupply = await instance.totalSupply();
        let balance = await instance.balanceOf(accounts[0]);
        expect(balance).to.be.a.bignumber.that.equals(totalSupply);
    } );

});