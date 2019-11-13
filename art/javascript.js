start();
var imgs = 2;
var now = 0;
function start(){
    $(".slideBg>img").eq(0).siblings().css({"margin-left":"-2000px"});
    setInterval.(function(){slide();},2000)
};

function slide(){
    now = now==imgs?0:now+=1;
    $(".slideBg>img").eq(now-1).css({"margin-left":"-2000px"});
    $(".slideBg>img").eq(now).css({"margin-left":"0px"});
};