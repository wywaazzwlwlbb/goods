function countTime() {
            //获取当前时间
            var oCont = document.querySelector(".cont")
            var date = new Date();
            var now = date.getTime();
            //设置截止时间
            var endDate = new Date("2019-3-2 20:00:00");
            var end = endDate.getTime();
            //时间差
            var leftTime = end-now;
            //定义变量 d,h,m,s保存倒计时的时间
            var h,m,s;
            var timer; 
            if (leftTime>0) {
                h = Math.floor(leftTime/1000/60/60%24);
                m = Math.floor(leftTime/1000/60%60);
                s = Math.floor(leftTime/1000%60);
                document.getElementById("_h").innerHTML = "距离本场结束&nbsp;&nbsp;" +createZero(h)+"：";
                document.getElementById("_m").innerHTML = createZero(m)+"：";
                document.getElementById("_s").innerHTML = createZero(s);
            }else{
            	clearTimeout(timer);
	            oCont.style.display = "block"
            }
            //将倒计时赋值到div中
            //递归每秒调用countTime方法，显示动态时间效果
            timer = setTimeout(countTime,1000);
 
        }
        function createZero(n){
			if(n<10){
				return "0"+n
			}else{
				return n
			}
		}