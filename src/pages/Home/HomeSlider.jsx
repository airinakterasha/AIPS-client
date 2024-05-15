

const HomeSlider = () => {
  return (
    <>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero" style={{backgroundImage: `url('./slider1.jpeg')`}}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content py-14 md:py-0">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold capitalize">All Solution</h1>
                            <p className="mb-5 text-xl px-10">We have every Solution for you in our website.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero" style={{backgroundImage: `url('./slider2.jpeg')`}}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content py-14 md:py-0">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold capitalize">Any Query</h1>
                            <p className="mb-5 text-xl px-10">If you have any query you can post here. You will get lots of information and recommendation.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full h-96">
                <div className="hero" style={{backgroundImage: `url('./slider3.jpeg')`}}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content py-14 md:py-0">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold capitalize">Easy Service</h1>
                            <p className="mb-5 text-xl px-10">Our service is fast and easy.</p>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    </>
  )
}

export default HomeSlider