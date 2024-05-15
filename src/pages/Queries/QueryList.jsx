import { Link } from "react-router-dom";

const QueryList = ({listViewQuery}) => {
    const {_id, productName, brandName, image, queryTitle, boycotReason, year, month, day, hours, minutes, seconds, createdAt, authorName, authorEmail, authorImage} = listViewQuery;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album"/></figure>
            <div className="card-body">
                <div className="flex items-center space-x-2">
                    <img src={authorImage} alt={authorName} className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{authorName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-600">{authorEmail}</span>
                    </div>
                </div>
                <div className="">
                    <h1 className="md:text-2xl font-bold">{queryTitle}</h1>
                    <div className="">
                        <p><span className="font-bold">Product name: </span>{productName}</p>
                        <p><span className="font-bold">Brand name: </span>{brandName}</p>
                    </div>
                    <div className="">
                        <p>
                            <span className="font-bold">Date:</span> {`${day} - ${month} - ${year}`} 
                        </p> 
                        <p>
                            <span className="font-bold">Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}
                        </p>
                    </div>
                    <p className="hidden">created At - {createdAt}</p>
                    <p><span className="font-bold">Alternative reason: </span>{boycotReason}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/add-queries/${_id}`}>
                        <button title="Recommendation" type="button" className="btn btn-sm btn-warning">
                            Recommend
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QueryList