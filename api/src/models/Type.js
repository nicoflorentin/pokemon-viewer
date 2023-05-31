const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"Type",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ freezeTableName: true, timestamps: false }
	);
};
