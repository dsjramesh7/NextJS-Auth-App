import { PASSWORD, USERNAME } from "@/utils/constants";
import * as mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@authapp.w9zf1.mongodb.net/`;
  mongoose
    .connect(url)
    .then(() => console.log("Auth Database Connected Successfully"))
    .catch((error) => console.error("Database Connection Error:", error));
};

export default connectToDB;
