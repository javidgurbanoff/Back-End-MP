"use client";
import React, { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories, "categories");
  const getCategories = () => {
    fetch("http://localhost:3001/api/v1/category")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="text-[40px]">Popular Categories</h2>
      <div className="w-[1378px] h-[228px] flex">
        {categories.map((item: any, index) => (
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

export default Categories;
