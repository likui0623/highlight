# JQuery 文本框高亮显示插件

  以前使用Mootools Js框架，文本框有个$('id').highlight()高亮方法，使其高亮显示；
  JQuery 中没有这个方法，自己今天写了一个Plugin，把代码贴出来分享一下；

# 代码如下：

/*
    description:Elements HighLight
    
    author:Allen Liu
*/
(function($) {

    $.fn.highlight = function(options) {
        var defaultOpt = {
            lightColor: 'yellow',   /* 高亮时的颜色 */
            lightTime: 1000,        /* 高亮时长 （单位：毫秒） */
            isFocus: true           /* 是否获取焦点 */
        };
 
        options = $.extend(defaultOpt, options);
        return this.each(function() {
            var sender = $(this);
            if (sender.attr('light') == undefined) {
                var _bgColor = sender.css('background-color');
                sender.css({ 'background-color': options.lightColor });
                if (options.isFocus) {
                    sender.focus();
                }
 
                sender.attr('light', true); 
                window.setTimeout(function() {
                    sender.removeAttr('light'); 
                    sender.css({ 'background-color': _bgColor });
                }, options.lightTime);
            }
        });
    }
})(jQuery);

