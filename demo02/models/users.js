/**
 *  Created by norway on 20-4-23.
 *  数据库集合设计
 */

var mongodb = require('./../mongodb');
var Schema = mongodb.mongoose.Schema;

/**
 * @type {Schema}
 */
var produtSchema = new Schema({
	"_id":String,
	"name":String,
	"url":String
});
// 创建User的mongodb模型
var Student = mongodb.mongoose.model('student', produtSchema, 'student');

module.exports = Student;
