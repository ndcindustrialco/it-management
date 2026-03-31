export const env = {
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  AUTH_SECRET: process.env.AUTH_SECRET || '',
  BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN || '',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
};

// Validate required environment variables in production
if (env.IS_PRODUCTION) {
  const required = ['DATABASE_URL', 'JWT_SECRET', 'AUTH_SECRET'];
  required.forEach(key => {
    if (!process.env[key]) {
      throw new Error(`CRITICAL: Environment variable ${key} is missing in production!`);
    }
  });
}
