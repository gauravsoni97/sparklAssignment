import React, { useEffect, useState } from "react";
import "./TextEffect.css"; // Import your CSS file for styling

const TextEffect = () => {
  const [spans, setSpans] = useState([]);

  useEffect(() => {
    const textContent = longText.split(""); // Split longText into array of characters
    const initialSpans = textContent.map((char) => ({ char, active: false }));
    setSpans(initialSpans);

    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const updatedSpans = initialSpans.map((span, index) => ({
        ...span,
        active: scrollDistance >= index * 2.95,
      }));
      setSpans(updatedSpans);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  const longText = `The aim of Sparkl is to provide Best Learning and Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Impedit quo laboriosam numquam molestiae accusantium incidunt odit ex inventore 
  ullam, neque, eius itaque, nostrum provident? Enim natus eum aliquid voluptates 
  impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo 
  laboriosam numquam molestiae accusantium incidunt odit ex inventore ullam, neque, 
  eius itaque, nostrum provident? Enim natus eum aliquid voluptates impedit. Lorem 
  ipsum dolor sit amet consectetur adipisicing elit. Impedit quo laboriosam numquam 
  molestiae accusantium incidunt odit ex inventore ullam, neque, ru nostrum provident? Enim natus 
  eum aliquid voluptates impedit.`;

  return (
    <div className="TextEffectSection">
      <h4 className="TextEffectHeading">Unlock your true potential</h4>
      <p className="text">
        {spans.map((span, index) => (
          <span key={index} className={span.active ? "active" : ""}>
            {span.char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TextEffect;
