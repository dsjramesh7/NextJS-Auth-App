"use server";
import { PASSWORD, USERNAME } from "@/utils/constants";
import * as mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.kslo1.mongodb.net/`;
  await mongoose
    .connect(url)
    .then(() => console.log("Database Connected Successfully"))
    .catch((error) => console.error("Database Connection Error:", error));
};

export default connectToDB;
