import React from 'react'
import './post.scss'
import {Public, MoreHoriz,ThumbUp,Favorite,EmojiEmotions,Comment,Share} from "@material-ui/icons"
import {IconButton,} from "@material-ui/core";
const Post = () => {
    const posts = {
        "name": "John Doe",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "photo": "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2",
    }
  return (
      <>
    <div className="mainPosts">
     <div className="title">
         <div className="profile">
             <div className="rounded-profile"><img src={posts.avatar} alt="" /></div>
         </div>
         <div className="name">
             <a href="#">{posts.name}</a>
             <p>1h</p>
             <Public fontSize="small" className="public"/>
             <MoreHoriz className="dot"/>
         </div>
     </div>
     <div className="title-area"><p>React Js so Beautiful</p></div>
     <div className="post-image"><img src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg" alt="" clasName="post-1" /></div>
      <div className="bottom-section">  
         <IconButton>
          <ThumbUp fontSize="small" style={{ fill: 'rgb(0, 124, 240)' }}/>
          </IconButton>
          <IconButton>
          <Favorite fontSize="small" style={{ fill: 'rgb(255, 21, 21)' }}/>
          </IconButton>
          <IconButton>
          <EmojiEmotions fontSize="small" style={{ fill: 'rgb(228, 213, 7)' }}/>
          </IconButton>
          <p>15k</p>
          <hr/>
      </div>
      <div className="button">
          <div className="btn"><ThumbUp fontSize="medium"/></div>
          <p>Like</p>
          <div className="btn"><Comment fontSize="medium"/></div>
          <p>Comment</p>
          <div className="btn"> <Share fontSize="medium"/></div>
          <p>Share</p>
          
         
      </div>
    </div>
    <div className="mainPosts">
     <div className="title">
         <div className="profile">
             <div className="rounded-profile"><img src={posts.avatar} alt="" /></div>
         </div>
         <div className="name">
             <a href="#">{posts.name}</a>
             <p>1h</p>
             <Public fontSize="small" className="public"/>
             <MoreHoriz className="dot"/>
         </div>
     </div>
     <div className="title-area"><p>React Js so Beautiful</p></div>
     <div className="post-image"><img src={posts.photo} alt="" clasName="post-1" /></div>
      <div className="bottom-section">  
         <IconButton>
          <ThumbUp fontSize="small" style={{ fill: 'rgb(0, 124, 240)' }}/>
          </IconButton>
          <IconButton>
          <Favorite fontSize="small" style={{ fill: 'rgb(255, 21, 21)' }}/>
          </IconButton>
          <IconButton>
          <EmojiEmotions fontSize="small" style={{ fill: 'rgb(228, 213, 7)' }}/>
          </IconButton>
          <p>15k</p>
          <hr/>
      </div>
      <div className="button">
          <div className="btn"><ThumbUp fontSize="medium"/></div>
          <p>Like</p>
          <div className="btn"><Comment fontSize="medium"/></div>
          <p>Comment</p>
          <div className="btn"> <Share fontSize="medium"/></div>
          <p>Share</p>
          
         
      </div>
    </div>

   
   </>
  )
}

export default Post