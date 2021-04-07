const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://renato:123456@172.18.80.45:5432/uberizacao', {
	dialect: 'postgres',
	define: {
		timestamps: false,
		underscored: false,
		underscoredAll: false,
		defaultScope: {
			attributes: {
				exclude: ['createdAt', 'updatedAt', 'created_at', 'updated_at'],
			},
		},
	},
})

const connection = async () => {
	try {
		await sequelize.authenticate();
			console.log('Connection has been established successfully.');
	} catch (error) {
			console.error('Unable to connect to the database:', error);
	}      
}

connection();


module.exports = sequelize;
