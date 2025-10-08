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

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USERNAME as string,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST_NAME,
    port: 28823,
    timezone: '+05:30', // Fixed: Use offset instead of timezone name
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
    logging: console.log, // Enable logging to see connection details
    pool: {
      max: 25,
      min: 0,
      acquire: 60000,
      idle: 20000,
    },
  }
);

// Test connection function
export async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to database:', error);
    return false;
  }
}

export default sequelize;