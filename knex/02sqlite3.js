var mysqlite= require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

var sql=mysqlite.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
});
console.log(sql.toSQL());

sql=mysqlite.schema.createTableIfNotExists('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
});
console.log(sql.toSQL());
