"use client";
import Image from "next/image";
import "../globals.css";
import { montserrat, roboto_mono } from "../utils/fonts";
export default function ProductDetails({ product }) {
  return (
    <>
      <div className="flex items-center justify-center pt-20">
        <h1 className={`${roboto_mono.className} text-4xl`}>{product?.name}</h1>
      </div>
      <div className="flex justify-center">
        <div className="pt-12 w-[600px]">
          <h1 className={`${montserrat.className} text-sm text-center `}>
            {product?.description}
          </h1>
        </div>
      </div>
      <div className="px-6 pt-12 "></div>
      <div className="grid grid-cols-3 gap-2 px-6 pt-12 pb-6">
        <div className="px-4">
          <h1 className={`${montserrat.className} text-sm`}>
            {product?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={product?.firstimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
          <h1 className={`${roboto_mono.className} text-sm`}>
            {product?.name}
          </h1>
        </div>
        <div>
          <Image
            src={product?.secondimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 pb-6">
        <div className="px-4">
          <h1 className={`${montserrat.className} text-sm`}>
            {product?.descriptionOne}
          </h1>
        </div>
        <div>
          <Image
            src={product?.thirdimage}
            width="1000"
            height="600"
            alt="Intro Image Lexardi"
            className=""
          />
        </div>
      </div>
    </>
  );
}
