import { useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
        .then(()=>{
            console.log('logout successfully')
        })
        .catch(()=> {
            console.log('unsuccesful logout')
        })
    }


    const navMenu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/queries'>Queries</NavLink></li>
        <li><NavLink to='/recommend-for-me'>Recommendations for me</NavLink></li>
        <li><NavLink to='/my-queries'>My Queries</NavLink></li>
        <li><NavLink to='/my-recommendations'>My Recommendations</NavLink></li>
    </>
    return (
        <>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-2xl text-warning font-bold">AIPS</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-5">
                        {
                            user ? <>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img src={user.photoURL} alt={user.displayName} className='w-14 h-14 rounded-full' />
                                </div>
                                <a onClick={handleLogOut} className="btn btn-sm btn-warning">Logout</a>
                            </>
                            :
                            <>
                                <Link to='/login'>Login</Link>
                                <Link to='/registration'>Registration</Link>
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar