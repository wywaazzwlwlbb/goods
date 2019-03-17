class Car{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;

        // 1.拿总数据
        this.load()
        // 5.用事件委托给删除按钮绑定事件
        this.addEvent()
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.res = res;
                // 2.拿cookie的数据
                // that.getCookie()
                // this.goods = res[0];
                // 3.渲染页面
                 that.display()
            }
        })
    }
    // getCookie(){
    //     this.goods = JSON.parse($.cookie("goods"));
    //     // 3.渲染页面
    //     this.display()
    // }
    display(){
        var str = "";
        // 4.遍历总数据和cookie的数据，渲染页面
        for(var i=0;i<this.res.length;i++){
            // for(var j=0;j<this.goods.length;j++){
                // if(this.goods[j].id === this.res[i].goodsId){
                    str += `<tr data-id="${this.res[i].goodsId}">
                                <td><img src="${this.res[i].src1}"/></td>
                                <td>${this.res[i].name1}</td>
                                <td>${this.res[i].price1}</td>
                                <td><input type="number" id="num" value="${this.res[i].Num}" min=1></td>
                                <td><em class = "del">删除</em></td>
                            </tr>`
                // }
            // }
        }
        this.cont.html(str);
    }
    addEvent(){
        var that = this;
        this.cont.on("click","em",function(){
            // 6-1.触发em的点击事件时，先存点击元素的id，删DOM，根据id删cookie
            that.id = $(this).parent().parent().attr("data-id");
            $(this).parent().parent().remove();
            var obj = {
                goosid:that.id   //01为goodsid
            };
            $.ajax({
                type: "POST",
                url: "http://47.103.0.232:3000/admin/details/del_good",
                data: obj,
                dataType: "text",
                success: function (msg) {
                    alert(msg)
                }
            });
            // that.setCookie(function(index){
            //     that.goods.splice(index,1)
            // })
        })
        this.cont.on("input","#num",function(){
            // 6-2.触发input的input事件时，先存点击元素的id，再存value，根据id改cookie的value
            that.id = $(this).parent().parent().attr("data-id");
            that.num = $(this).val();
            var obj = {
                goosid:that.id,
                num:that.num
                //01为goodsid
            };
            $.ajax({
                type: "POST",
                url: "http://47.103.0.232:3000/admin/details/uptal_good",
                data: obj,
                dataType: "text",
                success: function (msg) {
                    alert(msg)
                }
            });
            // that.setCookie(function(index){
            //     that.goods[index].num = that.num;
            // })
        })
    }
//     setCookie(cb){
//         // 7.修改cookie，可以删，可以改，取决于回调函数中怎么做
//         for(var i=0;i<this.goods.length;i++){
//             if(this.goods[i].id == this.id){
//                 cb(i)
//             }
//         }
//         // 8.不管如何都要将cookie设置回去，因为上面所有操作，都只是在操作数组
// //      $.cookie("goods",JSON.stringify(this.goods))
//         document.cookie="goods="+JSON.stringify(this.goods);
//     }
}

export default {Car}
//new Car({
//  cont:$("tbody"),
//  url:"data/active.json"
//})