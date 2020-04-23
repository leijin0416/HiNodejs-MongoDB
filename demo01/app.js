var express = require('express');
var goodsRouter = require('./router/index');
var app = express();

app.listen(3000, () => console.log('app is running...'))
app.post('/insert', goodsRouter.doReg);
