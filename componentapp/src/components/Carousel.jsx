import img1 from "../assets/imgs1.jpg";
import img2 from "../assets/imgs2.jpg";
import img3 from "../assets/imgs3.jpg";
const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="500">
          <img src={img1} className="d-block w-100" alt="..." height="350px" />
        </div>
        <div className="carousel-item" data-bs-interval="500">
          <img src={img2} className="d-block w-100" alt="..." height="350px" />
        </div>
        height = "350px"
        <div className="carousel-item" data-bs-interval="500">
          <img src={img3} className="d-block w-100" alt="..." height="350px" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
