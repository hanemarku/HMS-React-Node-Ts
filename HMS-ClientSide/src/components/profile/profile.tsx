import React from 'react';
import { useSelector } from "react-redux";
import "./profile.sass"
import Avatar from "./Avatar/avatar";



const Profile: React.FC = () => {
    const user = useSelector((state: any) => state.user);
  return (
      <div className="container">
          <div className="card" style={{backgroundColor: "transparent"}}>
              <Avatar name={"hana marku"}/>
          </div>
          <h1>John Doe</h1>
          {/*<p className="title">{user.name}!</p>*/}
          <p>User name </p>
      </div>

  );
};

export default Profile;