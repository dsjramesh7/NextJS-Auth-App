import { PASSWORD, USERNAME } from "@/utils/constants";
import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionURL = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.tvet0.mongodb.net/`;
  mongoose
    .connect(connectionURL)
    .then(() => console.log("Auth Database Connected Successfully"))
    .catch((error) => console.log(error));
};

export default connectToDB;
