import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";
import Recommendation from "./Recommendation";


const SingleQuery = () => {
    const {user} = useContext(AuthContext);
    const queriesdetails = useLoaderData();
    //console.log(queriesdetails);
    const {_id, productName, image, queryTitle, brandName, boycotReason, day, month, year, hours, minutes, seconds, authorName, authorEmail, authorImage} = queriesdetails;

    // State to store recommendations
    const [recommendations, setRecommendations] = useState([]);
    console.log('this is recommendation', recommendations);

    //Get recommendation data   
    useEffect(()=>{
        fetch(`http://localhost:5555/recommendcomment/${_id}`)
        .then(res => res.json())
        .then(data => {
            setRecommendations(data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
    


    // handle Recommendation
    const handleRecommendation = (event) => {
        event.preventDefault();
        const form = event.target;
        const recomTitle = form.recomTitle.value;
        const recomProdName = form.recomProdName.value;
        const recomProdImage = form.recomProdImage.value;
        const recomReason = form.recomReason.value;
        //console.log(recomTitle, recomProdName, recomProdImage, recomReason)
        
        const addRecommendation = {
            recomTitle, 
            recomProdName, 
            recomProdImage, 
            recomReason, 
            queryId: _id, 
            queryTitle: queryTitle,
            productName: productName,
            userName: authorName,
            userEmail: authorEmail,
            userImage: authorImage,
            //recommender
            recommenderEmail: user?.email,
            recommenderName: user?.displayName,
            recommenderImage: user?.photoURL,
            day: day, 
            month: month, 
            year: year,
            hours: hours, minutes: minutes, seconds: seconds
        }
        //console.log(addRecommendation);


        // send data to the server
        fetch('http://localhost:5555/recommendation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addRecommendation)
            })
            .then(res => res.json())
            .then(data => {
            console.log(data);
            if(data.insertedId){
                toast('You added your recommendation Successfully, Please refresh the page')

                }
                

            })
    
    }
     // handle Recommendation end 

    return (
        <>
            <div className="">
                <div className="text-center">
                    <h1 className="">{`${day} - ${month} - ${year}`}</h1>
                    <h1 className="">{productName}</h1>
                </div>
                <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                        <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{queryTitle}</a>
                                <p>{productName}</p>
                                <p className="text-xs dark:text-gray-600">By
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{brandName}</a>
                                </p>
                            </div>
                            <div className="dark:text-gray-800">
                                <p>{boycotReason}</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="">REcommendation count</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-center">User information</h1>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Leroy Jenkins</h4>
                                    <span className="text-xs dark:text-gray-600">2 days ago</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                            <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="">
                        <h1 className="text-center">Add A Recommendation</h1>
                        {/* recommendation start */}
                        <div className="">
                            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Leroy Jenkins</h4>
                                            <span className="text-xs dark:text-gray-600">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                        </svg>
                                        <span className="text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                                </div>
                            </div>
                        </div>
                        {/* recommendation end */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="">
                            posted here

                            <div className="">
                                <h1 className="">{recommendations.length}</h1>
                            </div>
                            <div className="">
                                <div className="space-y-5">
                                    {
                                        recommendations.map(recommendByOne => <Recommendation key={recommendByOne._id} recommendByOne={recommendByOne} queriesdetails={queriesdetails}></Recommendation>)
                                    }
                                   
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="">form here</h1>
                            <div className="">
                                <form onSubmit={handleRecommendation}  className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Recommendation Title</span>
                                        </label>
                                        <input type="text" name="recomTitle" placeholder="Recommendation title" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Recommended Product Name</span>
                                        </label>
                                        <input type="text" name="recomProdName" placeholder="Recommendation product name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Recommended Product Image</span>
                                        </label>
                                        <input type="text" name="recomProdImage" placeholder="Recommendation product image" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Recommendation reason</span>
                                        </label>
                                        <input type="text" name="recomReason" placeholder="Why do you recommend the product? write here." className="input input-bordered" required />
                                    </div>
                                    
                                    <div className="form-control mt-6">
                                        <button className="btn btn-warning">Add Recommendation</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleQuery