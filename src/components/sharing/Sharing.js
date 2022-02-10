import React from 'react'
import './Sharing.scss'
import {PhotoLibrary,Mood} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'
import Picture from '../../assets/img/profile.jfif'
import liveVideo from '../../assets/svg/live_video.svg'

const Sharing = () => {
  return (
    <div className="sharing">
      <div className="top">
      <Avatar src={Picture} className="avatar"/>
    <span><p>What Do You Think ... ?</p></span>
    </div>
    <hr className="hr"/>
    <div className="bottom">
      <div className="icons">
     <Avatar src={liveVideo}/>
     <p>Live Video</p>
     </div>
     <div className="icons">
     <PhotoLibrary fontSize="large" style={{ fill: 'rgb(0, 197, 26)' }}/>
     <p>Photo/Video</p>
     </div>
     <div className="icons">
     <Mood fontSize="large" style={{fill: 'rgb(209, 212, 35)'}}/>
     <p>Feeling/Activity</p>
     </div>
    </div>
    </div>
    
  )
}

export default Sharing