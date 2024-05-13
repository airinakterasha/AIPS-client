import { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import MyQueriesRow from './MyQueriesRow';
import useAxiosSecure from './../../hooks/useAxiosSecure';

const MyQueries = () => {
  const {user} = useContext(AuthContext);
  const [userQueries, setUserQueries] = useState([]);
  console.log(userQueries);
  const axiosSecure = useAxiosSecure();
  

  useEffect(()=>{
    if(!user){
      return
    }
    const url = `/myquery/${user?.email}`;
    axiosSecure.get(url)
    .then(res => {
      console.log(res.data);
      setUserQueries(res.data);
    })
    .catch(err=>{
      console.log(err);
      console.log('not found');
    })
  }, [user]);


  return (
    <>
      <div className="">
        <div className="">
          {/* banner start */}
          <div className="hero" style={{backgroundImage: 'url(./myquery.jpg)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-20">
              <div className="max-w-md">
                <h1 className="mb-10 text-5xl font-bold">Add Queries here</h1>
                <Link to='/add-queries'>
                  <button className="btn btn-warning capitalize">Add query</button>
                </Link>
                
              </div>
            </div>
          </div>
          {/* banner end */}
        </div>
        <div className="container mx-auto">
          {/* table start */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Query Name</th>
                  <th>Product name</th>
                  <th>Brand Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  userQueries.map(userQuery => <MyQueriesRow key={userQuery._id} userQuery={userQuery}></MyQueriesRow>)
                }
                
              </tbody>              
            </table>
          </div>
          {/* table end */}
        </div>
      </div>
    </>
  )
}

export default MyQueries