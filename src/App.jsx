import "./App.css";
import Header from "./components/Header";
import AllPhotos from "./components/AllPhotos";
import { useCallback, useMemo, useState, useReducer, useEffect } from "react";
import useFetchPhoto from "./hooks/useFetchPhoto";
import LoadingSpinner from "./components/LoadingSpinner";

const favouriteReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAV":
      const exists = state.find((photo) => photo.id === action.payload.id);

      if (exists) {
        return state.filter((photo) => photo.id !== action.payload.id);
      }

      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [search, setSearch] = useState("");

  const { photos, loading } = useFetchPhoto();

  const [favourites, dispatch] = useReducer(favouriteReducer, [], () => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (photo) => {
    dispatch({
      type: "TOGGLE_FAV",
      payload: photo,
    });
  };

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Header search={search} handleSearch={handleSearch} />

      <AllPhotos
        photos={filteredPhotos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </>
  );
}

export default App;
