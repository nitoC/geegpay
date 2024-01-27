import { FiUser } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  return (
    <div>
      <div className="profile-modal">
        <div className="account profile-link">
          <span>Account</span>
          <span>
            <FiUser />
          </span>
        </div>
        <div className="account profile-link">
          <span>Settings</span>
          <span>
            <FiTool />
          </span>
        </div>
        <div className="account profile-link">
          <span>Logout</span>
          <span>
            <FiLogOut />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
