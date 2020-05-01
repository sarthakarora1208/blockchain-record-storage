$(document).ready(function(){
    $('.sidenav').sidenav();
});

$('.ui.checkbox').checkbox({
	onChecked: function(){ $("#privField").css("display","block");},
	onUnchecked: function(){$("#privField").css("display","none");}
});


$('.ui.radio.checkbox').checkbox();


//below library is only used for encryption and decryption and getting pubKey from privKey
var EthCrypto = require("eth-crypto");

//below two lines to connect to the blockchain using INFURA
const url = "https://ropsten.infura.io/v3/2263eef71b3f42e4bd6dc77debba5750";
var web3 = new Web3(new Web3.providers.HttpProvider(url));

//variable to store private keys
var privateKey;

function register(){

	if($("input[type=checkbox]").prop("checked"))
	{
		$("input[type=checkbox]").css("color","red");
		regWithKeys();
	}
	else
	  {
		  regNew();
	  }
	  $('.ui.basic.modal').modal('show');
}

function formSubmit(){
	console.log("called")
	document.getElementById("myForm").submit();
}


function regWithKeys() {
	privateKey = document.getElementById("privKey").value;
	publicKeyElement = document.getElementById('publicKey');
	var email = document.getElementById("email").value;
	var pwd = document.getElementById("pwd").value;
	var acc = web3.eth.accounts.privateKeyToAccount(privateKey);
	var wallet = web3.eth.accounts.wallet;
	var publicKey;

	wallet.add(acc);
	wallet.save(pwd,email); //might add option for key name in local storage to be username

	//below methods just for eg
	//they show how to get the user's pub and private keys
	//so that we can use them further
	document.getElementById("privateKeyDisplay").innerHTML = wallet[0].privateKey;
	publicKey= EthCrypto.publicKeyByPrivateKey(wallet[0].privateKey);
	publicKeyElement.value = publicKey;
	document.getElementById("address").innerHTML=EthCrypto.publicKey.toAddress(publicKey);
}

function regNew() {
	publicKeyElement = document.getElementById('publicKey');
	var email = document.getElementById("email").value;
	var pwd = document.getElementById("pwd").value;
	var wallet = web3.eth.accounts.wallet; // this makes code small
	var publicKey;
	wallet.clear(); //this will always clear the wallet even if you have any accounts

	wallet.create(1); // creates 1 account with random values

	wallet.save(pwd,email); //might add option for key name in local storage to be username

	//below methods just for eg
	//they show how to get the user's pub and private keys
	//so that we can use them further
	document.getElementById("privateKeyDisplay").innerHTML = wallet[0].privateKey;
	publicKey = EthCrypto.publicKeyByPrivateKey(wallet[0].privateKey);
	publicKeyElement.value = publicKey;
	document.getElementById("address").innerHTML=EthCrypto.publicKey.toAddress(publicKey);

}



