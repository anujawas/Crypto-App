require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/2x_3riIhDwq6hvJ5lWHt5PFJotXHBig0',
      accounts: ['595f7e41f30a91265765c36ef6a2708322ec2f02479cfedaaec25535e9617c9e'],
    },
  },
};