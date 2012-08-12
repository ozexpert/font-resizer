/* Author: Young K. Park (youngkeunpark@gmail.com / github: ozexpert) */
/* This explains good usage of JS closure */

var fontController = (function(){
    var defaultSize = 100; // in %, private variable
    var target;

    function setSize(){
        target.css('font-size', defaultSize+'%');
    }

    return {
        increase: function(){
            defaultSize++;
            setSize();
        },
        decrease: function(){
            defaultSize--;
            setSize();
        },
        value: function(){
            return defaultSize;
        },
        setTarget: function(elem){
            target = jQuery('#'+elem);
        },
        getTarget: function(){
            return target;
        }
    };
})(jQuery);