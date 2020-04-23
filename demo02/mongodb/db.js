var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb1";

/**
 * 打开数据库
 * @param callback  回调函数
 */
function clientMongo(callback){
    MongoClient.connect(url,function(err,client){
        callback(err,client);
    });
}

/**
 * 查询
 * @param mongoTable  集合名称
 * @param paramJSON   查询条件
 * @param C    回调函数
 * @param D    分页参数
 */
exports.findMongo = function(mongoTable,paramJSON,D,C){
    var argm = arguments;
    //打开数据库
    clientMongo(function(err,client){
       
        if(argm.length==4){
            var agrs = D;
            var callback = C;
            var skipnumber = parseInt((agrs.page-1)*agrs.pageSize) || 0;
            var limitnumber = parseInt(agrs.pageSize) || 0;
            var sort = agrs.sort || {};
        }else if(argm.length == 3){
            var callback = D;
            var skipnumber = 0;
            var limitnumber = 0;
            var sort = {};
        }else{
            return;
        }
        if(err){
            callback(err,null);
            return;
        }
       var db = client.db("student");
        db.collection(mongoTable).find(paramJSON).skip(skipnumber).limit(limitnumber).sort(sort).toArray(function(err,result){
            callback(err,result);
            client.close();
        })
    })
}
/**
 * 插入一条
 * @param mongoTable 集合名称
 * @param paramJSON  插入数据
 * @param callback   回调函数
 */
exports.insertMongo = function(mongoTable,paramJSON,callback){
       clientMongo(function(err,client){
           var db = client.db("student");
           db.collection(mongoTable).insertOne(paramJSON,function(err,result){
               callback(err,result);
               client.close();
           })
       })
}

/**
 * 修改多条
 * @param mongoTable  集合名称
 * @param whereStr    条件
 * @param updateStr   修改字段
 * @param callback    回调函数
 */
exports.updateMogo = function(mongoTable,whereStr,updateStr,callback){
    clientMongo(function(err,client){
        var db = client.db("student");
        //要修改的字段内容
        updateStr = {$set:updateStr};
        db.collection(mongoTable).updateMany(whereStr,updateStr,function(err,result){
            callback(err,result);
            client.close();
        })
    })
}
/**
 * 删除多条
 * @param mongoTable
 * @param parasJSON
 * @param callback
 */
exports.removeMongo = function(mongoTable,parasJSON,callback){
    clientMongo(function(err,client){
        var db = client.db('student');
        db.collection(mongoTable).deleteMany(parasJSON,function(err,result){
            callback(err,result);
            client.close();
        })
    })
}
/**
 * 获取总条数
 * @param mongoTable
 * @param parasJSON
 * @param callback
 */
exports.findCount = function(mongoTable,parasJSON,callback){
    clientMongo(function(err,client){
        var db = client.db('student');
        db.collection(mongoTable).count(parasJSON,function(err,result){
            callback(err,result);
            client.close();
        })
    })
}