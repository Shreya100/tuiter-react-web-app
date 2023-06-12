import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
  
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [profile, setProfile] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = () => { dispatch(updateUserThunk(profile)); };
 useEffect(() => {
  const fetchData = async () => {
    const { payload } = await dispatch(profileThunk());
    setProfile(payload);
  };
  fetchData();
}, []);
 return ( 

    <div>
   <h1>Profile Screen</h1>
   {profile && (<div>
     <div>
      <label>First Name</label> &nbsp;
      <input type="text" value={profile.username}
       onChange={(event) => {
        const newProfile = {
         ...profile, username: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div>
     <br/>
     <div>
      <label>Password</label> &nbsp; &nbsp;
      <input type="text" value={profile.password}
       onChange={(event) => {
        const newProfile = {
         ...profile, password: event.target.value,
        };
        setProfile(newProfile);
       }}/>
     </div></div>
   )}
   <br/>
   <button
    onClick={() => {
      dispatch(logoutThunk());
      navigate("/tuiter/login");
    }}>                   Logout</button> &nbsp;
   <button onClick={save}>Save  </button>
  </div>
 ); 
}
export default ProfileScreen;

