var $paragrine = $('.paragrine');
var $needletail = $('.needletail');
var $cheetah = $('.cheetah');
var $shark = $('.shark');
var $svg = $('svg');

$svg.on('click', function () {
  $paragrine.toggleClass('para-spin');
});

$svg.on('click', function () {
  $needletail.toggleClass('needle-spin');
});

$svg.on('click', function () {
  $cheetah.toggleClass('cheetah-spin');
});

$svg.on('click', function () {
  $shark.toggleClass('shark-spin');
});
