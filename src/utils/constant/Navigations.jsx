import { AiFillAppstore } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { TbSettings2 } from "react-icons/tb";


export const DASHBOARD_SIDE_BAR_LINKS = [
    {
      key: "dashboard",
      label: "Dashboard",
      path: "/dashboard",
      icon: <AiFillAppstore />,
    },
  
    {
      key: "request",
      label: "Request",
      path: "/request",
      icon: <BsPeople />,
    },
  
    {
      key: "report",
      label: "Report",
      path: "/report",
      icon: <HiOutlineBriefcase />,
    },

    {
      key: "settings",
      label: "Settings",
      path: "/settings",
      icon: <TbSettings2 />,
    },
  ];
  