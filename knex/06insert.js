var knex= require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

knex.schema.createTableIfNotExists('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
  console.log("if table is not exists, create it")
})
.then(function(){
	console.log('delete all data');
	return knex.table('users').del();
})
.then(function(){
	console.log('insert datas');
	return knex('users').insert([{name:"David"},{name:"Edward"},{name:"Janet"}]);
})
.then(function(){
	console.log('insert data and return result id')
	return knex('users').returning('id').insert({name:"Christine"}).then(function(id){console.log("max id: " + id);});
})
.then(function(){
	console.log('select datas')
	return knex.table('users').select();
})
.map(function(rows){
	console.log(rows);
})
.catch(function(e) {
  console.error(e);
});


