const Sequelize = require('sequelize');

// const db = new Sequelize(
// 	process.env.DATABASE_URL || 'postgres://localhost:5432/messenger',
// 	{
// 		logging: false,
// 	},
// );

const db = new Sequelize('messenger', 'postgres', '123456', {
	host: 'localhost',
	dialect: 'postgres',
});

// const sequelize = new Sequelize('postgres://user:postgres:5432/messenger'); // Example for postgres

module.exports = db;
