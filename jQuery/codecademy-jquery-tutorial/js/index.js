// Start box interactions
$('#showBtn').click(function() {
  $("#box").fadeIn("slow");
});
$('#hideBtn').click(function() {
  $("#box").fadeOut("slow");
});
$('#up').click(function() {
  $("#box").animate({
    top: "-=46px"
  });
});
$('#right').click(function() {
  $("#box").animate({
    left: "+=46px"
  });
});
$('#down').click(function() {
  $("#box").animate({
    top: "+=46px"
  });
});
$('#left').click(function() {
  $("#box").animate({
    left: "-=46px"
  });
});

// Change shape
$('#shape').click(function() {
  var colorIndex = Math.random();
  if (colorIndex <= 0.5) {
    $("#box").toggleClass('circle');
    $("#box").toggleClass('square');
  } else if(colorIndex >= 0.5){
    $("#box").toggleClass('.square');
  }
});

// Change color
$('#color').click(function() {
  var colorIndex = Math.random();
  if (colorIndex < 0.3) {
    $("#box").toggleClass('red');
  } else if (colorIndex > 0.3 && colorIndex < 0.6) {
    $("#box").toggleClass('yellow');
  } else {
    $("#box").toggleClass('green');
  }
});

// Change size
$('#sizeUp').click(function() {
  $("#box").css('height', '+=20px');
  $("#box").css('width', '+=20px');
});
$('#sizeDown').click(function() {
  $("#box").css('height', '-=20px');
  $("#box").css('width', '-=20px');
});

// Reset
$('#reset').click(function() {
  $("#box").removeClass('red');
  $("#box").removeClass('yellow');
  $("#box").removeClass('green');
  $("#box").removeClass('circle');
  $('#box').css('width', '140px');
  $('#box').css('height', '140px');
  $('#box').css('top', '160px');
  $('#box').css('left', '44%');
});