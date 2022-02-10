import React from 'react'
import './container.scss'
import Story from '../story/Story'
import Rooms from '../rooms/Rooms'
import Sharing from '../sharing/Sharing'
import Post from '../posts/Post'
const Container = () => {
  return (
    <div className="container">
        <Story/>
        <Sharing/>
        <Rooms/>
        <Post/>
    </div>
  )
}

export default Container