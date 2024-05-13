import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateQuery = () => {
    const queries = useLoaderData();

    const navigate = useNavigate();
    console.log(queries);
    const {_id, productName, brandName, image, queryTitle, boycotReason} = queries;

    const handleUpdateQueries = (event) => {
        event.preventDefault();
        const form = event.target;

        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const queryTitle = form.queryTitle.value;
        const boycotReason = form.boycotReason.value;

        //console.log(productName, brandName, image, queryTitle, boycotReason);
        const newQueries = {productName, brandName, image, queryTitle, boycotReason};
        console.log(newQueries);
        // send data to the server
        fetch(`http://localhost:5555/query/${_id}`, {
            method: 'PUT',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(newQueries)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
            Swal.fire({
                title: 'Success!',
                text: 'Your Tourist Spot Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Excellent'
            }, navigate('/my-queries'))
            }
        })

    }
    return (
        <>
            <div className="md:w-1/2 mx-auto">
            <div className="text-center">
            <h1 className="text-2xl capitalize">Update query</h1>
            </div>
            
            <div className="">
            <form onSubmit={handleUpdateQueries} className="card-body">
                <div className="flex gap-5">
                    <div className="form-control grow w-full">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" defaultValue={productName}  placeholder="Write the product name" className="input input-bordered" required />
                    </div>
                    <div className="form-control grow w-full">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand name of the product" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image</span>
                </label>
                <input type="text" name="image" defaultValue={image} placeholder="image url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Query Title</span>
                </label>
                <input type="text" name="queryTitle" defaultValue={queryTitle} placeholder="Query title" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text"> Boycotting Reason Details</span>
                </label>
                <input type="text" name="boycotReason" defaultValue={boycotReason} placeholder="Why do you want to boycot the product? write here." className="input input-bordered" required />
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-warning">Update query</button>
                </div>
            </form>
            {/* registration form */}
            </div>          
        </div>
        </>
    )
}

export default UpdateQuery