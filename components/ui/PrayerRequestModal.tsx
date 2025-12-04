"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomModal from "../common/CustomModal";
import Image from "next/image";
import Link from "next/link";
import { PAGE_URL } from "@/constants";

interface PrayerRequestModalProps {
  show: boolean;
  onHide: () => void;
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
  prayerRequest: Yup.string().required("Prayer request is required"),
  keepAnonymous: Yup.boolean(),
});

const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  show,
  onHide,
}) => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const initialValues: FormValues = {
    name: "",
    phoneNumber: "",
    prayerRequest: "",
    keepAnonymous: false,
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Prayer request submitted:", values);
    // Handle form submission here
    onHide();
  };

  return (
    <CustomModal show={show} onHide={onHide} size="lg">
      <div className="flex">
        {/* Left Panel - Scripture Card */}
        <div className="w-full bg-yellow-400 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm">
            {/* Scripture Reference */}
            <div className="text-black text-sm font-medium mb-4">
              John 5:8 (NIV)
            </div>

            {/* Scripture Verse */}
            <div className="text-black text-lg leading-relaxed mb-6">
              Then Jesus said to him,
              <span className="text-red-600 font-semibold">
                {" "}
                {`"Get up! Pick up your mat and walk."`}
              </span>
            </div>

            {/* Church Logo */}
            <div className="flex items-center space-x-3">
              <Link href={PAGE_URL.HOME}>
                <Image
                  src="/images/nav-logo.png"
                  alt="Newlife"
                  width={160}
                  height={90}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - Prayer Request Form */}
        <div className="w-full bg-white p-8 flex flex-col">
          {/* Header */}
          <div className="items-center space-x-3 mb-6">
            <Link href={PAGE_URL.HOME}>
              <Image
                src="/images/nav-logo.png"
                alt="Newlife"
                width={160}
                height={90}
              />
            </Link>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-black mb-4">Prayer Request</h2>

          {/* Description */}
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            {`You're not alone in this. When we bring our needs before God, He
            meets us with love and power. Share your request and let's believe
            for His perfect answer.`}
          </p>

          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
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

                  {/* Phone Number Field */}
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

                  {/* Prayer Request Field */}
                  <div>
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

                  {/* Anonymous Toggle */}
                  <div className="flex items-center space-x-3">
                    <label
                      htmlFor="keepAnonymous"
                      className="text-black font-medium"
                    >
                      Keep me anonymous
                    </label>
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="keepAnonymous"
                        checked={isAnonymous}
                        onChange={(e) => {
                          setIsAnonymous(e.target.checked);
                          setFieldValue("keepAnonymous", e.target.checked);
                        }}
                        className="sr-only"
                      />
                      <div
                        className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                          isAnonymous ? "bg-yellow-400" : "bg-gray-300"
                        }`}
                        onClick={() => {
                          setIsAnonymous(!isAnonymous);
                          setFieldValue("keepAnonymous", !isAnonymous);
                        }}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                            isAnonymous ? "translate-x-6" : "translate-x-0.5"
                          } mt-0.5`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-8">
                  <button
                    type="button"
                    onClick={onHide}
                    className="flex-1 px-6 py-3 bg-gray-200 text-black rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Submit</span>
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
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </CustomModal>
  );
};

export default PrayerRequestModal;
