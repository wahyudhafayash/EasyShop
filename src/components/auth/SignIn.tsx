"use client";
import React, { useActionState } from "react";
import Form from "next/form";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

type SignInProps = {
  action: (
    prevState: any,
    fromData: FormData
  ) => Promise<{ message: string | undefined }>;
};

const SignIn = ({ action }: SignInProps) => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(action, initialState);

  const handleCreateAccount = () => {
    router.push("/auth/sign-up");
  };

  return (
    <Form
      action={formAction}
      className="max-w-md mx-auto my-32 p-8 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold text-center mb-2">Welcome Back!</h1>

      <p className="text-center text-sm text-gray-600 mb-6">
        sign in to access your account.
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
            placeholder="Create your password"
          />
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-700 mb-2">
            New to EasyShop?
            <span>
              {" "}
              <button
                className="underline cursor-pointer"
                onClick={handleCreateAccount}
              >
                Create account
              </button>
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full bg-black text-white py-3 rounded-md hover:bg-black/90 transition-colors font-medium flex items-center justify-center gap-2 ${
            isPending ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isPending ? (
            <React.Fragment>
              <Loader2 className=" h-4 w-4 animate-spin" />
              SiGNING IN...
            </React.Fragment>
          ) : (
            "SIGN IN"
          )}
        </button>

        {state?.message && state.message.length > 0 && (
          <p className="text-center text-sm text-red-600">{state.message}</p>
        )}
      </div>
    </Form>
  );
};

export default SignIn;
