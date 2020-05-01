$(document).ready(function(){
    $('.sidenav').sidenav();
});

$('.ui.radio.checkbox')
  .checkbox()
;
$('.ui.radio.checkbox').on("click",function(){
    $(this).parent().toggleClass("positive");
})

$('.ui.fluid.dropdown').dropdown();

$('.calc').calendar({
  type: 'date'
});

$(".mod").on("click",function(){
    $('.ui.basic.modal')
  .modal('show')
;
})


$(".ui.small.button").on("click",function(){
    $(".qr").text("hi there");
})
$(".delete.icon").on("click",function(){
    $(this).parent().parent().remove();
})

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
