$(document).ready(function() {
	$('.sidenav').sidenav();
});


anime.timeline({loop: false})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .line',
    opacity:0
  }).add({
    targets: '.ml5',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
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
// the function below will run onClick of the display button
// change the functionality according to the needs
// or according to what the QR code library wants

function display() {
	//these 2 lines might be deleted later.
	// bcz if the user is already logged in, then his wallet is already loaded in
	// so we dont need to ask for his password again and load the wallet
    var pwd = document.getElementById("pwd").value;// storing the password our user types
    web3.eth.accounts.wallet.load(pwd,"varunhhhrahul@gmail.com");// TODO : add username as the [,username]); option 


    var addr = web3.eth.accounts.wallet[0].address;// stores the user's address in a variable
	privateKey = web3.eth.accounts.wallet[0].privateKey;
	// calling the smart contract's getReport() function
	// it returns the user's report in encrypted format
    contract.methods.getReport().call(
        {from : addr})
        .then(function(result){
        console.log(result);
        report = result;// the report is stored in --report-- variable
        decryptt();// calling the decryptt function
    });
    
    
}

async function decryptt() {
	//as the report cipher was in string format, it is convert back to an object
    var encr = EthCrypto.cipher.parse(report);//to convert back to an object from string format
    
	//Eth-crypto library's decrypt function in use
    await EthCrypto.decryptWithPrivateKey(privateKey, encr)
    .then(
        function(result)
        {
            console.log(typeof result);
            QRCode.toCanvas(
                document.getElementById('canvas'),
                result,
                (error)=>{
                    if(error){
                        console.log(error);
                    }
                   
                    else{
                        $('#dimmer').dimmer('hide');
                        $('.ui.basic.modal.mod2').modal('show');
                        console.log("success");
                    }
                }
            )
        }
    );
}

function getQR(){
    $('#dimmer').dimmer('show');
    display();
    

}