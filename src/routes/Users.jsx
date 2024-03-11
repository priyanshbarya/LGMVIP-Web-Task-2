import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Usercard from "../components/Usercard";
import "../styles/Users.css";
import axios from "axios";

const Users = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get("https://reqres.in/api/users?page=1");
        setUserDetails((await response).data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userDetails]);

  return (
    <div>
      <NavBar />
      <div className="users-handing">
        <p>Users Data</p>
      </div>
      <div className="users-container">
        {userDetails.length?(userDetails.map((e) => {
          return (
            <Usercard
              name={e.first_name + " " + e.last_name}
              email={e.email}
              avatar={e.avatar}
            />
          );
        })):(<p className="user-data-empty">*No Data Available</p>)}
      </div>
    </div>
  );
};

export default Users;
