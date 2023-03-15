const Token = artifacts.require("GNAToken");

let chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token test", async accounts => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    it("all tokens should be in my account", async () => {
        let instance = await Token.deployed();
        let totalSupply = await instance.totalSupply();
        let balance = await instance.balanceOf(deployerAccount);
        expect(balance).to.be.a.bignumber.that.equals(totalSupply);
    } );

    it("is possible to send tokens between accounts", async () => {
        const sendTokens = 1;
        let instance = await Token.deployed();
        let totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(totalSupply);
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(totalSupply.sub(new BN(sendTokens)));
        expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.that.equals(new BN(sendTokens));
    });

});