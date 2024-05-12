import {Link} from 'react-router-dom'

const MyQueries = () => {
  return (
    <div>MyQueries
      <div className="">
        <div className="">
          {/* banner start */}
          <div className="hero" style={{backgroundImage: 'url(./myquery.jpg)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-20">
              <div className="max-w-md">
                <h1 className="mb-10 text-5xl font-bold">Add Queries here</h1>
                <Link to='/add-queries'>
                  <button className="btn btn-warning capitalize">Add query</button>
                </Link>
                
              </div>
            </div>
          </div>
          {/* banner end */}
        </div>
      </div>
    </div>
  )
}

export default MyQueries