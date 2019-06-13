var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mydbinstance1.c55tgacrmryx.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : 'zkqhs1004',
  port     : 3306,
  database : 'mytest'
});

connection.connect();

connection.query('SELECT * from users', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();