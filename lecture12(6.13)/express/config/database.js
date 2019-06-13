var mysql = require('mysql');

module.exports = mysql.createPool( {
    host     : 'mydbinstance1.c55tgacrmryx.ap-northeast-2.rds.amazonaws.com',
    user     : 'root',
    password : 'zkqhs1004',
    port     : 3306,
    database : 'mytest'
});