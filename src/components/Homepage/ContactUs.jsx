import React, { useEffect, useState, useRef } from "react";

const ContactUs = () => {
 const [progress90, setProgress90] = useState(0);
 const [progress80, setProgress80] = useState(0);
 const ref = useRef(null);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval90 = setInterval(() => {
            setProgress90((prevProgress) => {
              if (prevProgress === 90) clearInterval(interval90);
              return prevProgress < 90 ? prevProgress + 1 : 90;
            });
          }, 10);

          const interval80 = setInterval(() => {
            setProgress80((prevProgress) => {
              if (prevProgress === 80) clearInterval(interval80);
              return prevProgress < 80 ? prevProgress + 1 : 80;
            });
          }, 30);

          observer.disconnect(); // Stop observing once the component is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
 }, []);

 return (
    <div ref={ref} className="flex flex-wrap font-cat justify-between items-center p-12 lg:p-24 bg-gray-100">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 font-dosis text-[#235950]">GET started</h2>
        <p className="mb-4 text-gray-700">
          Embark on your educational journey with Career Valley. Explore our
          website, attend our events, and connect with our knowledgeable team.
          Together, let’s open the doors to a world of possibilities and pave
          the way for your future success.
        </p>
        <div className="flex justify-between gap-x-3 lg:p-20">
          <div className="mb-4">
            <p className="text-[32px] font-anta text-[#235950]">{progress90}%</p>
            <p className="font-bold text-gray-700">Commitment to Quality</p>
            <div className="h-4 w-full bg-gray-200 rounded">
              <div
                className="h-4 bg-[#235950] rounded"
                style={{ width: `${progress90}%` }}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[32px] font-anta text-[#235950]">{progress80}%</p>
            <p className="font-bold text-gray-700">Business Problem Solving</p>
            <div className="h-4 w-full bg-gray-200 rounded">
              <div
                className="h-4 bg-[#235950] rounded"
                style={{ width: `${progress80}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Add more progress bars as needed */}
      </div>
      <div className="w-full md:w-1/2 p-5">
        <form className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-2">
            <input
              type="text"
              placeholder="Name"
              className="flex-grow p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-grow p-2 border rounded"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-[#235950] text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
 );
};

export default ContactUs;
