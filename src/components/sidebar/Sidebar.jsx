import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="hidden md:block md:w-2/5 lg:w-1/4 xl:w-1/5 min-h-[93vh] sticky top-6 p-3 transition-all rounded-lg bg-light-darker text-dark-main dark:text-light-main dark:bg-dark-lighter">
      <div className="mt-10 mb-8">
        <div className="relative mb-4 gradient-backline">
          <img
            src="/images/profile.png"
            alt="profile image"
            className="relative z-20 w-1/2 mx-auto rounded-full"
          />
        </div>
        <h3 className="mb-2 text-center text-secondary-main dark:text-secondary-light">
          تحسین صوفی زاده
        </h3>
        <p className="text-center font-dana-medium">برنامه نویس فرانت اند</p>
      </div>
      <SidebarList />
    </div>
  );
};

export default Sidebar;
