import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"

import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

const Login = () => {
  const {login} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
      toast(`Sorry! email and password did not match`)
    })
  }
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="text-2xl">Please Login</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* registration form container start */}
          <div className="">
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          {/* registration form */}
          </div>
          {/* registration form container end */}
          <div className=""></div>
        </div>
        <div className="text-center pb-10">
            <p className="md:text-2xl">Do not have an account? Please <Link to='/registration' className="text-purple-500">Register</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login