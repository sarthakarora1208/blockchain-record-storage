$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(".ui.message .close.icon").on("click",()=>{
    $('.ui.message').fadeOut("slow")
});


//below library is only used for encryption and decryption
var EthCrypto = require('eth-crypto');

//below two lines to connect to the blockchain using INFURA
const url = 'https://ropsten.infura.io/v3/2263eef71b3f42e4bd6dc77debba5750';
var web3 = new Web3(new Web3.providers.HttpProvider(url));

async function onformSubmit() {

    var email=document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;// storing the password,our user types
    web3.eth.accounts.wallet.load(pwd,email);// TODO : add username as the [,username]); option
    console.log("wallet loaded");
    document.getElementById("myForm").submit();
}
    document.getElementById('eye').addEventListener("click",function(event){
        event.preventDefault();
        const passwordElement = document.getElementById('pwd');
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
          } else {
            passwordElement.type = "password";
          }
    })