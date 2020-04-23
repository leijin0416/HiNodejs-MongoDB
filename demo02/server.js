/**
 * server.js 是系统服务配置和创建的地方，全局
 * 
 */

var express = require('express');
var bodyParser = require('body-parser');  
var conf = require('./conf');
var router = require('./router/router');

var app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 路由配置
router.routes(app);

// 启动及端口
app.listen(conf.port, () => console.log('app is running...'))

module.exports = app; 