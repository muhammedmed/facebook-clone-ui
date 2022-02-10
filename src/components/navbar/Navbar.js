import React from "react";
import "./navbar.scss";
import {Home,OndemandVideo, Group,Storefront,Search,Apps,Message,Notifications,ArrowDropDown}  from "@material-ui/icons";
import { Avatar, IconButton,} from "@material-ui/core";

import Picture from '../../assets/img/profile.jfif'
import Groups from '../../assets/svg/groups.svg'



const Navbar = () => {

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header-input">
          <Search />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header-center">
        <div className="header-option header-option--active">
          <Home fontSize="large" />
        </div>
        <div className="header-option">
          <Group fontSize="large" />
        </div>
        <div className="notifi">
          <p>7</p>
        </div>
        <div className="notifi-1">
          <p>9+</p>
        </div>
        <div className="header-option">
          <OndemandVideo fontSize="large" />
        </div>
        
        <div className="header-option">
          <Storefront fontSize="large" />
        </div>
        <div className="header-option">
          <Avatar src={Groups} fontSize="large"  />
        </div>
      </div>

      <div className="header-right">
        <div className="header-info">
          <Avatar src={Picture}  />
          <h4>Muhammed</h4>
        </div>

        <IconButton className="right-icon">
          <Apps/>
        </IconButton>
        <IconButton className="right-icon">
          <Message />
        </IconButton>
        <IconButton className="right-icon">
          <Notifications />
        </IconButton >
        <IconButton className="right-icon">
          <ArrowDropDown />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;