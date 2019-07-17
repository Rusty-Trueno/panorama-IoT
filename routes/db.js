var mysql = require('mysql');
var pool = mysql.createPool({
    host:'118.190.202.148',
    user:'root',
    port:3306,
    password:'Gantch815',
    database:'expressjs'
});
function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql,function(err,rows){
            callback(err,rows);
            connection.release();
        });
    });
}
exports.query = query;