import "babel-polyfill";
import Web3 from "web3";

// ブロックチェーンにデプロイしたスマートコントラクトのアドレス
var smartContractAddress = "0xf55c6c6C7..."; // ← Hello コントラクトのコントラクトアドレスを指定

// ABI(Application Binary Interface) はブロックチェーンの外からコントラクトを利用するための
// インターフェースの定義です。
var abi = []; // ← build/contracts/Hello.json の abi 要素で置き換える
