class Details{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;

        // 1.拿总数据
        this.load()
    }
    // load(){
    //     var that = this;
    //     $.ajax({
    //         url:this.url,
    //         success:function(res){
    //             that.res = res;
    //             // 2.拿cookie的数据
    //             that.getCookie()
    //         }
    //     })
	// }
	load(){
	var  goods=window.location.href.split('?')[1]
	console.log(window.location.href);
    var that = this;
    var obj = {
        name:goods   //01为goodsid
    };
    $.ajax({
        type: "POST",
        url: this.url,
        data: obj,
        dataType: "json",
        success: function (msg) {
            that.res = msg;
            // 2.拿cookie的数据
			// that.getCookie()
			console.log(msg)
			this.good = msg;
			    // 3.渲染页面
			    console.log(this.good)
			    that.display()
        }
	});
	// this.display()
}
    // getCookie(){
    //     this.good = JSON.parse($.cookie("good"));
    //     // 3.渲染页面
    //     console.log(this.good)
    //     this.display()
    // }
    display(){
        var str = "";
        // 4.遍历总数据和cookie的数据，渲染页面
        for(var i=0;i<this.res.length;i++){
            // for(var j=0;j<this.good.length;j++){
                // if(this.good[this.good.length-1].id == this.res[i].goodsId){
                    str = `<div class="l" index="${this.res[i].goodsId}">
		    		<div class="c-l d1">
		    			<img src="${this.res[i].src}"/>
		    		</div>
		    	</div>
	    	    <div class="r">
	    	    	<div class="r-t">
	    	    		<h1>${this.res[i].h1}</h1>
	    	    		<h4>${this.res[i].h4}</h4>
	    	    	</div>
	    	    	<div class="img">
	    	    		<img src="https://gfs10.gomein.net.cn/T11hZvBvbj1RCvBVdK.png"/>
	    	    	</div>
	    	    	<div class="price">
	    	    		<span class="s4">团  购  价</span>
	    	    		<span class="s5"><em>￥</em>${this.res[i].em}</span>
	    	    		<del>${this.res[i].del}</del>
	    	    		<span class="s6">降价通知</span>
	    	    	</div>
	    	    	<div class="main">
	    	    		<div class="m-t">
	    	    			<div class="tese">
	    	    				<p class="p2">特色</p>
	    	    				<span class="t">
	    	    					<em></em>
	    	    					<b class="b1"></b>
	    	    					<a href="">以旧换新</a>
	    	    				</span>
	    	    				<span class="t">
	    	    					<em></em>
	    	    					<b class="b2"></b>
	    	    					<a href="">管家服务</a>
	    	    				</span>
	    	    				<span class="t">
	    	    					<em></em>
	    	    					<b class="b3"></b>
	    	    					<a href="">国美智能</a>
	    	    				</span>
	    	    			</div>
	    	    			<div class="tese">
	    	    				<p class="p2">服务</p>
	    	    			    <span class="s7">
	    	    			    	由<b>
	    	    			    		国美
	    	    			    	</b>
	    	    			    	安排厂商配送并提供保障监管。
	    	    			    </span>
	    	    			</div>
	    	    			<div class="color">
	    	    				<p class="p2">颜色</p>
	    	    			    <span class="s7">
	    	    			    	${this.res[i].s}
	    	    			    </span>
	    	    			</div>
	    	    		</div>
	    	    	</div>
	    	    	<div class="car">
	    	    		<a href="#" class="a1">加入购物车</a>
	    	    		<a href="" class="a2">
	    	    			<b></b>
	    	    			手机下单
	    	    			<p class="ma">
	    	    				<img src="https://ss.gome.com.cn/item/v1/qr/verify/9140074074/1130573685/flag/item"/>
	    	    			</p>
	    	    		</a>
	    	    	</div>
	    	    </div>`
                // }
            // }
        }
        this.cont.html(str);
    }
}

new Details({
    cont:$(".cont"),
	url:"http://47.103.0.232:3000/admin/details/get_details"
	
	// $.ajax({
	// 	type: "POST",
	// 	url: "http://localhost:3000/admin/details/get_details",
	// 	data: obj,
	// 	dataType: "json",
	// 	success: function (msg) {
	// 		console.log(msg);
	// 	}
})