import React from 'react'
import './story.scss'
import Picture from '../../assets/img/profile.jfif'
import plusWhite from '../../assets/svg/plusWhite.svg'
import { Avatar } from "@material-ui/core";

const Story = () => {
  return (
      <div className="flexBox">
    <div style={{ backgroundImage: `url(${Picture})` }} className="storyMe">
     <img src={plusWhite} className="plus"/>
    <h3>Create a <br/> <span>Story</span> </h3>
  </div>
  <div style={{ backgroundImage: `url(${"https://www.affde.com/uploads/article/51010/T60tkx66eX32yDYr.png"})` }} className="story">
    <Avatar className="story-avatar" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
    <h4>John Doe </h4>
  </div>
  <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"})` }} className="story">
    <Avatar className="story-avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    <h4>A girl </h4>
  </div>
  <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})` }} className="story">
    <Avatar className="story-avatar" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
    <h4>Ian Dooley </h4>
  </div>

  </div>
  )
}

export default Story