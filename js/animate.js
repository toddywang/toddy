/**
 * Created with JetBrains WebStorm.
 * User: 阳
 * Date: 13-4-13
 * Time: 下午5:01
 * To change this template use File | Settings | File Templates.
 */


function addloadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addloadEvent(change_main_words_bottom_display);
function change_main_words_bottom_display(){
    var main_font = document.getElementById('main_font');
    main_font.onclick = function(){
        var main_words = document.getElementById('main_words_bottom');
        main_words.style.display = "block";
    };
}
/*
addloadEvent(demo);
function demo(){

    var main_font_en = document.getElementById('main_font_en');
    main_font_en.onclick = function() {
        var  main_words = document.getElementById('main_words_bottom');
        main_words.style.display = "block";
        return false;};
}*/

$(document).ready(function(){
    $(window).load(function(){
        $('.loading').fadeOut(2000);
    });
function time(){
    $(".main_font").animate({fontSize:"78px"},2000);
    $(".main_font_en").animate({fontSize:"32px"},2000);
    $(".main_words").fadeIn(2000)
    $(".draw_left").fadeIn(2000)
        .animate({opacity:0.4},100)
        .animate({opacity:0},200)
        .animate({opacity:0.5},100)
        .animate({opacity:1},500);
    $(".draw_right").fadeIn(2000)
        .animate({opacity:0.4},100)
        .animate({opacity:0},200)
        .animate({opacity:0.5},100)
        .animate({opacity:1},500);
}
    setTimeout(time,2000);
    $(".main_font").bind({
        click:function(){
            $(".draw_left").animate({opacity:0},1000).css("display", "none");
            $(".draw_right").animate({opacity:0},1000).css("display", "none");
            $(".main_words").removeClass("main_words").addClass("main_words_1")
                .animate({paddingLeft:15,paddingTop:15},10);

            $(".main_font").animate({fontSize:"45px"},10);
            $(".main_font_en").animate({fontSize:"14px"},10);
            $(".my_info").fadeIn(2000);
            $(".close").css("display","block");
            $(".main_font").text("What's this ?");
            $(".main_font_en").text("");
        }
    });

    $(".main_font_en").bind({
        click:function(){
            $(".main_words_bottom").animate({display: block},100)
                .animate({opacity:0.5},200).animate({opacity:0.75},200);
            $(".draw_left").animate({opacity:0},1000).css("display", "none");
            $(".draw_right").animate({opacity:0},1000).css("display", "none");
            $(".main_words").removeClass("main_words").addClass("main_words_1")
                .animate({paddingLeft:15,paddingTop:15},500);
            $(".main_font").animate({fontSize:"45px"},500);
            $(".main_font_en").animate({fontSize:"14px"},500);
            $(".my_info").fadeIn(2000);
           // $(".close").animate({display: block},100);
            $(".main_font").text("What's this ?");
            $(".main_font_en").text("").css("display", "none");
        }
    });
    $(".close_icon").bind({
        click:function(){
            $(".main").hide();
            $(".main_main").show();
            $(".slide").hide();
        }
    });
});