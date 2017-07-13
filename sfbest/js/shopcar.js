/**
 * Created by Administrator on 16-8-10.
 */
$(function(){
    var arr_cookie=getAllCookie();
    var arr_pass=[];
    var arr_result=[];
    var reg=/^\d+$/ig;
    for(var i=0;i<arr_cookie.length;i++){
        arr_pass=arr_cookie[i];
        if(arr_pass[0].match(reg)){
            arr_result.push(arr_pass[1]);
        }
        arr_pass=[];
    }
    if(arr_result.length>0){
        $(".goods_none").hide();
        $(".cart_detial").show();
        $("._count_price").show();
    }else{
        $(".goods_none").show();
        $("._count_price").hide();
        $(".cart_detial").hide();
    }
    $.ajax({
        url:"shopcar.json",
        dataType:"json",
        success:function(data){
            var str_cart_content="";
            var arr_weight=[];
            var arr_price=[];
            var djson=data.data;
            for(var i=0;i<arr_result.length;i++){
                for(var j in djson){
                    if(arr_result[i]==djson[j].id){
                        var sum = getCookie("num"+djson[j].id);
                        arr_weight.push(djson[j].weight);
                        arr_price.push(djson[j].price);
                        str_cart_content+="<li>";
                        str_cart_content+="<div class='_select'><input goodsID='"+arr_result[i]+"' class='_select_btn' type='checkbox' checked='checked' /></div>";
                        str_cart_content+="<div class='_product'><a class='_aimg' goodsID='"+arr_result[i]+"' href='information.html'><img src='"+djson[j].simg+"' /></a><a class='_aname' href='information.html'>"+djson[j].name+"</a></div>";
                        str_cart_content+="<div class='_price'><span>"+"￥"+djson[j].price+"</span></div>";
                        str_cart_content+="<div class='_benefit'>&nbsp;</div>";
                        str_cart_content+="<div class='num_box'><div class='_num'><a class='_reduce' href='javascript:void(0);'>-</a><input type='text' value='"+sum+"' /><a class='_add' href='javascript:void(0);'>+</a></div></div>";
                        str_cart_content+="<div class='_weight'></div>";
                        str_cart_content+="<div class='_count'>￥<span></span></div>";
                        str_cart_content+="<div class='_stock'>"+djson[j].stock+"</div>";
                        str_cart_content+="<div class='_handle'><a href='#'>收藏</a><a class='_del' href='#'>删除</a></div>";
                        str_cart_content+="</li>";
                    }
                }
            }
            //购物车加载商品信息
            $(".cart_content").html(str_cart_content);
            //数量加减
            $(".cart_content ._num ._add").on("click",function(){
                var num_input=Number($(this).parent().find("input").val());
                    num_input+=1;
                $(this).parent().find("input").val(num_input);
                count_list();
            });
            $(".cart_content ._num ._reduce").on("click",function(){
                var num_input=Number($(this).parent().find("input").val());
                num_input-=1;
                if(num_input<1){
                    num_input=1;
                }
                $(this).parent().find("input").val(num_input);
                count_list();
            });
            $(".cart_content ._num input").on("blur",function(){
                count_list();
            });
            //列表内删除
            $(".cart_content ._handle ._del").on("click",function(){
                removeCookie($(this).parent().siblings("._product").find("._aimg").attr("goodsID"));
                window.open("shopcar.html","_parent");
            });
            //选择按钮
            $(".cart_content ._select input").on("click",function(){
                if(!$(this).prop("checked")){
                    $(".cart_top ._select input").prop("checked",false);
                    $(".cart_yx .yx_btn input").prop("checked",false);
                }else{
                    for(var i in $(".cart_content ._select input")){
                        if(!$(".cart_content ._select input").eq(i).prop("checked")){
                            break;
                        }else{
                            continue;
                        }
                    }
                    $(".cart_top ._select input").prop("checked",true);
                    $(".cart_yx .yx_btn input").prop("checked",true);
                }
                count_list();
            });
            $(".cart_top ._select input").on("click",function(){
                $(".cart_yx .yx_btn input").prop("checked",$(this).prop("checked"));
                for(var i in $(".cart_content ._select input")){
                    $(".cart_content ._select input").eq(i).prop("checked",$(this).prop("checked"))
                }
                count_list();
            });
            $(".cart_yx .yx_btn input").on("click",function(){
                $(".cart_top ._select input").prop("checked",$(this).prop("checked"));
                for(var i in $(".cart_content ._select input")){
                    $(".cart_content ._select input").eq(i).prop("checked",$(this).prop("checked"))
                }
                count_list();
            });
            //计算
            function count_list(){
                var sum_weight=0;
                var sum_price=0;
                for(var i=0;i<$(".cart_content li").size();i++){
                    var str_val=($(".cart_content ._num input").eq(i).val());
                    $(".cart_content ._weight").eq(i).text((arr_weight[i]*str_val).toFixed(2)+"kg");
                    $(".cart_content ._count").eq(i).find("span").text((arr_price[i]*str_val).toFixed(2));
                    if($(".cart_content ._select input").eq(i).is(":checked")){
                        sum_weight+=arr_weight[i]*str_val;
                        sum_price+=arr_price[i]*str_val;
                    }else{
                        sum_price+=0;
                        sum_weight+=0;
                    }
                    $("._count_right ._all_weight").text(sum_weight.toFixed(2)+"kg");
                    $("._count_right ._all_price").text("￥"+sum_price.toFixed(2));
                    $("._count_price span").text("￥"+sum_price.toFixed(2));
                }
            }
            count_list();
            //清空购物车
            $("._count_btn ._dele_all").on("click",function(){
                for(var i=0;i<arr_cookie.length;i++){
                    arr_pass=arr_cookie[i];
                    if(arr_pass[0].match(reg)){
                        removeCookie(arr_pass[1]);
                    }
                    arr_pass=[];
                }
                window.open("shopcar.html","_parent");
            });
            //删除选中
            $("._count_btn ._dele").on("click",function(){
                for(var i=0;i<$(".cart_content li").size();i++){
                    if($(".cart_content ._select input").eq(i).is(":checked")){
                        removeCookie($(".cart_content ._select input").eq(i).attr("goodsID"));
                        window.open("shopcar.html","_parent");
                    }
                }
            });
        }
    });
});
