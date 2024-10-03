import { useState } from "react";
import SidebarListItem from "./SidebarListItem";
import { HiHome } from "react-icons/hi2";

const SidebarList = () => {
  const [sidebarItems, setSidebarItems] = useState([
    { id: 1, label: "داشبورد", icon: <HiHome /> },
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
