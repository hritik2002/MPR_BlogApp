import React from "react";
import "./styles.css";

const userDashboard = () => {
  return (
    <div className="userDashboard_container">
      <div className="userDashboard_left">
        <img src="#" alt="" />
        <button>Upload</button>
      </div>
      <div className="userDashboard_right">
        <div className="userDashboard_right_name">
            <h4>Name:</h4>
            <input type="text" placeholder="Name" />
        </div>
        <div className="userDashboard_right_email">
          <h4>Email:</h4>
          <input type="text" placeholder="Email" />
        </div>
        <div className="userDashboard_right_bottom">

          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default userDashboard;
