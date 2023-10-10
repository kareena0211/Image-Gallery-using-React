LightGallery React Component
This project is a React component that integrates the LightGallery library to create a responsive image gallery with various interactive features. The LightGallery library is used for its versatile functionalities, including zoom, autoplay, fullscreen, rotation, and sharing capabilities. The component allows you to display a collection of images in a visually appealing manner, enhancing the user's browsing experience.

Features
Image Display: Easily display a collection of images in a grid or slideshow format.
Zoom: Users can zoom in on images for a closer look.
Autoplay: The gallery can automatically play through the images.
Fullscreen: Provides a fullscreen mode for better image viewing.
Rotation: Allows users to rotate images.
Sharing: Users can share images via various social media platforms.
Installation
To use this component in your project, follow these installation steps:

Install the LightGallery library and its required stylesheets using npm or yarn:

bash
Copy code
npm install lightgallery
bash
Copy code
npm install lightgallery/css/lightgallery.css
npm install lightgallery/css/lg-zoom.css
npm install lightgallery/css/lg-thumbnail.css
npm install lightgallery/css/lg-autoplay.css
npm install lightgallery/css/lg-fullscreen.css
npm install lightgallery/css/lg-share.css
npm install lightgallery/css/lg-rotate.css
Import the necessary LightGallery plugins:

javascript
Copy code
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
Create an array of image objects with their source and alt text:

javascript
Copy code
const images = [
  { src: "/public/1.jpg", alt: "Flag of India" },
  // Add more image objects here
];
Implement the Gallery component in your application, passing the images array and configuring the desired plugins:

javascript
Copy code
import LightGallery from "lightgallery/react";

function Gallery() {
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
Usage
Simply include the Gallery component in your React application, and it will render a beautiful image gallery with LightGallery functionalities.

Feel free to customize the component further to match your project's specific requirements and styling.
