/*
 * popups
 * https://github.com/uniquetree/jquery-popups
 *
 * Copyright (c) 2015 郑树聪
 * Licensed under the MIT license.
 */

(function($) {

  $.fn.popups = function(options) {
    // 将defaults 和 options 参数合并到{}
    options = $.extend({}, $.fn.popups.defaults, options);

    return this.each(function() {
      //遮罩层
      $(this).before('<div id=\"zhezhao\"></div>');

      var windowHeight = $(window).height(),  //获取窗口的高度
          windowWidth = $(window).width(),    //获取窗口的宽度
          popWidth = $(this).width(),         //获取弹窗的宽度
          popHeight = $(this).height(),       //获取弹窗高度
          popY,
          popX;

      //计算弹出窗口的偏移量
      popY = (windowHeight - popHeight) / 2;
      popX = (windowWidth - popWidth) / 2;

      //设定窗口的位置
      $(this).css({
        position: 'fixed',
        zIndex: '9999',
        top: popY,
        left: popX
      }).show();

      var that=$(this);

      $('body').on('click', options.close, function(event) {
        event.preventDefault();
        that.hide();
        that.siblings('#zhezhao').hide();
      });
    });
    // each end
  };

  //定义默认
  $.fn.popups.defaults = {
    close: $('#close')
  };

}(jQuery));
