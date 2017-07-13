/**
 * Created by Administrator on 16-8-6.
 */

//登录账号类型切换
$("._center ._type li").on("click",function(){
   $(this).addClass("_select").siblings().removeClass("_select");
    $("._show form").eq($(this).index()).show().siblings().hide();
});
//登录验证
$(function(){
    var str;
    var span;
    var em;
    var warn;
    var flag1=false;
    var flag2=false;
    var flag3=false;
    $("._list1 ._username ._input input").on("focus",function(){
        span=$(this).parent();
        em=span.find("em");
		warn=span.find("._warn");
        span.css({"border-color":"#69af05"});
		warn.hide();
        $(this).on("blur",function(){
			str=$(this).val();
            span.css({"border-color":"#cdcdcd"});
			if(str==getCookie("username")){
				flag1=true;
			}else{
				flag1=false;	
			}
        });
        $(this).on("keyup",function(){
            str=$(this).val();
            if(str!=""){
                em.css({"background":"url(img/icon.jpg) no-repeat center","cursor":"pointer"})
            }else{
                em.css({"background":"url(img/icon1.jpg) no-repeat center","cursor":""})
            }
            em.on("click",function(){
                span.find("input").val("");
                em.css({"background":"url(img/icon1.jpg) no-repeat center","cursor":""})
            })
        });
    });
	$("._list1 .password ._input input").on("focus",function(){
        span=$(this).parent();
        em=span.find("em");
		warn=span.find("._warn");
		warn.hide();
        span.css({"border-color":"#69af05"});
        $(this).on("blur",function(){
			str=$(this).val();
            span.css({"border-color":"#cdcdcd"});
			if(str==getCookie("password")){
				flag2=true;
			}else{
				flag2=false;	
			}
        });
        $(this).on("keyup",function(){
            str=$(this).val();
            if(str!=""){
                em.css({"background":"url(img/icon.jpg) no-repeat center","cursor":"pointer"})
            }else{
                em.css({"background":"url(img/icon2.jpg) no-repeat center","cursor":""})
            }
            em.on("click",function(){
                span.find("input").val("");
                em.css({"background":"url(img/icon2.jpg) no-repeat center","cursor":""})
            })
        });
    });
	$("._list1 ._code input").on("focus",function(){
		warn=$("._list1 ._code ._warn");
		warn.hide();
        $(this).css({"border-color":"#69af05"});
        $(this).on("blur",function(){
			str=$(this).val();
            $(this).css({"border-color":"#cdcdcd"});
			if(str==$("._list1 ._code span").text()){
				flag3=true;
			}else{
				flag3=false;
			}
        });
	});
	function showCode(){
        var arrCode=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var sum="";
        for(var i=0;i<4;i++){
            sum+=arrCode[Math.floor(Math.random()*arrCode.length)];
        }
        $("._list1 ._code span").text(sum);
    }
	$("._list1 ._code span").on("click",function(){
		showCode();
	});
	$("._list1 ._submit a").on("click",function(){
		if(flag1&&flag2&&flag3){
			window.open("index.html");
		}else if(flag3==false){
			$("._list1 ._code input").css({"border-color":"red"});
			$("._list1 ._code ._warn").show().text("验证码有误");
		}else if(flag1==false||flag2==false){
			$("._list1 .password ._input ._warn").show().text("账户名或密码有误");
			$("._list1 .password ._input").css({"border-color":"red"});
		} 
		if($("._list1 ._username ._input input").val()==""){
			$("._list1 ._username ._input ._warn").show().text("请输入账户名");
			$("._list1 ._username ._input").css({"border-color":"red"});
		}else if($("._list1 .password ._input input").val()==""){
			$("._list1 .password ._input ._warn").show().text("请输入密码");
			$("._list1 .password ._input").css({"border-color":"red"});
		}else if($("._list1 ._code input").val()==""){
			$("._list1 ._code input").css({"border-color":"red"});
			$("._list1 ._code ._warn").show().text("请输入验证码");
		}
	})
});