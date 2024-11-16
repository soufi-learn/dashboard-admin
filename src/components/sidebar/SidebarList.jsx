import { useState } from "react";
import SidebarListItem from "./SidebarListItem";
import { HiHome } from "react-icons/hi2";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineAirlineStops } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { AiTwotoneShop } from "react-icons/ai";
const SidebarList = () => {
  const [sidebarItems, setSidebarItems] = useState([
    { id: 1, label: "داشبورد", icon: <HiHome />, href: "/" },
    {
      id: 2,
      label: "تجزیه و تحلیل",
      icon: <IoAnalyticsOutline />,
      href: "/analytics",
    },
    {
      id: 3,
      label: "فروش",
      icon: <MdOutlineAirlineStops />,
      href: "/sale",
    },
    {
      id: 4,
      label: "کاربران",
      icon: <FaRegUser />,
      href: "/users",
    },
    {
      id: 5,
      label: "محصولات",
      icon: <AiTwotoneShop />,
      href: "/products",
    },
  ]);

  return (
    <ul className=" overflow-auto max-h-[420px] sidebar-scroll">
      {sidebarItems.map((item) => (
        <SidebarListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SidebarList;
