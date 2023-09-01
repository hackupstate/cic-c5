import { DataTypes } from "sequelize";

const Shoes = (db) => {
	return db.define("shoes", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		size: DataTypes.FLOAT,
		type: DataTypes.STRING,
	});
};

export default Shoes;
