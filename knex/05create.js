var knex= require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
})
.catch(function(e) {
  console.error(e);
});
