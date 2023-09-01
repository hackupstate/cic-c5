import { DataTypes } from "sequelize";

const Ocassions = (db) => {
	return db.define("ocassions", {
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		shoeID: DataTypes.INTEGER,
	});
};

export default Ocassions;
