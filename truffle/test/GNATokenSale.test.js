const Token = artifacts.require("GNAToken");
const TokenSale = artifacts.require("GNATokenSale");

require('dotenv').config({ path: '../.env'});

let chai = require("chai");
const BN2 = web3.utils.BN;
const chaiBN2 = require("chai-bn")(BN2);
chai.use(chaiBN2);

let chaiAsPromised2 = require("chai-as-promised");
chai.use(chaiAsPromised2);

const expect = chai.expect;

contract("TokenSale test", async accounts => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    // it("should not have any tokens in my account", async () => {
    //     let instance = await Token.deployed();
    //     return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(new BN(0));
    // });

    it("all tokens should be in the TokenSale smart contract by default", async () => {
        let instance = await Token.deployed();
        let totalSupply = await instance.totalSupply();
        return expect(instance.balanceOf(TokenSale.address)).to.eventually.be.a.bignumber.that.equals(totalSupply);
    });


});