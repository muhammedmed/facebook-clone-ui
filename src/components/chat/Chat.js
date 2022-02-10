import React from 'react'
import './chat.scss'
import {VideoCall, Search,MoreHoriz,Add} from '@material-ui/icons'
import { Avatar, IconButton,} from "@material-ui/core";
const chat = () => {
  return (
    <div className="chat">
        <div className="top-bar">
            <div className="text"><h3>Contacts</h3></div>
            <div className="icons-right">
            <IconButton>
             <VideoCall className="video"/> 
             </IconButton>
             <IconButton>
             <Search/>
             </IconButton>
             <IconButton>
             <MoreHoriz/>
             </IconButton>
            </div>
        </div>
        <div className="bottom">
         <div className="avatar">
             <Avatar/>
             <h3>User Name</h3>
         </div>
         <div className="avatar">
             <Avatar/>
             <h3>User Name</h3>
         </div>
         <div className="avatar">
             <Avatar/>
             <h3>User Name</h3>
         </div>
         <hr />
        </div>
        <div className="group-chat">
            <h3>Group Chats</h3>
        </div>
        <div className="new-chat">
            <div className="add">
           <IconButton>
               <Add className="icn" fontSize="large"/>
           </IconButton> <h3>New Group</h3>
           </div>
        </div>
    </div>
  )
}

export default chat