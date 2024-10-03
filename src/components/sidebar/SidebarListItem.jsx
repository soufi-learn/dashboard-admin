import { NavLink } from "react-router-dom";

const SidebarListItem = ({ item }) => {
  return (
    <li key={item.id}>
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg relative transition-all mb-2 text-secondary-dark dark:text-secondary-light ${
            isActive
              ? "bg-secondary-main/20  dark:text-[#7ed6ff] text-dark-darker after:content-[''] after:absolute after:bg-secondary-main after:w-1 after:h-4/6 after:top-1/2 after:-right-[1.5px] after:transform after:-translate-y-1/2 after:rounded-md"
              : ""
          }`
        }
      >
        <span className="text-lg">{item.icon}</span> {item.label}
      </NavLink>
    </li>
  );
};

export default SidebarListItem;
