import React from "react";

import PhotoCard from "./PhotoCard";

const AllPhotos = ({ photos, favourites, toggleFavourite }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo) => {
          const isFav = favourites.some((fav) => fav.id === photo.id);

          return (
            <PhotoCard
              key={photo.id}
              card={photo}
              isFav={isFav}
              toggleFavourite={toggleFavourite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllPhotos;
