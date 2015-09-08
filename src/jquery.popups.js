/*
 * popups
 * https://github.com/uniquetree/jquery-popups
 *
 * Copyright (c) 2015 郑树聪
 * Licensed under the MIT license.
 */

(function($) {

  var methods = {

    //默认操作为弹出窗口
    openPopups: function () {
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

      //设定窗口的居中弹出显示
      $(this).css({
        position: 'fixed',
        zIndex: '9999',
        top: popY,
        left: popX
      }).show();
    },
    closePopups: function (){

      $(this).hide();
      $(this).siblings('#zhezhao').hide();
    }
  }

  $.fn.popups = function(method,options) {
    // 将defaults 和 options 参数合并到{}
    options = $.extend({}, $.fn.popups.defaults, options);

    // 方法调用
    console.log(arguments);
    if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
        return methods.openPopups.apply(this, arguments);
    } else {
        $.error('Method' + method + 'does not exist on jQuery.popups');
    }
  };

  //定义默认
  $.fn.popups.defaults = {
    a:1
  };

}(jQuery));
