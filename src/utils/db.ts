import {AppDataSource} from "../db";

export const connectDB = async () => {
  await AppDataSource.initialize()
    .then(async () => {
      // here you can start to work with your database
      console.log("✅ Databse Connection established");
    })
    .catch((error) =>
      console.log("❌ DB Connection failed with error: " + error)
    );
};

export const closeDB = async () => {
  await AppDataSource.destroy()
    .then(async () => {
      // here you can start to work with your database
      console.log("💾 Databse Connection disconnected");
    })
    .catch((error) =>
      console.log("❌ DB cpnnecion close failed with error: " + error)
    );
};
