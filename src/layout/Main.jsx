import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

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
        <Footer></Footer>
    </>
  )
}

export default Main