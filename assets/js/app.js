(function ($) {
  'use strict';

  $(function () {

    var pathname = window.location.pathname;
    $('.site-sidebar a[href="'+pathname+'"]').addClass('active');
    $('.site-sidebar .nav a[href="'+pathname+'"]').parents('.collapse.js-site-sidebar-nav').addClass('show');
    $('.collapse.js-site-sidebar-nav.show').prev().removeClass('collapsed');

    // Initialize Bootstrap tooltip with `data-toggle="tooltip"`.
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize Bootstrap popover with `data-toggle="popover"`.
    $('[data-toggle="popover"]').popover();

  });

}(jQuery));
