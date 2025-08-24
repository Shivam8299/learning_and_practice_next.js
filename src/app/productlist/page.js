'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Page() {
  const [product, setProduct] = useState([]);

  let productData = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let products = await data.json();
    setProduct(products.products);
  };

  useEffect(() => {
    productData();
  }, []);

  let data = product.slice(15, 30); 

  return (
    <div className="px-6 py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className='flex gap-6 justify-center'>
        <Link className="text-2xl font-extrabold text-center text-green-600 mb-10 drop-shadow-sm" href={'/'}>Home</Link>
        <h1 className="text-2xl font-extrabold text-center text-orange-400 mb-10 drop-shadow-sm">
        🛍️ Product page (Client Side)
      </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 mt-4 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-5 flex flex-col"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-700 mb-1 truncate">
              {item.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2 capitalize">
              {item.category}
            </p>
            <p className="text-xl font-bold text-emerald-600 mb-3">
              ${item.price}
            </p>

            <button className="mt-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl shadow hover:opacity-90 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;


