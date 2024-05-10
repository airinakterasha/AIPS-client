import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"

// toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  return (
    <>
        <header>
            <Navbar></Navbar>
        </header>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
    </>
  )
}

export default Main