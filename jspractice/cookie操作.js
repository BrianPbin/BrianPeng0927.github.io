/**
 * Created by Administrator on 16-7-11.
 */
/*设置cookie 输入时需注意加引号*/
/*
 name=value; expires=date; path=path; domain=somewhere.com; secure
 中括号是可选，name=value 是必选。
*/
function setCookie(name,value,enpires,path,domain,secure){
    var sum=encodeURIComponent(name)+"="+encodeURIComponent(value);//name=value编码写入
    if(enpires instanceof Date){//失效时间
        sum+=";enpires="+enpires;//拼接
    }
    if(path){//访问路径
        sum+=";path="+path;
    }
    if(domain){//访问域名
        sum+=";domain="+domain;
    }
    if(secure){//安全设置
        sum+=";secure";
    }
    document.cookie=sum;
}
/*获取cookie 获取时需注意加引号*/
function getCookie(name){
    var str=decodeURIComponent(document.cookie);//解码
    var reg=/\s*;\s*/ig;
    var reg2=/\s*=\s*/ig;
    var arr=str.split(reg);//[水果1=5,enpires=enpires,path=path]
    for(var i=0;i<=arr.length-1;i++){
        var arr2=arr[i].split(reg2);//[[水果1,5],[enpires,enpires],[path,path]]
        if(arr2[0]==name){
            return arr2[1];//value值
        }else{
            continue;
        }
        return "";
    }
}/*移除Cookie*/
function removeCookie(name) {
    document.cookie = name+"=a;expires="+new Date(0);//cookie保存时间为0则不会存在
}
/*
    获取所有cookie
   1."水果1=5;水果2=3;水果3=7;" 2.[水果1=5,水果2=3,水果3=7] 3. [[水果1,5],[水果2,3],[水果3,7]]
*/
function getAllCookie(){
    var str=decodeURIComponent(document.cookie);//"水果1=5;水果2=3;水果3=7;"
    var reg=/\s*;\s*/ig;
    var reg2=/\s*=\s*/ig;
    var arr=str.split(reg);//[水果1=5,水果2=3,水果3=7]
    var result=[];
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split(reg2);//[[水果1,5],[水果2,3],[水果3,7]]
        result.push(arr2);
    }
    return result;
}
