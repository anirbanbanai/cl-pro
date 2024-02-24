import Image from "next/image";
import React, { useState } from "react";
import fabric from "@/assets/json/fabric.json";
import img1 from "../../allimg/febrics/project1.jpg";
import img2 from "../../allimg/febrics/pro2.jpg";
import img3 from "../../allimg/febrics/pro3.jpg";
import img4 from "../../allimg/febrics/pro4.jpg";
import img5 from "../../allimg/febrics/pro5.jpg";
import img6 from "../../allimg/febrics/pro6.jpg";
import img7 from "../../allimg/febrics/pro7.jpg";
import { LuCircleDotDashed } from "react-icons/lu";
import ModelFront from "@/assets/images/model/model_front.png";
import Pants from "@/assets/images/pants/pants_front.png";
import { CoralRed, ImperialRed, NavyBlue, OnyxBlack, White, floral } from "./Colors";
const ColorFebric = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFabric, setSelectedFabric] = useState<string>("White");
  const [fabricList] = useState(fabric);
  return (
    <div>
      {loading && (
        <div className="bg-black/80 fixed w-full h-full z-20 top-0 left-0 flex justify-center items-center flex-col">
          <LuCircleDotDashed className="text-5xl text-white animate-spin duration-100" />
          <p className="text-sm text-white">Please wait...</p>
        </div>
      )}
      
      <div className="grid grid-cols-3 gap-3">
        {fabricList.map((item, index) => (
          <button
            key={index}
            className="cursor-pointer"
            onClick={() => {
              setSelectedFabric(item.color);
              setLoading(true);
            }}
          >
            <Image
              src={item.img}
              alt={item.color}
              width={100}
              height={100}
              className="w-full h-24 rounded-lg cursor-pointer object-cover"
            />
            <div className="w-full flex items-center justify-between text-gray-700 mt-1">
              <p className="text-sm font-semibold">{item.color}</p>
              <p className="text-sm font-normal">৳{item.price}</p>
            </div>
            <p className="m-0 text-xs text-left text-gray-500">
              {item?.type}
              {item?.material?.length > 0 && " • "}
              {item?.material?.join(", ")}
            </p>
          </button>
        ))}
      </div>

      <div className="col-span-6">
        <div className="flex justify-center relative -mt-40">
          <Image
            src={ModelFront}
            alt="Model Front"
            width={420}
            height={200}
            className="h-full"
          />
          <Image
            src={Pants}
            alt="Pants"
            width={420}
            height={200}
            className="absolute h-full"
          />
          {selectedFabric &&
            selectedFabric === "White" &&
            White.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}
          {selectedFabric &&
            selectedFabric === "Imperial Red" &&
            ImperialRed.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}

          {selectedFabric &&
            selectedFabric === "Onyx Black" &&
            OnyxBlack.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}
          {selectedFabric &&
            selectedFabric === "Navy Blue" &&
            NavyBlue.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}
          {selectedFabric &&
            selectedFabric === "Coral Red" &&
            CoralRed.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}
          {selectedFabric &&
            selectedFabric === "Floral" &&
            floral.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="item"
                width={420}
                height={200}
                className="absolute h-full"
              />
            ))}
        </div>
      </div>

    </div>




    //     <div className=" grid grid-cols-2 lg:grid-cols-3 gap-3">

    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img1} alt=''/>

    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img2} alt=''/>

    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img3} alt=''/>

    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img4} alt=''/>
    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img5} alt=''/>
    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img6} alt=''/>
    //     </button>
    //     <button className="border-2   rounded-2xl ">
    //         <Image className='w-full h-full rounded-xl' src={img7} alt=''/>
    //     </button>

    //   </div>
  );
};

export default ColorFebric;
