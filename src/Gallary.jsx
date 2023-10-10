import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: "./public/1.jpg", alt: "Flag of India" },
  { src: "./public/2.jpg", alt: "2" },
  { src: "./public/3.jpg", alt: "3" },
  { src: "./public/4.jpg", alt: "4" },
  { src: "./public/5.jpg", alt: "5" },
  { src: "./public/6.jpg", alt: "6" },
  { src: "./public/7.jpg", alt: "7" },
  { src: "./public/8.jpg", alt: "8" },
  { src: "./public/9.jpg", alt: "9" },
  { src: "./public/10.jpg", alt: "10" },
  { src: "./public/11.jpg", alt: "11" },
  { src: "./public/12.jpg", alt: "12" },
  { src: "./public/13.jpg", alt: "13" },
  { src: "./public/14.jpg", alt: "14" },
  { src: "./public/15.jpg", alt: "15" },
  { src: "./public/16.jpg", alt: "16" },
  { src: "./public/17.jpg", alt: "17" },
  { src: "./public/18.jpg", alt: "18" },
  { src: "./public/19.jpg", alt: "19" },
];

export function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[
          lgThumbnail,
          lgZoom,
          lgAutoplay,
          lgFullscreen,
          lgRotate,
          lgShare,
        ]}
      >
        {images.map((image, index) => {
          return (
            <a href={image.src} key={index}>
              <img alt={image.alt} src={image.src} />
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}
