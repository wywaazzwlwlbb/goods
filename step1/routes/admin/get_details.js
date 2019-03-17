var express = require('express');
var router = express.Router();
var mgdb = require('../../common/mgdb')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
//通过id获取详情
router.post('/get_details', function(req, res, next) {
var name=req.body.name;
    mgdb(
        {collection:'details'},
        ({collection,client})=>{
            collection.find({'goodsId':name}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    // res.redirect(跳转地址==string)
                    res.json('数据为空')
                }
            })
        }
    )
});
//获取商品详情列表
router.get('/get_details_list', function(req, res, next) {
    mgdb(
        {collection:'details'},
        ({collection,client})=>{
            collection.find({}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    // res.redirect(跳转地址==string)
                    res.json('数据为空')
                }
            })
        }
    )

});
//获取商品列表
router.get('/get_list', function(req, res, next) {
    mgdb(
        {collection:'active'},
        ({collection,client})=>{
            collection.find({}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    // res.redirect(跳转地址==string)
                    res.json('数据为空')
                }
            })
        }
    )

});
//获取购物车
router.get('/get_shop', function(req, res, next) {
    mgdb(
        {collection:'shop'},
        ({collection,client})=>{
            collection.find({}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(result)
                }else{
                    // res.redirect(跳转地址==string)
                    res.json('数据为空')
                }
            })
        }
    )

});
//删除购物车
router.post('/del_good', function(req, res, next) {
    let goosid = req.body.goosid;//拆除body数据
    mgdb(
        {collection:'shop'},
        ({collection,client})=>{
            collection.deleteOne(
                {goodsId:goosid}
                ,
                (err,result)=>{
                    if(!err && result.result.n){
                        res.json('删除成功')
                    }else{
                        res.json('删除失败')
                    }
                    client.close();
                }
            )
        }
    )

});
//删除商品
router.post('/del_good_list', function(req, res, next) {
    let goosid = req.body.goosid;//拆除body数据
    mgdb(
        {collection:'active'},
        ({collection,client})=>{
            collection.deleteOne(
                {goodsId:goosid}
                ,
                (err,result)=>{
                    if(!err && result.result.n){
                        res.json('删除成功')
                    }else{
                        res.json('删除失败')
                    }
                    client.close();
                }
            )
        }
    )

});
//修改商品列表
router.post('/update_good_list', function(req, res, next) {
    let goosid = req.body.goosid;//拆除body数据
    let price1=req.body.price1;
    let src1=req.body.src1;
    let name1=req.body.name1;
    mgdb(
        {collection:'active'},
        ({collection,client})=>{
            collection.updateOne(
                {goodsId:goosid},
                {$set: { "price1" : price1,"src1" : src1,"name1" : name1}}
                ,
                (err,result)=>{
                    if(!err && result.result.n){
                        res.json('修改成功')
                    }else{
                        res.json('修改失败')
                    }
                    client.close();
                }
            )
        }
    )

});
//购物车数量修改
router.post('/uptal_good', function(req, res, next) {
    let goosid = req.body.goosid;//拆除body数据
    let num = req.body.num;//拆除body数据
    mgdb(
        {collection:'shop'},
        ({collection,client})=>{
            collection.updateOne(
                {goodsId:goosid},
                {$set: { "Num" : num}}
                ,
                (err,result)=>{
                    if(!err && result.result.n){
                        res.json('修改成功')
                    }else{
                        res.json('修改失败')
                    }
                    client.close();
                }
            )
        }
    )

});
//加入购物车
router.post('/insert_good', function(req, res, next) {
    let {title1,src1,name1,price1,goodsId,Num} = req.body;//拆除body数据
    mgdb(
        {collection:'shop'},
        ({collection,client})=>{
            collection.find({'goodsId':goodsId}).toArray((err,result)=>{
                if(!err && result.length>0){
                    collection.updateOne(
                        {goodsId:goodsId},
                        {$set: { "Num" : result[0].Num*1+1}}
                        ,
                        (err,result)=>{
                            if(!err && result.result.n){
                                res.json('插入成功')
                            }else{
                                res.json('插入失败')
                            }
                            client.close();
                        }
                    )
                }else{
                    collection.insertOne(
                        {title1,src1,name1,price1,goodsId,Num}
                        ,
                        (err,result)=>{
                            if(!err && result.result.n){
                                res.json('插入成功')
                            }else{
                                res.json('插入失败')
                            }
                            client.close();
                        }
                    )
                }
            })
        }
    )

});
//添加商品
router.post('/add_good_list', function(req, res, next) {
    let {title1,src1,name1,price1,goosid} = req.body;//拆除body数据
    mgdb(
        {collection:'active'},
        ({collection,client})=>{
            collection.find({'goodsId':goosid}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(1)
                }else{
                    collection.insertOne(
                        {title1,src1,name1,price1,goodsId:goosid,a:'details.html'}
                        ,
                        (err,result)=>{
                            if(!err && result.result.n){
                                res.json('插入成功')
                            }else{
                                res.json(1)
                            }
                            client.close();
                        }
                    )
                }
            })
        }
    )

});
//添加商品详情
router.post('/add_addtedails_list', function(req, res, next) {

    let {src,h1,h4,em,del,s,goodsId} = req.body;//拆除body数据
    mgdb(
        {collection:'details'},
        ({collection,client})=>{
            collection.find({'goodsId':goodsId}).toArray((err,result)=>{
                if(!err && result.length>0){
                    res.json(1)
                }else{
                    collection.insertOne(
                        {src,h1,h4,em,del,s,goodsId}
                        ,
                        (err,result)=>{
                            if(!err && result.result.n){
                                res.json('插入成功')
                            }else{
                                res.json(1)
                            }
                            client.close();
                        }
                    )
                }
            })
        }
    )

});
module.exports = router;