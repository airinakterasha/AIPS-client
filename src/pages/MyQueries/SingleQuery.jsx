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
    },[recommendations])
    


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
            recomCount: 0,
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
                setRecommendations(recommendations); 
                form.reset();
                }
            })
    
    }
     // handle Recommendation end 

    return (
        <>
            <div className="container mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* query information */}
                    <div className="col-span-8 p-5 mx-auto sm:p-10 md:p-16 text-black">
                        
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src={image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-warning">
                                <div className="">
                                    <h2 rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">{queryTitle}</h2>   
                                </div>
                                <div className="space-y-3">
                                    <p><span className="font-bold">Product name: </span>{productName}</p>
                                    <p><span className="font-bold">Brand name: </span>{brandName}</p>
                                    <p><span className="font-bold">Alternative reason: </span>{boycotReason}</p>
                                    <div className="">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="w-52"><span className="font-bold">Posted Date:</span> {`${day} - ${month} - ${year}`}</div>
                                            <div className="w-52"><span className="font-bold">Posted Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}</div>
                                        </div>
                                    </div>
                                    <p><span className="font-bold">Rcommendation count: </span>{recommendations.length}</p>
                                </div> 

                                {/* user information */}
                                <div className="pt-3">
                                    <p className="font-bold mb-2">Posted By: </p>
                                    <div className="flex justify-between">
                                        <div className="flex space-x-4">
                                            <div>
                                                <img src={authorImage} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{authorName}</h4>
                                                <span className="text-xs dark:text-gray-600">{authorEmail}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* user information */}
                            </div>
                            
                        </div>
                       
                    </div>
                    {/* query information end*/}
                    {/* column start */}
                    <div className="col-span-4">
                        <div className="">
                            {/* form start */}
                            <div className="">
                                <form onSubmit={handleRecommendation}  className="card-body">
                                    <h1 className="font-bold text-center mb-3">Please feel free to put your recommendation here</h1>
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
                            {/* form end */}
                            <div className="">
                                <h1 className="text-xl md:2xl px-10 font-bold">{recommendations.length} people recommend for the query.</h1>
                            </div>
                            {/* display recommendation start  */}
                            <div className="">
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 space-y-5">
                                    {
                                        recommendations.map(recommendByOne => <Recommendation key={recommendByOne._id} recommendByOne={recommendByOne} queriesdetails={queriesdetails}></Recommendation>)
                                    }
                                   
                                </div>
                            </div>
                            {/* display recommendation  end */}
                        </div> 
                    </div>
                    {/* column end */}

                </div>
                 
            </div>
        </>
    )
}

export default SingleQuery