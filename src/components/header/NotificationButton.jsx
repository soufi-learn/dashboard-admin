const NotificationButton = ({ label, color, icon }) => {
  return (
    <div className="relative inline-block p-3 transition-all rounded-md cursor-pointer bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main hover:bg-light-lighter dark:hover:bg-dark-lighter">
      {icon}
      <span
        className={`text-sm bg-[${color}] absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3`}
      >
        {label}
      </span>
    </div>
  );
};

export default NotificationButton;
