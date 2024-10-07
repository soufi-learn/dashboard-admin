const NotificationButton = ({ label, color, icon, value }) => {
  return (
    <div className="relative w-4/5 md:inline-block p-3 transition-all rounded-md shadow-sm cursor-pointer bg-light-darker dark:bg-primary-main md:dark:bg-primary-dark text-dark-main dark:text-light-main hover:bg-light-lighter dark:hover:bg-dark-lighter flex gap-3">
      {icon}
      <span className="md:hidden">{label}</span>
      <span
        style={{ backgroundColor: color }}
        className={`text-sm pt-1 font-dana-medium absolute rounded-full flex items-center justify-center text-white min-w-6 h-6 -top-3 -right-3`}
      >
        {value}
      </span>
    </div>
  );
};

export default NotificationButton;
