/**
 * Created by Administrator on 16-7-18.
 */
function getStyle(obj,attr){//获取对象某种属性的属性值  obj=对象名 attr=属性
    if(obj.currentStyle){//兼容
        return obj.currentStyle[attr];//ie方法
    }else{
        return getComputedStyle(obj,false)[attr];//其他
    }
}
function move(obj,Json,fnEnd){
    clearInterval(obj.timer);//防止多次进行
    obj.timer=setInterval(function(){//开启定时器，每个对象都有一个定时器
        var flag=true;//用作判断结束定时器
        for(var i in Json){
            var attr=i;//某属性
            var iTaget=Json[i];//获得目标对象的某属性值
            var v=getStyle(obj,attr);//获得当前对象的该属性值
            if(attr=="opacity"){//opacity与其他略有不同特殊处理
                v=Math.round(v*100);
            }else{
                v=parseInt(v);//转成数字用于计算
            }
            var speed=(iTaget-v)/10;//
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//小数时取整
            if(v==iTaget){//当前对比的属性值达到目标点（不包含全部）
            }else{//某个属性值未达到目标点，继续间歇
                flag=false;//不能结束定时器
                if(attr=="opacity"){//opacity属性赋值
                    obj.style.opacity=(v+speed)/100;
                    obj.style.filter="alpha(opacity="+(v+speed)+")";
                }else{
                    obj.style[attr]=(v+speed)+"px";//属性赋值
                }
            }
        }
        if(flag){//全部属性值达到目标点，flag则不会变成false,完成运动
            clearInterval(obj.timer);// 取消定时器
            if(fnEnd){//如果回调函数存在，则执行回调函数
                fnEnd(obj);
            }
        }
    },30);
}