import Swal from "sweetalert2";


const MyRecomRow = ({recomSingle, recommendations, setRecommendations}) => {
    const {_id, recomProdName} = recomSingle;

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
              fetch(`http://localhost:5555/recommendation/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your recommendation has been deleted.",
                        icon: "success"
                    }); 
                    const remaining = recommendations.filter(com => com._id !== _id)
                    setRecommendations(remaining); 
                }
              })
            }
          });
          // delete message end
    }    
    
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{recomProdName}</div>
                        <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button onClick={() => {handledelete(_id)}} className="btn btn-warning btn-xs">delete</button>
                </th>
            </tr>
        </>
    )
}

export default MyRecomRow