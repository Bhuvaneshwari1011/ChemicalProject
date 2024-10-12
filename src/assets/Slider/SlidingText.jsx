import React, { useEffect, useState } from "react";
import "./SlidingText.css";

const text = "MANJUCHEMTECH";

const SlidingText = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!isDeleting && displayedText.length < text.length) {
          setDisplayedText((prev) => prev + text[displayedText.length]);
        } else if (isDeleting && displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        }

        if (displayedText.length === text.length) {
          setIsDeleting(true);
        }

        if (isDeleting && displayedText.length === 0) {
          setIsDeleting(false);
        }
      },
      isDeleting ? 150 : 300
    );

    return () => clearInterval(interval);
  }, [displayedText, isDeleting]);

  return (
    <div
      className="text-center"
      style={{ background: "#000542", padding: "20px", color: "white" }}
    >
      <div className="sliding-container">
        <div className="sliding-text">
          <span className="slide display-1">{text.charAt(0)}</span>{" "}
          {displayedText
            .slice(1)
            .split("")
            .map((letter, index) => (
              <span key={index} className="slide display-1">
                {letter}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
