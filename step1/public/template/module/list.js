export class Goods{
	constructor(options){
		this.list = options.list;
		this.url = options.url;
		this.ajaxGet = options.method.ajaxGet;
        this.getCookie = options.method.getCookie;
        this.setCookie = options.method.setCookie;
		this.load();
		this.addEvent();
	}
	load(){
		var that = this;
		ajaxGet(this.url).then(function(res){
			that.res = JSON.parse(res);
			console.log(that.display());
		})
	}
	display(){
		var str = "";
		this.res.forEach(function(value){
			str += `<li class="l">
			            <a href="${value.a}?${value.goodsId}" title="${value.title1}">
	    				<img src="${value.src1}"/>
	    				<h3>${value.name1}</h3>
	    				<div class="money" index="${value.goodsId}">
	    					<span class="s1">
	    						￥
	    						<b>${value.price1}</b>
	    						<small>.00</small>
	    					</span>
	    					<p class="s2">立即购买</p>
	    				</div>
	    			</a>
	    		</li>`
		})

            console.log(str)
		this.list.innerHTML = str;
	}
	addEvent(){
		var that = this;
		this.list.addEventListener("click",function(eve){
			var e = eve || window.event;
			var target=e.target || e.srcElement;
			if(target.nodeName === "P"){
				that.id = target.parentNode.getAttribute("index");
                var obj = {
                    title1:$(target).closest('li').find('a').attr('title'),
                    src1:$(target).closest('li').find('img').attr('src'),
                    name1:$(target).closest('li').find('h3').text(),
                    price1:$(target).closest('li').find('.money').find('.s1').find('b').text(),
                    goodsId:that.id,
                    Num:1,
                };
                $.ajax({
                    type: "POST",
                    url: "http://47.103.0.232:3000/admin/details/insert_good",
                    data: obj,
                    dataType: "text",
                    success: function (msg) {
                        console.log(msg);
                    }
                });
				// that.setGoods();
				// that.setGood();
			}
		})
	}
	// setGoods(){
	// 	// var that = this;
	// 	console.log(this.res)
    //     var obj = {
    //         title1:this.res.title1,
    //         src1:this.res.src1,
    //         name1:this.res.name1,
    //         price1:this.res.price1,
    //         goodsId:this.res.goodsId,
    //         Num:1,
    //     };
    //     $.ajax({
    //         type: "POST",
    //         url: "http://localhost:3000/admin/details/insert_good",
    //         data: obj,
    //         dataType: "text",
    //         success: function (msg) {
    //             console.log(msg);
    //         }
    //     });
	// }
// 	setGood(){
//         this.good = getCookie("good")===""?[]:JSON.parse(getCookie("good"));
// 		if(this.good.length<1){
// 			this.good.push({
// 				id:this.id,
// 			})
// 		}else{
// 			this.good.push({
// 					id:this.id,
// 			})
// 		}	
// 		setCookie("good",JSON.stringify(this.good))
// 	}
}
//new Goods({
//	list:document.getElementById("list"),
//	url:"data/active.json"
//})
