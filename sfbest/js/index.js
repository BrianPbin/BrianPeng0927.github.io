/**
 * Created by Administrator on 16-8-3.
 */

//banner图部分
//右边图效果
$(".banner_side li").mouseover(function(){
    $(this).find(".side_shadow").css({"display":"none"});
    $(this).siblings().find(".side_shadow").css({"display":"block"})
});
$(".banner_side li").mouseout(function(){
    $(".banner_side li").find(".side_shadow").css({"display":"none"});
});
//轮播效果
$(function(){
    var now = 0;
    $(".banner_tab li").mouseover(function () {
        now=$(this).index();
        lunbo();
    });
    //自动轮播
    var tab = setInterval(next, 3000);
    $(".banner_main").mouseover(function(){
        clearInterval(tab);
    });
    $(".banner_side").mouseover(function(){
        clearInterval(tab);
    });
    $(".banner_side").mouseout(function(){
        tab = setInterval(next, 3000);
    });
    $(".banner_main").mouseout(function(){
       tab = setInterval(next, 3000);
    });
    function lunbo() {
        $(".banner_main").stop(true).animate({"left": -now * 1000}, "fast");
        $(".banner_tab li").eq(now).addClass("banner_tabhover").siblings().removeClass("banner_tabhover");
        $(".tabBg li").stop(true).eq(now).fadeIn().siblings().hide()
    }
    function next(){
        now++;
        if(now>$(".banner_tab li").size()-1){
            $(".tabBg li").stop(true).eq(0).fadeIn().siblings().hide();
            $(".banner_tab li").eq(0).addClass("banner_tabhover").siblings().removeClass("banner_tabhover");
            $(".banner_main").stop(true).animate({"left": -now * 1000}, "fast",function(){
                now = 0;
                $(".banner_main").css({"left":-now*1000})
            });
        }else{
            lunbo();
        }
    }
});

//口碑甄选部分
//显示加入购物车框
$(".pick_big li").mouseover(function(){
    $(this).find(".addToShopCar").stop(true).animate({"top":225},"fast");
});
$(".pick_big li").mouseout(function(){
    $(this).find(".addToShopCar").stop(true).animate({"top":260},"fast")
});
$(".pick_small li").mouseover(function(){
    $(this).find(".addToShopCar").stop(true).animate({"top":168},"fast");
});
$(".pick_small li").mouseout(function(){
    $(this).find(".addToShopCar").stop(true).animate({"top":210},"fast")
});
//限时抢购部分
$(".bl_left_top ._next").mouseover(function(){
   $(this).find("a").css({"background-position":"-90px -239px"})
});
$(".bl_left_top ._next").mouseout(function(){
    $(this).find("a").css({"background-position":"-90px -296px"})
});
//抢购剩余时间
$(function(){
	var d1=new Date();
	var d2=new Date("8/15/2016");
	var timer6;
	var timer5;
	var timer4;
	var timer3;
	var timer2;
	var timer1;
	var timer;
	//var ss=Math.floor(timer/1000);  
	//var mm=Math.floor(timer/60000); 
	//var hh=Math.floor(timer/3600000); 
	var timeCount=setInterval(function(){
		d1.setSeconds(d1.getSeconds()+1);
		timer=Date.parse(d2)-Date.parse(d1);
		timer6=(Math.floor(timer/1000)%60)%10;
		timer5=Math.floor((Math.floor(timer/1000)%60)/10);
		timer4=(Math.floor(timer/60000)%60)%10;
		timer3=Math.floor((Math.floor(timer/60000)%60)/10);
		timer2=Math.floor(timer/3600000)%10;
		timer1=Math.floor(Math.floor(timer/3600000)/10);
		$(".time_count .num").eq(0).text(timer1);
		$(".time_count .num").eq(1).text(timer2);
		$(".time_count .num").eq(2).text(timer3);
		$(".time_count .num").eq(3).text(timer4);
		$(".time_count .num").eq(4).text(timer5);
		$(".time_count .num").eq(5).text(timer6);
        if(timer<=0){
            clearInterval(timeCount);
            $(".time_count .num").eq(0).text(0);
            $(".time_count .num").eq(1).text(0);
            $(".time_count .num").eq(2).text(0);
            $(".time_count .num").eq(3).text(0);
            $(".time_count .num").eq(4).text(0);
            $(".time_count .num").eq(5).text(0);
        }
	},1000);
});

