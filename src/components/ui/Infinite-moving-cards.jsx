// InfiniteMovingCards.jsx
import React, { useEffect, useState, useRef } from 'react';
import '../../App.css';
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "bg-black",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const baseStyles = {
    scroller: `relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`,
    scrollerList: `flex min-w-full shrink-0 gap-20 py-4 w-max flex-nowrap
      ${start ? "animate-scroll" : ""} 
      ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`,
    card: `w-[300px] h-[200px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] shadow-[0_0_40px_20px_rgba(168,85,247,0.4)]`,
    quote: "relative z-20 text-[20px] leading-[1.6] text-gray-100 font-normal font-[700]",
    authorContainer: "relative z-20 mt-4 text-[14px] flex items-center",
  };

  return (
    <div
      ref={containerRef}
      className={baseStyles.scroller}
    >
      <ul
        ref={scrollerRef}
        className={baseStyles.scrollerList}
      >
        {items.map((item, idx) => (
          <li
            className={baseStyles.card}
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))"
            }}
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className={baseStyles.quote}>{item.quote}</span>
              <div className={baseStyles.authorContainer}>
                <span className="flex flex-col gap-1">
                  <span className={baseStyles.authorText}>{item.name}</span>
                  <span className={baseStyles.authorText}>{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};