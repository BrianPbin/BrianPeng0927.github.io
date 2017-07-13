/**
 * Created by Administrator on 16-8-1.
 */

//头部部分
 //城市选择下拉框
$(".MenuSelectCity").mouseover(function(){
    $(this).css({"background":"#fff"});
    $(this).find("b").css({"background-position":"-169px -3px"});
    $(".city_select").show();
    $(".MenuSelectCity").mouseout(function(){
        $(".city_select").hide();
        $(this).css({"background":""});
        $(this).find("b").css({"background-position":"-86px -130px"});
    })
});
$(".city_select").mouseover(function(){
    $(".MenuSelectCity").css({"background":"#fff"});
    $(".MenuSelectCity").find("b").css({"background-position":"-169px -3px"});
    $(this).show();
    $(".city_select").mouseout(function(){
        $(this).hide();
        $(".MenuSelectCity").css({"background":""});
        $(".MenuSelectCity").find("b").css({"background-position":"-86px -130px"});
    });
    $(".citySelect_top span").click(function(){
        $(".city_select").hide();
        $(".MenuSelectCity").css({"background":""});
        $(".MenuSelectCity").find("b").css({"background-position":"-86px -130px"});
    })
});
$(function(){
    $(".province li").on("click",function(){
        $(".province_city li").hide();
        $(".province li").css({"background":"","color":"#333"});
        $(this).parent().siblings(".province_city").find("li").eq($(this).index()).show();
        $(this).css({"background":"url(images/city_bg.png) no-repeat center bottom","color":"#fff"})
    });
    $(".province_city li a").on("click",function(){
        $(".MenuSelectCity span").text($(this).text());
        $(".city_select").hide();
    });
    $(".citySelect_middle li a").on("click",function(){
        $(".MenuSelectCity span").text($(this).text());
        $(".city_select").hide();
    })
});
//我的优选下拉框
$(".Menu_myPrefer").mouseover(function(){
    $(this).css({"background":"#fff","border":"1px solid #dadada","margin":"6px 3px 0 0"});
    $("._myPrefer").show();
    $(this).find("b").css({"background-position":"-169px -3px"});
    $(".Menu_myPrefer").mouseout(function(){
        $(this).css({"background":"","border":"","margin":"7px 4px 0 1px"});
        $("._myPrefer").hide();
        $(this).find("b").css({"background-position":"-86px -130px"});
    })
});
$("._myPrefer").mouseover(function(){
    $(".Menu_myPrefer").css({"background":"#fff","border":"1px solid #dadada","margin":"6px 3px 0 0"});
    $(".Menu_myPrefer").find("b").css({"background-position":"-169px -3px"});
    $(this).show();
    $("._myPrefer").mouseout(function(){
        $(".Menu_myPrefer").css({"background":"","border":"","margin":"7px 4px 0 1px"});
        $(this).hide();
        $(".Menu_myPrefer").find("b").css({"background-position":"-86px -130px"});
    })
});
//移动客户端下拉框
$(".Menu_mobileClient").mouseover(function(){
    $("._mobileClient").show();
    $(this).find("em").css({"background-position":"-73px -138px"});
    $(".Menu_mobileClient").mouseout(function(){
        $("._mobileClient").hide();
        $(this).find("em").css({"background-position":"-73px -122px"});
    })
});
$("._mobileClient").mouseover(function(){
    $(this).show();
    $(".Menu_mobileClient").find("em").css({"background-position":"-73px -138px"});
    $("._mobileClient").mouseout(function(){
        $(this).hide();
        $(".Menu_mobileClient").find("em").css({"background-position":"-73px -122px"});
    })
});
//帮助中心下拉框
$(".Menu_helpCenter").mouseover(function(){
    $(this).css({"background":"#fff","border":"1px solid #dadada","margin":"6px -1px 0 0"});
    $("._helpCenter").show();
    $(this).find("b").css({"background-position":"-169px -3px"});
    $(".Menu_helpCenter").mouseout(function(){
        $(this).css({"background":"","border":"","margin":"7px 0 0 1px"});
        $("._helpCenter").hide();
        $(this).find("b").css({"background-position":"-86px -130px"});
    })
});
$("._helpCenter").mouseover(function(){
    $(".Menu_helpCenter").css({"background":"#fff","border":"1px solid #dadada","margin":"6px -1px 0 0"});
    $(".Menu_helpCenter").find("b").css({"background-position":"-169px -3px"});
    $(this).show();
    $("._helpCenter").mouseout(function(){
        $(".Menu_helpCenter").css({"background":"","border":"","margin":"7px 0 0 1px"});
        $(this).hide();
        $(".Menu_helpCenter").find("b").css({"background-position":"-86px -130px"});
    })
});
//网站导航下拉
$(".Menu_siteNav").mouseover(function(){
    $(this).css({"background":"#fff","border":"1px solid #dadada","margin":"6px 1px 0 0"});
    $("._siteNav").show();
    $(this).find("b").css({"background-position":"-169px -3px"});
    $(".Menu_siteNav").mouseout(function(){
        $(this).css({"background":"","border":"","margin":"7px 2px 0 1px"});
        $("._siteNav").hide();
        $(this).find("b").css({"background-position":"-86px -130px"});
    })
});
$("._siteNav").mouseover(function(){
    $(".Menu_siteNav").css({"background":"#fff","border":"1px solid #dadada","margin":"6px 1px 0 0"});
    $(".Menu_siteNav").find("b").css({"background-position":"-169px -3px"});
    $(this).show();
    $("._siteNav").mouseout(function(){
        $(".Menu_siteNav").css({"background":"","border":"","margin":"7px 2px 0 1px"});
        $(this).hide();
        $(".Menu_siteNav").find("b").css({"background-position":"-86px -130px"});
    })
});
//微信下拉框
$(".Menu_tencent").mouseover(function(){
    $("._tencent").show();
    $(".Menu_tencent").mouseout(function(){
        $("._tencent").hide();
    })
});
$("._tencent").mouseover(function(){
    $("._tencent").show();
    $("._tencent").mouseout(function(){
        $("._tencent").hide();
    })
});
//购物车下拉框
$(".myShopCar p").on("mouseover",function(){
    $("._shop_car").show();
    $(this).on("mouseout",function(){
        $("._shop_car").hide();
    });
});
$("._shop_car").on("mouseover",function(){
    $(this).show();
    $(this).mouseout(function(){
        $(this).hide();
    })
});
//精选商品分类下拉二级菜单
$(".categories_select li").mouseover(function(){
    $(this).css({"background":"#fff"});
    $(this).find("h3").find("a").css({"color":"#76ac25"});
    $(this).find("p").find("a").css({"color":"#76ac25"});
    $(".type_show").show();
    $(".type_show li").eq($(this).index()).show().siblings().hide();
});
$(".categories_select li").mouseout(function(){
    $(this).css({"background":""});
    $(this).find("h3").find("a").css({"color":"#fff"});
    $(this).find("p").find("a").css({"color":"#ddeac8"});
    $(".type_show").hide();
});
$(".categories_li1").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 5px"})
});
$(".categories_li1").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 3px"})
});
$(".categories_li2").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -323px"})
});
$(".categories_li2").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -323px"})
});
$(".categories_li3").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -159px"})
});
$(".categories_li3").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -159px"})
});
$(".categories_li4").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -47px"})
});
$(".categories_li4").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -47px"})
});
$(".categories_li5").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -106px"})
});
$(".categories_li5").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -106px"})
});
$(".categories_li6").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -213px"})
});
$(".categories_li6").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -213px"})
});
$(".categories_li7").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -269px"})
});
$(".categories_li7").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -269px"})
});
$(".categories_li8").mouseover(function(){
	$(this).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -378px"})
});
$(".categories_li8").mouseout(function(){
	$(this).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -378px"})
});