//相似选择类-标题部分
$(".fru_veg_con ._left").find("h2").mouseover(function(){
   $(this).css({"background":"#83b933"});
   $(this).find("b").css({"background-position":"-170px -68px"})
});
$(".fru_veg_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#76ac25"});
    $(this).find("b").css({"background-position":"-140px -68px"})
});
$(".meat_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#fb7b9d"});
    $(this).find("b").css({"background-position":"-170px -172px"})
});
$(".meat_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#fa648c"});
    $(this).find("b").css({"background-position":"-140px -172px"})
});
$(".custurd_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#ff872d"});
    $(this).find("b").css({"background-position":"-170px -88px"})
});
$(".custurd_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#ff6c00"});
    $(this).find("b").css({"background-position":"-140px -88px"})
});
$(".foodstuff_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#fb7b9d"});
    $(this).find("b").css({"background-position":"-170px -172px"})
});
$(".foodstuff_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#fa648c"});
    $(this).find("b").css({"background-position":"-140px -172px"})
});
$(".snacks_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#dd415b"});
    $(this).find("b").css({"background-position":"-170px -109px"})
});
$(".snacks_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#d12e49"});
    $(this).find("b").css({"background-position":"-140px -109px"})
});
$(".milk_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#efa517"});
    $(this).find("b").css({"background-position":"-170px -132px"})
});
$(".milk_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#f08c18"});
    $(this).find("b").css({"background-position":"-140px -132px"})
});
$(".drinks_con ._left").find("h2").mouseover(function(){
    $(this).css({"background":"#83b77b"});
    $(this).find("b").css({"background-position":"-170px -153px"})
});
$(".drinks_con ._left").find("h2").mouseout(function(){
    $(this).css({"background":"#78b270"});
    $(this).find("b").css({"background-position":"-140px -153px"})
});

//相似选择类-右上边部分
$(".fru_veg_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"0 -61px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".fru_veg_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".meat_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"-65px -61px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".meat_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".custurd_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"0 -121px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".custurd_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".foodstuff_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"-65px -61px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".foodstuff_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".snacks_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"0 -181px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".snacks_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".milk_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"0 -241px"});
    $(this).find("a").css({"color":"#fff"});
});
$(".milk_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
$(".drinks_con ._right ._select li").mouseover(function(){
    $(this).css({"background-position":"-65px 0"});
    $(this).find("a").css({"color":"#fff"});
});
$(".drinks_con ._right ._select li").mouseout(function(){
    $(this).css({"background-position":"0 0"});
    $(this).find("a").css({"color":"#333"});
});
//相似选择类-右下部分
$(".fru_veg_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -33px"})
});
$(".fru_veg_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".meat_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -199px"})
});
$(".meat_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".custurd_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -66px"})
});
$(".custurd_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".foodstuff_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -199px"})
});
$(".foodstuff_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".snacks_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -99px"})
});
$(".snacks_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".milk_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -132px"})
});
$(".milk_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
$(".drinks_con ._right ._more_select").mouseover(function(){
    $(this).find("._more").css({"background-position":"-204px -166px"})
});
$(".drinks_con ._right ._more_select").mouseout(function(){
    $(this).find("._more").css({"background-position":"-204px 0"})
});
//相似选择类-加入购物车
$("._center_list li").mouseover(function(){
    $(this).find("._shopCar").stop(true).animate({"top":136},"fast");
});
$("._center_list li").mouseout(function(){
    $(this).find("._shopCar").stop(true).animate({"top":161},"fast");
});
//进入详情页
$("._center_list li ._imgshow ._aimg").on("click",function(){
    var d=new Date();
    d.setDate(d.getDate()+10);
   setCookie("goodID",$(this).attr("goodsId"));
});



