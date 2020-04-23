// 1. 引入链接了数据库的 mongoose 对象 （链接前面暴露出来的js文件）
const db = require('../mongodb/connect.js');

// 2. 定义这张表（集合）的 schema 对象
const schema = new db.Schema({   //db中有一个Schema的构造函数 设置需要的字段格式
  // key: value 的设置
  name: {
    type: String, //类型首字母大写
    required: true  //定义必须存在
  },

  age: {
    type: Number,
    default: 18  //默认为18
  },

  sex: {
    type: Number,
    default: 1
  }
});

// 3. 基于第2步中的 schema 生成 model 对象并暴露model   db.model()方法
module.exports = db.model('studentId',schema); //数据库的表名是根据 db.model 第一个参数的复数形式来确定的