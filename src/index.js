import "babel-polyfill";
import Web3 from "web3";

// ブロックチェーンにデプロイしたスマートコントラクトのアドレス
var smartContractAddress = "0x711DD88695EdD624751dbF34fdf6BB47685a87d3";

// ABI(Application Binary Interface) はブロックチェーンの外からコントラクトを利用するための
// インターフェースの定義です。
var abi = []; // ← build/contracts/Hello.json の abi 要素で置き換える
