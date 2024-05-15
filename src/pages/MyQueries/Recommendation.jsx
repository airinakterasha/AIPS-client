

const Recommendation = ({recommendByOne}) => {
  const { recomTitle, recomProdName, recomProdImage, recomReason, recommenderName, recommenderEmail, recommenderImage, day, month, year, hours, minutes, seconds} = recommendByOne
  return (
    <>
      {/* recommendation start */}
      <div className="p-5 ">
        <div className="container flex flex-col w-full max-w-lg mx-auto divide-y rounded-3xl dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={recommenderImage} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{recommenderName}</h4>
                        <span className="text-xs dark:text-gray-600">{recommenderEmail}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">  
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                  <div className="w-full">
                    <img src={recomProdImage} alt={recomProdName} className="rounded-3xl" />
                  </div>
                  <div className="space-y-1">
                      <p><span className="font-bold">Recommendation name: </span>{recomTitle}</p>
                      <p><span className="font-bold">Recommendation Product name: </span>{recomProdName}</p>
                      <p><span className="font-bold">Recommendation reason: </span>{recomReason}</p>
                  </div> 
                  <div className="flex">
                    <div className="w-40"><span className="font-bold">Date:</span> {`${day} - ${month} - ${year}`}</div>
                    <div className="w-40"><span className="font-bold">Time:</span> {`${hours}h - ${minutes}m - ${seconds}s`}</div>
                  </div>
                
            </div>
        </div>
    </div>
    {/* recommendation end */}
    </>
  )
}

export default Recommendation