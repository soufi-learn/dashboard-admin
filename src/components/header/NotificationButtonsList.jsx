import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { TbBellRinging } from "react-icons/tb";
import { TfiGift } from "react-icons/tfi";

const NotificationButtonsList = [
  {
    id: 1,
    label: "تنظیمات",
    color: "#ff0088",
    value: "۸۵",
    icon: <IoSettingsOutline size="1.3rem" />,
  },
  {
    id: 2,
    label: "هدایا",
    color: "#0057C8",
    value: "۳۱",
    icon: <TfiGift size="1.3rem" />,
  },
  {
    id: 3,
    label: "پیام ها",
    color: "#827DD3",
    value: "۱۸",
    icon: <RiMessage3Line size="1.3rem" />,
  },
  {
    id: 4,
    label: "اعلانات",
    color: "#33b183",
    value: "۱۲",
    icon: <TbBellRinging size="1.3rem" />,
  },
];

export default NotificationButtonsList;
