var $paragrine = $('.paragrine');
var $needletail = $('.needletail');
var $cheetah = $('.cheetah');
var $shark = $('.shark');
var $svg = $('svg');
var $bubbleone = $('.bubbleone');
var $bubbletwo = $('.bubbletwo');
var $bubblethree = $('.bubblethree');
var $bubblefour = $('.bubblefour');
var $bubblefive = $('.bubblefive');
var $bubblesix = $('.bubblesix');
var $bubbleseven = $('.bubbleseven');
var $bubbleeight = $('.bubbleeight');

$svg.on('click', function () {
  $paragrine.toggleClass('para-spin');
});

$svg.on('transitioned', function () {
  $(this).remove();
});

$svg.on('click', function () {
  $needletail.toggleClass('needle-spin');
});

$svg.on('transitioned', function () {
  $(this).remove();
});

$svg.on('click', function () {
  $cheetah.toggleClass('cheetah-spin');
});

$svg.on('transitioned', function () {
  $(this).remove();
});

$svg.on('click', function () {
  $shark.toggleClass('shark-spin');
});

$svg.on('transitioned', function () {
  $(this).remove();
});

$bubbleone.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubbleone.toggleClass('bubbleone');
});

$bubbletwo.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubbletwo.toggleClass('bubbletwo');
});

$bubblethree.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubblethree.toggleClass('bubblethree');
});

$bubblefour.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubblefour.toggleClass('bubblefour');
});

$bubblefive.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubblefive.toggleClass('bubblefive');
});

$bubblesix.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubblesix.toggleClass('bubblesix');
});

$bubbleseven.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubbleseven.toggleClass('bubbleseven');
});

$bubbleeight.on('click', function (e) {
  e.stopImmediatePropagation();
  $bubbleeight.toggleClass('bubbleeight');
});
