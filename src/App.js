import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import Searchbar from "./components/searchbar";
import "./App.css";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchTerm}&image_type=photo&safesearch=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <div className="container">
      <h1 className="pageTitle">Image Gallery</h1>
      <Searchbar searchText={(text) => setsearchTerm(text)} />
      {isLoading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <div className="grid">
          {images.map((item) => (
            <ImageCard key={item.id} image={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
