# GNA Token Sale

This repository contains the source code for a decentralized application (dApp) built using React, Solidity, and Web3.js. The project demonstrates the use of smart contracts on the Ethereum blockchain to manage token sales and KYC whitelisting.

<img width="795" alt="image" src="https://user-images.githubusercontent.com/48648714/226048318-2deca5c3-527b-4ef6-8227-c07ab212ec69.png">


## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) v14.x or later
- [Truffle](https://www.trufflesuite.com/truffle) v5.x or later
- [Ganache](https://www.trufflesuite.com/ganache) for a local Ethereum blockchain
- [MetaMask](https://metamask.io/) browser extension for interacting with the dApp

### Installation

1. Clone the repository:
```
git clone https://github.com/Alina-sul/GNA-Token-sale.git
```

2. Install the project dependencies:
```
npm i
```


### Running the project

1. Start Ganache to set up a local Ethereum blockchain.

2. Compile and deploy the smart contracts:

```
truffle compile
truffle migrate --reset
```

4. Open your browser and navigate to `http://localhost:8080` to interact with the dApp.

5. Connect your MetaMask to the local Ganache network and import accounts using the private keys provided by Ganache.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
