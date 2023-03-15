const Token = artifacts.require("GNAToken");
require('dotenv').config({ path: '../.env'});

let chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require("chai-bn")(BN);
chai.use(chaiBN);

let chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("Token test", async accounts => {

    const [deployerAccount, recipient, anotherAccount] = accounts;

    beforeEach(async () => {
        this.myToken = await Token.new(process.env.INITIAL_TOKENS);
    });

    it("all tokens should be in my account", async () => {
        let instance = this.myToken;
        let totalSupply = await instance.totalSupply();
        let balance = await instance.balanceOf(deployerAccount);
        expect(balance).to.be.a.bignumber.that.equals(totalSupply);
    } );

    it("is possible to send tokens between accounts", async () => {
        const sendTokens = 1;
        let instance = this.myToken;
        let totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(totalSupply);
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(totalSupply.sub(new BN(sendTokens)));
        expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.that.equals(new BN(sendTokens));
    });

    // it("is not possible to send more tokens than account 1 has", async () => {
    //     let instance = this.myToken;
    //     let balanceOfAccount = await instance.balanceOf(deployerAccount);
    //     expect(instance.transfer(recipient, new BN(balanceOfAccount+1))).to.eventually.be.rejected;
    //     //Check if the balance is still the same
    //     expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.that.equals(balanceOfAccount);
    // });

});