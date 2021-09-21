const { Pool } = require("pg");
require("dotenv").config();

const devConfig = {
	user: process.env.PG_USER,
	password: "",
	host: process.env.PG_HOST,
	port: process.env.PG_PORT,
	database: process.env.PG_DATABASE,
};

const proConfig = {
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
};

console.log(process.env.NODE_ENV);

const pool = new Pool(
	process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
