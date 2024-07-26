import React, { useEffect, useRef, useState } from "react";
import './testmonials2.css';

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setShowAnimation(true);
        setCurrentImg(i);
      } else {
        setShowAnimation(false);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {   // eslint-disable-next-line
        observer.unobserve(ref.current);
      }
    };            // eslint-disable-next-line
  }, [ref]); 
  return (
    <div className={`screen-text ${showAnimation ? 'text-visible' : ""}`} ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className=" only-mobile mobile-mockup-wrapper">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_image}
              alt=""
              className="mobile-screen-img"
              key={screen.mobile_image}
            />
          </div>
        </div>
      </div>
      <div className="screen-desc">{screen.desc}</div>
    </div>
  );
};

export default ScreenText;
