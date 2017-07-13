// JavaScript Document
	onload=function(){
		var show=document.getElementById('show');
			inputs=document.getElementsByTagName('input');
			b1=false;//验证通过则变为true
			b2=false;
			b3=false;
			b4=false;
			b5=false;
			b6=false;
		/*用户名称只能包含数字、字母、下划线，长度不小于6位*/
		inputs[0].onblur=function(){
				reg=/^[\w]{6,}$/ig;
				str=inputs[0].value;
				if(!reg.test(str)){
					show.style.display='block';
					show.innerHTML="用户名不合法,请重新输入";
					b1=false;
					}else{
						show.style.display='none';
						b1=true;
						}
			}
		/*安全级别（低[红色]、中[橙色]、高[绿色]）, 其中低级别为:密码长度在6-10, 中级别为:密码长度11-15, 高级别为:密码长度16-20，安全级别根据登录密码的不同实时变化。*/
		var spans=document.getElementsByTagName('span');
		inputs[2].onkeyup=function(){
			var reg1=/^.{6,10}$/ig;
				reg2=/^.{11,15}$/ig;
				reg3=/^.{16,20}$/ig;
				str=inputs[2].value;
			if(reg1.test(str)){
				for(var i=0;i<=spans.length-1;i++){
					spans[i].style.background="";
					spans[i].innerHTML="";
					}
				spans[0].style.background="red";
				spans[0].innerHTML="低";
				show.style.display="none";
				}
			else if(reg2.test(str)){
				for(var i=0;i<=spans.length-1;i++){
					spans[i].style.background="";
					spans[i].innerHTML="";
					}
				spans[1].style.background="orange";
				spans[1].innerHTML="中";
				show.style.display="none";
				}
			else if(reg3.test(str)){
				for(var i=0;i<=spans.length-1;i++){
					spans[i].style.background="";
					spans[i].innerHTML="";
					}
				spans[2].style.background="green";
				spans[2].innerHTML="高";
				show.style.display="none";
				}
		    }
		/*验证密码是否合法*/
        inputs[1].onblur=function() {
            var reg1=/^.{6,10}$/ig;
                reg2=/^.{11,15}$/ig;
                reg3=/^.{16,20}$/ig;
                pwd = inputs[1].value;
            if (!reg1.test(pwd) && !reg2.test(pwd) && !reg3.test(pwd)) {
                for (var i = 0; i <= spans.length - 1; i++) {
                    spans[i].style.background = "";
                    spans[i].innerHTML = "";
                }
                show.style.display = "block";
                show.innerHTML = "密码输入不合法";
                b2 = false;
            } else {
                show.style.display = "none";
                b2 = true;
            }
        }
        /*两次密码输入必须一致*/
		inputs[2].onblur=function(){
			if(inputs[2].value==inputs[1].value){
				show.style.display="none";
				b3=true;
				}else{
				show.style.display="block";
				show.innerHTML="两次密码输入不一致";
				b3=false;
				}
			}
		/*电子邮箱验证，匹配Email地址:\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)**/
		inputs[3].onblur=function(){
			var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ig;
				str=inputs[3].value;
			if(!reg.test(str)){
				show.style.display='block';
				show.innerHTML="电子邮箱输入格式错误";
				b4=false;
				}else{
					show.style.display='none';
					b4=true;
					}
			}
		/*手机号码验证：开头数字为1，11位数字*/
		inputs[5].onblur=function(){
			var reg=/^1[0-9]{10}$/ig;
				str=inputs[5].value;
			if(!reg.test(str)){
				show.style.display='block';
				show.innerHTML="手机号码输入错误";
				b5=false;
				}else{
					show.style.display='none';
					b5=true;
					}
			}
		/*点击获取4位数字验证码*/
		var test=document.getElementById('test');
		test.onclick=function(){
			var arr=['0','1','2','3','4','5','6','7','8','9'];
				sum="";
			for(var i=1;i<=4;i++){
				var a=Math.floor(Math.random()*arr.length);
				sum+=arr[a];
				}
			test.innerHTML=sum;
			}
		/*验证 输入验证码*/
		inputs[6].onblur=function(){
			if(Number(inputs[6].value)==Number(test.innerHTML)){
				show.style.display='none';
				b6=true;
				}else{
				show.style.display='block';
				show.innerHTML="验证码输入错误";
				b6=false;
					}
			}
		/*所有的验证都通过后，点击注册表单才可以点击提交，否则点击无效果*/	
		inputs[7].onclick=function(){
			if(b1&&b2&&b3&&b4&&b5&&b6){//全为true则表示全部验证通过
                /*十天免登陆*/
                if(inputs[8].checked){
                    var d = new Date();
                    d.setDate(d.getDate()+10);
                    setCookie("username",inputs[0].value,d);
                    setCookie("pwd",inputs[1].value,d);
                }
                window.open("success.html");
			}else{
               show.innerHTML = "表单有错误，请检查重新输入";
                show.style.display="block";
            }
		}				
	}