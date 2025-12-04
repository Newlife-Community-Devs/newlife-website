/** @format */
"use client";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { PAGE_URL } from "@/constants";

interface LoginValues {
  username: string;
  password: string;
}

const initialValues: LoginValues = {
  username: "",
  password: "",
};

const validateSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password required"),
});

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      setError(""); // Clear any previous errors

      const result = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false, // Don't redirect automatically
      });

      if (result?.error) {
        // Authentication failed
        setError("Invalid username or password");
        setSubmitting(false);
        return;
      }

      if (result?.ok) {
        // Authentication successful
        router.push("/prayer-request/admin/dashboard");
        return;
      }

      setSubmitting(false);
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-white/30 backdrop-blur-sm p-4 rounded-lg">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white shadow-2xl rounded-2xl flex w-2/3 max-w-4xl overflow-hidden">
          {/* Left: Login Section */}
          <div className="w-3/5 p-8 flex flex-col items-center justify-center">
            <Link href={PAGE_URL.HOME}>
              <Image
                src="/images/logo1.png"
                alt="Church Logo"
                width={200}
                height={200}
                className="mb-6"
              />
            </Link>

            {/* Error Message */}
            {error && (
              <div className="w-full max-w-sm mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <Formik
              initialValues={initialValues}
              validationSchema={validateSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-full max-w-sm space-y-4">
                  <div>
                    <Field
                      name="username"
                      type="text"
                      placeholder="Username"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={isSubmitting}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm mt-0.5 text-left"
                    />
                  </div>

                  <div>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={isSubmitting}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1 text-left"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-50 flex items-center justify-center m-auto bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                    <span className="text-xl ml-2">
                      <LogIn />
                    </span>
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Intro Section */}
          <div className="w-2/5 bg-yellow-400 text-black flex flex-col items-center justify-center px-10">
            <h2 className="text-2xl font-bold mb-2">Hello, Admin!</h2>
            <div className="border-t-2 border-black w-10 mb-3"></div>
            <p className="text-sm text-center">
              Your prayer wall updates await. Manage your requests with ease.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
