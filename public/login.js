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


// particls.js

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#5CDB95"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": true
            }
        },
        "size": {
            "value": 3.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 2.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.9,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 5
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
particlesJS("particles-js2", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#5CDB95"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": true
            }
        },
        "size": {
            "value": 3.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 2.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.9,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 5
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
particlesJS("particles-js3", {
    "particles": {
        "number": {
            "value": 500,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#5CDB95"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": true
            }
        },
        "size": {
            "value": 3.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 2.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.9,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 5
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
    document.getElementById('eye').addEventListener("click",function(event){
        event.preventDefault();
        const passwordElement = document.getElementById('pwd');
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
          } else {
            passwordElement.type = "password";
          }
    })