//精选商品分类三级菜单
$(".type_show li").mouseover(function(){
	$(".type_show").show();
	$(".categories_select li").eq($(this).index()).css({"background":"#fff"});
	$(".categories_select li").eq($(this).index()).find("h3").find("a").css({"color":"#76ac25"});
    $(".categories_select li").eq($(this).index()).find("p").find("a").css({"color":"#76ac25"})	
});
$(".type_show li").mouseout(function(){
	$(".type_show").hide();
	$(".categories_select li").eq($(this).index()).css({"background":""});
	$(".categories_select li").eq($(this).index()).find("h3").find("a").css({"color":"#fff"});
    $(".categories_select li").eq($(this).index()).find("p").find("a").css({"color":"#ddeac8"})
});
$(".type_show li").eq(0).mouseover(function(){
	$(".categories_select li").eq(0).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 5px"})
});
$(".type_show li").eq(0).mouseout(function(){
	$(".categories_select li").eq(0).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 3px"})
});
$(".type_show li").eq(1).mouseover(function(){
	$(".categories_select li").eq(1).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -323px"})
});
$(".type_show li").eq(1).mouseout(function(){
	$(".categories_select li").eq(1).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -323px"})
});
$(".type_show li").eq(2).mouseover(function(){
	$(".categories_select li").eq(2).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -159px"})
});
$(".type_show li").eq(2).mouseout(function(){
	$(".categories_select li").eq(2).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -159px"})
});
$(".type_show li").eq(3).mouseover(function(){
	$(".categories_select li").eq(3).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -47px"})
});
$(".type_show li").eq(3).mouseout(function(){
	$(".categories_select li").eq(3).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -47px"})
});
$(".type_show li").eq(4).mouseover(function(){
	$(".categories_select li").eq(4).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -106px"})
});
$(".type_show li").eq(4).mouseout(function(){
	$(".categories_select li").eq(4).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -106px"})
});
$(".type_show li").eq(5).mouseover(function(){
	$(".categories_select li").eq(5).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -213px"})
});
$(".type_show li").eq(5).mouseout(function(){
	$(".categories_select li").eq(5).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -213px"})
});
$(".type_show li").eq(6).mouseover(function(){
	$(".categories_select li").eq(6).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -269px"})
});
$(".type_show li").eq(6).mouseout(function(){
	$(".categories_select li").eq(6).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -269px"})
});
$(".type_show li").eq(7).mouseover(function(){
	$(".categories_select li").eq(7).find("h3").find("em").css({"background":"url(images/left_lm_m.png)no-repeat 0 -378px"})
});
$(".type_show li").eq(7).mouseout(function(){
	$(".categories_select li").eq(7).find("h3").find("em").css({"background":"url(images/select.png) no-repeat 0 -378px"})
});
$(".type_show_right").click(function(){
	$(".type_show").hide();
});

