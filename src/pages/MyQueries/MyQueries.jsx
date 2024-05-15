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
        <div className="container mx-auto my-10">
          {/* card start */}
          {
            userQueries.length === 0 ? (
              
                <div className="text-center text-gray-600 space-y-5 my-24">
                  <p>No queries found.</p> 
                  <p>If you have any query Please add -</p>  
                  <p>
                  <Link to='/add-queries'>
                    <button className="btn btn-warning capitalize">Add your query</button>
                  </Link></p>                               
                </div>
              
            ) : (

              <div className="">
                  <div className="text-center bg-warning my-14">
                    <h1 className="md:text-4xl font-bold py-4 capitalize">My Queries</h1>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {
                          userQueries.map(userQuery => <MyQueriesRow key={userQuery._id} userQuery={userQuery} userQueries={userQueries} setUserQueries={setUserQueries}></MyQueriesRow>)
                      }
                  </div>
              </div>
              
            )
          }
          
          
          
          {/* card end */}
        </div>
      </div>
    </>
  )
}

export default MyQueries