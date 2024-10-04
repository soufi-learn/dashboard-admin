import { useState } from "react";
import NotificationButton from "./NotificationButton";
import DarkLightButton from "./DarkLightButton";
import NotificationButtonsList from "./NotificationButtonsList";
import { Button } from "@headlessui/react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [notificationsList, setNotificationsList] = useState(
    NotificationButtonsList
  );
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between">
        <Button
          className="rounded bg-primary-main md:hidden p-2 hover:bg-primary-light text-sm text-white active:bg-primary-main dark:bg-light-main dark:text-dark-darker dark:hover:bg-light-darker dark:active:bg-light-main realtive z-30"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <FaTimes size="1.5rem" />
          ) : (
            <FaBarsStaggered size="1.5rem" />
          )}
        </Button>

        <DarkLightButton />

        <div
          className={`flex items-center justify-center flex-col md:flex-row gap-7 transition-all duration-300  fixed bg-slate-900/80 backdrop-blur-sm right-0 md:scale-100 w-full h-screen top-0 ${
            openMenu ? " scale-100" : " scale-0"
          } z-20 md:static md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-0`}
        >
          {notificationsList.map((notification) => (
            <NotificationButton
              key={notification.id}
              label={notification.label}
              color={notification.color}
              icon={notification.icon}
              value={notification.value}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
