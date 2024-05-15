import { useEffect, useState } from "react";
import QueryHome from "./QueryHome";
import HomeSlider from "./HomeSlider";
import HomeBanner from "./HomeBanner";
import HomeRecommender from "./HomeRecommender";
import GetQueryAuthor from "./GetQueryAuthor";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveTwo = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  

const Home = () => {
  const [queries, setQueries] = useState([]);
  const [getQueryAuthor, SetGetQueryAuthor] = useState([]);
  const [recomProduct, SetRecomProduct] = useState([]);
  
  // fetch queries
  useEffect(() => {
    fetch('https://apis-server.vercel.app/query')
    .then(res=> res.json())
    .then(data =>{
      //console.log(data);
      setQueries(data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

   // fetch getQueryAuthor
   useEffect(() => {
    fetch('https://apis-server.vercel.app/query')
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      SetGetQueryAuthor(data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
   
   // fetch recomProduct
  useEffect(()=>{
    fetch('https://apis-server.vercel.app/recommendation')
    .then(res=> res.json())
    .then(data =>{
      //console.log(data);
      SetRecomProduct(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])

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

      {/* query Author section*/}
      <section >
        <div className="container mx-auto">
          <div className="">
            <h1 className="text-center text-3xl font-bold py-12 capitalize">our few respected query authors</h1>
          </div> 
          <div className="">
            <Carousel responsive={responsiveTwo}>
              {
                getQueryAuthor.map(QueryAuthorGet => <GetQueryAuthor key={QueryAuthorGet._id} QueryAuthorGet={QueryAuthorGet}></GetQueryAuthor>)
              }

            </Carousel>
          </div>
        </div>
      </section>

      {/* query Author section end*/}

      {/* Recommender section */}
      <section >
        <div className="container mx-auto">
        <div className="">
          <h1 className="text-center text-3xl font-bold py-12 capitalize">Some of our valuable Recommender</h1>
        </div>  
        <Carousel responsive={responsive}>
            {
              recomProduct.map(recommed => <div key={recommed._id} ><HomeRecommender key={recommed._id} recommed={recommed}></HomeRecommender></div> )
            }
        </Carousel>
          
        </div>
      </section>
      {/* Recommender section end */}
    </>
  )
}

export default Home