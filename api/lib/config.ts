const config = {
  env: {
    databaseUrl: process.env.POSTGRESQL_URL,
  },
  allowedOrigins : [
    'http://localhost:5173',
  ]
};

export default config;
