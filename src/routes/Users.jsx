import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Usercard from "../components/Usercard";
import "../styles/Users.css";
import axios from "axios";
import { Bars } from 'react-loader-spinner';
import Footer from "../components/Footer";

const Users = () => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = axios.get("https://reqres.in/api/users?page=1");
        setUserDetails((await response).data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setLoading(false);
  }, [userDetails,loading]);

  return (
    <div>
      <NavBar />
      <div className="users-handing">
        <p>Users Data</p>
      </div>
      {
        loading?<Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{ "justify-content": "center"}}
        wrapperClass=""
        visible={true}
        />:
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
      }
      <Footer/>
    </div>
  );
};

export default Users;
