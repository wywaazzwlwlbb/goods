ajaxGet("data/data.json").then(function(res){
            json = eval(res)

            var olist = document.getElementById("list")
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
            console.log(olist)
            var str = "";
            for(var i=0;i<4;i++){
	        	str += `<li class="l8" id="list">
	    						<a href="${json[i].a}" target="_blank">
	    							<img src="${json[i].src}" 
	    								alt="${json[i].title}" 
	    								title="${json[i].title}"/>
	    						    <div class="price">
	    						    	<span>${json[i].s1}</span>
	    						    	<s>${json[i].s2}</s>
	    						    </div>
	    						    <p class="name">${json[i].name}</p>
	    						</a>
	    					</li>`;
            }
            
            var str2 = "";
            for(var i=4;i<json.length;i++){
                str2 += `<li class="l10">
	                		<a href="" title="${json[i].name1}">
	                			<img src="${json[i].src1}"/>
	                		    <p class="name">${json[i].name1}</p>
	                		    <p class="price">${json[i].price}</p>
	                		</a>
	                	</li>`;
            }
            
            var str3 = "";
            for(var i=4;i<json.length;i++){
                str3 += `<li class="l10">
	                		<a href="" title="${json[i].name2}">
	                			<img src="${json[i].src2}"/>
	                		    <p class="name">${json[i].name2}</p>
	                		    <p class="price">${json[i].price2}</p>
	                		</a>
	                	</li>`;
            }
            
            var str4 = "";
            for(var i=4;i<json.length;i++){
                str4 += `<li class="l10">
	                		<a href="" title="${json[i].name3}">
	                			<img src="${json[i].src3}"/>
	                		    <p class="name">${json[i].name3}</p>
	                		    <p class="price">${json[i].price3}</p>
	                		</a>
	                	</li>`;
            }
            
            var str5 = "";
            for(var i=4;i<json.length;i++){
                str5 += `<li class="l10">
	                		<a href="" title="${json[i].name4}">
	                			<img src="${json[i].src4}"/>
	                		    <p class="name">${json[i].name4}</p>
	                		    <p class="price">${json[i].price4}</p>
	                		</a>
	                	</li>`;
            }
            var str6 = "";
            for(var i=4;i<json.length;i++){
                str6 += `<li class="l10">
	                		<a href="" title="${json[i].name5}">
	                			<img src="${json[i].src5}"/>
	                		    <p class="name">${json[i].name5}</p>
	                		    <p class="price">${json[i].price5}</p>
	                		</a>
	                	</li>`;
            }
            
            var str7 = "";
            for(var i=4;i<json.length;i++){
                str7 += `<li class="l10">
	                		<a href="" title="${json[i].name6}">
	                			<img src="${json[i].src6}"/>
	                		    <p class="name">${json[i].name6}</p>
	                		    <p class="price">${json[i].price6}</p>
	                		</a>
	                	</li>`;
            }
            
            var str8 = "";
            for(var i=4;i<json.length;i++){
                str8 += `<li class="l10">
	                		<a href="" title="${json[i].name7}">
	                			<img src="${json[i].src7}"/>
	                		    <p class="name">${json[i].name7}</p>
	                		    <p class="price">${json[i].price7}</p>
	                		</a>
	                	</li>`;
            }
            
            var str9 = "";
            for(var i=4;i<json.length;i++){
                str9 += `<li class="l10">
	                		<a href="" title="${json[i].name8}">
	                			<img src="${json[i].src8}"/>
	                		    <p class="name">${json[i].name8}</p>
	                		    <p class="price">${json[i].price8}</p>
	                		</a>
	                	</li>`;
            }
            var str10 = "";
            for(var i=4;i<json.length;i++){
                str10 += `<li class="l10">
	                		<a href="" title="${json[i].name9}">
	                			<img src="${json[i].src9}"/>
	                		    <p class="name">${json[i].name9}</p>
	                		    <p class="price">${json[i].price9}</p>
	                		</a>
	                	</li>`;
            }
            var str11 = "";
            for(var i=4;i<json.length;i++){
                str11 += `<li class="l10">
	                		<a href="" title="${json[i].name10}">
	                			<img src="${json[i].src10}"/>
	                		    <p class="name">${json[i].name10}</p>
	                		    <p class="price">${json[i].price10}</p>
	                		</a>
	                	</li>`;
            }
            var str12 = "";
            for(var i=4;i<json.length;i++){
                str12 += `<li class="l10">
	                		<a href="" title="${json[i].name11}">
	                			<img src="${json[i].src11}"/>
	                		    <p class="name">${json[i].name11}</p>
	                		    <p class="price">${json[i].price11}</p>
	                		</a>
	                	</li>`;
            }
            var str13 = "";
            for(var i=4;i<json.length;i++){
                str13 += `<li class="l10">
	                		<a href="" title="${json[i].name12}">
	                			<img src="${json[i].src12}"/>
	                		    <p class="name">${json[i].name12}</p>
	                		    <p class="price">${json[i].price12}</p>
	                		</a>
	                	</li>`;
            }
            var str14 = "";
            for(var i=4;i<json.length;i++){
                str14 += `<li class="l10">
	                		<a href="" title="${json[i].name13}">
	                			<img src="${json[i].src13}"/>
	                		    <p class="name">${json[i].name13}</p>
	                		    <p class="price">${json[i].price13}</p>
	                		</a>
	                	</li>`;
            }
            var str15 = "";
            for(var i=4;i<json.length;i++){
                str15 += `<li class="l10">
	                		<a href="" title="${json[i].name14}">
	                			<img src="${json[i].src14}"/>
	                		    <p class="name">${json[i].name14}</p>
	                		    <p class="price">${json[i].price14}</p>
	                		</a>
	                	</li>`;
            }
            var str16 = "";
            for(var i=4;i<json.length;i++){
                str16 += `<li class="l10">
	                		<a href="" title="${json[i].name15}">
	                			<img src="${json[i].src15}"/>
	                		    <p class="name">${json[i].name15}</p>
	                		    <p class="price">${json[i].price15}</p>
	                		</a>
	                	</li>`;
            }
            var str17 = "";
            for(var i=4;i<json.length;i++){
                str17 += `<li class="l10">
	                		<a href="" title="${json[i].name16}">
	                			<img src="${json[i].src16}"/>
	                		    <p class="name">${json[i].name16}</p>
	                		    <p class="price">${json[i].price16}</p>
	                		</a>
	                	</li>`;
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
        })