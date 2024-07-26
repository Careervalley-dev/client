// src/hooks/useIntersectionObserver.jsx
import { useEffect, useRef } from "react";

export const useIntersectionObserver = (targets, callback, options) => {
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (callback) callback(entry);
      });
    }, options);

    const { current: currentObserver } = observer;
    targets.forEach((target) => {
      if (target) currentObserver.observe(target);
    });

    return () => currentObserver.disconnect();
  }, [targets, callback, options]);
};
