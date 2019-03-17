var login = document.querySelector(".login")
		var regs = document.querySelector(".reg")
		var out = document.querySelector(".out")
		var uname = document.querySelector(".uname")
		var strong = document.querySelector("strong")
		var car = document.querySelector(".mycar")
		if(getCookie("user")!=""){
			login.innerHTML = getCookie("user");
			regs.style.display="none";
			out.style.display="block";
			uname.innerHTML = getCookie("user")
			strong.innerHTML = getCookie("user")
		}
		out.onclick = function(){
			removeCookie("user","","")
		}
		car.onclick = function(){
			if(getCookie("user") == ""){
				location.href = "login.html"
			}else{
				location.href = "car.html"
			}
		}