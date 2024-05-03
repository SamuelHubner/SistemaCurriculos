module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'postgres',
            user: 'microndev',
            password: 'microndb123',
            database: 'micron_dev',
            port: 5432
        }
    },
    migrations: {
        directory: "./db/migrations",
    }
};
