"use server";
import connectToDB from "@/database";
import User from "@/models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
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
    console.error("Error in registerUserAction:", error);
    return {
      success: false,
      message: error.message || "Something went wrong! Try again later",
    };
  }
};

//Login User Action
export const loginUserAction = async (formData) => {
  await connectToDB();
  try {
    const { email, password } = formData;

    // checking if user email is present or not
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        success: false,
        messasge: "User Does not exist! Sign Up Now",
      };
    }

    //checking if password is valid or not
    const checkPassword = await bcryptjs.compare(password, checkUser.password);
    if (!checkPassword) {
      return {
        success: false,
        message: "Password is incorrect check the password",
      };
    }

    //need to create token data
    const createdTokenData = {
      id: checkUser._id,
      userName: checkUser.userName,
      email: checkUser.email,
    };

    const token = jwt.sign(createdTokenData, "DEFAULT_KEY", {
      expiresIn: "1d",
    });
    const getCookies = cookies();
    getCookies.set("token", token);
    return {
      success: true,
      message: "Login is Successful",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "something went wrong",
    };
  }
};

//for fetching the user action
export const fetchAuthUserAction = async () => {
  await connectToDB();
  try {
    const getCookies = cookies();
    const token = (await getCookies.get("token")?.value) || "";
    if (token === "") {
      return {
        success: false,
        message: "Token is invalid",
      };
    }
    const decodedToken = jwt.verify(token, "DEFAULT_KEY");
    const getUserInfo = await User.findOne({ _id: decodedToken.id });

    if (getUserInfo) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(getUserInfo)),
      };
    } else {
      return {
        success: false,
        message: "Something went wrong while retriving user data",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong try again later",
    };
  }
};
