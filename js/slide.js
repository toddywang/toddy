/**
 * Created with JetBrains WebStorm.
 * User: 阳
 * Date: 13-4-14
 * Time: 下午5:21
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $(".li_1").bind({
        click:function(){
        $(".main_right_1").css("display", "block")
            .animate({opacity:0.5},200).animate({opacity:0.9},200);
        $(".main_right_2").css("display", "none");
        $(".main_right_3").css("display", "none");
        }
    });
    $(".li_2").bind({
        click:function(){
            $(".main_right_2").css("display", "block")
                .animate({opacity:0.5},200).animate({opacity:0.9},200);
            $(".main_right_1").css("display", "none");
            $(".main_right_3").css("display", "none");
        }
    });
    $(".li_3").bind({
        click:function(){
            $(".main_right_3").css("display", "block")
                .animate({opacity:0.5},200).animate({opacity:0.9},200);
            $(".main_right_2").css("display", "none");
            $(".main_right_1").css("display", "none");
        }
    });

    $(".li").bind({
        click:function(){
            $(".slide").slideToggle(500);
        }
    });

    $(".close_right_1").bind({
        click:function(){
            $(".main_right_1").slideToggle(500);
        }
    });
    $(".close_right_2").bind({
        click:function(){
            $(".main_right_2").slideToggle(500);
        }
    });
    $(".close_right_3").bind({
        click:function(){
            $(".main_right_3").slideToggle(500);
        }
    });

    $("#logo_top").bind({
        mouseover:function(){
            $("#logo_top").css("top", "0px");
        },
        mouseout:function(){
            $("#logo_top").css("top" ,"-35px")
        }
    });

    $("#footer").bind({
        mouseover:function(){
            $("#footer").css("bottom", "0px");
        },
        mouseout:function(){
            $("#footer").css("bottom", "-80px");
        }
    });

    $(".slide_menu_left_0").bind({
        click:function(){
            $(".slide_menu_right").fadeToggle(500);
        }
    })
});