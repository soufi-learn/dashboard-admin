import { useState } from "react";
import ProfileImg from "../../assets/images/profile.png";
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
        <img
          src={ProfileImg}
          alt="profile img"
          className="object-cover rounded-full w-14 h-14"
        />

        <div className="flex items-center gap-7">
          <DarkLightButton />
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
