import { useEffect, useState } from "react";
import QueryHome from "./QueryHome";


const Home = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/query')
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      setQueries(data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <>
      <div className="">Home page</div>
      {/* query section start */}
      <section className="container mx-auto p-5">
        <div className="">
          <h1 className="text-center">Recent Queries</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {
            queries.slice(0,50).map(prodQuery => <QueryHome key={prodQuery._id} prodQuery={prodQuery}></QueryHome>)
          }
         
        </div>
      </section>
      {/* query section end */}
    </>
  )
}

export default Home