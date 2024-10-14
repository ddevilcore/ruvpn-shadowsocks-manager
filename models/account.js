const knex = appRequire('init/knex').knex;
const tableName = 'account';

const createTable = async() => {
  const exist = await knex.schema.hasTable(tableName);
  if(exist) {
    return;
  }
  return knex.schema.createTable(tableName, function(table) {
    table.integer('port').primary();
    table
      .string('username')
      .notNullable()
      .defaultTo('');
    table.string('password');
    table.string('availableToDate');
    table
      .boolean('isActive')
      .notNullable()
      .defaultTo(0);
    table
      .string('subscriptionType')
      .notNullable()
      .defaultTo('');
  });
};

exports.createTable = createTable;
