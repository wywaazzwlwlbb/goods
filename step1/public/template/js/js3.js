ajaxGet("data/active.json").then(function(res){
            json = eval(res)
            var olist = document.getElementById("list")
            console.log(json)
            var str = "";
            for(var i=0;i<json.length;i++){
	    	    str += `<li class="l1">
	    	        <p class="$get{json[i].listId}">
	    	        </p>
		    			<a href="detail.html?goodid=${json[i].goodsId}" title="${json[i].title}" class="title">
		    				<img src="${json[i].src}" alt="${json[i].title}"/>
		    			</a>
		    			<h2>
		    				<span>${json[i].span}</span>
		    				<a href="" title="${json[i].title}">${json[i].name}</a>
		    			</h2>
		    			<div class="now">
		    				<div class="n-l">
		    					<span>${json[i].price}</span>
		    					<del>${json[i].del}</del>
		    				</div>
		    				<p class="n-r">${json[i].p}</p>
		    			</div>
	    		</li>`;
	    					
            }
            olist.innerHTML = str;
        })