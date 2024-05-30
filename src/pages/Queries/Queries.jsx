import { useLoaderData } from "react-router-dom"
import QuerySingle from "./QuerySingle";
import QueryList from "./QueryList";
import { useEffect, useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import Pagination from "../../components/Pagination/Pagination";


const Queries = () => {
  //console.log(allQueries);
  const [query, setQuery] = useState([]);

  const [toggleView, setToggleView] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [count, setCount] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);

 const pages = [...Array(numberOfPages).keys()];


  useEffect( () =>{
      fetch('https://apis-server.vercel.app/queryCount')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  useEffect(() => {
      fetch(`https://apis-server.vercel.app/query?page=${currentPage}&size=${itemsPerPage}`)
          .then(res => res.json())
          .then(data => setQuery(data))
  }, [currentPage, itemsPerPage]);


  const toggleGridView = () => {
    setToggleView(true);
  }

  const toggleListView = () => {
    setToggleView(false);
  }
  // pagination start

  const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  }

  const handlePrevPage = () => {
      if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
      }
  }

  const handleNextPage = () => {
      if (currentPage < pages.length - 1) {
          setCurrentPage(currentPage + 1);
      }
  }
  // pagination end
  

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
                query.map(query => <QuerySingle key={query._id} query={query}></QuerySingle>)
              }
            </div>
          </>
        ) : (
          <>
            <div className="space-y-5">
              {
                query.map(listViewQuery => <QueryList key={listViewQuery._id} listViewQuery={listViewQuery}></QueryList>)
              }
            </div>
          </>
          )
        }
        
      </div>
      <div className="text-center">
        <Pagination 
        pages={pages} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        handleItemsPerPage={handleItemsPerPage} 
        handlePrevPage={handlePrevPage} 
        handleNextPage={handleNextPage}
        ></Pagination>
      </div>
    </>
  )
}

export default Queries