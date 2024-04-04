import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const SavedUsers = (props) => {
  console.log(props);

  const [savedUsers,setSavedUsers] = useState([])

   const addSavedUser = () => {
    savedUsers.some(user => user?.id == props.userData?.id?.value) ||
    setSavedUsers([
      ...savedUsers,
      {
        id:props.userData?.id?.value,
        fullName:`${props.userData?.name?.first} ${props.userData?.name.last}  `,
        email: props.userData?.email,
        phone:props.userData?.phone,
        age:props.userData?.dob?.age

      }
    ]);
  } 
  console.log(savedUsers);






  return (
    <div className="saved-users mt-5 mx-4">
      <div className="saved-buttons">
        <button className="saved-button " onClick={props.getuser}>New User</button>
        <button className="saved-button" onClick={addSavedUser}>Add User</button>
      </div>

      <table className="table text-center mt-4 border">
        <thead>
          <tr className="table-success">
            <th scope="col">Fullname</th>
            <th scope="col" className="email-column">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Age</th>
          </tr>
        </thead>

        <tbody> 
          {
          savedUsers.map(user=> {
            return (

          <tr>
            <td className="text-nowrap other-columns">{user.fullName}</td>
            <td className="email-column">{user.email}</td>
            <td className="text-nowrap  other-columns">{user.phone}</td>
            <td className="text-nowrap  other-columns">{user.age}</td>
          </tr>

            )
          })

          }

        </tbody>
      </table>
    </div>
  );
};

export default SavedUsers;
