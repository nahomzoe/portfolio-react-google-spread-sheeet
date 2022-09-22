import ReactStars from "react-stars";
import React from "react";

const Star = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default Star;
