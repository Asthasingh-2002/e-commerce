import React from "react";
import {
  BugIcon,
  SubscribeIcon,
  UserSquareIcon,
  Activity1Icon,
  Activity2Icon,
  Activity3Icon,
  Activity4Icon,
  Activity5Icon,
} from "../assets/icon";

const notifications = [
  {
    type: BugIcon,
    message: "You have a bug that needs...",
    time: "Just now",
  },
  {
    type: UserSquareIcon,
    message: "New user registered",
    time: "57 minutes ago",
  },
  {
    type: BugIcon,
    message: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    type: SubscribeIcon,
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activities = [
  {
    user: "You",
    action: "have a bug that needs...",
    time: "Just now",
    avatar: "Y",
  },
  {
    user: "Released",
    action: "a new version",
    time: "59 minutes ago",
    avatar: "R",
  },
  {
    user: "Submitted",
    action: "a bug",
    time: "12 hours ago",
    avatar: "S",
  },
  {
    user: "Modified",
    action: "A data in Page X",
    time: "Today, 11:59 AM",
    avatar: "M",
  },
  {
    user: "Deleted",
    action: "a page in Project X",
    time: "Feb 2, 2023",
    avatar: "D",
  },
];

const contacts = [
  { name: "Natali Craig", avatar: "N" },
  { name: "Drew Cano", avatar: "D" },
  { name: "Orlando Diggs", avatar: "O" },
  { name: "Andi Lane", avatar: "A" },
  { name: "Kate Morrison", avatar: "K" },
  { name: "Koray Okumus", avatar: "K" },
];

const RightSidebar = ({ bgActive }) => {
  return (
    <div>
      <aside
        className={`sidebar-scroll         
       ${
         bgActive ? "bg-[#1C1C1C]" : "bg-white"
       } border-r border-gray-200 transition-all duration-300 h-screen overflow-y-auto`}
      >
        <div className="p-6">
          <h2
            className={`text-lg font-semibold mb-4 ${
              bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
            }`}
          >
            Notifications
          </h2>
          <div className="space-y-4">
            {notifications.map((notification, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center `}
                >
                  <span className={`text-xs `}>
                    <notification.type />
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm ${
                      bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      bgActive ? "text-[#FFFFFF99]" : "text-gray-500"
                    }`}
                  >
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className={`text-lg font-semibold mt-8 mb-4 ${
              bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
            }`}
          >
            Activities
          </h3>
          <div className="space-y-4">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs font-medium">
                    {activity.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-sm ${
                      bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                    }`}
                  >
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      bgActive ? "text-[#FFFFFF99]" : "text-gray-500"
                    }`}
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className={`text-lg font-semibold mt-8 mb-4 ${
              bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
            }`}
          >
            Contacts
          </h3>
          <div className="space-y-3">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    bgActive ? "bg-blue-900" : "bg-blue-100"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      bgActive ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {contact.avatar}
                  </span>
                </div>
                <span
                  className={`text-sm ${
                    bgActive ? "text-[#FFFFFF]" : "text-[#1C1C1C]"
                  }`}
                >
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSidebar;
