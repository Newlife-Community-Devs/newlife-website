import React from "react";

const LifeProcessSection = () => {
  return (
    <section className="w-full bg-[#FCFCFC] py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-8">
          Life Development Process
        </h2>

        <p className="text-xl text-black text-center mb-12 max-w-4xl mx-auto">
          Our intentional pathway for spiritual growth and development, designed
          to guide every believer from salvation to leadership
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Module 100: Membership */}
          <div className="bg-white border border-[#0F00B2] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[rgba(15,0,178,0.12)] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#0F00B2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6B7280] font-medium">
                  MODULE 100: Membership
                </p>
                <h3 className="text-lg font-semibold text-[#0F00B2]">
                  SALVATION
                </h3>
                <p className="text-sm text-[#2E2E2E] font-medium">
                  Knowing Christ
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] text-center">
              To build beliefs and some priorities and membership covenant.
            </p>
            <div className="w-full h-1 bg-[rgba(15,0,178,0.4)] rounded-full mt-4"></div>
          </div>

          {/* Module 200: Maturity */}
          <div className="bg-white border border-[#FFAA00] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[rgba(255,170,0,0.12)] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#FFAA00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6B7280] font-medium">
                  MODULE 200: Maturity
                </p>
                <h3 className="text-lg font-semibold text-[#FFAA00]">
                  TRANSFORMATION
                </h3>
                <p className="text-sm text-[#2E2E2E] font-medium">
                  Growing in Christ
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] text-center">
              To build habits and basic character.
            </p>
            <div className="w-full h-1 bg-[rgba(255,170,0,0.4)] rounded-full mt-4"></div>
          </div>

          {/* Module 300: Ministry */}
          <div className="bg-white border border-[#D62828] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[rgba(214,40,40,0.12)] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#D62828]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6B7280] font-medium">
                  MODULE 300: Ministry
                </p>
                <h3 className="text-lg font-semibold text-[#D62828]">
                  DEVELOPMENT
                </h3>
                <p className="text-sm text-[#2E2E2E] font-medium">
                  Habit & Skill
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] text-center">
              To deepen basic habits and development habits & skills.
            </p>
            <div className="w-full h-1 bg-[rgba(214,40,40,0.4)] rounded-full mt-4"></div>
          </div>

          {/* Module 400: Leadership */}
          <div className="bg-white border border-[#24195D] rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-[rgba(36,25,93,0.12)] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#24195D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#6B7280] font-medium">
                  MODULE 400: Leadership
                </p>
                <h3 className="text-lg font-semibold text-[#24195D]">
                  LEADERSHIP
                </h3>
                <p className="text-sm text-[#2E2E2E] font-medium">
                  Skill & Service
                </p>
              </div>
            </div>
            <p className="text-sm text-[#6B7280] text-center">
              To continue building Christlike skill and sharing Christ by word
              and deed.
            </p>
            <div className="w-full h-1 bg-[rgba(36,25,93,0.4)] rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeProcessSection;
