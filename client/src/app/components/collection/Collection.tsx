"use client";
import React, { useState, useEffect } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  console.log(collections, "collections");
  const getCollections = () => {
    fetch("http://localhost:3001/api/v1/collection")
      .then((res) => res.json())
      .then((data) => setCollections(data)) 
      .catch((err) => console.error("Error fetching collections:", err));
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-[40px]">Popular Collections</h2>
      <div className="w-[1378px] h-[228px] flex">
        {collections.map((item: any, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <img
              className="w-[180px] h-[180px] object-cover"
              src={item.imageURL}
              alt={item.title}
            />
            <h3 className="text-[20px] mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