//右下角固定框部分
//回到顶部
onscroll=function(){
    var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    if(_scrollTop>0){
        $(".to_top").show();
    }else if(_scrollTop==0){
        $(".to_top").hide();
    }
    $(".to_top").on("mouseover",function(){
        $(this).find("a").css({"background-position":"0 -184px"});
        $(this).click(function(){
            _scrollTop=0;
        });
        $(this).mouseout(function(){
            $(this).find("a").css({"background-position":"0 -82px"});
        });
    });
};
//滑出框
$(".btn_shopcar").on("mouseenter",function(){
    $(".side_hide").eq(0).show();
    $(this).find("a").css({"background-position":"0 -147px"});
    $(".shopCar_list").stop(true).animate({"right":"0"},"slow");
    $(this).on("mouseleave",function(){
        $(this).find("a").css({"background-position":"0 -45px"});
        $(".shopCar_list").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(0).hide();
        });
    });
});
$(".cart_shop").mouseenter(function(){
    $(".side_hide").eq(0).show();
    $(".shopCar_list").stop(true).animate({"right":"0"},"fast");
    $(this).mouseleave(function(){
        $(".shopCar_list").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(0).hide();
        });
    });
});
$(".btn_foot").on("mouseenter",function(){
    $(".side_hide").eq(1).show();
    $(this).find("a").css({"background-position":"-42px -184px"});
    $(".histroy_save").stop(true).animate({"right":"0"},"slow");
    $(this).on("mouseleave",function(){
        $(this).find("a").css({"background-position":"-42px -84px"});
        $(".histroy_save").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(1).hide();
        });
    });
});
$(".cart_history").mouseenter(function(){
    $(".side_hide").eq(1).show();
    $(".histroy_save").stop(true).animate({"right":"0"},"fast");
    $(this).mouseleave(function(){
        $(".histroy_save").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(1).hide();
        });
    });
});
$(".btn_app").on("mouseenter",function(){
    $(".side_hide").eq(2).show();
    $(this).find("a").css({"background-position":"-42px -142px"});
    $(".app_client").stop(true).animate({"right":"0"},"slow");
    $(this).on("mouseleave",function(){
        $(this).find("a").css({"background-position":"-42px -40px"});
        $(".app_client").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(2).hide();
        });
    });
});
$(".cart_app").mouseenter(function(){
    $(".side_hide").eq(2).show();
    $(".app_client").stop(true).animate({"right":"0"},"fast");
    $(this).mouseleave(function(){
        $(".app_client").stop(true).animate({"right":"-101%"},1000,function(){
            $(".side_hide").eq(2).hide();
        });
    });
});



