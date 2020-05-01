$(document).ready(function(){
    $('.sidenav').sidenav();
});

//below library is only used for encryption and decryption
var EthCrypto = require('eth-crypto');

//below two lines to connect to the blockchain using INFURA
const url = 'https://ropsten.infura.io/v3/2263eef71b3f42e4bd6dc77debba5750';
var web3 = new Web3(new Web3.providers.HttpProvider(url));

// creating a contract instance
var abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "uAddress",
				"type": "address"
			}
		],
		"name": "checkUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getReport",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newhosp",
				"type": "address"
			}
		],
		"name": "registerHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newUser",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "report",
				"type": "string"
			}
		],
		"name": "sendReport",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var contract = new web3.eth.Contract(abi,'0x3C1FB21A9B58E13796DbfAd83de1a2a07d53adA3');

var report;// variable to store the report
var privateKey;


function display() {

    var userAddress = document.getElementById("addr").value;
    if(web3.utils.isAddress(userAddress))
    {

        web3.eth.accounts.wallet.create(1);
        var addr = web3.eth.accounts.wallet[0].address;// stores the user's address in a variable
        privateKey = web3.eth.accounts.wallet[0].privateKey;


        contract.methods.checkUser(userAddress)
            .call({from : addr})
            .then(function(result){
            console.log(result);
            if(result)
            {
                $("#load").removeClass("loading");
                $('.ui.basic.modal.mod1').modal('show');
            }
            else
            {
                $("#load").removeClass("loading");
                $('.ui.basic.modal.mod2').modal('show');
            }

        });
    }else{
        console.log("hello");
                $("#load").removeClass("loading");
                $('.ui.basic.modal.mod2').modal('show');
    }
}

function check(){

    $("#load").addClass("loading");
    display();
}

