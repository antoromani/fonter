import React, { useEffect, useState } from "react";
import "../../../styles/components.css";

const StylesTab: React.FC = () => {
  const [randomPhrase, setRandomPhrase] = useState<string>("");

  useEffect(() => {
    const fetchRandomPhrase = async () => {
      const basePath = "/assets/texts/";
      const files = [
        "phrase1.txt",
        "phrase2.txt",
        "phrase3.txt",
        "phrase4.txt",
        "phrase5.txt",
        "phrase6.txt",
        "phrase7.txt",
        "phrase8.txt",
        "phrase9.txt",
        "phrase10.txt",
      ];
      const randomFile = files[Math.floor(Math.random() * files.length)];
      const response = await fetch(basePath + randomFile);
      const text = await response.text();
      setRandomPhrase(text);
    };

    fetchRandomPhrase();
  }, []);

  const formatPhrase = (phrase: string) => {
    const words = phrase.split(" ");
    if (words.length < 2) return <span style={{ fontSize: "2.5rem" }}>{phrase}</span>;

    const lastTwoWords = words.slice(-2).join(" ");
    const rest = words.slice(0, -2).join(" ");

    return (
      <>
        <span style={{ fontSize: "2.5rem" }}>{rest} </span>
        <span style={{ fontSize: "1rem" }}>{lastTwoWords}</span>
      </>
    );
  };

  return (
    <div className="styles-tab">
      <p className="random-phrase">{formatPhrase(randomPhrase)}</p>
    </div>
  );
};

export default StylesTab;
