import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { BsMailboxFlag } from "react-icons/bs";
import { MdMoreTime } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { TbPasswordMobilePhone } from "react-icons/tb";
const UserInfos = ({userData}) => {
  // console.log(userData);
  const fullName = `${userData.name.first} ${userData.name.last}`;

  const [show,setShow] = useState("name");


  const handleEnter = (e) => {
    if(e.target.tagName == "IMG"){
      show != e.target.closest("span").id && setShow(e.target.closest("span").id)
    }else if(e.target.tagName == "SPAN"){
      show != e.target.id && setShow(e.target.id);
    }

  }
  const handleInnerEnter = () => {
    console.log('inner');
  }
  return (
    <>
      <div className="img-container text-center p-5 pb-4">
        <img
          src={userData.picture.large}
          alt=""
          className="user-img rounded-circle border border-secondary shadow border-2 p-1 bg-white"
        />
      </div>
      <div className="all-infos d-flex flex-column align-items-center justify-content-center gap-3 mb-3">
        <p className=" m-0 p-0">My {show.includes(".") ? show.split(".")[1]
            : show} is</p>
        <h4 className="  m-0 p-0">
          { show ?
            show === "name" ? (fullName) 
            : show.includes(".") ? userData[show.split(".")[0]][show.split(".")[1]]
            : (userData[show])
            : "✦✦✦✦✦✦✦✦"
          }


        </h4>

        <div className="info-buttons d-flex w-100 justify-content-evenly align-items-center mt-4">
          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="name" >
          <img src="./img/person.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <FaUserTie className="display-4 rounded-circle p-2" onMouseEnter={handleInnerEnter} /> */}
          </span>



          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="dob.age">
            <img src="./img/growing-up.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <MdMoreTime className="display-4 rounded-circle p-2"/> */}
          </span>


          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="email">
          <img src="./img/message.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <BsMailboxFlag className="display-4 rounded-circle p-2"/> */}
          </span>


          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="location.city">
          <img src="./img/placeholder.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <FaMapLocationDot className="display-4 rounded-circle p-2"/> */}
          </span>

          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="phone">
          <img src="./img/telephone.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <FaPhoneVolume className="display-4 rounded-circle p-2"/> */}
          </span> 

          <span className="border border-1 border-black  " onMouseEnter={handleEnter} id="login.password">
          <img src="./img/padlock.png" alt="" className="display-4 rounded-circle p-2 w-100" onMouseEnter={handleEnter}/>
          {/* <TbPasswordMobilePhone className="display-4 rounded-circle p-2"/> */}
          </span>  
        </div>
      </div>
    </>
  );
};

export default UserInfos;
