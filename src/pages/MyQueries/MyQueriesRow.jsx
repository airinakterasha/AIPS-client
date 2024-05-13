import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyQueriesRow = ({userQuery, userQueries, setUserQueries}) => {
    const {_id, productName, brandName, image, queryTitle, year, month, day, hours, minutes, seconds} = userQuery;
    console.log(productName, brandName, image, queryTitle)


    //delete
    const handledelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
            if (result.isConfirmed) {              
              //console.log('delete confirm');
              fetch(`https://apis-server.vercel.app/query/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your query has been deleted.",
                        icon: "success"
                    }); 
                    const remaining = userQueries.filter(cof => cof._id !== _id)
                    setUserQueries(remaining); 
                }
              })
            }
          });
          // delete message end
    }
    // delete end
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {queryTitle}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{productName}</p>
                    <p>{brandName}</p>
                    <p>Date: {`${day} - ${month}  - ${year}`}, Time: {`${hours}h - ${minutes}m - ${seconds}s`} </p>
                    <div className="card-actions justify-end">
                        <Link to={`/add-queries/${_id}`}>
                            <button className="btn btn-accent btn-xs">View details</button>
                        </Link>
                        <Link to={`/update-queries/${_id}`}>
                            <button className="btn btn-warning btn-xs">Update</button>
                        </Link>                   
                        <button onClick={() => {handledelete(_id)}} className="btn btn-error btn-xs">Delete</button>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MyQueriesRow