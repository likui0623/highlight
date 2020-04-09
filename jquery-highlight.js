/*
    description:TextBox HighLight
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