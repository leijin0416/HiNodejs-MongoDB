//1.引入router
var express = require('express');
var router = express.Router();
 
//2.引入mongoose的数据模块
var mongoose = require('mongoose'); 
var Goods = require('../models/goods');
 
//3.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/mydb1');
 
mongoose.connection.on( 'connected', () => {
	console.log('数据库连接成功！');
});
 
mongoose.connection.on( 'error', () => {
	console.log('数据库连接失败！');
});
 
mongoose.connection.on( 'disconnected', () => {
	console.log('数据库连接断开！');
});

/**
 *  GET users listing
 *  4.路由获取
 */
exports.doReg = function(req, res) {
    var dataValue = {
        name: req.query.name,
        url: req.query.url
    };
    console.log(req.query.name);
    
	Goods.find({ 
        name: dataValue.name,
        url: dataValue.url
    }, (err, doc) => {
		if(err){
			res.json({
				status:'1',
				msg: err.message
			})
		} else {
			res.json({
				status:'0',
				msg:'查询成功',
				result:{
					count: doc.length,
					list: doc
				}
			})
        }
	})

}
 
// 6.暴露路由
// module.exports = router;