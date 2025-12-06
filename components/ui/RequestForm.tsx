"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { PAGE_URL } from "@/constants";
import { SuccessModal } from "@/components/common/SuccessModal";
import { FailedModal } from "@/components/common/FailedModal";
import LoadingSpinner from "../common/LoadingSpinner";
import Link from "next/link";

interface RequestFormProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  phoneNumber: string;
  prayerRequest: string;
  keepAnonymous: boolean;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

const prayerRequestValidationSchema = Yup.object({
  prayerRequest: Yup.string().required("Prayer request is required"),
});

export const RequestForm = ({ onClose }: RequestFormProps) => {
  const [step, setStep] = useState(1);
  const [prayerRequest, setPrayerRequest] = useState("");
  const [keepAnonymous, setKeepAnonymous] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePrayerRequestSubmit = (values: { prayerRequest: string }) => {
    setPrayerRequest(values.prayerRequest);
    setStep(2);
  };

  const handleAnonymousChoice = (isAnonymous: boolean) => {
    setKeepAnonymous(isAnonymous);

    if (isAnonymous) {
      handleSubmit({
        name: "",
        phoneNumber: "",
        prayerRequest,
        keepAnonymous,
      });
    } else {
      setStep(3);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const url = `https://newlife-prayer-wall-backend-1gq0w2ror.vercel.app/prayers/submit`;
      console.log("Submitting to:", url); // DEBUG: Check this logs the correct URL

      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        // Try to get error message from response
        let errorMsg = `Failed to submit prayer request. Status: ${response.status}`;
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMsg = errorData.message;
          } else if (errorData.error) {
            errorMsg = errorData.error;
          }
        } catch {
          // If response is not JSON, use default message
        }

        setErrorMessage(errorMsg);
        setShowFailedModal(true);
        return;
      }

      const data = await response.json();

      // Success - show success modal
      setShowSuccessModal(true);

      // Optionally log success
      if (data) {
        console.log("Prayer request submitted successfully:", data);
      }
    } catch (error) {
      console.error("Error submitting prayer request:", error);

      // Set error message based on error type
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again.";
      setErrorMessage(errorMsg);
      setShowFailedModal(true);
    }
    setIsLoading(false);
  };

  const handleRetry = () => {
    setShowFailedModal(false);
    setErrorMessage("");
    // Form will remain open for user to retry
  };

  // Show success modal if request was successful
  if (showSuccessModal) {
    return (
      <SuccessModal
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    );
  }

  // Show failed modal if request failed
  if (showFailedModal) {
    return (
      <FailedModal
        onClose={() => {
          setShowFailedModal(false);
          setErrorMessage("");
          onClose();
        }}
        onRetry={handleRetry}
        errorMessage={errorMessage}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Form content */}
      <div className="relative z-10 flex w-full max-w-5xl shadow-2xl rounded-lg overflow-hidden my-auto">
        {/* Left Section - Yellow Background - Hidden on mobile */}
        <div className="hidden md:flex relative w-1/2 flex-col items-center justify-center bg-yellow-400 p-6">
          {/* Decorative quotation marks */}
          <div className="absolute left-8 top-16 text-9xl font-serif text-black opacity-40">
            {`"`}
          </div>
          <div className="absolute right-8 bottom-16 text-9xl font-serif text-black opacity-40 rotate-180">
            {`"`}
          </div>

          {/* White card with verse */}
          <div className="relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-3 text-xs font-medium text-black">
              John 5:8 (NIV)
            </div>
            <p className="text-base leading-relaxed text-gray-800">
              {`Then Jesus said to him,`}{" "}
              <span className="font-semibold text-red-600">
                {`"Get up! Pick up your mat and walk."`}
              </span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 border-t border-gray-200 pt-4">
              <Link href={PAGE_URL.HOME}>
                <Image
                  src="/images/nav-logo.png"
                  alt="Newlife Community Baptist Church logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - White Background */}
        <div className="flex w-full md:w-1/2 flex-col bg-white p-4 sm:p-6 md:p-8">
          {/* Logo at top */}
          <div className="mb-4 sm:mb-6 md:mb-8 flex items-center justify-center gap-2">
            <Link href={PAGE_URL.HOME}>
              <Image
                src="/images/nav-logo.png"
                alt="Newlife Community Baptist Church logo"
                width={80}
                height={80}
                className="sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
              />
            </Link>
          </div>

          {/* Main content */}
          <div className="mx-auto w-full max-w-lg">
            <h1 className="mb-2 sm:mb-3 text-2xl sm:text-3xl font-bold text-black">
              Prayer Request
            </h1>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed text-gray-500">
              You&apos;re not alone in this. When we bring our needs before God,
              He meets us with love and power. Share your request and let&apos;s
              believe for His perfect answer.
            </p>

            {/* Step 1: Prayer Request */}
            {step === 1 && (
              <div>
                <Formik
                  validationSchema={prayerRequestValidationSchema}
                  onSubmit={handlePrayerRequestSubmit}
                  initialValues={{
                    prayerRequest: "",
                  }}
                >
                  {({ isValid }) => (
                    <Form>
                      <div className="mb-4">
                        <label
                          htmlFor="prayerRequest"
                          className="block text-black font-medium mb-2"
                        >
                          Enter Prayer Request:
                        </label>
                        <Field
                          as="textarea"
                          id="prayerRequest"
                          name="prayerRequest"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                          placeholder="Share your prayer request..."
                        />
                        <ErrorMessage
                          name="prayerRequest"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-4 w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!isValid}
                      >
                        Next
                        <span className="text-xl">&rarr;</span>
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            )}

            {/* Step 2: Anonymous Choice */}
            {step === 2 && (
              <div>
                <p className="mb-4 text-black font-medium text-sm sm:text-base">
                  Would you like to be kept anonymous?
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white transition duration-400"
                    onClick={() => handleAnonymousChoice(false)}
                    disabled={isLoading}
                  >
                    No
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => handleAnonymousChoice(true)}
                    disabled={isLoading}
                  >
                    Yes
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <span className="">&rarr;</span>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <Formik
                  initialValues={{
                    name: "",
                    phoneNumber: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) =>
                    handleSubmit({
                      ...values,
                      prayerRequest,
                      keepAnonymous: false,
                    })
                  }
                >
                  {({ isValid }) => (
                    <Form className="flex-1 flex flex-col">
                      <div className="space-y-6 flex-1">
                        {/* Name Field */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-black font-medium mb-2"
                          >
                            Enter Name:
                          </label>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            placeholder="Your full name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phoneNumber"
                            className="block text-black font-medium mb-2"
                          >
                            Enter Phone Number:
                          </label>
                          <Field
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            placeholder="Your phone number"
                          />
                          <ErrorMessage
                            name="phoneNumber"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 sm:gap-0 mt-6 sm:mt-8">
                        <button
                          type="button"
                          onClick={onClose}
                          disabled={isLoading}
                          className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-200 text-black rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={!isValid || isLoading}
                          className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                          <span>Submit</span>
                          {isLoading ? (
                            <LoadingSpinner />
                          ) : (
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
