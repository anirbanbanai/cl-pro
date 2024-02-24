import { LifebuoyIcon, PaintBrushIcon, ScissorsIcon } from "@heroicons/react/16/solid";
import ColorFebric from "@/app/components/ColoFebric"
import Style from "../components/Style";
import Accessories from "../components/Accessories";

export const TabData = [
    {
      label: "Febric",
      value: "Febric",
      icon: LifebuoyIcon,
      desc: ColorFebric ,
    },
    {
      label: "Style",
      value: "Style",
      icon: ScissorsIcon,
      desc: Style,
    },
    {
      label: "Accessories",
      value: "Accessories",
      icon: PaintBrushIcon,
      desc: Accessories,
    },
  ];