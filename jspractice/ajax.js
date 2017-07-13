// JavaScript Document
var ajax = {
    post: function (url,data,func) {
        var xhr = null;
        if(window.ActiveXObject){//兼容
            xhr = new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP") ;//ie6
        }else{
            xhr = new XMLHttpRequest();
        }
        xhr.open("post",url,true);//先必须调用 open()方法,接受三个参数
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');//POST 请求需要使用 XHR 来模仿表单提交
        xhr.send(data);//进行发送请求,接受一个参数
        xhr.onreadystatechange = function () {//使用异步调用的时候 ，需要触发 readystatechange 事件
            if(xhr.status == 200 && xhr.readyState==4){//检测 readyState属性,status 属性
                var str = xhr.responseText;//返回的文本
                func(str);//回调处理文本
            }
        }
    },
	get: function (url, func) {
        var xhr = null;
        if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xhr = new XMLHttpRequest();
        }
        xhr.open("get", url, "true");//这里已经准备好发送了
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var str = xhr.responseText;
                //回调
                func(str);
            }
        }
    }
}

