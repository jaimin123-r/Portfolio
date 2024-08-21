import React,{useEffect} from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import { Toaster,toast } from 'react-hot-toast'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import AuthForm from './Components/AuthForm'
// import Experience from './Components/Experience'

export default function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<><Navbar title="Home"/><Home/></> 
  //   },
  //   {
  //     path: "/Login-Signup",
  //     element: <><Navbar/><AuthForm/></>
  //   },
  
  // ]);

  useEffect(() => {
    // Show welcome toast on page reload
    toast('Welcome from Jaimin!', {
      icon: '❤️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  }, []);
  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>

      {/* <RouterProvider router={router}/> */}
    </>
   
  )
}