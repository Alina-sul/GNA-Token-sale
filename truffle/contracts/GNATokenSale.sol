pragma solidity ^0.6.0;

import "./Crowdsale.sol";

contract GNATokenSale is Crowdsale {
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
    MintedCrowdsale()
    Crowdsale(rate, wallet, token)
    public
    {

    }
}