import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { parseCookies } from "../components/cookiefetch";
import Cookies from "js-cookie";
import { useState } from "react";

const authcheck = (props) => {
  const [userid, setUserid] = useState(null);
  let loggedinuserid = null;

  
  useEffect(() => {
   
    setUserid(Cookies.get("user"));
  }, []);
  

  
  return (
    <div>
      {userid === undefined || userid === null ? props.children : "logged in"}
    </div>
  );
};

export default authcheck;
