$(".cancelEnter").bind("keydown",function(i){return 13===i.which?!1:void 0}).bind("blur",function(){var i=$(this),e=i.val(),t=e.replace(/\n/g,"");t!==e&&i.val(t)}),$(function(){$(".textCount").bind("keyup",function(){var i=$(this).val().replace(/\s+/g,"").length;$(".textCountNum").html(i)})}),$(function(){$("#masonry-wrapper").imagesLoaded(function(){$("#masonry-wrapper").masonry({itemSelector:".masonry-item"}),$(".masonry-item").biggerlink()}),$("#heightline-wrapper").imagesLoaded(function(){$(".heightline-item-list-tile-height").heightLine(),$(".heightline-item-list-tile-footer").heightLine(),$(".heightline-item").biggerlink()}),$(".box-heightline").heightLine(),$(".box-biggerlink").biggerlink(),$(".btn-tooltip").tooltip(),$(".btn-group [title]").tooltip({container:"body"})});