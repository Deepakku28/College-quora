import React, { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home'
import { ExpandMore, Language, NotificationsOutlined, PeopleAltOutlined, Search } from '@material-ui/icons';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button, Input } from '@material-ui/core';
import LanguageIcon from "@material-ui/icons/Language";
import '../css/Navbar.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase';
import Modal from 'react-modal';
import LinkIcon from '@material-ui/icons/Link';
import firebase from 'firebase';

function Navbar() {
    const user=useSelector(selectUser);
    const [openModal,setOpenModal]=useState(false);
    const [input, setInput]=useState("");
    const [inputUrl, setInputUrl]=useState("");

    const handleQuestion=(e)=>{
        e.preventDefault()

        setOpenModal(false)
        db.collection('questions').add({
            question:input,
            imageUrl: inputUrl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user,
        })

        setInput("");
        setInputUrl("");
    }

    return (
        <div className="navbar">
            <div className="navbar-logo">
                College Quora
            </div>
            <div className="navbar-icons">
                <div className="navbar-icon">
                    <HomeIcon />
                </div>
                <div className="navbar-icon">
                    <FeaturedPlayListOutlinedIcon />
                </div>
                <div className="navbar-icon">
                    <AssignmentTurnedInOutlinedIcon />
                </div>
                <div className="navbar-icon">
                    <PeopleAltOutlinedIcon />
                </div>
                <div className="navbar-icon">
                    <NotificationsOutlined />
                </div>
            </div>
            <div className="navbar-input">
                <SearchIcon />
                <input type="search" placeholder="search">
                </input>
            </div>
            <div className='navbar-remain'>
                <div className="navbar-avatar">
                    <Avatar onClick={()=> auth.signOut()} src={user.photo}/>
                </div>
                <LanguageIcon />
                <Button onClick={()=>setOpenModal(true)}>Add Question</Button>
                <Modal
                    isOpen={openModal}
                    onRequestClose={()=>setOpenModal(false)}
                    shouldCloseOnOverlayClick={false}
                    style={{
                        overlay:{
                            width:700,
                            height:600,
                            backgroundColor:"rgba(0,0,0,0.8)",
                            zIndex:"1000",
                            top:"50%",
                            left:"50%",
                            marginTop:"-300px",
                            marginLeft:"-350px",
                        },
                    }}
                >
                    <div className="modal-title">
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal-info">
                        <Avatar
                            className="avatar"
                            src={user.photo}
                        />
                        <p>{user.displayName?user.displayName:user.email} asked</p>
                        <div className="modal-scope">
                            <PeopleAltOutlinedIcon/>
                            <p>Public</p>
                            <ExpandMore/>
                        </div>
                    </div>
                    <div className="modal-field">
                        <Input
                            required
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                            type="text"
                            placeholder="Please enter your Question."
                        />
                        <div className="modal-fieldLink">
                            <LinkIcon/>
                            <input
                                value={inputUrl}
                                onChange={(e)=>setInputUrl(e.target.value)}
                                type="text"
                                placeholder="Optional: include a link that gives context."
                            ></input>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button className="cancle" onClick={()=>setOpenModal(false)}>Cancel</button>
                        <button onClick={handleQuestion} type="submit" className="add">Add Question</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Navbar;