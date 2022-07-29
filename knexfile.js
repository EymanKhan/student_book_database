// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development:{
    client: 'postgresql',
    connection: {
      database: 'project',
      user:     'postgres',
      password: '==daizy123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_user_migrations',
      tableName: 'knex_book_migrations'
    }
  },


};
