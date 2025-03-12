import connectToDB from "@/database";
import User from "@/models";

// Create User Actions(Registration of user)
export const registerUserAction = async (formData) => {
  await connectToDB();
  try {
    const { userName, email, password } = formData;
    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return {
        success: false,
        message: "User Already Present! Try with differen Email",
      };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newlyCreatedUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    const savedUserData = await newlyCreatedUser.save();

    if (savedUserData) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(savedUserData)),
      };
    } else {
      return {
        success: false,
        message: "Couldn't able to retrieve Data",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong! Try again later",
    };
  }
};
