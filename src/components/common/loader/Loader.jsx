import React from 'react';
import './loader.css'; // Ensure this file contains the relevant CSS

const Loader = () => {
    return (
        <div className="overlay">
            {/* <div className="py-12 flex justify-center items-center flex-col">
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-[#235950] rounded-full">
                        <img 
                            src="https://i.postimg.cc/yYsngF3z/Career-Vallet-Logo.png" 
                            className="image-fixed" 
                            width="75px" 
                            alt="Logo" 
                        />
                    </div>
                </div>
                <p className="font-anta font-bold text-[#235950] text-[24px] mt-5">Loading.....</p>
            </div> */}
            <div id="page">
                <div id="container">
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="ring"></div>
                    <div id="h3">
                        <img src="https://i.postimg.cc/yYsngF3z/Career-Vallet-Logo.png" width="60px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
