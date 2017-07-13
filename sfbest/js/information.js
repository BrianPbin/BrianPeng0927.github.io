/**
 * Created by Administrator on 16-8-8.
 */
//二级菜单部分
$(function(){
   $(".categories").on("mouseover",function(){
       $(".categories_select").show();
       $(this).on("mouseout",function(){
           $(".categories_select").hide();
       })
   });
   $(".categories_select").on("mouseover",function(){
       $(this).show();
       $(this).on("mouseout",function(){
           $(this).hide();
       })
   });
    $(".type_show").on("mouseover",function(){
        $(".categories_select").show();
        $(this).on("mouseout",function(){
            $(".categories_select").hide();
        })
    });
});
//ajax异步加载
var dataid=getCookie("goodID");
$.ajax({
    url:"information.json",
    dataType:"json",
    success:function(data){
        var arr1=[];
        var str1="";
        var str_list_show="";
        var arr_list_show=[];
        var str_middle_view="";
        var arr_middle_view=[];
        var str_big_view="";
        var arr_big_view=[];
        var str_price_num="";
        var arr_price_num=[];
        var str_status="";
        var str_goods="";
        var str_basic_list="";
        var str_imginfo_h2="";
        var str_imginfo_list="";
        var arr_imginfo_list=[];
        var djson=data.data;
        for(var i in djson){
            if(dataid==djson[i].id){
                arr1=djson[i].name;
                arr_list_show=djson[i].simg;
                arr_middle_view=djson[i].mimg;
                arr_big_view=djson[i].bimg;
                arr_price_num=djson[i].price;
                arr_imginfo_list=djson[i].infolist;
                str_imginfo_h2+="<img src='"+djson[i].infoh2+"' />"
                str_status+="<b class='_status"+djson[i].status+"'></b>";
                if(djson[i].status>0){
                    str_basic_list+="<li><span>存储条件：</span>冷藏</li>"
                }
                if(djson[i].brand){
                    str_goods+="<li>品牌：<span>"+djson[i].brand+"</span></li>"
                }
                if(djson[i].producearea){
                    str_goods+="<li>产地：<span>"+djson[i].producearea+"</span></li>";
                    str_basic_list+="<li><span>产地：</span>"+djson[i].producearea+"</li>"
                }
                if(djson[i].format){
                    str_goods+="<li>规格：<span>"+djson[i].format+"</span></li>";
                    str_basic_list+="<li><span>规格：</span>"+djson[i].format+"</li>"
                }
                if(djson[i].weight){
                    str_goods+="<li>重量：<span>"+djson[i].weight+"</span></li>";
                    str_basic_list+="<li><span>重量：</span>"+djson[i].weight+"</li>"
                }
                if(djson[i].num){
                    str_goods+="<li>商品编号：<span>"+djson[i].num+"</span></li>"
                }
                if(djson[i].unit){
                    str_basic_list+="<li><span>销售单位：</span>"+djson[i].unit+"</li>"
                }
                str_goods+="<li class='_uk'>"+"<span>优选卡</span><p>支持优选卡支付</p></li>"
            }
        }
        //详情分类
        $(".product_sort span").html("<a href='#'>"+arr1[0]+"</a>");
        for(var i=1;i<arr1.length-1;i++){
            str1+="<a href='#'>"+" > "+arr1[i]+"</a>";
        }
        str1+=" > "+arr1[arr1.length-1];
        $(".product_sort p").html(str1);
        //h1标题
        $("._productName h1").html(arr1[arr1.length-1]);
        //小图列表
        for(var i=0;i<arr_list_show.length;i++){
            str_list_show+="<li><img src='"+arr_list_show[i]+"' title='"+arr1[arr1.length-1]+"' /></li>"
        }
        $("._list_show ul").html(str_list_show);
        //中图
        str_middle_view+="<div>";
        for(var i=0;i<arr_middle_view.length;i++){
            str_middle_view+="<img src='"+arr_middle_view[i]+"' />"
        }
        str_middle_view+="</div>";
        str_middle_view+="<div class='_fdj'></div>";
        $("._middle_view").html(str_middle_view);
        //大图
        str_big_view+="<div>";
        for(var i=0;i<arr_big_view.length;i++){
            str_big_view+="<img src='"+arr_big_view[i]+"' />"
        }
        str_big_view+="</div>";
        $("._big_view").html(str_big_view);
        //价格
        str_price_num+=arr_price_num[0];
        str_price_num+="<span>"+arr_price_num[1]+"</span>";
        $("._price_num").html(str_price_num);
        //储存状态
        $("._status span").html(str_status);
        //品牌产地规格重量编号
        $(".goods_detial ul").html(str_goods);
        //商品介绍
        $(".basic_list").html(str_basic_list);
        //商品介绍图
        $("._imginfo_list h2").html(str_imginfo_h2);
        for(var i=0;i<arr_imginfo_list.length;i++){
            str_imginfo_list+="<img src='"+arr_imginfo_list[i]+"' />"
        }
        $("._imginfo_list p").html(str_imginfo_list);
        //点击上下换图
        var topdis=0;
        $("._btn_up").on("click",function(){
            topdis+=60;
            if(topdis>=0){
                topdis=0;
            }
            $("._list_show ul").stop(true).animate({"top":topdis},"fast");
        });
        $("._btn_down").on("click",function(){
            if(arr_list_show.length-5>0){
                topdis-=60;
                if(topdis<=-60*(arr_list_show.length-5)){
                    topdis=-60*(arr_list_show.length-5);
                }
            }else{
                topdis=0;
            }
            $("._list_show ul").stop(true).animate({"top":topdis},"fast");
        });
        //点击加减数量
        $("._promptNum ._add").on("click",function(){
            var buynum=Number($("._promptNum span input").val());
            buynum+=1;
            $("._promptNum span input").val(buynum);
            $("._promptNum ._reduce").css({"color":"#666"})
        });
        $("._promptNum ._reduce").on("click",function(){
            var buynum=Number($("._promptNum span input").val());
            buynum-=1;
            if(buynum<=1){
                buynum = 1;
                $(this).css({"color":"#ececec"})
            }
            $("._promptNum span input").val(buynum);
        });
        //客户端
        $(".phone_client").on("mouseenter",function(){
           $(this).css({"border-color":"#669900"});
           $(this).on("mouseleave",function(){
               $(this).css({"border-color":"#ddd"});
               $("._QRcode").hide();
           });
        });
        $(".phone_client").on("click",function(){
            $(this).css({"border-color":"#ddd"});
            $("._QRcode").show();
            $("._QRcode").on("mouseover",function(){
                $(this).show();
                $(this).on("mouseout",function(){
                    $(this).hide();
                });
            });
            $("._QRcode").find("a").on("click",function(){
                $("._QRcode").hide();
            })
        });
        //放大镜
        $("._middle_view img").eq(0).show().siblings().hide();
        $("._big_view img").eq(0).show().siblings().hide();
        $("._list_show ul li").on("mouseover",function(){
            var index=$(this).index();
            $(this).find("img").css({"border":"1px solid #69af05","padding":"0"});
            $(this).siblings().find("img").css({"border":"0","padding":"1px"});
            $("._middle_view img").eq(index).show().siblings().hide();
            $("._big_view img").eq(index).show().siblings().hide();
            $("._middle_view").on("mouseover",function(){
                $(this).find("._fdj").show();
                $("._big_view").show();
                $(this).on("mouseout",function(){
                    $(this).find("._fdj").hide();
                    $("._big_view").hide();
                })
            });
            $("._middle_view").on("mousemove",function(evt){
                var e=evt||window.event;
                var _left= e.clientX-$("._middle_view ._fdj").width()/2-$(this).offset().left;
                var _top= e.clientY-$("._middle_view ._fdj").height()/2-$(this).offset().top;
                if(_left<0){
                    _left=0;
                }else if(_left>$(this).width()-$("._middle_view ._fdj").width()){
                    _left=$(this).width()-$("._middle_view ._fdj").width();
                }
                if(_top<0){
                    _top=0;
                }else if(_top>$(this).height()-$("._middle_view ._fdj").height()){
                    _top=$(this).height()-$("._middle_view ._fdj").height();
                }
                $("._middle_view ._fdj").css({"left":_left,"top":_top});
                var scaleX=$("._big_view img").eq(index).width()/$("._middle_view").width();
                var scaleY=$("._big_view img").eq(index).height()/$("._middle_view").height();
                $("._big_view img").eq(index).css({"left":-scaleX*_left+"px","top":-scaleY*_top+"px"})
            });
        });
    }
});
//商品介绍部分
//切换
$("._nav_tab li").on("click",function(){
   $(this).addClass("_select").siblings().removeClass("_select");
});
//顶部悬浮
window.onscroll = function() {
    var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (_scrollTop > 710) {
        $(".info_nav ._phone_code").show();
        $(".info_nav").css({"position":"fixed","top":"0"})
    }else {
        $(".info_nav ._phone_code").hide();
        $(".info_nav").css({"position":"absolute"})
    }
    if(_scrollTop>0){
        $(".to_top").show();
    }else if(_scrollTop==0){
        $(".to_top").hide();
    }
};
$(".info_nav ._phone_code").on("mouseover",function(){
    $(this).find("a").css({"background-position":"110px 8px","background-color":"#f5f5f5"});
    $(this).on("mouseout",function(){
        $(this).find("a").css({"background-position":"110px -38px","background-color":""});
    })
});
//底部轮播部分
$(function(){
    var now=0;
    $("._best_tab li").on("mouseover",function(){
        now=$(this).index();
        lunbo();
    });
    //自动轮播
    var tab = setInterval(next, 3000);
    $("._best_show ul").mouseover(function(){
        clearInterval(tab);
    });
    $("._best_tab li").mouseover(function(){
        clearInterval(tab);
    });
    $("._best_show ul").mouseout(function(){
        tab = setInterval(next, 3000);
    });
    $("._best_tab li").mouseout(function(){
        tab = setInterval(next, 3000);
    });
    function lunbo(){
        $("._best_show ul").stop(true).animate({"left":-780*now},"fast");
        $("._best_tab li").eq(now).css({"background-color":"#fff"}).siblings().css({"background-color":""});
    }
    function next(){
        now++;
        if(now>=$("._best_show ul li").size()-1){
            $("._best_tab li").eq(0).css({"background-color":"#fff"}).siblings().css({"background-color":""});
            $("._best_show ul").animate({"left":-780*now},"fast",function(){
                now = 0;
                $("._best_show ul").css({"left":-now*-780})
            });
        }else{
            lunbo();
        }
    }
});
//加入购物车
$(function(){
   $("._add_to_car a").on("click",function(){
       var d=new Date();
       d.setDate(d.getDate()+1);
       setCookie(dataid,dataid);
       setCookie("num"+dataid,$("._promptNum input").val());
   })
});