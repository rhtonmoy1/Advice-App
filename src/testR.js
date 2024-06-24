import React, { useState, useEffect } from "react";

export default function TestR() {
  const [dogImg, setDogImg] = useState("");

  async function fetchDogImg() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogImg(data.message);
    } catch (error) {
      console.error("Failed to fetch Dog image: ", error);
    }
  }
  useEffect(() => {
    fetchDogImg();
  }, []);

  return (
    <div>
      <button onClick={fetchDogImg}>Get Dog Image</button>
      {dogImg && <img src={dogImg} alt="Random Dog" style={{ width: "300px", height: "300px" }} />}
    </div>
  );
}
