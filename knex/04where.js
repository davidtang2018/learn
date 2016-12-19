var knex = require('knex')({client: 'sqlite3'});

var sql=knex('accounts')
.where('id', 1).toSQL().sql;
console.log(sql);

sql=knex('users').where({
  first_name: 'Test',
  last_name:  'User'
}).select('id').toSQL().sql
console.log(sql);

sql=knex('users').where('votes', '>', 100).select('id').toSQL().sql;
console.log(sql);

sql=knex('users').where(function() {
  this.where('id', 1).orWhere('id', '>', 10)
}).orWhere({name: 'Tester'}).toString();
console.log(sql);

var subquery = knex('users').where('votes', '>', 100).andWhere('status', 'active').orWhere('name', 'John').select('id');
sql=knex('accounts').where('id', 'in', subquery).toString();
console.log(sql);

sql=knex('users').where('id', 1).orWhere({votes: 100, user: 'knex'}).toString();
console.log(sql);

