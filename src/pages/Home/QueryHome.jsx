 import { Link } from "react-router-dom"

const QueryHome = ({prodQuery}) => {
  const {_id, productName, image, queryTitle, brandName, boycotReason, day, month, year, createdAt, authorName, authorImage} = prodQuery
  return (
    <>
      <div className="">
        <Link to={`/add-queries/${_id}`}>
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="flex space-x-4">
              <img alt="" src={authorImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{authorName}</a>
                <span className="text-xs dark:text-gray-600">{`${day} - ${month} - ${year}`}</span>
              </div>
            </div>
            <div>
              <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
              <h2 className="mb-1 text-xl font-semibold">{queryTitle}</h2>
              <p className="text-sm dark:text-gray-600"><span className="font-bold">Alternation Reason: </span>{boycotReason}...</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p><span className="font-bold">Product: </span>{productName}</p>
              <p><span className="font-bold">Brand: </span>{brandName}</p>
            </div>
            <p className="hidden">created At - {createdAt}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default QueryHome