import { useLoaderData } from "react-router-dom"
import QuerySingle from "./QuerySingle";
import QueryList from "./QueryList";
import { useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";


const Queries = () => {
  const allQueries = useLoaderData();
  //console.log(allQueries);
  const [toggleView, setToggleView] = useState(true);

  const toggleGridView = () => {
    setToggleView(true);
  }

  const toggleListView = () => {
    setToggleView(false);
  }
  

  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center bg-warning my-14">
          <h1 className="md:text-4xl font-bold py-4 capitalize">All Queries</h1>
        </div>
        <div className="flex gap-10 mb-10 ps-10">
          <div onClick={toggleGridView} className="text-4xl btn btn-warning"><BsGrid3X3Gap /></div>
          <div onClick={toggleListView} className="text-4xl btn btn-warning"><FaList /></div>
        </div>
        {
          toggleView ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {
                allQueries.map(query => <QuerySingle key={query._id} query={query}></QuerySingle>)
              }
            </div>
          </>
        ) : (
          <>
            <div className="space-y-5">
              {
                allQueries.map(listViewQuery => <QueryList key={listViewQuery._id} listViewQuery={listViewQuery}></QueryList>)
              }
            </div>
          </>
          )
        }
        
      </div>
    </>
  )
}

export default Queries