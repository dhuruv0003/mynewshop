    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),  // here if we are not getting  DATABASE_HOST from .env then it will take the second value, else it will fetch from .env Similary for all others below
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'MyNewShop'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'User@123'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: env.bool('DATABASE_SSL', false),
        },
        debug: false,
      },
    });