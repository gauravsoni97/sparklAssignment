import React, { useEffect, useState } from "react";
import "./TextEffect.css";

const TextEffect = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const textContent = longText.split(" ");
    const initialWords = textContent.map((word) => ({ word, active: false }));
    setWords(initialWords);

    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      const updatedWords = initialWords.map((word, index) => ({
        ...word,
        active: scrollDistance >= index * 20,
      }));
      setWords(updatedWords);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span className={word.active ? "active" : ""}>{word.word}</span>
            {index !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default TextEffect;
