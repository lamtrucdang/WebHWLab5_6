import React, { useState, useEffect } from "react";
import DatingCard from "react-tinder-card";
import axios from "axios";

const DatingCards = ({ number, setNumber, person, people ,isLoading}) => {
  const swiped = (direction, nameToDelete) => {
    console.log("receiving" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!!");
  };

  return (
    <div className="datingCards">
      {isLoading === true ? (
        <>
          <p>Is loading</p>
        </>
      ) : (
        <>
          {" "}
          <div className="datingCards_container">
            <h1>{people[number].name}</h1>
            <img style={{ width: "200px" }} src={people[number].imgURL}></img>
          </div>
        </>
      )}
    </div>
  );
};

export default DatingCards;
