import React from "react";

const notifications = [
  { type: "bug", message: "You have a bug that needs...", time: "Just now" },
  { type: "user", message: "New user registered", time: "57 minutes ago" },
  {
    type: "bug",
    message: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    type: "subscription",
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
  { user: "Submitted", action: "a bug", time: "12 hours ago", avatar: "S" },
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

const RightSidebar = () => {
  return (
    <div>
      <aside
        className={`sidebar-scroll         
       bg-white border-r border-gray-200 transition-all duration-300 h-screen overflow-y-auto`}
      >
        {" "}
        {/* Added h-screen and overflow-y-auto */}
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h2>
          <div className="space-y-4">
            {notifications.map((notification, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xs">!</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
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
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
            Contacts
          </h3>
          <div className="space-y-3">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-medium">
                    {contact.avatar}
                  </span>
                </div>
                <span className="text-sm text-gray-900">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSidebar;
