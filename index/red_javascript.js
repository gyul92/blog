/*슬라이드이미지*/
start();
var imgs = 2;
var now = 0;

function start(){
    $(".box3-ani>a>img").eq(0).siblings().css(
    {"margin-left":"-2000px"});
    setInterval(function(){
        slide();
    },2000)
};

function slide(){
    now = now==imgs?0:now+=1;
    $(".box3-ani>a>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".box3-ani>a>img").eq(now).css({"margin-left":"0px"});
};