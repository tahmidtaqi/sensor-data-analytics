
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { parseCookies } from "../components/cookiefetch";
import Cookies from "js-cookie";
import { useState } from "react";
const loginstatuscheck = (props) => {

    const [userid, setUserid] = useState(null);
  
  
    
    useEffect(() => {
     
      setUserid(Cookies.get("user"));
      console.log(userid);
    }, []);
    



    return (
        <div>
        {userid === undefined || userid === null ? "not logged in"  : props.children}
      </div>
    );
};

export default loginstatuscheck;