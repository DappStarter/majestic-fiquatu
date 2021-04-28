require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remain snake imitate prison fringe tube'; 
let testAccounts = [
"0x4d5809cd101180ee84ac60281d90ebd86561eeeaf9c96077c6916eb49d72875b",
"0x9996155ec3e57cf72a8f669363dcd8fc504f8d7b55aa9f749bec2000852b76d1",
"0x4b2d70c968a90b501e494aff4dca5a06c4f26de8044264ead825125246a71205",
"0x40e7ab84f3bc8d69f23149089e43ed744b18b3cb8db87201d7292abb5e580077",
"0xf3549303f44a2505124d905644e754e215a7daad6098b756232e8d6a87c2110a",
"0xfb14ffc7b9aea51f56c92cdb48b1e08230e2c8b34a201b8f10c45e8e507d744a",
"0xfa2a8e2341bbcfe3ab20f3660d60c1d9db52f3ad3d79041b859301652764da01",
"0x01e0353146a6204e58f751528502e8988da7f7b6111792edf0a6f80985714c06",
"0xafd194e6878f612b5c99f3d89d07d8d38d8f449aa389d6623655a744875c2ef8",
"0x7d1d9eddb53567ae79f092fae1a4f298939f99bb853165f9b3707dd02daaf181"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
