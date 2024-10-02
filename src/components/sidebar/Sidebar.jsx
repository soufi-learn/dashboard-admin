const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen p-3 transition-all rounded-lg bg-light-darker text-dark-main dark:text-light-main dark:bg-dark-lighter">
      <div className="mt-10">
        <div className="relative mb-4 gradient-backline">
          <img
            src="/images/profile.png"
            alt="profile image"
            className="relative z-20 w-1/2 mx-auto rounded-full"
          />
        </div>
        <h3 className="mb-2 text-center text-secondary">تحسین صوفی زاده</h3>
        <p className="text-center font-dana-medium">برنامه نویس فرانت اند</p>
      </div>
    </div>
  );
};

export default Sidebar;
