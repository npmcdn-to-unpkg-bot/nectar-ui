
/*!
 * テキストボックス内で改行を無効にする
 * http://jsdo.it/mnk/noenter
**/
$('.cancelEnter').bind('keydown', function(e) {
    if (e.which === 13) {
        return false;
    }
}).bind('blur', function() {
    // 貼りつけられたテキストの改行コードを削除
    var $textarea = $(this),
        text = $textarea.val(),
        new_text = text.replace(/\n/g, "");
    if (new_text !== text) {
        $textarea.val(new_text);
    }
});


/*!
 * 文字数をカウント
 * http://wataame.sumomo.ne.jp/archives/2589
**/
$(function(){
    $('.textCount').bind('keyup',function(){
        var thisValueLength = $(this).val().replace(/\s+/g,'').length;
        $('.textCountNum').html(thisValueLength);
    });
});


$(function(){

    $('#masonry-wrapper').imagesLoaded( function(){
        $('#masonry-wrapper').masonry({itemSelector : '.masonry-item'});
        $('.masonry-item').biggerlink();
    });

    $('#heightline-wrapper').imagesLoaded(function(){
        $('.heightline-item-list-tile-main').heightLine();
        $('.heightline-item').biggerlink();
    });

    $('.box-heightline').heightLine();
    $('.box-biggerlink').biggerlink();

    // Tooltip
    $('.btn-tooltip').tooltip();
    $('.btn-group [title]').tooltip({
        container: 'body'
    });

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