// import { Sequelize } from "sequelize";
// import { TIMEZONE } from "./constants.utils";

// const sequelize = new Sequelize(
//   process.env.DB_NAME as string,
//   process.env.DB_USERNAME as string,
//   process.env.DB_PASSWORD,
//   {
//     dialect: "mysql", //database type
//     host: process.env.HOST_NAME,
//     timezone: TIMEZONE,
//     pool: {
//       max: 25, // Maximum number of connections in the pool
//       min: 0, // Minimum number of connections in the pool
//       acquire: 60000, // Maximum time in ms to wait for a connection (default: 10000)
//       idle: 20000, // Maximum time in ms that a connection can be idle before being released
//     },
//   }
// );

// export default sequelize;

import { Sequelize } from "sequelize";

// Validate environment variables
function validateEnvVars() {
  const required = ['DB_NAME', 'DB_USERNAME', 'DB_PASSWORD', 'DB_HOST_NAME'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:', missing);
    console.log('Available environment variables:', Object.keys(process.env));
    throw new Error(`Missing environment variables: ${missing.join(', ')}`);
  }
}

validateEnvVars();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    dialect: "mysql",
    host: process.env.DB_HOST_NAME!,
    port: parseInt(process.env.DB_PORT || '28823'),
    timezone: '+05:30',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      }
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;