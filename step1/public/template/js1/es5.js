"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

ajaxGet("data/data.json").then(function (res) {
    json = eval(res);

    var olist = document.getElementById("list");
    var ol2 = document.getElementById("l2");
    var ol3 = document.getElementById("l3");
    var ol4 = document.getElementById("l4");
    var ol5 = document.getElementById("l5");
    var ol6 = document.getElementById("l6");
    var ol7 = document.getElementById("l7");
    var ol8 = document.getElementById("l8");
    var ol9 = document.getElementById("l9");
    var ol10 = document.getElementById("l10");
    var ol11 = document.getElementById("l11");
    var ol12 = document.getElementById("l12");
    var ol13 = document.getElementById("l13");
    var ol14 = document.getElementById("l14");
    var ol15 = document.getElementById("l15");
    var ol16 = document.getElementById("l16");
    var ol17 = document.getElementById("l17");
    console.log(olist);
    var str = "";
    for (var i = 0; i < 4; i++) {
        str += "<li class=\"l8\" id=\"list\">\n\t    \t\t\t\t\t\t<a href=\"" + json[i].a + "\" target=\"_blank\">\n\t    \t\t\t\t\t\t\t<img src=\"" + json[i].src + "\" \n\t    \t\t\t\t\t\t\t\talt=\"" + json[i].title + "\" \n\t    \t\t\t\t\t\t\t\ttitle=\"" + json[i].title + "\"/>\n\t    \t\t\t\t\t\t    <div class=\"price\">\n\t    \t\t\t\t\t\t    \t<span>" + json[i].s1 + "</span>\n\t    \t\t\t\t\t\t    \t<s>" + json[i].s2 + "</s>\n\t    \t\t\t\t\t\t    </div>\n\t    \t\t\t\t\t\t    <p class=\"name\">" + json[i].name + "</p>\n\t    \t\t\t\t\t\t</a>\n\t    \t\t\t\t\t</li>";
    }

    var str2 = "";
    for (var i = 4; i < json.length; i++) {
        str2 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name1 + "\">\n\t                \t\t\t<img src=\"" + json[i].src1 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name1 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str3 = "";
    for (var i = 4; i < json.length; i++) {
        str3 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name2 + "\">\n\t                \t\t\t<img src=\"" + json[i].src2 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name2 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price2 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str4 = "";
    for (var i = 4; i < json.length; i++) {
        str4 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name3 + "\">\n\t                \t\t\t<img src=\"" + json[i].src3 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name3 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price3 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str5 = "";
    for (var i = 4; i < json.length; i++) {
        str5 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name4 + "\">\n\t                \t\t\t<img src=\"" + json[i].src4 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name4 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price4 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str6 = "";
    for (var i = 4; i < json.length; i++) {
        str6 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name5 + "\">\n\t                \t\t\t<img src=\"" + json[i].src5 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name5 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price5 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str7 = "";
    for (var i = 4; i < json.length; i++) {
        str7 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name6 + "\">\n\t                \t\t\t<img src=\"" + json[i].src6 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name6 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price6 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str8 = "";
    for (var i = 4; i < json.length; i++) {
        str8 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name7 + "\">\n\t                \t\t\t<img src=\"" + json[i].src7 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name7 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price7 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }

    var str9 = "";
    for (var i = 4; i < json.length; i++) {
        str9 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name8 + "\">\n\t                \t\t\t<img src=\"" + json[i].src8 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name8 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price8 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str10 = "";
    for (var i = 4; i < json.length; i++) {
        str10 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name9 + "\">\n\t                \t\t\t<img src=\"" + json[i].src9 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name9 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price9 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str11 = "";
    for (var i = 4; i < json.length; i++) {
        str11 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name10 + "\">\n\t                \t\t\t<img src=\"" + json[i].src10 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name10 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price10 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str12 = "";
    for (var i = 4; i < json.length; i++) {
        str12 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name11 + "\">\n\t                \t\t\t<img src=\"" + json[i].src11 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name11 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price11 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str13 = "";
    for (var i = 4; i < json.length; i++) {
        str13 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name12 + "\">\n\t                \t\t\t<img src=\"" + json[i].src12 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name12 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price12 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str14 = "";
    for (var i = 4; i < json.length; i++) {
        str14 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name13 + "\">\n\t                \t\t\t<img src=\"" + json[i].src13 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name13 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price13 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str15 = "";
    for (var i = 4; i < json.length; i++) {
        str15 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name14 + "\">\n\t                \t\t\t<img src=\"" + json[i].src14 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name14 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price14 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str16 = "";
    for (var i = 4; i < json.length; i++) {
        str16 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name15 + "\">\n\t                \t\t\t<img src=\"" + json[i].src15 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name15 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price15 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    var str17 = "";
    for (var i = 4; i < json.length; i++) {
        str17 += "<li class=\"l10\">\n\t                \t\t<a href=\"\" title=\"" + json[i].name16 + "\">\n\t                \t\t\t<img src=\"" + json[i].src16 + "\"/>\n\t                \t\t    <p class=\"name\">" + json[i].name16 + "</p>\n\t                \t\t    <p class=\"price\">" + json[i].price16 + "</p>\n\t                \t\t</a>\n\t                \t</li>";
    }
    olist.innerHTML = str;
    ol2.innerHTML = str2;
    ol3.innerHTML = str3;
    ol4.innerHTML = str4;
    ol5.innerHTML = str5;
    ol6.innerHTML = str6;
    ol7.innerHTML = str7;
    ol8.innerHTML = str8;
    ol9.innerHTML = str9;
    ol10.innerHTML = str10;
    ol11.innerHTML = str11;
    ol12.innerHTML = str12;
    ol13.innerHTML = str13;
    ol14.innerHTML = str14;
    ol15.innerHTML = str15;
    ol16.innerHTML = str16;
    ol17.innerHTML = str17;
});
var oD1 = document.querySelector(".d1");
var oS = document.querySelector(".s2");
console.log(oS);
var oD2 = document.querySelector(".d2");
var aLi = document.querySelectorAll(".u1 img");
var oImg = oD2.children;
var cont = document.querySelector(".cont");
oD1.onmouseover = function () {

    oD2.style.display = "block";
    oS.style.display = "block";
    oD1.onmousemove = function (eve) {
        for (var i = 0; i <= 4; i++) {
            var e = eve || window.event;
            var l = e.offsetX - oS.offsetWidth / 2;
            var t = e.offsetY - oS.offsetHeight / 2;
            if (l < 0) l = 0;
            if (t < 0) t = 0;
            if (l > oD1.offsetWidth - oS.offsetWidth) {
                l = oD1.offsetWidth - oS.offsetWidth;
            }
            if (t > oD1.offsetHeight - oS.offsetHeight) {
                t = oD1.offsetHeight - oS.offsetHeight;
            }
            var x = l / (oD1.offsetWidth - oS.offsetWidth);
            var y = t / (oD1.offsetHeight - oS.offsetHeight);
            oImg[i].style.left = (oD2.offsetWidth - oImg[i].offsetWidth) * x + "px";
            oImg[i].style.top = (oD2.offsetHeight - oImg[i].offsetHeight) * y + "px";
            oS.style.left = l + "px";
            oS.style.top = t + "px";
        }
    };
};
oD1.onmouseout = function () {
    oD2.style.display = "none";
    oS.style.display = "none";
};

var Details = function () {
    function Details(options) {
        _classCallCheck(this, Details);

        this.cont = options.cont;
        this.url = options.url;

        // 1.拿总数据
        this.load();
    }

    _createClass(Details, [{
        key: "load",
        value: function load() {
            var that = this;
            $.ajax({
                url: this.url,
                success: function success(res) {
                    that.res = res;
                    // 2.拿cookie的数据
                    that.getCookie();
                }
            });
        }
    }, {
        key: "getCookie",
        value: function getCookie() {
            this.good = JSON.parse($.cookie("good"));
            // 3.渲染页面
            console.log(this.good);
            this.display();
        }
    }, {
        key: "display",
        value: function display() {
            var str = "";
            // 4.遍历总数据和cookie的数据，渲染页面
            for (var i = 0; i < this.res.length; i++) {
                for (var j = 0; j < this.good.length; j++) {
                    if (this.good[this.good.length - 1].id == this.res[i].goodsId) {
                        str = "<div class=\"l\" index=\"" + this.res[i].goodsId + "\">\n\t\t    \t\t<div class=\"c-l d1\">\n\t\t    \t\t\t<img src=\"" + this.res[i].src + "\"/>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t    \t    <div class=\"r\">\n\t    \t    \t<div class=\"r-t\">\n\t    \t    \t\t<h1>" + this.res[i].h1 + "</h1>\n\t    \t    \t\t<h4>" + this.res[i].h4 + "</h4>\n\t    \t    \t</div>\n\t    \t    \t<div class=\"img\">\n\t    \t    \t\t<img src=\"https://gfs10.gomein.net.cn/T11hZvBvbj1RCvBVdK.png\"/>\n\t    \t    \t</div>\n\t    \t    \t<div class=\"price\">\n\t    \t    \t\t<span class=\"s4\">\u56E2  \u8D2D  \u4EF7</span>\n\t    \t    \t\t<span class=\"s5\"><em>\uFFE5</em>" + this.res[i].em + "</span>\n\t    \t    \t\t<del>" + this.res[i].del + "</del>\n\t    \t    \t\t<span class=\"s6\">\u964D\u4EF7\u901A\u77E5</span>\n\t    \t    \t</div>\n\t    \t    \t<div class=\"main\">\n\t    \t    \t\t<div class=\"m-t\">\n\t    \t    \t\t\t<div class=\"tese\">\n\t    \t    \t\t\t\t<p class=\"p2\">\u7279\u8272</p>\n\t    \t    \t\t\t\t<span class=\"t\">\n\t    \t    \t\t\t\t\t<em></em>\n\t    \t    \t\t\t\t\t<b class=\"b1\"></b>\n\t    \t    \t\t\t\t\t<a href=\"\">\u4EE5\u65E7\u6362\u65B0</a>\n\t    \t    \t\t\t\t</span>\n\t    \t    \t\t\t\t<span class=\"t\">\n\t    \t    \t\t\t\t\t<em></em>\n\t    \t    \t\t\t\t\t<b class=\"b2\"></b>\n\t    \t    \t\t\t\t\t<a href=\"\">\u7BA1\u5BB6\u670D\u52A1</a>\n\t    \t    \t\t\t\t</span>\n\t    \t    \t\t\t\t<span class=\"t\">\n\t    \t    \t\t\t\t\t<em></em>\n\t    \t    \t\t\t\t\t<b class=\"b3\"></b>\n\t    \t    \t\t\t\t\t<a href=\"\">\u56FD\u7F8E\u667A\u80FD</a>\n\t    \t    \t\t\t\t</span>\n\t    \t    \t\t\t</div>\n\t    \t    \t\t\t<div class=\"tese\">\n\t    \t    \t\t\t\t<p class=\"p2\">\u670D\u52A1</p>\n\t    \t    \t\t\t    <span class=\"s7\">\n\t    \t    \t\t\t    \t\u7531<b>\n\t    \t    \t\t\t    \t\t\u56FD\u7F8E\n\t    \t    \t\t\t    \t</b>\n\t    \t    \t\t\t    \t\u5B89\u6392\u5382\u5546\u914D\u9001\u5E76\u63D0\u4F9B\u4FDD\u969C\u76D1\u7BA1\u3002\n\t    \t    \t\t\t    </span>\n\t    \t    \t\t\t</div>\n\t    \t    \t\t\t<div class=\"color\">\n\t    \t    \t\t\t\t<p class=\"p2\">\u989C\u8272</p>\n\t    \t    \t\t\t    <span class=\"s7\">\n\t    \t    \t\t\t    \t" + this.res[i].s + "\n\t    \t    \t\t\t    </span>\n\t    \t    \t\t\t</div>\n\t    \t    \t\t</div>\n\t    \t    \t</div>\n\t    \t    \t<div class=\"car\">\n\t    \t    \t\t<a href=\"car.html\" class=\"a1\">\u52A0\u5165\u8D2D\u7269\u8F66</a>\n\t    \t    \t\t<a href=\"\" class=\"a2\">\n\t    \t    \t\t\t<b></b>\n\t    \t    \t\t\t\u624B\u673A\u4E0B\u5355\n\t    \t    \t\t\t<p class=\"ma\">\n\t    \t    \t\t\t\t<img src=\"https://ss.gome.com.cn/item/v1/qr/verify/9140074074/1130573685/flag/item\"/>\n\t    \t    \t\t\t</p>\n\t    \t    \t\t</a>\n\t    \t    \t</div>\n\t    \t    </div>";
                    }
                }
            }
            this.cont.html(str);
        }
    }]);

    return Details;
}();

new Details({
    cont: $(".cont"),
    url: "data/details.json"
});
function Search() {
    this.txt = document.querySelector(".txt");
    this.ul = document.querySelector(".search-res");
    this.url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
    this.index = -1;
    this.init();
}
Search.prototype.init = function () {
    var that = this;
    this.txt.onkeyup = function (eve) {
        var e = eve || window.event;
        var code = e.keycode || e.which;
        that.value = this.value;
        if (code != 38 && code != 40 && code != 13) {
            console.log(1);
            that.load();
        }
    };
    this.txt.onblur = function () {
        that.ul.innerHTML = "";
        that.index = -1;
    };
    this.txt.onkeydown = function (eve) {
        var e = eve || window.event;
        var code = e.keycode || e.which;
        if (code == 38) {
            if (that.index == -1 || that.index == 0) {
                that.index = that.ul.children.length - 1;
            } else {
                that.index--;
            }
            that.active();
        }
        if (code == 40) {
            if (that.index == that.ul.children.length - 1) {
                that.index = 0;
            } else {
                that.index++;
            }
            that.active();
        }
        if (code == 13) {
            that.txt.blur();
        }
    };
};
Search.prototype.load = function () {
    var that = this;
    jsonp(this.url, {
        wd: this.value,
        cb: "adasd",
        callbackNameColumns: "cb"
    }).then(function (res) {
        that.data = res.s;
        that.display();
    });
};
Search.prototype.display = function () {
    var str = "";
    for (var i = 0; i < this.data.length; i++) {
        str += "<li abc=\"" + i + "\">" + this.data[i] + "</li>";
    }
    this.ul.innerHTML = str;
    this.eveEnt();
};
Search.prototype.eveEnt = function () {
    var that = this;
    this.ul.onmouseover = function (eve) {
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            that.index = target.getAttribute("abc");
            that.active();
        }
    };
    this.ul.onmouseout = function (eve) {
        var e = eve || window.event;
        var target = e.target || e.srcElement;
        if (target.nodeName == "LI") {
            target.style.background = "";
        }
    };
};
Search.prototype.active = function () {
    for (var i = 0; i < this.ul.children.length; i++) {
        this.ul.children[i].style.background = "";
    }
    this.ul.children[this.index].style.background = "#f8f8f8";
    this.txt.value = this.ul.children[this.index].innerHTML;
};
new Search();

var Tab = function () {
    function Tab() {
        _classCallCheck(this, Tab);

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
        this.d = $(".d");
        this.init();
    }

    _createClass(Tab, [{
        key: "init",
        value: function init() {
            var that = this;
            this.li.on("mouseover", function () {
                that.li.removeClass("active").eq($(this).index()).addClass("active");
                that.box.stop().hide().eq($(this).index()).stop().show();
            });
            this.box.on("mouseout", function () {
                that.li.removeClass("active");
                that.box.stop().hide();
            });
            this.l.on("mouseover", function () {
                that.l.removeClass("active").eq($(this).index()).addClass("active");
                that.ul.stop().hide().eq($(this).index()).stop().show();
            });
            this.l10.on("mouseover", function () {
                that.l10.removeClass("active").eq($(this).index()).addClass("active");
                that.u9.stop().hide().eq($(this).index()).stop().show();
            });
            this.l11.on("mouseover", function () {
                that.l11.removeClass("active").eq($(this).index()).addClass("active");
                that.u10.stop().hide().eq($(this).index()).stop().show();
            });
            this.l12.on("mouseover", function () {
                that.l12.removeClass("active").eq($(this).index()).addClass("active");
                that.u11.stop().hide().eq($(this).index()).stop().show();
            });
        }
    }]);

    return Tab;
}();

new Tab();

$(".cont").banner({
    items: $(".cont").children(".imgbox").children("img"),
    left: $(".cont").children(".btns").children("#left"),
    right: $(".cont").children(".btns").children("#right"),
    list: $(".cont").children(".list").children("span"),
    moveTime: 1000,
    autoPlay: true,
    delayTime: 3000
});

$("#floor").find("ul").children("li").click(function () {
    $('html').stop().animate({
        scrollTop: $(".tel").eq($(this).index()).offset().top
    });
});

ajaxGet("data/active.json").then(function (res) {
    json = eval(res);
    var olist = document.getElementById("list");
    console.log(json);
    var str = "";
    for (var i = 0; i < json.length; i++) {
        str += "<li class=\"l1\">\n\t    \t        <p class=\"" + json[i].listId + "\">\n\t    \t        </p>\n\t\t    \t\t\t<a href=\"detail.html\" title=\"" + json[i].title + "\" class=\"title\">\n\t\t    \t\t\t\t<img src=\"" + json[i].src + "\" alt=\"" + json[i].title + "\"/>\n\t\t    \t\t\t</a>\n\t\t    \t\t\t<h2>\n\t\t    \t\t\t\t<span>" + json[i].span + "</span>\n\t\t    \t\t\t\t<a href=\"\" title=\"" + json[i].title + "\">" + json[i].name + "</a>\n\t\t    \t\t\t</h2>\n\t\t    \t\t\t<div class=\"now\">\n\t\t    \t\t\t\t<div class=\"n-l\">\n\t\t    \t\t\t\t\t<span>" + json[i].price + "</span>\n\t\t    \t\t\t\t\t<del>" + json[i].del + "</del>\n\t\t    \t\t\t\t</div>\n\t\t    \t\t\t\t<p class=\"n-r\">" + json[i].p + "</p>\n\t\t    \t\t\t</div>\n\t    \t\t</li>";
    }
    olist.innerHTML = str;
});

var Img = function () {
    function Img() {
        _classCallCheck(this, Img);

        this.l = $(".l1");
        this.d1 = $(".d1 img");
        this.d2 = $(".d2 img");
        console.log(this.d2);

        this.init();
    }

    _createClass(Img, [{
        key: "init",
        value: function init() {
            var that = this;
            this.l.on("mouseover", function () {
                that.l.removeClass("active").eq($(this).index()).addClass("active");
                that.d1.stop().hide().eq($(this).index()).stop().show();
                that.d2.stop().hide().eq($(this).index()).stop().show();
            });
        }
    }]);

    return Img;
}();

new Img();
var login = document.querySelector(".login");
var regs = document.querySelector(".reg");
var out = document.querySelector(".out");
var uname = document.querySelector(".uname");
var strong = document.querySelector("strong");
var car = document.querySelector(".mycar");
if (getCookie("user") != "") {
    login.innerHTML = getCookie("user");
    regs.style.display = "none";
    out.style.display = "block";
    uname.innerHTML = getCookie("user");
    strong.innerHTML = getCookie("user");
}
out.onclick = function () {
    removeCookie("user", "", "");
};
car.onclick = function () {
    if (getCookie("user") == "") {
        location.href = "login.html";
    } else {
        location.href = "car.html";
    }
};
function Register(options) {
    this.btn = options.btn;
    this.user = options.user;
    this.pass = options.pass;
    this.msg = options.msg;
    this.url = options.url;

    this.init();
}
Register.prototype.init = function () {
    var that = this;
    this.btn.onclick = function () {
        that.load();
    };
};
Register.prototype.load = function () {
    var that = this;
    ajaxPost(this.url, {
        tel: this.user.value,
        pass: this.pass.value
    }).then(function (res) {
        switch (res) {
            case "0":
                that.msg.style.display = "block";
                that.msg.innerHTML = "重名，换一个";
                setTimeout(function () {
                    that.msg.style.display = "none";
                    that.msg.innerHTML = "";
                }, 3000);
                break;
            case "1":
                that.msg.style.display = "block";
                that.msg.innerHTML = "注册成功，3秒之后调转到登录";
                setTimeout(function () {
                    location.href = "login.html";
                }, 3000);
                break;
            case "2":
                that.msg.style.display = "block";
                that.msg.innerHTML = "请输入完整信息";
                setTimeout(function () {
                    that.msg.style.display = "none";
                    that.msg.innerHTML = "";
                }, 3000);
        }
    }, function (code) {
        console.log("前端的ajax请求失败，有可能是网络原因或接口错误，或服务器问题，反正不一定是注册失败");
    });
};

new Register({
    btn: document.getElementById("btn"),
    user: document.getElementById("user"),
    pass: document.getElementById("pass"),
    msg: document.getElementById("msg"),
    url: "http://www.liyangyf.com/ctrl/register.php"
});
function countTime() {
    //获取当前时间
    var oCont = document.querySelector(".cont");
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var endDate = new Date("2019-3-2 20:00:00");
    var end = endDate.getTime();
    //时间差
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var h, m, s;
    var timer;
    if (leftTime > 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
        document.getElementById("_h").innerHTML = "距离本场结束&nbsp;&nbsp;" + createZero(h) + "：";
        document.getElementById("_m").innerHTML = createZero(m) + "：";
        document.getElementById("_s").innerHTML = createZero(s);
    } else {
        clearTimeout(timer);
        oCont.style.display = "block";
    }
    //将倒计时赋值到div中
    //递归每秒调用countTime方法，显示动态时间效果
    timer = setTimeout(countTime, 1000);
}
function createZero(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}