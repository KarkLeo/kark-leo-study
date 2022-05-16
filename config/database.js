const fs = require('fs');


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: {
        ca: fs.readFileSync(`${__dirname}/certificates/ca-certificate.crt`).toString(),
      },
    },
    debug: false,
  },
});

