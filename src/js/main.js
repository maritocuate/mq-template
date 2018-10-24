/*
$('#container-one').css('opacity', '0')
$('.display-3').css('opacity', '0')
$('.lead').css('opacity', '0')
*/

$(window).on("load", function() {
    var tl = new TimelineLite();

    /*
    tl.fromTo( '#container-one', 0.3, {opacity:0}, {opacity:1})
    tl.fromTo( '.display-3', 0.5, {right:500, opacity:0}, {right:0, opacity:1}, "+=0.3")
    tl.fromTo( '.lead', 0.5, {top:"100px", opacity:0}, {top:"0px", opacity:1}, "+=0")
    */
});