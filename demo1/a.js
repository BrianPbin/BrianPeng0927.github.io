function move(obj,targetJson,milliseconds){
    var distanceX = parseFloat(targetJson.style.left) - parseFloat(obj.style.left);
    var distanceY = parseFloat(targetJson.style.top) - parseFloat(obj.style.top);

    var id = setInterval(function () {
        var x = parseFloat(obj.style.left);
        distanceX = parseFloat(targetJson.style.left) - x;
        var y = parseFloat(obj.style.top);
        distanceY = parseFloat(targetJson.style.top) - y;
        var speedX = distanceX/10;
        var speedY = distanceY/10;
        obj.style.left = x + speedX +"px";
        obj.style.top = y + speedY +"px";

        if(obj.style.left == targetJson.style.left && targetJson.style.top == obj.style.top){
            clearInterval(id);
        }
    },milliseconds)

}