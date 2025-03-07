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
  // console.log("signUpFormData", signUpFormData);

  const handleSignUp = async () => {
    const result = await registerUserAction(signUpFormData);
    console.log(result);
    if (result?.data) {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action={handleSignUp}>
        {userRegistrationFormControls &&
        userRegistrationFormControls.length > 0 ? (
          userRegistrationFormControls.map((formItem, index) => {
            return (
              <div key={formItem.name}>
                <Label>{formItem.label}</Label>
                <CommonFormElement
                  currentFormItem={formItem}
                  value={signUpFormData[formItem.name]}
                  onChange={(e) =>
                    setSignUpFormData({
                      ...signUpFormData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </div>
            );
          })
        ) : (
          <p>Nothing here</p>
        )}
        <Button
          disabled={!handleSignUpBtnValid()}
          className="disabled:opacity-65"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
