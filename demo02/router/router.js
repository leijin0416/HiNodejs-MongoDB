/**
 *  Created by norway on 20-4-23.
 *  路由控制模块
 */
var User = require('./user');

exports.routes = function (app) {
    app.get('/insert', User.doAll);
    app.post('/insert/getName', User.byName);
}