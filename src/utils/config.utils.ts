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

const sequelize = new Sequelize("mysql://avnadmin:AVNS_1XleFjXtG0colSz40yg@mysql-bc9d20f-meanrev-4388.j.aivencloud.com:28823/defaultdb?ssl-mode=REQUIRED", {
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

export default sequelize;