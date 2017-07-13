function getStyle(obj, attr){
	if(obj.currentStyle)
		return obj.currentStyle[attr];
	else
		return getComputedStyle(obj, false)[attr];
}
function startMove(obj, json, fnEnd){
	clearInterval(obj.timer);//防止多次执行
	obj.timer=setInterval(function(){//开启定时器，每一个对象上有一个定时器
		var flag=true;//所有的属性，都到了目标值
		//{width:300, height:40}
		for(var i in json){
			var attr=i;//表示属性
			var iTarget=json[i];//表示目标值
			
			var v=getStyle(obj, attr);//获取当前样式的值
			//console.log(v);
			if(attr=='opacity')
				v=Math.round(v*100);
			else	
				v=parseInt(v);//取整数
			//计算速度
			var speed=(iTarget-v)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//小数时取整
			if(v==iTarget){//如果当前样式的值到达目标点
				
			}else{
				flag=false;//其中的某个属性没有达到目标点时，flag=假
				if(attr=='opacity'){
					obj.style.filter='alpha(opacity:'+(v+speed)+')';
					obj.style.opacity=(v+speed)/100;
				}else{
					obj.style[attr]=(v+speed)+'px';//样式赋值
					//console.log(attr+'='+obj.style[attr]);
				}
			}
		}
		if(flag){
			clearInterval(obj.timer);//关闭定时器
			if(fnEnd)fnEnd(obj);//执行回调函数
		}
	}, 30);//每30毫秒执行一次
}