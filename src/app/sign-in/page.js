"use client";
import { loginUserAction } from "@/actions";
import CommonFormElement from "@/components/form-elements/page";
import { Label } from "@/components/ui/label";
import { initialUserLoginFormData, userLoginFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
  const [loginFormData, setLoginFormData] = useState(initialUserLoginFormData);
  const router = useRouter();
  const handleLogin = async () => {
    const result = await loginUserAction(loginFormData);
    console.log(result);
    if (result?.success) {
      router.push("/");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-gray-800 p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white">Sign In</h2>
        <form action={handleLogin} className="space-y-4">
          {userLoginFormControls.map((controlItem) => (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentFormItem={controlItem}
                value={loginFormData[controlItem.name]}
                onChange={(e) => {
                  setLoginFormData({
                    ...loginFormData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500 focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Don&apost have an account?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
