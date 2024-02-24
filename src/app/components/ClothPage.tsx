/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { DrawerWithNavigation } from "./Drawer";
import { SunDrayer } from "./SunDrawer";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  LifebuoyIcon,
  PaintBrushIcon,
  ScissorsIcon,
} from "@heroicons/react/16/solid";
import whiteCustom from "@/assets/json/white.json";
import fabric from "@/assets/json/fabric.json";
import ModelFront from "@/assets/images/model/model_front.png";
import Pants from "@/assets/images/pants/pants_front.png";
import Halfbottom from "@/assets/images/white/slimfit2.png";
import React, { useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Accessories from "./Accessories";
import { FcLike } from "react-icons/fc";
import { CiShoppingCart } from "react-icons/ci";
import {
  CoralRed,
  Fullhand1,
  Fullhand2,
  ImperialRed,
  NavyBlue,
  OnyxBlack,
  White,
  buk1,
  buk2,
  buk3,
  buk4,
  floral,
  hafhand1,
  hafhand2,
  hafhand3,
  hafhand4,
  pocket1,
  pocket2,
  tophand1,
  tophand2,
  tophand3,
} from "./Colors";
import {
  bottamItems,
  bukItems,
  fullhandItems,
  halfItems,
  pocketItems,
  sholderItems,
  tophandItems,
} from "./Test";
import { ResponseDrawerWithNavigation } from "./ResponDrawer";

const ClothPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFabric, setSelectedFabric] = useState<string>("White");
  const [fabricList] = useState(fabric);
  const [whiteList] = useState(whiteCustom);
  // Fullhand1

   const data = [
    {
      label: "Febric",
      value: "Febric",
      icon: LifebuoyIcon,
      desc: (
        <div>
          <div className="md:grid grid-cols-2 xl:grid-cols-3 gap-3">
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
                  width={50}
                  height={50}
                  className=" sm:w-full mx-auto  h-24 rounded-lg cursor-pointer object-cover"
                />
                <div className="max-md-hidden md:w-full flex items-center justify-between text-gray-700 mt-1">
                  <p className="text-sm font-semibold">{item.color}</p>
                  <p className="text-sm font-normal">৳{item.price}</p>
                </div>
                <p className="m-0 text-xs text-left text-gray-500 max-md-hidden">
                  {item?.type}
                  {item?.material?.length > 0 && " • "}
                  {item?.material?.join(", ")}
                </p>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: "Style",
      value: "Style",
      icon: ScissorsIcon,
      desc: (
        <div>
          <div className=" text-center">
            <h2 className="text-sm font-semibold">Fullhand Items:</h2>
            <div className="md:flex justify-center items-center mt-5 gap-4 mb-5 mx-auto">
              {fullhandItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.subType}
                    width={100}
                    height={100}
                    className="mx-auto md:max-w-48 h-24 rounded-lg cursor-pointer object-cover"
                  />
                </button>
              ))}
            </div>

            <h2 className="text-sm font-semibold">HalfHand Items:</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-5">
              {halfItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className="border-2 "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
            <h2 className="text-sm font-semibold">Buk Items:</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-5">
              {bukItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className="border-2 "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
            <h2 className="text-sm font-semibold">pocket Items:</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-5">
              {pocketItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className="border-2 "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
            <h2 className="text-sm font-semibold">Sholder Items:</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-5">
              {sholderItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className="border-2 "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
            <h2 className="text-sm font-semibold">Bottam Items:</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-5">
              {bottamItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className="border-2 "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
            <h2 className="text-sm font-semibold">Tophand Items:</h2>
            <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
              {tophandItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedFabric(item.subType);
                    setLoading(true);
                  }}
                >
                  <img
                    className=" "
                    key={item.id}
                    src={item.src}
                    alt={`Fullhand ${item.id}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Accessories",
      value: "Accessories",
      icon: PaintBrushIcon,
      desc: <Accessories />,
    },
  ];

  return (
   <main>

     <Tabs value="Febric">
      <div className="grid grid-cols-4 max-h-screen">
        <div className="mt-5 ">
          <div className="flex justify-center gap-2 ">
            <h1 className="text-4xl text-center">
              <DrawerWithNavigation /> 
            </h1>
          </div>
          <TabsBody className="overflow-y-scroll h-screen " placeholder={"g"}>
            {data.map(({ value, desc }) => (
              <TabPanel className="" key={value} value={value}>
               <div className="">
               {desc}
               </div>
               {/* <div className="md:hidden">
               <ResponseDrawerWithNavigation/>
               </div> */}
              </TabPanel>
            ))}
          </TabsBody>
        </div>

        <div className=" col-span-2 bg-gray-200 grid grid-cols-2 p-12">
          <div className="flex justify-center relative -mt-5">
            <Image
              src={ModelFront}
              alt="Model Front"
              width={420}
              height={200}
              className="absolute h-full max-w-72"
            />
            <Image
              src={Pants}
              alt="Pants"
              width={420}
              height={200}
              className="absolute h-full max-w-72"
            />
            <Image
              src={
                "https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/995_fabric/front/necklines_classic+close_standard.png"
              }
              alt="Pants"
              width={420}
              height={200}
              className="absolute h-full max-w-72"
            />
            <Image
              src={
                "https://d2yo8p89bpsqlq.cloudfront.net/3d/woman/blouse/995_fabric/front/fit_slim+bottom_cut_modern+close_standard.png"
              }
              alt="Pants"
              width={420}
              height={200}
              className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
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
                  className="absolute h-full max-w-72"
                />
              ))}

            {selectedFabric &&
              selectedFabric === "Fullhand1" &&
              Fullhand1.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={400}
                  height={200}
                  className="absolute  max-w-64 top-[11%] bottom-[88%] ml-4"
                />
              ))}

            {selectedFabric &&
              selectedFabric === "Fullhand2" &&
              Fullhand2.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64  ml-[14px] top-[11%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "tophand1" &&
              tophand1.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64  ml-[14px] top-[12%] bottom-[88%] "
                />
              ))}
            {selectedFabric &&
              selectedFabric === "tophand2" &&
              tophand2.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64  ml-[14px] top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "tophand3" &&
              tophand3.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "buk1" &&
              buk1.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%] "
                />
              ))}
            {selectedFabric &&
              selectedFabric === "buk2" &&
              buk2.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={4320}
                  height={2300}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "buk3" &&
              buk3.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "buk4" &&
              buk4.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "hafhand1" &&
              hafhand1.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "hafhand2" &&
              hafhand2.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "hafhand3" &&
              hafhand3.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "hafhand4" &&
              hafhand4.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 top-[12%] bottom-[88%]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "pocket1" &&
              pocket1.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 mt-[120px] ml-[14px]"
                />
              ))}
            {selectedFabric &&
              selectedFabric === "pocket2" &&
              pocket2.map((item, index) => (
                <Image
                  key={index}
                  src={item}
                  alt="item"
                  width={420}
                  height={200}
                  className="absolute  max-w-64 mt-[120px] ml-[14px]"
                />
              ))}
          </div>

        </div>
        
          <div className="bg-gradient-to-r from-indigo-100 flex flex-col  max-h-screen justify-evenly items-center gap-10  left-0 z-30">
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              <FaRegShareFromSquare className="text-3xl" />
              <FcLike className="text-3xl" />
              <CiShoppingCart className="text-3xl" />
            </div>

            <TabsHeader className="flex flex-col md:flex-row" placeholder={""}>
              {data?.map(({ label, value, icon }) => (
                <Tab placeholder={""} key={value} value={value}>
                  <div className="text-3xl items-center gap-2  font-semibold flex flex-col">
                    {React.createElement(icon, { className: "w-5 h-5" })}
                    <h2 className="hidden md:flex">{label}</h2>
                  </div>
                </Tab>
              ))}
            </TabsHeader>
            <div className="text-center">
              <h1 className="text-xl ">Tailor T shirt</h1>
              <h1 className="text-sm">50 tk</h1>
              <p>Order by last 3 week</p>

              <SunDrayer />
            </div>
          </div>
      </div>
    </Tabs>
   </main>
  );
};

export default ClothPage;
