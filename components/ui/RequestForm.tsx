"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Send, X } from "lucide-react";
import { API_BASE_URL, PAGE_URL } from "@/constants";
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

const TOTAL_STEPS = 3;

const stepVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
  }),
};

export const RequestForm = ({ onClose }: RequestFormProps) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [prayerRequest, setPrayerRequest] = useState("");
  const [keepAnonymous, setKeepAnonymous] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const goToStep = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  // Escape to close + body scroll lock (matches CustomModal behavior)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Focus trap: keep Tab within the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handlePrayerRequestSubmit = (values: { prayerRequest: string }) => {
    setPrayerRequest(values.prayerRequest);
    goToStep(2);
  };

  const handleAnonymousChoice = (isAnonymous: boolean) => {
    setKeepAnonymous(isAnonymous);

    if (isAnonymous) {
      handleSubmit({
        name: "",
        phoneNumber: "",
        prayerRequest,
        keepAnonymous: isAnonymous,
      });
    } else {
      goToStep(3);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const url = `${API_BASE_URL.PRAYER}prayers/submit`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
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

      setShowSuccessModal(true);
    } catch (error) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection and try again.";
      setErrorMessage(errorMsg);
      setShowFailedModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = useCallback(() => {
    setShowFailedModal(false);
    setErrorMessage("");
  }, []);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Form content */}
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Prayer request form"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10 flex w-full max-w-5xl shadow-2xl rounded-2xl overflow-hidden my-auto bg-white"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close prayer request form"
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-ink hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Section - Gold Background - Hidden on mobile */}
        <div className="hidden md:flex relative w-1/2 flex-col items-center justify-center bg-gold p-6">
          {/* Decorative quotation marks */}
          <div
            aria-hidden="true"
            className="absolute left-8 top-16 text-9xl font-serif text-body opacity-40 select-none"
          >
            &ldquo;
          </div>
          <div
            aria-hidden="true"
            className="absolute right-8 bottom-16 text-9xl font-serif text-body opacity-40 rotate-180 select-none"
          >
            &ldquo;
          </div>

          {/* White card with verse */}
          <div className="relative z-10 w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-3 text-xs font-medium text-body">
              John 5:8 (NIV)
            </div>
            <p className="text-base leading-relaxed text-muted">
              {`Then Jesus said to him,`}{" "}
              <span className="font-semibold text-navy">
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
                  sizes="100px"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - White Background */}
        <div className="flex w-full md:w-1/2 flex-col bg-white p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          {/* Logo at top */}
          <div className="mb-4 sm:mb-6 flex items-center justify-center gap-2">
            <Link href={PAGE_URL.HOME}>
              <Image
                src="/images/nav-logo.png"
                alt="Newlife Community Baptist Church logo"
                width={80}
                height={80}
                sizes="80px"
                className="sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
              />
            </Link>
          </div>

          {/* Main content */}
          <div className="mx-auto w-full max-w-lg">
            <h1 className="mb-2 font-heading text-2xl sm:text-3xl font-bold text-ink">
              Prayer Request
            </h1>
            <p className="mb-4 text-xs sm:text-sm leading-relaxed text-muted">
              You&apos;re not alone in this. When we bring our needs before God,
              He meets us with love and power. Share your request and let&apos;s
              believe for His perfect answer.
            </p>

            {/* Step indicator */}
            <div className="mb-5 flex items-center gap-2" aria-hidden="true">
              {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                    s <= step ? "bg-gold" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="sr-only" aria-live="polite">
              Step {step} of {TOTAL_STEPS}
            </p>

            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1: Prayer Request */}
              {step === 1 && (
                <motion.div
                  key="step-1"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Formik
                    validationSchema={prayerRequestValidationSchema}
                    onSubmit={handlePrayerRequestSubmit}
                    enableReinitialize
                    initialValues={{
                      prayerRequest,
                    }}
                  >
                    {({ isValid }) => (
                      <Form>
                        <div className="mb-4">
                          <label
                            htmlFor="prayerRequest"
                            className="block text-ink font-medium mb-2"
                          >
                            Enter Prayer Request:
                          </label>
                          <Field
                            as="textarea"
                            id="prayerRequest"
                            name="prayerRequest"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
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
                          className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-body hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                          disabled={!isValid}
                        >
                          Next
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Form>
                    )}
                  </Formik>
                </motion.div>
              )}

              {/* Step 2: Anonymous Choice */}
              {step === 2 && (
                <motion.div
                  key="step-2"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="mb-4 text-ink font-medium text-sm sm:text-base">
                    Would you like to be kept anonymous?
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <button
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      onClick={() => handleAnonymousChoice(false)}
                      disabled={isLoading}
                    >
                      No
                    </button>
                    <button
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-body hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      onClick={() => handleAnonymousChoice(true)}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <>
                          Yes
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                  <button
                    onClick={() => goToStep(1)}
                    disabled={isLoading}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg px-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {step === 3 && (
                <motion.div
                  key="step-3"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
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
                              className="block text-ink font-medium mb-2"
                            >
                              Enter Name:
                            </label>
                            <Field
                              type="text"
                              id="name"
                              name="name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
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
                              className="block text-ink font-medium mb-2"
                            >
                              Enter Phone Number:
                            </label>
                            <Field
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
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
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                          <button
                            type="button"
                            onClick={() => goToStep(2)}
                            disabled={isLoading}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gray-200 text-body rounded-xl font-medium hover:bg-gray-300 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={!isValid || isLoading}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold text-body rounded-xl font-semibold hover:bg-gold-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                          >
                            {isLoading ? (
                              <LoadingSpinner />
                            ) : (
                              <>
                                <span>Submit</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
