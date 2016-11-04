$(document).ready(function () {
  var top = $('#nav').offset().top - parseFloat($('#nav').css('marginTop').replace(/auto/, 100));
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();

    if (y >= top) {
      $('#nav').addClass('fixed');
    } else {
      $('#nav').removeClass('fixed');
    }
  });
});
