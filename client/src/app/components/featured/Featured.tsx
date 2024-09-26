"use client";
import React, { useState, useEffect } from "react";

const Featureds = () => {
  const [featureds, setFeatureds] = useState([]);
  console.log(featureds, "featureds");
  const getFeatureds = () => {
    fetch("http://localhost:3001/api/v1/collection")
      .then((res) => res.json())
      .then((data) => setFeatureds(data))
      .catch((err) => console.error("Error fetching featureds:", err));
  };

  useEffect(() => {
    getFeatureds();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-[40px]">Featured Products</h2>
      <div className="w-[1378px] h-[228px] flex">
        {featureds.map((item: any, index) => (
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

export default Featureds;
