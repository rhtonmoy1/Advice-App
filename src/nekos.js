import React, { useState, useEffect } from "react";

export default function Nekos() {
  const [nekosImg, setNekosImg] = useState("");

  async function fetchNekos() {
    try {
      const response = await fetch("https://nekos.best/api/v2/neko");
      const data = await response.json();
      setNekosImg(data.results[0].url); // Corrected to set the image URL correctly
    } catch (error) {
      console.error("Failed to fetch Nekos image: ", error);
    }
  }

  useEffect(() => {
    fetchNekos();
  }, []);

  return (
    <div>
      <button onClick={fetchNekos}>Get Nekos Image</button>
      <img
          src={nekosImg}
          alt="Random Nekos"
          style={{ width: "300px", height: "300px" }} // Set fixed size using inline styles
        />
    </div>
  );
}
