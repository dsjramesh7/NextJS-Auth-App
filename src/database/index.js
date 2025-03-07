import { PASSWORD, USERNAME } from "@/utils/constants";
import * as mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.kslo1.mongodb.net/`;
  mongoose
    .connect(connectionURL)
    .then(() => console.log("Auth Database Connected Successfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
