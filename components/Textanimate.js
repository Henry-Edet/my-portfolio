"use client";

// Import necessary libraries
import { useEffect, useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(SplitText);

const SplitTextComponent = () => {
  // Create a ref to hold the text element
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize the SplitText plugin
    const split = new SplitText(textRef.current, { type: "words, chars" });

    // Apply a GSAP animation to the split text
    gsap.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Clean up the SplitText instance on unmount
    return () => {
      split.revert();
    };
  }, []);

  return (
    <div>
      <h1 ref={textRef}></h1>
    </div>
  );
};

export default SplitTextComponent;
