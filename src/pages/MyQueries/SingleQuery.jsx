import { useLoaderData } from "react-router-dom"


const SingleQuery = () => {
    const queriesdetails = useLoaderData();
    console.log(queriesdetails);
    const {_id, productName, image, queryTitle, brandName, boycotReason, day, month, year} = queriesdetails;
    return (
        <>SingleQuery
            <div className="text-center">
                <div className="">
                    <h1 className="">{queryTitle}</h1>
                    <h1 className="">{productName}</h1>
                </div>
            </div>
        </>
    )
}

export default SingleQuery