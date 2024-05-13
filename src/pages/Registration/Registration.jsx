import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    console.log(name, email, password, image)

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      // user create to database
      const createAt = result.user?.metadata?.creationTime;
      const user = {name, email, image, createAt}
      updateUserProfile(name, image)
      .then(()=>{
          fetch('https://apis-server.vercel.app/user', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.insertedId){
                  Swal.fire({
                      title: 'Success!',
                      text: 'You have been created your account',
                      icon: 'success',
                      confirmButtonText: 'Great',
                  }, navigate('/'))
              }
          })
      })
    })
    .catch(error => {
      toast(`Sorry! ${error}`)
    })
  }
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl">Please Register</h1>
        </div>
        
        <div className="">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="taxt" name="name" placeholder="Your name" className="input input-bordered" required />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Picture url</span>
              </label>
              <input type="text" name="image" placeholder="Image url" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
          </form>
        {/* registration form */}
        </div>
        <div className="text-center pb-10">
            <p className="md:text-2xl">Already have an account? Please <Link to='/login' className="text-purple-500">Login</Link></p>
        </div>
          
      </div>
    </>
  )
}

export default Registration