const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'that work giraffe brush giraffe intact firm cause member move icon harbor',
  'https://rinkeby.infura.io/qZtLwXWnvCYPAsOoIQ6E'
);

const web3 = new Web3(provider);

const deploy = async () => {
 const accounts = await web3.eth.getAccounts();

 console.log('attempting to deploy from account', accounts[0]);

 const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({
    data:  bytecode,
    arguments: ['Hi There!']
  })
  .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();