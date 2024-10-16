const knex = appRequire('init/knex').knex;
const tableName = 'account';

const createTable = async() => {
  const exist = await knex.schema.hasTable(tableName);
  if(exist) {
    return;
  }
  return knex.schema.createTable(tableName, function(table) {
    table.integer('port').primary();
    table.string('username');
    table.string('password');
    table.string('availableToDate');
    table.boolean('isActive');
    table.string('subscriptionType');
  });
};

exports.createTable = createTable;
