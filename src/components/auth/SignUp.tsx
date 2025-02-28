"use client";
import React, { useActionState } from "react";
import Form from "next/form";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const initialState = {
  message: "",
};

type SignUpProps = {
  action: (
    prevState: any,
    fromData: FormData
  ) => Promise<{ message: string | undefined }>;
};

const SignUp = ({ action }: SignUpProps) => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(action, initialState);

  const handleSigninDirect = () => {
    router.push("/auth/sign-in");
  };

  return (
    <Form
      action={formAction}
      className="max-w-md mx-auto my-32 p-8 bg-white rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold text-center mb-2">Create an account</h1>

      <p className="text-center text-sm text-gray-600 mb-6">
        sign up now and get the items you want with promos
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
            Already have an account?{" "}
            <span>
              <button
                className="underline cursor-pointer"
                onClick={handleSigninDirect}
              >
                Sign in
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
              CREATING ACCOUNT...
            </React.Fragment>
          ) : (
            "CREATE ACCOUNT"
          )}
        </button>

        {state?.message && state.message.length > 0 && (
          <p className="text-center text-sm text-red-600">{state.message}</p>
        )}
      </div>
    </Form>
  );
};

export default SignUp;
