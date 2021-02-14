'use strict';

$(function(){
    $(window).resize(() => {         
        if ($(window).width() >  768) {
           $(".div_a").css("background-color","#d9adad");
           $(".div_i").css("background-color","#d9adad");
           $(".div_b").css("background-color","#ad9d9d");
           $(".div_c").css("background-color","#ad9d9d");
           $(".div_d").css("background-color","#ad9d9d");
           $(".div_e").css("background-color","#9b5151");
           $(".div_f").css("background-color","#9b5151");
           $(".div_g").css("background-color","#9b5151");
           $(".div_h").css("background-color","#9b5151");
        }
    });
    
    $(window).resize(() => {         
        if ($(window).width() <=  768) {
           $(".div_a").css("background-color","#8b5e83");
           $(".div_i").css("background-color","#8b5e83");
           $(".div_b").css("background-color","#c6a9a3");
           $(".div_c").css("background-color","#8b5e83");
           $(".div_d").css("background-color","#c6a9a3");
           $(".div_e").css("background-color","#ebd8b7");
           $(".div_f").css("background-color","#ebd8b7");
           $(".div_g").css("background-color","#ebd8b7");
           $(".div_h").css("background-color","#ebd8b7");
        }
    });
})
