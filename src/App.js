import React, { useState, useEffect } from "react";
import "./assets/style.css";
import Images from "./components/Images";
import Search from "./components/Search";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="container mx-auto">
      <Search searchText={(term) => setSearch(term)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-30">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-4xl text-center mx-auto mt-30">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <Images key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
