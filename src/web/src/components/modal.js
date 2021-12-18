import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { setUser } from "../pages/SignInPage";
import {
    collection,
    query,
    where,
    getDocs,
    getDoc,
    onAuthStateChanged,
    db,
    doc,
    auth,
    deleteDoc
  } from "../pages/FirebaseApp";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const onEditHandler = () => {
    navigate("/form");
};
const logoutHandler = () => {
    navigate('/');
}
export default function Modalbox() {
    const [myUsers, setMyUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log(user);
      // console.log(email, lastLoggedin);
      localStorage.setItem('logginUser', user.uid)
      localStorage.setItem('user', user.email);
    //   presentUser = user.email;
      // ...
    } else {
      // User is signed out
      // ...
      console.log("no user has logged in");
    }
  });

  let currUser = localStorage.getItem('logginUser')
  let navigate = useNavigate();
  let LoggedinUser = setUser();


  let arr = [];
 
  useEffect(async () => {
    presentUser = localStorage.getItem('logginUser')
    const docRef = doc(db, "users", presentUser);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      arr = docSnap.data();
      setMyUsers(arr);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);
  console.log(myUsers);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div> 
        <Button id="edit-Profile" onClick={onEditHandler}>
          Edit Profile
        </Button>
        <Button id="signout" onClick={logoutHandler}>
        Logout
        </Button>
      </div>
      <div className='intro-section'>
        <div id="intro">
          <div>
            <img ></img>
            <img src={myUsers.profileimage} style={{width:'200px', height:'200px'}}></img>
          </div>
          <div>
            <h2 className="sub-heading">Intro</h2>
          </div>
          <div>
            <div></div>
            <div className="boxes">UserName: {myUsers.username}</div>
            <div className="boxes">Date of Birth: {myUsers.dob}</div>
            <div className="boxes">Phone No: {myUsers.contactno}</div>
            <div className="boxes">About: {myUsers.about}</div>
          </div>
        </div>
      </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
