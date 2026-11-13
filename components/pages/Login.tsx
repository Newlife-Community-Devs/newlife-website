/** @format */
"use client";
import { LogIn, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
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
  const [showPassword, setShowPassword] = useState(false);

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
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden"
      >
        {/* Left: Login Section */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col items-center justify-center">
          <Link href={PAGE_URL.HOME}>
            <Image
              src="/images/nav-logo.png"
              alt="Newlife Community Baptist Church logo"
              width={140}
              height={80}
              sizes="140px"
              className="mb-6"
              priority
            />
          </Link>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                role="alert"
                className="w-full max-w-sm mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full max-w-sm space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-ink font-medium mb-1.5 text-sm"
                  >
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent disabled:opacity-60"
                    disabled={isSubmitting}
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-ink font-medium mb-1.5 text-sm"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-11 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent disabled:opacity-60"
                      disabled={isSubmitting}
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-muted hover:text-ink transition-colors"
                      tabIndex={-1}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gold text-body font-semibold py-2.5 px-6 rounded-xl hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                  <LogIn className="w-4 h-4" />
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right: Intro Section */}
        <div className="hidden md:flex w-2/5 bg-gold text-body flex-col items-center justify-center px-10">
          <h2 className="font-heading text-2xl font-bold mb-3">Hello, Admin!</h2>
          <div className="border-t-2 border-body w-10 mb-4"></div>
          <p className="text-sm text-center text-body/80">
            Your prayer wall updates await. Manage your requests with ease.
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default Login;
