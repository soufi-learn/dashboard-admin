import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { TbBellRinging } from "react-icons/tb";
import { TfiGift } from "react-icons/tfi";

const NotificationButtonsList = [
  {
    id: 1,
    label: 85,
    color: "#EC5B59",
    icon: <IoSettingsOutline size="1.3rem" />,
  },
  {
    id: 2,
    label: 85,
    color: "#0057C8",
    icon: <TfiGift size="1.3rem" />,
  },
  {
    id: 3,
    label: 18,
    color: "#827DD3",
    icon: <RiMessage3Line size="1.3rem" />,
  },
  {
    id: 4,
    label: 12,
    color: "#33b183",
    icon: <TbBellRinging size="1.3rem" />,
  },
];

export default NotificationButtonsList;
