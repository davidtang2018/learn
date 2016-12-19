var knex = require('knex')({client: 'sqlite3'});

var sql=knex.select().table('books').toSQL().sql;
console.log(sql);
var sql=knex.select('*').from('users').toSQL().sql;
console.log(sql);

sql=knex.select('title', 'author', 'year').from('books').toSQL().sql;
console.log(sql);
knex.column('title', 'author', 'year').select().from('books').toSQL().sql;
console.log(sql);

sql=knex.avg('sum_column1').from(function() {
  this.sum('column1 as sum_column1').from('t1').groupBy('column1').as('t1')
}).as('ignored_alias').toSQL().sql;
console.log(sql);

sql=knex.with('with_alias', knex.raw('select sum(column1) as sum_column1 from "t1" group by column1'))
	.avg('sum_column').from('with_alias').toSQL().sql
console.log(sql);
