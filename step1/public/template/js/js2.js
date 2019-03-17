class Tab{
        constructor(){
            this.li = $(".l6");
            this.l = $(".l9");
            this.l10 = $(".l10");
            this.l11 = $(".l11");
            this.l12 = $(".l12");
            this.ul = $(".u8");
            this.u9 = $(".u9");
            this.u10 = $(".u10");
            this.u11 = $(".u11");
            this.box = $(".box");
            this.d = $(".d")
            this.init()
        }
        init(){
            var that = this;
            this.li.on("mouseover",function(){
                that.li.removeClass("active").eq($(this).index()).addClass("active");
                that.box.stop().hide().eq($(this).index()).stop().show();
            })
            this.box.on("mouseout",function(){
            	that.li.removeClass("active");
                that.box.stop().hide()
            })
            this.l.on("mouseover",function(){
                that.l.removeClass("active").eq($(this).index()).addClass("active");
                that.ul.stop().hide().eq($(this).index()).stop().show();
            })
            this.l10.on("mouseover",function(){
                that.l10.removeClass("active").eq($(this).index()).addClass("active");
                that.u9.stop().hide().eq($(this).index()).stop().show();
            })
            this.l11.on("mouseover",function(){
                that.l11.removeClass("active").eq($(this).index()).addClass("active");
                that.u10.stop().hide().eq($(this).index()).stop().show();
            })
            this.l12.on("mouseover",function(){
                that.l12.removeClass("active").eq($(this).index()).addClass("active");
                that.u11.stop().hide().eq($(this).index()).stop().show();
            })
        }
    }

new Tab();


 $(".cont").banner({
        items:$(".cont").children(".imgbox").children("img"),
        left:$(".cont").children(".btns").children("#left"),
        right:$(".cont").children(".btns").children("#right"),
        list:$(".cont").children(".list").children("span"),
        moveTime:1000,
        autoPlay:true,
        delayTime:3000,
    });

$("#floor").find("ul").children("li").click(function(){
        		$('html').stop().animate({
        			scrollTop:$(".tel").eq($(this).index()).offset().top
        		})
        	})
