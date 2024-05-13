

const MyQueriesRow = ({userQuery}) => {
    const {productName, brandName, image, queryTitle} = userQuery;
    console.log(productName, brandName, image, queryTitle)
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
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{brandName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {queryTitle}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    )
}

export default MyQueriesRow