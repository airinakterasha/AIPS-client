import { Link } from "react-router-dom"

const HomeBanner = () => {
  return (
    <>
        <section className="container mx-auto bg-warning text-black -mt-2">
            <div className="container flex flex-col mx-auto sm:py-12 lg:py-14 lg:flex-row">
                <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="./banner.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:ps-48" />
                </div>
                {/* <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"> */}
                <div className="flex flex-col rounded-sm md:text-center lg:text-left lg:ps-24 lg:justify-center">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl ps-10">
                        Get all query
                    </h1>
                    <p className="mt-6 lg:mb-8 text-lg ps-10 lg:pr-10">
                        Click the button to see all the queries
                    </p>

                    <div className="p-5">
                        <Link to='/queries'>
                            <button className="btn btn-block bg-white">All Query</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HomeBanner