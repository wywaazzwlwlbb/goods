        var oD1 = document.querySelector(".d1");
		var oS = document.querySelector(".s2");
		console.log(oS)
		var oD2 = document.querySelector(".d2");
		var aLi = document.querySelectorAll(".u1 img");
		var oImg = oD2.children;
		var cont = document.querySelector(".cont")
		oD1.onmouseover = function(){
			
			oD2.style.display = "block";
			oS.style.display = "block";
			oD1.onmousemove = function(eve){
				for(var i=0;i<=4;i++){
					var e = eve || window.event;
					var l =e.offsetX - oS.offsetWidth/2;
					var t = e.offsetY - oS.offsetHeight/2
						if(l<0) l=0;
						if(t<0) t=0;
						if(l>oD1.offsetWidth-oS.offsetWidth){
							l=oD1.offsetWidth-oS.offsetWidth;
						}
						if(t>oD1.offsetHeight-oS.offsetHeight){
							t=oD1.offsetHeight-oS.offsetHeight;
						}
					var x = l/(oD1.offsetWidth - oS.offsetWidth);
					var y = t/(oD1.offsetHeight - oS.offsetHeight);
					oImg[i].style.left = (oD2.offsetWidth-oImg[i].offsetWidth)*x +"px";
					oImg[i].style.top = (oD2.offsetHeight-oImg[i].offsetHeight)*y+"px";		
					oS.style.left = l +"px";
					oS.style.top = t + "px";
				}
			}
		}
		oD1.onmouseout = function(){
			oD2.style.display = "none";
			oS.style.display = "none";
		}
		
