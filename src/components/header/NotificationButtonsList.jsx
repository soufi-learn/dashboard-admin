import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { TbBellRinging } from "react-icons/tb";
import { TfiGift } from "react-icons/tfi";

const NotificationButtonsList = [
  {
    id: 1,
    label: "۸۵",
    color: "#ff0088",
    icon: <IoSettingsOutline size="1.3rem" />,
  },
  {
    id: 2,
    label: "۳۱",
    color: "#0057C8",
    icon: <TfiGift size="1.3rem" />,
  },
  {
    id: 3,
    label: "۱۸",
    color: "#827DD3",
    icon: <RiMessage3Line size="1.3rem" />,
  },
  {
    id: 4,
    label: "۱۲",
    color: "#33b183",
    icon: <TbBellRinging size="1.3rem" />,
  },
];

export default NotificationButtonsList;
