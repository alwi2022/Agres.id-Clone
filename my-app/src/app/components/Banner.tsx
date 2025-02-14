export default function Banner() {
    return (
      <div className="flex justify-center ">
      <div className=" w-[1200px]  h-[500px] mb-20 object-cover rounded-2xl overflow-hidden">
        <div className="carousel w-full h-full">
          <div id="slide1" className="carousel-item relative w-full h-full">
            <img
              src="https://www.agres.id/assets/images/cms/home/67888d84439d5_MSI-CYBORG-15-1920x780.jpg"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full">
            <img
              src="https://www.agres.id/assets/images/cms/home/67888d69f03f9_HP-ENVY-X360-1920x780%20(1).jpg"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-full">
            <img
              src="https://www.agres.id/assets/images/cms/home/66e7ec3d77368_1920x780.jpg"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full h-full">
            <img
              src="https://www.agres.id/assets/images/cms/home/66e904a732616_STARLINK-1920x780.jpg"
              className="object-cover w-full h-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  