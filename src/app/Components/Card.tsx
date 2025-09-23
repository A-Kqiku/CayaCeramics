import React from "react";
import Image from "next/image";

// Define the Products interface
export interface Products {
  color: string;
  title: string;
  id: number;
  price: number;
  url: string;
}

// Define the props for the Card component
interface CardProps {
  products: Products[]; // An array of products
}

function Card({ products }: CardProps) {
  return (
    <div className="flex flex-wrap flex-row justify-around ">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="border-2 rounded-lg border-sky-300 w-1/6 m-8 flex flex-col justify-center text-center"
          >
            <Image
              src={product.url}
              className=" object-cover w-full rounded-lg"
              width={300}
              height={300}
              key={index}
              alt="card-image"
            />
            <h1>{product.title}</h1>
            <p>{product.color}</p>
            <p className="text-lg antialiased font-semibold text-sky-">
              {product.price}$
            </p>
            <div className="flex justify-end w-full">
              <button className="inline-flex justify-center items-center m-3 border-2 border-sky-500 w-auto min-w-9 rounded-full opacity-70">
                <Image
                  src="/images/plussign.svg"
                  width={15}
                  height={15}
                  alt="menu-logo"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
