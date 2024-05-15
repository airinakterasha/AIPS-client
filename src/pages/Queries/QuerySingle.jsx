import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuerySingle = ({query}) => {
    const {_id, productName, brandName, image, queryTitle, boycotReason, year, month, day, hours, minutes, seconds, createdAt, authorName, authorEmail, authorImage} = query;

    // State to store recommendations
    const [recommendations, setRecommendations] = useState([]);
    console.log('this is recommendation', recommendations);

    //Get recommendation data   
    useEffect(()=>{
        fetch(`https://apis-server.vercel.app/recommendcomment/${_id}`)
        .then(res => res.json())
        .then(data => {
            setRecommendations(data)
        })
        .catch(err => {
            console.log(err);
        })
    },[recommendations]);

    return (
        <>
            <div className="px-5 md:px-0">
                <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <img src={authorImage} alt={authorName} className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300" />
                            <div className="-space-y-1">
                                <h2 className="text-sm font-semibold leading-none">{authorName}</h2>
                                <span className="inline-block text-xs leading-none dark:text-gray-600">{authorEmail}</span>
                            </div>
                        </div>
                        <Link to={`/add-queries/${_id}`}>
                            <button title="Recommendation" type="button" className="btn btn-sm btn-warning">
                                Recommend
                            </button>
                        </Link>
                    </div>
                    <img src={image} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="py-3 px-6">
                        <div className="">
                            <h1 className="md:text-2xl font-bold">{queryTitle}</h1>
                            <div className="">
                                <p><span className="font-bold">Product name: </span>{productName}</p>
                                <p><span className="font-bold">Brand name: </span>{brandName}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>
                                    <span className="font-bold">Date:</span> {`${day} - ${month} - ${year}`} 
                                </p> 
                                <p>
                                    <span className="font-bold">Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}
                                </p>
                                
                            </div>
                            <p className="hidden">created At - {createdAt}</p>
                            <p><span className="font-bold">Alternative reason: </span>{boycotReason}</p>
                            <p><span className="font-bold">Recommendation count:</span> {recommendations.length} person recommend the query</p>
                        </div>
                       
                    </div>

                </div>
            </div>
        </>
    )
}

export default QuerySingle