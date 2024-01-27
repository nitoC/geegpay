import { FiAlertOctagon } from "react-icons/fi";

const Notifications = () => {
  return (
    <div>
      <div className="notification">
        <FiAlertOctagon size={24} />
        <span>No notifications yet</span>
      </div>
    </div>
  );
};

export default Notifications;
