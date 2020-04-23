/**
 *  Created by norway on 20-4-23.
 *  数据库集合设计
 */
var mongodb = require('./../mongodb');
var Schema = mongodb.mongoose.Schema;
/**
 *  @type {Schema}
 *  @type { default: 18 } 默认值
 *  @type { required: true } 定义必须存在
 *  - 定义这张表（集合）的 schema 对象
 *  - db中有一个Schema的构造函数 设置需要的字段格式
 */
var produtSchema = new Schema({
	"_id":String,
	"name":String,
	"url":String
});
/**
 *  基于 schema 生成 model 对象并暴露 model
 *  数据库的表名是根据 db.model 第一个参数的复数形式来确定的
 */
var Student = mongodb.mongoose.model('student', produtSchema, 'student');

module.exports = Student;
