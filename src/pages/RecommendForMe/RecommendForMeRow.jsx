

const RecommendForMeRow = ({recomFor}) => {
    const {recommenderName, recommenderImage, recomTitle, recomProdName, recommenderEmail, day, month, year, hours, minutes, seconds} = recomFor;
  return (
    <tr>
        <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={recommenderImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{recommenderName}</div>
                    <div className="text-sm opacity-50">{recommenderEmail}</div>
                </div>
            </div>
        </td>
        <td>
            {recomTitle}
        </td>
        <td>
            {recomProdName}
        </td>
        <td className="">
            <div className="w-40"><span className="font-bold">Date:</span> {`${day} - ${month} - ${year}`}</div>
            <div className="w-40"><span className="font-bold">Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}</div>
        </td>
    </tr>
  )
}

export default RecommendForMeRow