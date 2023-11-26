import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import PostListProvider from '../store/prop-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
      <Header/>
      <Outlet/>
       <Footer/>
       

      </div>
      </div>
      </PostListProvider>
  )
}

export default App;
