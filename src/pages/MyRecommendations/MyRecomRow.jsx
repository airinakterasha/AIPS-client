import Swal from "sweetalert2";


const MyRecomRow = ({recomSingle, recommendations, setRecommendations}) => {
    const {_id, recomTitle, recomProdName, recomProdImage, userName, userEmail, day, month, year, hours, minutes, seconds} = recomSingle;

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
              fetch(`https://apis-server.vercel.app/recommendation/${_id}`, {
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
                
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={recomProdImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{recomTitle}</div>
                        <div className="text-sm opacity-50">{recomProdName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {userName}
                    <br/>
                    <span className="badge badge-ghost badge-sm">{userEmail}</span>
                </td>
                <td>
                    <div className="w-40"><span className="font-bold">Date:</span> {`${day} - ${month} - ${year}`}</div>
                    <div className="w-40"><span className="font-bold">Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}</div>
                </td>
                <th>
                    <button onClick={() => {handledelete(_id)}} className="btn btn-warning btn-xs">delete</button>
                </th>
            </tr>
        </>
    )
}

export default MyRecomRow