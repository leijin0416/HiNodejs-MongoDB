/**
 *  Created by norway on 20-4-23.
 *  数据库api方法集合
 */

var User = require('../models/users');

var UserDAO = function () {
};

/**
 *  查询全部
 *  callback -传入一个函数
 */
UserDAO.prototype.findByAll = function (callback) {
	User.find({}, callback);
}

/**
 *  查询条件
 * 	username -传入参数
 *  callback -传入一个函数
 */
UserDAO.prototype.findByName = function (username, callback) {
	User.findOne({name: username}, function (err, doc) {
        callback(err, doc);
    });
}

module.exports = new UserDAO();