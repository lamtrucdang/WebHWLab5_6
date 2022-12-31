import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashlightOn";
import IconButton from "@mui/material/IconButton";

const SwipeButtons = ({ number, setNumber, length }) => {
  function handleClick() {
    console.log("click");
    if (number >= length - 1) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  }
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <ReplayIcon frontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <CloseIcon frontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon frontSize="large" />
      </IconButton>
      <IconButton onClick={handleClick}>
        <FavoriteIcon frontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <FlashOnIcon frontSize="large" />
      </IconButton>
    </div>
  );
};
export default SwipeButtons;
