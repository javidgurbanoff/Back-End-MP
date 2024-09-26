import React from "react";

const CustomReview = () => {
  const reviews = [
    {
      name: "Donald Duck",
      reviewTitle: "Alukas is my favourite store",
      reviewText:
        "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
      rating: 5,
    },
    {
      name: "Niamh Oxley",
      reviewTitle: "Beautiful products",
      reviewText:
        "Beautiful clothes. I always get compliments. Good quality and items wash well. Products and designs and such great quality.",
      rating: 5,
    },
    {
      name: "Mary Green",
      reviewTitle: "Lovely products",
      reviewText:
        "Great products and designs and such great quality, they always wash up well no matter how many times I wash them.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_testi.jpg?v=1711954099')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[40px] font-normal text-gray-900 mb-8">
          Customer Review
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-black text-white flex items-center justify-center rounded-full">
                  <span className="text-xl">“</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {review.reviewTitle}
              </h3>
              <p className="text-gray-600 mb-4">{review.reviewText}</p>
              <p className="text-sm font-bold text-gray-700 mb-2">
                - {review.name} -
              </p>
              <div className="flex justify-center">
                {Array(review.rating).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927C9.348 2.036 10.652 2.036 10.951 2.927l1.38 4.26h4.478c1.073 0 1.516 1.285.65 1.86l-3.617 2.51 1.38 4.259c.299.891-.755 1.637-1.54 1.07L10 13.348l-3.615 2.512c-.785.566-1.838-.18-1.54-1.07l1.38-4.26L2.61 9.048c-.866-.575-.423-1.86.65-1.86h4.478l1.38-4.26z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomReview;
