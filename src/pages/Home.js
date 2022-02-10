import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Container from '../components/container/Container'
import Chat from '../components/chat/Chat'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Chat/>
        <Container/>
    </div>
  )
}

export default Home