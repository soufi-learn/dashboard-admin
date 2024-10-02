const NotificationButton = ({ label, color, icon }) => {
  console.log(color);
  return (
    <div className="relative inline-block p-3 transition-all rounded-md shadow-sm cursor-pointer bg-light-darker dark:bg-dark-darker text-dark-main dark:text-light-main hover:bg-light-lighter dark:hover:bg-dark-lighter">
      {icon}
      <span
        style={{ backgroundColor: color }}
        className={`text-sm  absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3`}
      >
        {label}
      </span>
    </div>
  );
};

export default NotificationButton;
