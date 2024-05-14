import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import RecommendForMeRow from "./RecommendForMeRow";


const RecommendForMe = () => {
  const {user} = useContext(AuthContext)
   // State to store recommendations
   const [recommendations, setRecommendations] = useState([]);
   console.log('this is recommendation for me', recommendations);
 
   //Get recommendation data   
   useEffect(()=>{
       fetch(`http://localhost:5555/recomforme/${user?.email}`)
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
      <div className="container mx-auto md:h-screen my-10">
        <div className="">
          <div className="text-center bg-warning my-14">
            <h1 className="md:text-4xl font-bold py-4 capitalize">Others recommendations are here</h1>
          </div>
          <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Recommender Name</th>
                  <th>Recommend Title</th>
                  <th>Recommend Product Name</th>
                  <th>Date and Time</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  recommendations.map(recomFor => <RecommendForMeRow key={recomFor._id} recomFor={recomFor}></RecommendForMeRow>)
                }
                
              </tbody>
              {/* foot */}
             
              
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecommendForMe