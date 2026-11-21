// Components
import Navigation from "./Navigation";

const Carousel = ({ updateImage, srcNumber, total }) => {
  const src = `/images/${srcNumber}.jpg`;

  return (
    <div className="carousel" data-testid="carousel-item">
      {srcNumber != 1 ? (
        <Navigation updateImage={updateImage} position={"left"} />
      ) : null}
      <img src={src} className="carousel-img" alt={"image-" + srcNumber} />
      {srcNumber != total ? (
        <Navigation updateImage={updateImage} position={"right"} />
      ) : null}
    </div>
  );
};

export default Carousel;
