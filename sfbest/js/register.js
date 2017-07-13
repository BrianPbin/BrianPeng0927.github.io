/**
 * Created by Administrator on 16-8-5.
 */
//个人企业用户注册切换
$(".main_top ._user li").click(function(){
    $(this).addClass("_select").siblings().removeClass("_select");
    $(this).removeClass("_unselect").siblings().addClass("_unselect");
});
$(".main_top ._user li").eq(0).click(function(){
    $("._personal").show();
    $("._business").hide();
});
$(".main_top ._user li").eq(1).click(function(){
    $("._personal").hide();
    $("._business").show();
});

//注册验证
$(function(){
	var reg;
	var span;
    var warning;
    var em;
    var str;
    var flag1=false;
    var flag2=false;
    var flag3=false;
    var flag4=false;
    var flag5=true;
    //用户名
    $("._user .input_con input").on("focus",function(){
        span=$(this).parent();
        em=span.find("em");
        warning=span.parent().find("._prompt");
        em.hide();
        warning.text("请输入您的手机号码").css({"color":"#666"}).show();
        span.css({"border-color":"#6e9b0c"});
        reg=/^1[3|4|5|7|8]\d{9}$/ig;
        $(this).on("blur",function(){
            str=$(this).val();
            if(str==""){
                warning.hide();
                em.hide();
                span.css({"border-color":"#cdcdcd"});
            }else if(str.match(reg)){
                warning.hide();
                em.show();
                span.css({"border-color":"#cdcdcd"});
                flag1=true;
            }else if(!str.match(reg)){
                warning.text("请输入正确的手机号码").css({"color":"red"}).show();
                em.hide();
                span.css({"border-color":"red"});
            }
        })
    });
    //密码
    $("._password .input_con input").on("focus",function(){
        var level=$("._rank span");
        reg=/^\w{6,20}$/ig;//6-20位
        var reg1=/^\d+$/ig;//数字
        var reg2=/^[a-z]+$/ig;//字母
        var reg3=/^[_]+$/ig;//下划线
        var reg4=/^.{0,5}$/ig;//0-5位任意字符
        var reg5 = /[_]+/ig;
        var reg6 = /[0-9]+/ig;
        var reg7 = /[a-zA-Z]+/ig;
        //弱：纯数字，纯字母，纯下划线
        //reg1||reg2||reg3
        //中：字母+数字，字母+下划线，数字+下划线
        //
        //reg5&&reg6||reg5&&reg7||reg6&&reg7
        //强：字母+数字+下划线
        // ^(\d+[a-z]+\_+)$
        //reg5&&reg6&&reg7
        span=$(this).parent();
        em=span.find("em");
        warning=span.parent().find("._prompt");
        em.hide();
        warning.text("6-20位字符，可使用字母、数字、下划线。不建议使用纯数字或字母组合。").css({"color":"#666","line-height":"18px"}).show();
        span.css({"border-color":"#6e9b0c"});
        $(this).on("blur",function(){
            str=$(this).val();
            if(str==""){
                warning.hide();
                em.hide();
                span.css({"border-color":"#cdcdcd"});
            }else if(!str.match(reg)){
                warning.text("密码只能为6-20位数字字母下划线组合").css({"color":"red","line-height":"36px"}).show();
                em.hide();
                span.css({"border-color":"red"});
            }else if(str.match(reg)){
                em.show();
                span.css({"border-color":"#cdcdcd"});
                flag2=true;
                if(str.match(reg1)||str.match(reg2)||str.match(reg3)){
                    warning.text("密码太简单，建议使用数字、字母下划线组合").css({"color":"#666","line-height":"18px"}).show();
                }else{
                    warning.hide();
                }
				if(str==$("._confirm .input_con input").val()){
					flag3=true;
				}else{
					flag3=false;
				}
            }
        });
        $(this).on("keyup",function(){
            str=$(this).val();
            if(str.match(reg4)){
                em.hide();
                warning.hide();
                span.css({"border-color":"#cdcdcd"});
                level.each(function(){
                    $(this).css({"background":"#c4c4c4"});
                })
            }else if(!str.match(reg)){
                em.hide();
                warning.text("密码只能为6-20位数字字母下划线组合").css({"color":"red","line-height":"36px"}).show();
                span.css({"border-color":"red"});
            }else if(str.match(reg)){
                em.show();
                span.css({"border-color":"#cdcdcd"});
                if(str.match(reg5)&&str.match(reg6)&&str.match(reg7)){
                    level.each(function(){
                        $(this).css({"background":"#f79100"});
                    });
                    warning.hide();
                }else if(str.match(reg5)&&str.match(reg6)||str.match(reg5)&&str.match(reg7)||str.match(reg6)&&str.match(reg7)){
                    level.eq(0).css({"background":"#f79100"});
                    level.eq(1).css({"background":"#f79100"});
                    level.eq(2).css({"background":"#c4c4c4"});
                    warning.hide();
                }else if(str.match(reg1)||str.match(reg2)||str.match(reg3)){
                    level.eq(0).css({"background":"#f79100"});
                    level.eq(1).css({"background":"#c4c4c4"});
                    level.eq(2).css({"background":"#c4c4c4"});
                    warning.text("密码太简单，建议使用数字、字母下划线组合").css({"color":"#666","line-height":"18px"}).show();
                }
            }
        })
    });
    //确认密码
    $("._confirm .input_con input").on("focus",function(){
        span=$(this).parent();
        em=span.find("em");
        warning=span.parent().find("._prompt");
        em.hide();
        warning.text("请再次输入密码").css({"color":"#666"}).show();
        span.css({"border-color":"#6e9b0c"});
        $(this).on("blur",function(){
            str=$(this).val();
            if(str==""){
                em.hide();
                warning.hide();
                span.css({"border-color":"#c4c4c4"});
            }else if(str==$("._password .input_con input").val()){
                em.show();
                warning.hide();
                flag3=true;
                span.css({"border-color":"#c4c4c4"});
            }else{
                em.hide();
				flag3=false;
                warning.text("两次密码输入不一致，请重新输入").css({"color":"red"}).show();
                span.css({"border-color":"red"});
            }
        })
    });
    function showCode(){
        var arrCode=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var sum="";
        for(var i=0;i<4;i++){
            sum+=arrCode[Math.floor(Math.random()*arrCode.length)];
        }
        $("._code ._show").text(sum);
    }
    showCode();
    //验证码
    $("._code .input_con input").on("focus",function(){
        span=$(this).parent();
        em=span.find("em");
        warning=span.parent().find("._prompt");
        em.hide();
        warning.text("请输入验证码").css({"color":"#666"}).show();
        span.css({"border-color":"#6e9b0c"});
        $(this).on("blur",function(){
            str=$(this).val();
            if(str==""){
                em.hide();
                warning.hide();
                span.css({"border-color":"#c4c4c4"});
            }else if(str==$("._code ._show").text()){
                em.show();
                warning.hide();
                flag4=true;
                span.css({"border-color":"#c4c4c4"});
            }else{
                em.hide();
                $(this).val("");
                warning.text("网站验证码不正确").css({"color":"red"}).show();
                span.css({"border-color":"red"});
                showCode();
            }
        });
    });
    $("._code ._tab").on("click",function(){
        showCode();
    });
    $("._code ._show").on("click",function(){
        showCode();
    });
    //同意协议
    var _agreement=document.getElementsByClassName("_agreement")[0];
    var agree=_agreement.getElementsByTagName("input")[0];
    agree.onclick=function(){
        if(agree.checked==false){
            $("._agreement ._prompt").css({"display":"block","color":"red"});
            flag5=false;
        }else{
            $("._agreement ._prompt").css({"display":"none"});
            flag5=true;
        }
    };
    $("._submit a").on("click",function(){
        if(flag1&&flag2&&flag3&&flag3&&flag4&&flag5){
            var d=new Date();
            d.setFullYear(d.getFullYear()+1);
            setCookie("username",$("._user .input_con input").val());
            setCookie("password",$("._password .input_con input").val());
            if(confirm("注册成功，是否跳转到登录页面？")){
                window.open("login.html")
            }else{

            }
        }else{
            if(flag1==false){
                $("._user").find("._prompt").text("请输入正确的手机号码").css({"color":"red"}).show();
                $("._user .input_con").find("em").hide();
                $("._user .input_con").css({"border-color":"red"});
            }else if(flag2==false){
                $("._password").find("._prompt").text("请输入登录密码").css({"color":"red","line-height":"18px"}).show();
                $("._password .input_con").find("em").hide();
                $("._password .input_con").css({"border-color":"red"});
            }else if(flag3==false){
                $("._confirm").find("._prompt").text("请再次输入密码").css({"color":"red"}).show();
                $("._confirm .input_con").find("em").hide();
                $("._confirm .input_con").css({"border-color":"red"});
            }else if(flag4==false){
                $("._code").find("._prompt").text("请输入验证码").css({"color":"red"}).show();
                $("._code .input_con").find("em").hide();
                $("._code .input_con").css({"border-color":"red"});
            }else if(flag5==false){
                $("._agreement").find("._prompt").text("请阅读并同意注册协议").css({"color":"red"}).show();
            }
        }
    });
});



