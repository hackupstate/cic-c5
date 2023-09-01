import { Sequelize } from "sequelize";
import ShoesModel from "./Shoes.js";
import OcassionsModel from "./Ocassions.js";

const db = new Sequelize(`postgres://hackupstate@localhost:5432/shoes`);
const Shoes = ShoesModel(db);
const Ocassions = OcassionsModel(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("Connected to database");

		Shoes.hasMany(Ocassions, { foreignKey: "shoeID" });

		db.sync();
	} catch (error) {
		console.error(error);
		console.error("Panic. DB connection issue");
	}
};

connectToDB();

export { db, Shoes, Ocassions };
