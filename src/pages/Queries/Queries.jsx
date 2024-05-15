import { useLoaderData } from "react-router-dom"
import QuerySingle from "./QuerySingle";


const Queries = () => {
  const allQueries = useLoaderData();
  console.log(allQueries);

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center bg-warning my-14">
          <h1 className="md:text-4xl font-bold py-4 capitalize">All Queries</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {
            allQueries.map(query => <QuerySingle key={query._id} query={query}></QuerySingle>)
          }
        </div>
      </div>
    </>
  )
}

export default Queries