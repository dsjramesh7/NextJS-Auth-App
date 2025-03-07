"use client";

import CommonFormElement from "@/components/form-elements/page";
import { Label } from "@/components/ui/label";
import {
  initialUserRegistrationFormData,
  userRegistrationFormControls,
} from "@/utils";
import { useState } from "react";

const SignUpPage = () => {
  const [signUpFormData, setSignUpFormData] = useState(
    initialUserRegistrationFormData
  );
  console.log("signUpFormData", signUpFormData);
  return (
    <div>
      <h1>Registration</h1>
      <form>
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
      </form>
    </div>
  );
};

export default SignUpPage;
