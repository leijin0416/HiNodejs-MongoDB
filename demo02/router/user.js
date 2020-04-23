/**
 *  调用api方法
 */
var User = require('../daos/userApi');

/**
 *  get请求 查询全部
 */
exports.doAll = function (req, res) {
	User.findByAll((err, doc) => {
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

/**
 *  post请求
 *  username -查询条件
 */
exports.byName = function (req, res) {
	User.findByName(req.query.username, (err, doc) => {
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