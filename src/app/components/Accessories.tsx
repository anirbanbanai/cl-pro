import { Checkbox } from "@material-tailwind/react";
import React from "react";

const Accessories = () => {
  return (
    <div>
      <div className="flex flex-col  right-0">
        <h1 className="text-xl font-semibold">Font :</h1>
        <div className="flex items-center">
          <Checkbox color="red" crossOrigin={""} />
          <h2>ABS</h2>
        </div>
        <div className="flex items-center">
          <Checkbox color="red" crossOrigin={""} />
          <h2>ABS</h2>
        </div>
        <div className="flex items-center">
          <Checkbox color="red" crossOrigin={""} />
          <h2>ABS</h2>
        </div>
        <div className="flex items-center">
          <Checkbox color="red" crossOrigin={""} />
          <h2>ABS</h2>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Monogram Thread Color</h1>
        <div className="grid grid-cols-4">
          <div className="bg-red-400 p-5 m-5" />
          <div className="bg-blue-400 p-5 m-5" />
          <div className="bg-pink-400 p-5 m-5" />
          <div className="bg-yellow-400 p-5 m-5" />
          <div className="bg-gray-400 p-5 m-5" />
          <div className="bg-purple-400 p-5 m-5" />
          <div className="bg-yellow-400 p-5 m-5" />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Initial position</h1>
        <div>
          <div className="flex items-center">
            <Checkbox color="red" crossOrigin={""} />
            <h2>Chest</h2>
          </div>
          <div className="flex items-center">
            <Checkbox color="red" crossOrigin={""} />
            <h2>Cuff</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
