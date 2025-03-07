import { PASSWORD, USERNAME } from "@/utils/constants";

const connectToDB = async () => {
  const connectionURL = `mongodb+srv://${USERNAME}:${PASSWORD}@authclusterapp.tvet0.mongodb.net/`;
};
