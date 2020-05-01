$(document).ready(function(){
    $('.sidenav').sidenav();
});

anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
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


var video = document.createElement("video");
var canvasElement = document.getElementById("canvas");
var canvas = canvasElement.getContext("2d");
var loadingMessage = document.getElementById("loadingMessage");
var fn=document.getElementById("fn");
var address=document.getElementById("address");
var email=document.getElementById("email");
var admissionDate=document.getElementById("admissionDate");
var releaseDate=document.getElementById("releaseDate");
// var outputContainer = document.getElementById("output");
// var outputMessage = document.getElementById("outputMessage");
// var outputData = document.getElementById("outputData");

function drawLine(begin, end, color) {
  canvas.beginPath();
  canvas.moveTo(begin.x, begin.y);
  canvas.lineTo(end.x, end.y);
  canvas.lineWidth = 4;
  canvas.strokeStyle = color;
  canvas.stroke();
}

// Use facingMode: environment to attemt to get the front camera on phones
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
});
 var x=0;
 var y;
function tick() {
  loadingMessage.innerText = "⌛ Loading video..."
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;
    // outputContainer.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    // console.log(code);
    if (code && x==0) {
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
      // outputMessage.hidden = true;
      // outputData.parentElement.hidden = false;
      console.log(code.data);

      y = JSON.parse(code.data);
      console.log(y);
      address.innerHTML= y.address;
      fn.innerHTML= y.name;
      email.innerHTML=y.Email;
      admissionDate.innerHTML=y.admissionDate;
      releaseDate.innerHTML=y.releaseDate;
      display(y.address);
        $('.ui.basic.modal.mod1').modal('show');
        x++;
    } else {
      // console.log("hello");
      // outputMessage.hidden = false;
      // outputData.parentElement.hidden = true;
    }
  }
  requestAnimationFrame(tick);
}




var report;// variable to store the report
var privateKey;


function display(userAddress) {

    console.log("User address" + userAddress);
    if(web3.utils.isAddress(userAddress))
    {

        web3.eth.accounts.wallet.create(1);
        var addr = web3.eth.accounts.wallet[0].address;// stores the user's address in a variable
        console.log("Wallet address + "+ addr);
        privateKey = web3.eth.accounts.wallet[0].privateKey;


        contract.methods.checkUser(userAddress)
            .call({from : addr})
            .then(function(result){
                  console.log(result);
                  if(result)
                {
                   $('#check').css('display','inline');
                }
            else
            {
              $('#cross').css('display','inline');
              $('#address').css('color','red');
              $('#message').css('display','inline');
            }
        });
    }else{
      $('#cross').css('display','inline');
      $('#address').css('color','red');
      $('#message').css('display','inline');
    }
}
