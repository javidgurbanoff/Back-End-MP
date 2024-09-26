import React from "react";

const ReadJournal = () => {
  const posts = [
    {
      category: "ACCESSORIES",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/3.jpg?v=1711695248&width=533",
      date: "MAR 06 2024",
      title: "Selective Styles Help your look",
      author: "ALUKAS SHOPIFY",
    },
    {
      category: "ACCESSORIES",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/2.jpg?v=1711695314&width=533",
      date: "MAR 06 2024",
      title: "How to Style a Quiff",
      author: "ALUKAS SHOPIFY",
    },
    {
      category: "ACCESSORIES",
      imageUrl:
        "https://demo-alukas.myshopify.com/cdn/shop/articles/1.jpg?v=1711695328&width=533",
      date: "MAR 06 2024",
      title: "Christmas Gift Guide",
      author: "ALUKAS SHOPIFY",
    },
  ];

  return (
    <section className="py-12 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className="text-[40px] font-normal text-gray-900 mb-8">
          Read Journal
        </h2>
        <p className="text-lg text-gray-500 mb-10">
          Latest trends and inspirations in fashion design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 transition-transform duration-500 ease-in-out transform group-hover:scale-105 object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-start items-start p-5 text-white z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-[14px] font-normal mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-xl">{post.title}</h3>
                  <a
                    className="text-[15px] underline underline-offset-8 font-normal mt-2"
                    href="#"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  POST BY {post.author} - {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadJournal;
