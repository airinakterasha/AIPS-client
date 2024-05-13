import { useLoaderData } from "react-router-dom"
import QuerySingle from "./QuerySingle";


const Queries = () => {
  const allQueries = useLoaderData();
  console.log(allQueries);
  
  return (
    <>
      <div className="container mx-auto">
        <div className="my-5">
          <h1 className="text-center">All Queries</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {
            allQueries.map(query => <QuerySingle key={query._id} query={query}></QuerySingle>)
          }
        </div>
      </div>
    </>
  )
}

export default Queries