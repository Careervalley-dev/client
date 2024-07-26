// Orbit.js
import React from "react";
import Student from "../../../assets/student.svg";
import "./orbit.css";

const Orbit = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="">
        {/* Outermost dashed border circle */}
        <div className="w-[550px] h-[550px] relative border-4 border-dashed border-[#2A675C] rounded-full flex items-center justify-center">
          <div className="w-[450px] h-[450px] relative border-4 border-dashed border-[#2A675C] rounded-full flex items-center justify-center">
            <div className="w-[350px] h-[350px] relative border-4 border-dashed border-[#2A675C] rounded-full flex items-center justify-center">
              <div className="w-[250px] h-[250px] relative border-4 border-dashed border-[#2A675C] rounded-full flex items-center justify-center">
                <div className="w-[150px] h-[150px] relative border-4 border-dashed border-[#2A675C] rounded-full flex items-center justify-center">
                  <div className="p-8">
                    <img src={Student} alt="Student" />
                  </div>

                  {/* Moving elements */}
                  <div className="absolute w-full h-full flex items-center justify-center">
                    {/* <div className="absolute top-[20px] left-[30px]">
                  <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                    <p>B.C.A</p>
                  </div>
                </div> */}
                    <div className="absolute right-[-40px] orbit-animation reverse-animation">
                      <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                        <p>L.L.B</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Moving elements */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="absolute top-[-10px] left-[30px]">
                    <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                      <p>B.A</p>
                    </div>
                  </div>
                  <div className="absolute bottom-[-10px] right-[20px] orbit-animation reverse-animation">
                    <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                      <p>B.C.A</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moving elements */}
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className="absolute bottom-[10px] left-[30px]">
                  <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                    <p>B.Sc</p>
                  </div>
                </div>
                <div className="absolute top-[10px] right-[30px] orbit-animation reverse-animation">
                  <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                    <p>B.Com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moving elements */}
            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="absolute left-[-40px]">
                <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                  <p>B.B.A</p>
                </div>
              </div>
              <div className="absolute right-[-40px] orbit-animation reverse-animation">
                <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                  <p>M.B.A</p>
                </div>
              </div>
            </div>
          </div>

          {/* Moving elements */}
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="absolute top-[-20px]">
              <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                <p>B.Tech</p>
              </div>
            </div>
            <div className="absolute bottom-[-20px] orbit-animation reverse-animation">
              <div className="px-4 py-2 border-2 rounded-md border-black bg-white">
                <p>M.Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
