'use strict';

$(function(){
    $(window).resize(() => {         
        if ($(window).width() > 992) {
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
        if ($(window).width() >= 768 && $(window).width() < 992 ) {
           $(".div_a").css("background-color","#9b5151");
           $(".div_i").css("background-color","#9b5151");
           $(".div_b").css("background-color","#9b5151");
           $(".div_c").css("background-color","#9b5151");
           $(".div_d").css("background-color","#9b5151");
           $(".div_e").css("background-color","#9b5151");
           $(".div_f").css("background-color","#9b5151");
           $(".div_g").css("background-color","#9b5151");
           $(".div_h").css("background-color","#9b5151");
        }
    });


    $(window).resize(() => {         
        if ($(window).width() > 480 && $(window).width() < 768 ) {
           $(".div_a").css("background-color","#d9adad");
           $(".div_i").css("background-color","#d9adad");
           $(".div_b").css("background-color","#d9adad");
           $(".div_c").css("background-color","#d9adad");
           $(".div_d").css("background-color","#d9adad");
           $(".div_e").css("background-color","#d9adad");
           $(".div_f").css("background-color","#d9adad");
           $(".div_g").css("background-color","#d9adad");
           $(".div_h").css("background-color","#d9adad");
        }
    });
})
