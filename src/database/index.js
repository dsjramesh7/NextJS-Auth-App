import { PASSWORD, USERNAME } from "@/utils/constants";
import * as mongoose from "mongoose";

const connectToDB = async () => {
  const url = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.kslo1.mongodb.net/`;
  mongoose
    .connect(url)
    .then(() => console.log("DataBase Connected Sucessfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
