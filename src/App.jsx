import "./App.css";
import Carousel from "./Carousel.jsx";
import photos from "./photos.js";

function App() {
  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <Carousel photos={carouselPhotos} title={carouselTitle} />
    </div>
  );
}

export default App;
