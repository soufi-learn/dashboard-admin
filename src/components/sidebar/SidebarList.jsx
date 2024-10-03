import { useState } from "react";
import SidebarListItem from "./SidebarListItem";
import { HiHome } from "react-icons/hi2";

const SidebarList = () => {
  const [sidebarItems, setSidebarItems] = useState([
    { id: 1, label: "داشبورد", icon: <HiHome />, href: "/" },
    { id: 2, label: "لیست سفارشات", icon: <HiHome />, href: "/orders" },
    { id: 3, label: "مشتریان", icon: <HiHome />, href: "/customers" },
  ]);

  return (
    <ul>
      {sidebarItems.map((item) => (
        <SidebarListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SidebarList;
