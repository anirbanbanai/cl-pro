import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { BsCardList } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLooks } from "react-icons/md";
import { GiClothes, GiWingfoot } from "react-icons/gi";
import { FaAccessibleIcon } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { TabDatass } from "../data/TabData";
import Image from "next/image";
import fabric from "@/assets/json/fabric.json";
export function ResponseDrawerWithNavigation() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFabric, setSelectedFabric] = useState<string>("White");
  const [fabricList] = useState(fabric);
  return (
    <React.Fragment>

      <button className="ml-3 text-4xl" onClick={openDrawer}><FcCustomerSupport/> </button>

      <Drawer placeholder={""} open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
        
          <IconButton placeholder={""} variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List placeholder={""}>
          
        {/* <TabsBody className="overflow-y-scroll h-screen " placeholder={"g"}>
            {TabDatass.map(({ value, desc }) => (
              <TabPanel className="" key={value} value={value}>
               <div className="max-md-hidden">
               {desc}
               </div>
               <div className="md:hidden">
               <ResponseDrawerWithNavigation/>
               </div>
              </TabPanel>
            ))}
          </TabsBody> */}

<div>
          <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-3">
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
        </div>
     
        </List>
       
      </Drawer>
    </React.Fragment>
  );
}