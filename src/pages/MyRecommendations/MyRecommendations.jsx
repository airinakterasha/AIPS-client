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
      <div className="container mx-auto">
        <div className="">
          <div className="my-5">
            <h1 className="text-center">Here, you have added your {recommendations.length} recommendations</h1>
          </div>
          
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
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  recommendations.map(recomSingle => <MyRecomRow key={recomSingle._id} recomSingle={recomSingle} recommendations={recommendations}></MyRecomRow>)
                }
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRecommendations