import { useEffect, useState } from "react";
import QueryHome from "./QueryHome";
import HomeSlider from "./HomeSlider";
import HomeBanner from "./HomeBanner";


const Home = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch('https://apis-server.vercel.app/query')
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
      {/* {Home Slider section} */}
      <section>
        <HomeSlider></HomeSlider>
      </section>
      {/* {Home Slider section end} */}

      {/* {Home banner section} */}
      <HomeBanner></HomeBanner>
      {/* {Home banner section end} */}

      {/* query section start */}
      <section className="container mx-auto p-5">
        <div className="">
          <h1 className="text-center text-3xl font-bold py-12">Recent Queries</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {
            queries.slice(0,6).map(prodQuery => <QueryHome key={prodQuery._id} prodQuery={prodQuery}></QueryHome>)
          }
         
        </div>
      </section>
      {/* query section end */}
    </>
  )
}

export default Home