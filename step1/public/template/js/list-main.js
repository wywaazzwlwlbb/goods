
import {Goods} from "../module/list.js";


new Goods({
    list:document.getElementById("list"),
    url:"/admin/details/get_list",
    method:{
        ajaxGet:ajaxGet,
        setCookie:setCookie,
        getCookie:getCookie
    }
})