const SidebarListItem = ({ item }) => {
  return (
    <li key={item.id} className="">
      <a
        href="#"
        className="flex items-center gap-2 bg-secondary-main/25 py-3 px-4 rounded-lg after:content-[''] after:absolute relative after:bg-secondary-main after:w-1 after:h-4/6 after:top-1/2 after:-right-[1.5px] after:transform after:-translate-y-1/2 after:rounded-md text-secondary-dark dark:text-[#7ed6ff] transition-all"
      >
        {item.icon} {item.label}
      </a>
    </li>
  );
};

export default SidebarListItem;
