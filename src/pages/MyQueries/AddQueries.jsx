import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddQueries = () => {
  const {user} = useContext(AuthContext);
  const currentDate = new Date();
  const navigate = useNavigate();
  const handleAddQueries = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const image = form.image.value;
    const queryTitle = form.queryTitle.value;
    const boycotReason = form.boycotReason.value;

    //get date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = currentDate.getDate();

    // Author Information
    const authorName = user?.displayName;
    const authorImage = user?.photoURL;
    
    console.log(productName, brandName, image, queryTitle, boycotReason, 'Date: ', year, month, day, authorName, authorImage);
    const addQuery = {productName, brandName, image, queryTitle, boycotReason, year, month, day, authorName, authorImage};

    // send data to the server
    fetch('http://localhost:5555/query', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(addQuery)
      })
      .then(res => res.json())
      .then(data => {
      console.log(data);
      if(data.insertedId){
          Swal.fire({
          title: 'Success!',
          text: 'You added your query Successfully',
          icon: 'success',
          confirmButtonText: 'Awesome'
          }, navigate('/my-queries'))
      }
      })



  }
  return (
    <>
      <div className="md:w-1/2 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl capitalize">Please Add your queries</h1>
        </div>
        
        <div className="">
          <form onSubmit={handleAddQueries} className="card-body">
            <div className="flex gap-5">
                <div className="form-control grow w-full">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input type="text" name="productName" placeholder="Write the product name" className="input input-bordered" required />
                </div>
                <div className="form-control grow w-full">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input type="text" name="brandName" placeholder="Brand name of the product" className="input input-bordered" required />
                </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Query Title</span>
              </label>
              <input type="text" name="queryTitle" placeholder="Query title" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text"> Boycotting Reason Details</span>
              </label>
              <input type="text" name="boycotReason" placeholder="Why do you want to boycot the product? write here." className="input input-bordered" required />
            </div>
            
            <div className="form-control mt-6">
              <button className="btn btn-warning">Add query</button>
            </div>
          </form>
        {/* registration form */}
        </div>          
      </div>
    </>
  )
}

export default AddQueries