import React, { useEffect, useState } from 'react';

const texts = ['', 'Hello world', 'Welcome to my site', 'Enjoy your stay', ''];

const TextFader = ({ onComplete }) => {
  const [fadeComplete, setFadeComplete] = useState(false);  // Whether the fade-out is complete
  const [index, setIndex] = useState(0);  // Index to track the current text
  const [isFadingIn, setIsFadingIn] = useState(true);  // Whether the text is fading in or out

  useEffect(() => {
    // Function to handle the fade-in and fade-out transitions
    const startFadeIn = () => {
      setIsFadingIn(true);  // Trigger fade-in
    };

    const startFadeOut = () => {
      setIsFadingIn(false); // Trigger fade-out
    };

    // Start the fade-in effect as soon as the component is mounted (for first text)
    const fadeInTimer = setTimeout(() => {
      startFadeIn(); // Start fading in
    }, 100);  // Small delay to allow for rendering before fading in

    // After fade-in is complete, trigger fade-out after 2.5 seconds (so that we finish in 8 seconds)
    const fadeOutTimer = setTimeout(() => {
      startFadeOut();  // Start fading out
    }, 1000);  // 2.5 seconds of visible time for the current text

    // Move to the next text after the fade-out completes (1 second after fade-out)
    const nextTextTimer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Move to the next text (cycle)
      setFadeComplete(false);  // Reset fade complete state
    }, 2000);  // Wait 1 second after fade-out before switching to the next text

    // Cleanup the timers when component is unmounted or the index changes
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(nextTextTimer);
    };
  }, [index]);  // Dependency array includes `index`, so it runs on index change (text change)

  useEffect(() => {
    // Trigger the onComplete callback after the last text fades out
    if (index === texts.length - 1 && !isFadingIn) {
      if (onComplete) {
        onComplete();  // Notify parent that animation is complete
      }
    }
  }, [index, isFadingIn, onComplete]);  // Runs when `index` or `isFadingIn` changes

  return (
    <div className="fade-text">
      <h1
        className={`text-slate-700 text-2xl md:text-4xl transition-opacity duration-1000 ${isFadingIn ? 'opacity-100' : 'opacity-0'}`}
      >
        {texts[index]}
      </h1>
    </div>
  );
};

export default TextFader;
