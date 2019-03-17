function Search(){
        this.txt = document.querySelector(".txt");
        this.ul = document.querySelector(".search-res");
        this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
        this.index = -1;
        this.init();
    }
    Search.prototype.init = function(){
        var that = this;
        this.txt.onkeyup = function(eve){
            var e = eve || window.event;
            var code = e.keycode || e.which;
            that.value = this.value;
            if(code != 38 && code != 40 && code != 13){
                console.log(1)
                that.load();
            }
        }
        this.txt.onblur = function(){
            that.ul.innerHTML = "";
            that.index = -1;
        }
        this.txt.onkeydown = function(eve){
            var e = eve || window.event;
            var code = e.keycode || e.which;
            if(code == 38){
                if(that.index == -1 || that.index == 0){
                    that.index = that.ul.children.length-1;
                }else{
                    that.index--
                }
                that.active()
            }
            if(code == 40){
                if(that.index == that.ul.children.length-1){
                    that.index = 0;
                }else{
                    that.index++
                }
                that.active()
            }
            if(code == 13){
                that.txt.blur()
            }
        }
    }
    Search.prototype.load = function(){
        var that = this;
        jsonp(this.url,{
            wd:this.value,
            cb:"adasd",
            callbackNameColumns:"cb"
        }).then(function(res){
            that.data = res.s;
            that.display()
        })
    }
    Search.prototype.display = function(){
        var str = "";
        for(var i=0;i<this.data.length;i++){
            str += `<li abc="${i}">${this.data[i]}</li>`;
        }
        this.ul.innerHTML = str;
        this.eveEnt()
    }
    Search.prototype.eveEnt = function(){
        var that = this;
        this.ul.onmouseover = function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "LI"){
                that.index = target.getAttribute("abc");
                that.active()
            }
        }
        this.ul.onmouseout = function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName == "LI"){
                target.style.background = "";
            }
        }
    }
    Search.prototype.active = function(){
        for(var i=0;i<this.ul.children.length;i++){
            this.ul.children[i].style.background = "";
        }
        this.ul.children[this.index].style.background = "#f8f8f8";
        this.txt.value = this.ul.children[this.index].innerHTML
    }
    new Search();