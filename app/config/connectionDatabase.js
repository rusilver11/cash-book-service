import { Sequelize } from "sequelize";
import {createRequire} from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const configDatabase = require("./configDatabase.json"); // use the require method

const db = new Sequelize(
    configDatabase.development.database,
    configDatabase.development.username,
    configDatabase.development.password,
  {
    host: configDatabase.development.host,
    dialect: configDatabase.development.dialect,
    define: { timestamps: false },
  }
);

export default db
