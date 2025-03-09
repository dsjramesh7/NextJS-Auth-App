"use client";

import { registerUserAction } from "@/actions";
import CommonFormElement from "@/components/form-elements/page";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  initialUserRegistrationFormData,
  userRegistrationFormControls,
} from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const [signUpFormData, setSignUpFormData] = useState(
    initialUserRegistrationFormData
  );
  const router = useRouter();

  const handleSignUpBtnValid = () => {
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  };

  const handleSignUp = async () => {
    const result = await registerUserAction(signUpFormData);
    console.log(result);
    if (result?.data) {
      router.push("/sign-in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up
        </h1>
        <form action={handleSignUp} className="space-y-4">
          {userRegistrationFormControls &&
          userRegistrationFormControls.length > 0 ? (
            userRegistrationFormControls.map((formItem) => (
              <div key={formItem.name} className="space-y-2">
                <Label className="text-gray-700 font-medium">
                  {formItem.label}
                </Label>
                <CommonFormElement
                  currentFormItem={formItem}
                  value={signUpFormData[formItem.name]}
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Nothing here</p>
          )}
          <Button
            disabled={!handleSignUpBtnValid()}
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
