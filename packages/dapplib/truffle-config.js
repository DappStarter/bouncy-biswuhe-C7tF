require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give knife fortune shoulder name raise place humble install drip equal gas'; 
let testAccounts = [
"0xafb89705832efb6ea1cc0b1901a51b52817c8bf51c248ad4789feb391ba9f348",
"0xdd6fc525d9879a9c28719d4c3c40edede8a808fe444832026362cd3ebad98e77",
"0xa14065dc8aa168be54998ca40232a499b22f898d36fb4a72ab1549cb4d49db74",
"0xf7d437eaef7e02fd9bbda0f37cf8fb45bb5a1eb95521245410ce0a530a793c20",
"0x629691e47cda3a81e0cdef73c8f9bf0429b596a3c1d0033a75f24ae63f76706c",
"0xf853e8012ffc87d3624ed141faeb2398e3e2b6ece4c7a7953193fa4f710d3f9b",
"0x0b96a9d226fd9e21d642a9f5c5b7478f3bd4e921a09ad89f0ccd18615c935b0c",
"0x60d19d4fd026bf377a54cf1c6b36769fb02d5da55db2976ea7654b3dc7faa90b",
"0x59406415a213aaa3dbcb83368be971894ff5d2c30dc4ed8e38db49ce3f06dc0f",
"0x6e28703a7207bbccf9b37ff2afb4fd6d22003d550914d3f5383c10629dd667c3"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


