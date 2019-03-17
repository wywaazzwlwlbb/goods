class Img{
        constructor(){
            this.l = $(".l1");
            this.d1 = $(".d1 img");
            this.d2 = $(".d2 img");
            console.log(this.d2)
            
            this.init()
        }
        init(){
            var that = this;
            this.l.on("mouseover",function(){
                that.l.removeClass("active").eq($(this).index()).addClass("active");
                that.d1.stop().hide().eq($(this).index()).stop().show();
                that.d2.stop().hide().eq($(this).index()).stop().show();
            })
        }
    }

new Img();