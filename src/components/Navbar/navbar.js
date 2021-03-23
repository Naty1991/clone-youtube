import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <MenuIcon />
        <Link to='/'>
        <img
          className="navbar_logo"
          src='http://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png'
          alt="icono-youtube"
        />
        </Link>
        
      </div>
      <div className="navbar_input">
        <input type="text" />
        <SearchIcon className='search' />
      </div>
      <div className="navbar_icons">
        <VideoCallIcon className='icon' />
        <AppsIcon className='icon'/>
        <NotificationsIcon className='icon'/>
        <AccountCircleIcon className='icon' />
      </div>
    </div>
  );
};

export default navbar;
