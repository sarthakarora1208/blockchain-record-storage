$(document).ready(function(){
    $('.sidenav').sidenav();
});

$("#btn").on("click",function(){
   setTimeout(function(){
        $("#load").addClass("loading");
    },0);
    setTimeout(function(){
        $("#load").removeClass("loading");
        $('.ui.basic.modal').modal('show');
    },2000);
})
