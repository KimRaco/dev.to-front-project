import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LeftAside from './components/LeftAside'
import Main from './components/Main'
import RightAside from './components/RightAside'
import Footer from './components/Footer'
import PostDetails from './pages/PostDetails'
import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import LogIn from './pages/LogIn'
import CreateAccount from './pages/CreateAccount'

function App() {
  const [search, setSearch] = useState('');
 
  
  

  return (
    <>
        <Navbar setSearch={setSearch}  />
        <CreatePost /> 
        <LogIn />
        <CreateAccount />
        

      <Routes>

        <Route path='/' element={
          <section className="container mt-5 pt-3">

            <section className="row ">
              <LeftAside />
              <Main search={search} />
              <RightAside />
            </section>
          </section>}
        />
        <Route path='/:postId' element={<PostDetails />} />

      </Routes>
          
      <Footer />
    
    </>
  )
}

export default App
