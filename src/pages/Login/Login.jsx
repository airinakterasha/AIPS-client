import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

const Login = () => {
  const {login, loginByGoogle} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then(result => {
      console.log(result.user)
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = {email}
      
      // get access token
      axios.post('https://apis-server.vercel.app/jwt', user, {withCredentials: true})
      .then(res=>{
          console.log(res.data)
          if(res.data.success){
              navigate('/')
              toast(`Logged in successfully`)
          }
      })
    })
    .catch(error => {
      console.log(error)
      toast(`Sorry! email and password did not match`)
    })
  }

   // logged in by google
   const handleGoogleLogin = () => {
    loginByGoogle()
    .then(result => {
        navigate('/')
        toast('Logged in by google successfully')
        console.log(result.user);
    })
    .catch(error => {
        toast('Sorry! Unsuccessful logged in')
        console.log(error);
    })
  }


  return (
    <>
      <div className="w-3/4 mx-auto">
        <div className="text-center my-10">
          <h2 className="text-xl font-semibold text-center">Login to your account</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* registration form container start */}
          <div className="">
          <h2 className="text-xl font-semibold text-center">Login to your account</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
            </form>
          {/* registration form */}
          </div>
          {/* registration form container end */}
          <div className="mt-14">
            {/* google */}
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex items-center w-full my-4">
                <hr  className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr  className="w-full dark:text-gray-600" />
              </div>
              
              <div className="my-6 space-y-4">
                <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                  <p>Login with Google</p>
                </button>
                
              </div>
              
            </div>
            {/* google */}
          </div>
        </div>
        <div className="text-center pb-10">
            <p className="md:text-2xl">Do not have an account? Please <Link to='/registration' className="text-purple-500">Register</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login