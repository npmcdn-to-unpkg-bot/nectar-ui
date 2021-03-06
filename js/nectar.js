/*!
 * Nectar UI
 * http://hncm.jp/
 * 
 * v2016-05-03
 */

// @codekit-prepend "../assets/imagesloaded.pkgd.js";
// @codekit-prepend "../assets/masonry.pkgd.js";
// @codekit-prepend "../assets/jquery.heightLine.js";
// @codekit-prepend "../assets/jquery.biggerlink.js";
// @codekit-prepend "../assets/jquery.smooth-scroll.js"; 
// @codekit-prepend "../assets/fresco/js/fresco/fresco.js";
// @codekit-prepend "../assets/flickity/flickity.pkgd.js";
// @codekit-prepend "../assets/iscroll.js";
// @codekit-prepend "../assets/drawer/js/drawer.js";
// @codekit-prepend "../assets/gmap3.js";
// @codekit-prepend "../assets/bootstrap-datepicker/js/bootstrap-datepicker.js";
// @codekit-prepend "../assets/bootstrap-datepicker/js/locales/bootstrap-datepicker.ja.js";


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
        $('.heightline-item-list-stack-header').heightLine();
        $('.heightline-item-list-stack-height').heightLine();
        $('.heightline-item-list-stack-footer').heightLine();
        $('.heightline-item-list-photo-header').heightLine({minWidth:768});
        $('.heightline-item-list-photo-height').heightLine({minWidth:768});
        $('.heightline-item-list-photo-footer').heightLine({minWidth:768});
        $('.heightline-item-list-tile-header').heightLine();
        $('.heightline-item-list-tile-height').heightLine();
        $('.heightline-item-list-tile-footer').heightLine();
        $('.heightline-item').biggerlink();
    });

    $('.box-heightline').imagesLoaded( function(){
        $('.box-heightline').heightLine();
    });
    $('.box-biggerlink').imagesLoaded( function(){
        $('.box-biggerlink').biggerlink();
    });

    $('a.smooth').smoothScroll();

    // Tooltip
    $('.btn-tooltip').tooltip();
    $('.btn-group .btn-group-tooltip').tooltip({
        container: 'body'
    });

    // Carousel
    $('.carousel').carousel({
        interval: 5000
    });
});