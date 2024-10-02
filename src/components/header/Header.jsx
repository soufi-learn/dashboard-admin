import { useState } from "react";
import NotificationButton from "./NotificationButton";
import DarkLightButton from "./DarkLightButton";
import NotificationButtonsList from "./NotificationButtonsList";

const Header = () => {
  const [notificationsList, setNotificationsList] = useState(
    NotificationButtonsList
  );

  return (
    <header>
      <div className="flex items-center justify-between">
        <DarkLightButton />

        <div className="flex items-center gap-7">
          {notificationsList.map((notification) => (
            <NotificationButton
              key={notification.id}
              label={notification.label}
              color={notification.color}
              icon={notification.icon}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
