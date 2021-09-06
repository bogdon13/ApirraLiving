import { ViewCarouselOutlined } from "@material-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const FurnitureCarousel = (props) => {
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true}
        infinite={true}
        itemClass="carousel-item-padding-150-px"
      >
        {props.images.map((image) => (
          <div key={image}>
            <Image width={350} height={200} src={image} />
          </div>
        ))}
        {/* <div>
          <Image width={350} height={200} src={"/carousel1.jpeg"} />
        </div>
        <div>
          <Image width={350} height={200} src="/carousel2.jpeg" />
        </div>
        <div>
          <Image width={350} height={200} src="/carousel3.jpeg" />
        </div>
        <div>
          <Image width={350} height={200} src="/carousel4.jpeg" />
        </div> */}
      </Carousel>
    </>
  );
};

export default FurnitureCarousel;
