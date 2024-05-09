import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"

const Main = () => {
  return (
    <>
        <header>
            <Navbar></Navbar>
        </header>
        <Outlet></Outlet>
    </>
  )
}

export default Main