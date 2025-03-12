import { PASSWORD, USERNAME } from "@/utils/constants";
import mongoose from "mongoose";

// const connectToDB = async () => {
//   const url = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.kslo1.mongodb.net/`;
//   await mongoose
//     .connect(url)
//     .then(() => console.log("DataBase Connected Sucessfully"))
//     .catch((error) => console.log(error));
// };

// export default connectToDB;

// import mongoose from "mongoose";

const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to Database");
    return;
  }

  try {
    const url = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.kslo1.mongodb.net/`;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error);
    throw new Error("Database connection failed");
  }
};

export default connectToDB;
