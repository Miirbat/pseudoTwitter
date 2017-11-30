function getRandomArbitrary() {
  url = 'https://unsplash.it/1500/500/?image='
  number =  Math.random() * (1084 - 0) + 0;
  theBeginning = '<img alt src='
  theEnd = 'height=\'32%\' width=\'100%\'/>'
  $('#profiles').each(thing => {
    thing.append( theBeginning + url + number + theEnd )
  })
}

function getIt(){
  $('#tweets').click(function() {
    $('#tweets').css("color", "red")
  });
}

function hover(){
  $('#tweets').hover(function() {
    $('#tweets').css("color", "red")
    $('#tweets').css( 'cursor', 'pointer' )
  });
  $("#tweets").mouseleave(function(){
    $("#tweets").css("color", "black");
    $('#tweets').css( 'cursor', 'default' )
});


$('#followers').hover(function() {
  $('#followers').css("color", "red")
  $('#followers').css( 'cursor', 'pointer' )
});
$("#followers").mouseleave(function(){
  $("#followers").css("color", "black");
  $('#followers').css( 'cursor', 'default' )
});


$('#following').hover(function() {
  $('#following').css("color", "red")
  $('#following').css( 'cursor', 'pointer' )
});
$("#following").mouseleave(function(){
  $("#following").css("color", "black");
  $('#following').css( 'cursor', 'default' )
});

$('#likes').hover(function() {
  $('#likes').css("color", "red")
  $('#likes').css( 'cursor', 'pointer' )
});
$("#likes").mouseleave(function(){
  $("#likes").css("color", "black");
  $('#likes').css( 'cursor', 'default' )
});

}






$(document).ready(function(){
  getIt()
  hover()
});
