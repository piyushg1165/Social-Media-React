import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/prop-list-store'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="content">
      <Header/>
      {selectedTab === 'Home' ? <PostList/> : <CreatePost/> }
      
       <Footer/>
       

      </div>
      </div>
      </PostListProvider>
  )
}

export default App;
