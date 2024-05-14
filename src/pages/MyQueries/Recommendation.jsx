

const Recommendation = ({recommendByOne}) => {
  const {_id, recomTitle, recomProdName, recomProdImage, recomReason, queryId, queryTitle, productName, recommenderName, recommenderEmail} = recommendByOne
  return (
    <>
      <div className="">
        
        <div className="border-2 p-5">
          <h1 className="">{recomTitle}</h1>
          <h1 className="">{recomProdName}</h1>
          <h1 className="">{recommenderEmail}</h1>
          <h1 className="">{recommenderName}</h1>
        </div>
      </div>
    </>
  )
}

export default Recommendation