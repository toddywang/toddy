/**
 * Created with JetBrains WebStorm.
 * User: 阳
 * Date: 13-4-17
 * Time: 下午11:09
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    $(".pic_number_1").bind({
        click:function(){
            $(".main_pic_1").fadeIn(1500);
            $(".main_pic_info_1").fadeIn(1500);
            $(".main_pic_2").fadeOut(1500);
            $(".main_pic_3").fadeOut(1500);
            $(".main_pic_info_2").fadeOut(1500);
            $(".main_pic_info_3").fadeOut(1500);
        }
    });
    $(".pic_number_2").bind({
        click:function(){
            $(".main_pic_2").fadeIn(1500);
            $(".main_pic_info_2").fadeIn(1500);
            $(".main_pic_1").fadeOut(1500);
            $(".main_pic_3").fadeOut(1500);
            $(".main_pic_info_1").fadeOut(1500);
            $(".main_pic_info_3").fadeOut(1500);
        }
    });
    $(".pic_number_3").bind({
        click:function(){
            $(".main_pic_3").fadeIn(1500);
            $(".main_pic_info_3").fadeIn(1500);
            $(".main_pic_2").fadeOut(1500);
            $(".main_pic_1").fadeOut(1500);
            $(".main_pic_info_1").fadeOut(1500);
            $(".main_pic_info_2").fadeOut(1500);
        }
    });
});