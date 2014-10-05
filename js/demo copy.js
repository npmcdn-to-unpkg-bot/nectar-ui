

$(function(){

    // Scrollspy
    var $window = $(window);
    var $body   = $(document.body);

    $body.scrollspy({
        target: '.sidebar-scrollspy'
    });
    $window.on('load', function () {
        $body.scrollspy('refresh');
    });

    // Affix 
    var affixWidth = $('.sidebar-affix').width();

    $('.sidebar-affix').affix({
        offset: {
            top: $('#header').outerHeight(),
            bottom: $('#footer').outerHeight()
        }
    }).on('affix.bs.affix', function() {
        affixWidth = $('.sidebar-affix').width();
    }).on('affixed.bs.affix', function() {
        $('.sidebar-affix').width(affixWidth);
    });
});