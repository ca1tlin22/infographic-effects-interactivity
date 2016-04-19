var $svg = $('svg');
var $spincycle = $(.spincycle);
var $lollinfo = $(.lollinfo);

$('svg').on('click', function (e) {
  $('.lollinfo').toggleClass('spincycle');
}
