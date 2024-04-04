

import React, { useEffect, useState } from 'react';
import './UserCard.scss';
import UserInfos from './usercardinfos/UserInfos';
import SavedUsers from './usercardinfos/SavedUsers';

const UserCard = () => {
  const [userData,setUserData] = useState({
name:{first:"✦✦✦✦",last:"✦✦✦✦"},
dob:{age:"✦✦✦✦"},
email:"✦✦✦✦",
phone:"✦✦✦✦",
picture:{large:"./img/1.png"},
location:{city:"✦✦✦✦"},
login:{password:"✦✦✦✦"},
  });

  const getUser = async () => {
    try{
      const response = await fetch("https://randomuser.me/api/");
      if(!response.ok){
        throw new Error("not 200 error", response.status,response.text)
      } 
      const json = await response.json(); 
      setUserData(json.results[0])



    }catch(error){
      console.log('catch error: ', error);
    }

  }

  useEffect(()=> {
getUser()
  },[])

console.log(userData);


  return (
    <div className="container p-3">
       <div className="card-wrapper  shadow-lg m-auto pb-5">

      <UserInfos userData={userData}/>
      <SavedUsers getuser={getUser} userData={userData}/>

       </div>

    </div>
  )
}

export default UserCard;