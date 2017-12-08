(function ($) {
  'use strict';

  $(function () {

    var pathname = window.location.pathname;
    $('.site-sidebar a[href="'+pathname+'"]').addClass('active');
    $('.site-sidebar .nav a[href="'+pathname+'"]').parents('.collapse.js-sidenav').addClass('show');

    // Initialize Bootstrap tooltip with `data-toggle="tooltip"`.
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize Bootstrap popover with `data-toggle="popover"`.
    $('[data-toggle="popover"]').popover();

  });

}(jQuery));
