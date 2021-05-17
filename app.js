
//Lisää numeron tai merkin näytölle
function calcButton(num) {
    $('.display').val($('.display').val() + num);
}


//Laskee näytöllä olevan lasku toimituksen "=" nappia painamalla
function yhtaSuuri() {
    $('.display').val(eval($('.display').val()));
}
//Tyhjentää laskimen näytön "C" nappia painamalla.
function tyhjenna() {
    $('.display').val('');
}
//Napin painamisesta syntyvät efektit
$(".fade1").click(function(){
    $(".fade1").fadeOut()
    $(".fade1").fadeIn()
});


$(".fade2").click(function(){
    $(".fade2").fadeOut()
    $(".fade2").fadeIn()
});


$(".fade3").click(function(){
    $(".fade3").fadeOut()
    $(".fade3").fadeIn()
});


$(".fade-").click(function(){
    $(".fade-").fadeOut()
    $(".fade-").fadeIn()
});


$(".fadex").click(function(){
    $(".fadex").fadeOut()
    $(".fadex").fadeIn()
});


$(".fade4").click(function(){
    $(".fade4").fadeOut()
    $(".fade4").fadeIn()
});


$(".fade5").click(function(){
    $(".fade5").fadeOut()
    $(".fade5").fadeIn()
});


$(".fade6").click(function(){
    $(".fade6").fadeOut()
    $(".fade6").fadeIn()
});


$(".fadeplus").click(function(){
    $(".fadeplus").fadeOut()
    $(".fadeplus").fadeIn()
});


$(".fadediv").click(function(){
    $(".fadediv").fadeOut()
    $(".fadediv").fadeIn()
});


$(".fade7").click(function(){
    $(".fade7").fadeOut()
    $(".fade7").fadeIn()
});


$(".fade8").click(function(){
    $(".fade8").fadeOut()
    $(".fade8").fadeIn()
});


$(".fade9").click(function(){
    $(".fade9").fadeOut()
    $(".fade9").fadeIn()
});


$(".fadeeq").click(function(){
    $(".fadeeq").fadeOut()
    $(".fadeeq").fadeIn()
});


$(".fade0").click(function(){
    $(".fade0").fadeOut()
    $(".fade0").fadeIn()
});


$(".fadedot").click(function(){
    $(".fadedot").fadeOut()
    $(".fadedot").fadeIn()
});


$(".fadeC").click(function(){
    $(".fadeC").fadeOut()
    $(".fadeC").fadeIn()
});