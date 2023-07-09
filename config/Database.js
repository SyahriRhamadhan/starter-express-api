// Berisi konfigurasi untuk setting database pada Railway
import { Sequelize } from "sequelize";
const db = new Sequelize('railway', 'root', 'TDFb9uW2JVDXCiahCdqy', {
    host: "containers-us-west-164.railway.app",
    port: "7497",
    dialect: "mysql"
});
export default db;