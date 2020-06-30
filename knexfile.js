// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'projetos',
            user: 'postgres',
            password: '1234',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`,
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds`,
        },
    },
}
