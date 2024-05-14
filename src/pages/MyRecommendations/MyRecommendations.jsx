import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyRecomRow from "./MyRecomRow";


const MyRecommendations = () => {
  const {user} = useContext(AuthContext);

  // State to store recommendations
  const [recommendations, setRecommendations] = useState([]);
  console.log('this is recommendation', recommendations);

  //Get recommendation data   
  useEffect(()=>{
      fetch(`http://localhost:5555/myrecommendation/${user?.email}`)
      .then(res => res.json())
      .then(data => {
          setRecommendations(data)
      })
      .catch(err => {
          console.log(err);
      })
  },[])
  
  return (
    <>
      <div className="container mx-auto md:h-screen">
        <div className="">
          <div className="text-center bg-warning my-14">
            <h1 className="md:text-4xl font-bold py-4 capitalize">You have added your {recommendations.length} recommendations</h1>
          </div>
          {recommendations.length === 0 ? (
                <p className="text-center md:text-2xl my-28 font-bold">Sorry! You do not have added any recommendations.</p>
              ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Your Recommend Information</th>
                  <th>User Information</th>
                  <th>Time and Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  recommendations.map(recomSingle => <MyRecomRow key={recomSingle._id} recomSingle={recomSingle} recommendations={recommendations} setRecommendations={setRecommendations}></MyRecomRow>)
                }
              </tbody>
              {/* foot */}
            </table>
          </div>
          )}
        </div>      
      </div>
    </>
  )
}

export default MyRecommendations