/**
 * Created with JetBrains WebStorm.
 * User: 阳
 * Date: 13-4-13
 * Time: 下午1:41
 * To change this template use File | Settings | File Templates.
 */
//右上方的图形绘制
function createpath(context){
    //用绝对坐标创建路径
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(-278,145 );
    context.lineTo(-128, 188);
    context.lineTo(18,0);

    context.closePath();
}

function darwPic() {
    var canvas = document.getElementById("diagonal_right");
    var context = canvas.getContext('2d');

    context.lineWidth = 0.0001;
    context.save();
    context.translate(278, 0);
    createpath(context);
    context.stroke();
    context.restore();
    context.fillStyle="#EE1068";
    context.fill();

    context.stroke();
}

function createpath1(context){
    //用绝对坐标创建路径
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(-44,0 );
    context.lineTo(-190, 188);
    context.lineTo(0,65);

    context.closePath();
}

function darwPic1() {
    var canvas = document.getElementById("diagonal_right");
    var context = canvas.getContext('2d');

    context.lineWidth = 0.0001;
    context.save();
    context.translate(340, 0);
    createpath1(context);
    context.stroke();
    context.restore();
    context.fillStyle="#29A5D0";
    context.fill();

    context.stroke();
}

//左下方的图像绘制
function createpath2(context){
    //用绝对坐标创建路径
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(165,0 );
    context.lineTo(323, -291);
    context.lineTo(328, -355);
    context.lineTo(0, -84);

    context.closePath();
}

function darwPic2() {
    var canvas = document.getElementById("diagonal_left");
    var context = canvas.getContext('2d');

    context.lineWidth = 0.0001;
    context.save();
    context.translate(0, 355);
    createpath2(context);
    context.stroke();
    context.restore();
    context.fillStyle="#EE1068";
    context.fill();

    context.stroke();
}

function createpath3(context){
    //用绝对坐标创建路径
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(445, -217);
    context.lineTo(158, -291);

    context.closePath();
}

function darwPic3() {
    var canvas = document.getElementById("diagonal_left");
    var context = canvas.getContext('2d');

    context.lineWidth = 0.0001;
    context.save();
    context.translate(165, 355);
    createpath3(context);
    context.stroke();
    context.restore();
    context.fillStyle="#29A5D0";
    context.fill();

    context.stroke();
}

window.addEventListener("load", darwPic, true);
window.addEventListener("load", darwPic1, true);
window.addEventListener("load", darwPic2, true);
window.addEventListener("load", darwPic3, true);