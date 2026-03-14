import React from "react";

const PhotoCard = ({ card, isFav, toggleFavourite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex justify-center mt-4">
        <img
          src={card.download_url}
          alt={card.author}
          className="w-90 rounded-lg   h-75 object-cover"
        />
      </div>

      <div className="p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{card.author}</h2>

        <button onClick={() => toggleFavourite(card)} className="text-2xl">
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
