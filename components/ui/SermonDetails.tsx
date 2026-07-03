
const SermonDetails = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-6">
      <div className="inline-flex items-center px-4 py-2 bg-[#E53935] rounded-full">
        <span className="text-[#F5F5F5] text-sm font-bold">Sunday Service</span>
      </div>

      <h3 className="text-2xl lg:text-3xl font-semibold text-black">
        {`"Walking in Faith: Trusting God's Plan"`}
      </h3>

      <p className="text-lg text-[#6B7280] leading-relaxed">
        {`Reverend Henry shares powerful insights on trusting God's timing and walking boldly in faith, even when the path ahead seems uncertain.`}
      </p>

      <button className="bg-[#24195D] text-[#FCFCFC] px-8 py-4 rounded-lg font-bold hover:bg-[#1A0F4A] transition-colors duration-300 flex items-center gap-2">
        Watch Now
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a3 3 0 00-3-3H6a3 3 0 00-3 3v1"
          />
        </svg>
      </button>
    </div>
  );
};

export default SermonDetails;
