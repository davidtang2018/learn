var knex = require('knex')({});
var sql=knex('table').insert({a: 'b'}).returning('*').toString();
console.log(sql);

var pg = require('knex')({client: 'pg'});
sql=pg('table').insert({a: 'b'}).returning('*').toString();
console.log("pg: "+sql);

var mysql = require('knex')({client: 'mysql'});
sql=mysql('table').insert({a: 'b'}).returning('*').toString();
console.log("mysql: "+sql);

var sqlite3 = require('knex')({client: 'sqlite3'});
sql=sqlite3('table').insert({a: 'b'}).returning('*').toString();
console.log("sqlite3: "+sql);
