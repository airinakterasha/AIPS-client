// react multi caurasal


const HomeRecommender = ({recommed}) => {
    const {recommenderName, recommenderImage, recomTitle, recomReason, recomProdName, recomProdImage, day, month, year} = recommed;
    return (
        <>
            <div className="flex flex-col p-3 dark:bg-gray-50 dark:text-gray-800">
                <img src={recomProdImage} alt="" className="rounded-3xl" />
                <div className="mt-5">
                    <div className="flex space-x-4">
                        <img alt="" src={recommenderImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{recommenderName}</a>
                            <span className="text-xs dark:text-gray-600">{`${day} - ${month} - ${year}`}</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-xl font-semibold">{recomProdName}</h2>
                        <span className="block pb-2 text-sm dark:text-gray-600"><span></span>{recomTitle}</span>
                        <p><span className="font-bold">Recommendation reason: </span>{recomReason}</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default HomeRecommender