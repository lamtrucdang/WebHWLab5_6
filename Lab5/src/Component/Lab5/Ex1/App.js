import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SwipeButtons from "./Components/SwipeButtons";
import DatingCards from "./Components/DatingCards";
import axios from "axios";
const App = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      axios
        .get(`http://localhost:8000/api/card`)
        .then((res) => {
          // const persons = res.data;
          // this.setState({ persons });
          setPeople(res.data);
          console.log(res);
          setPerson(res.data[0]);
          setLength(res.data.length);
          for (let i = 0; i < res.data.length; i++) {
            if (i === index) {
              setPerson(res.data[i]);
              setLoading(false);
            }
          }
        })
        .catch((error) => console.log(error));
    }
    // async function fetchPerson() {}
    fetchData();
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Tinder App</h1>
      <Header />
      <DatingCards
        number={index}
        setNumber={setIndex}
        person={person}
        people={people}
        isLoading={loading}
      />
      <SwipeButtons number={index} setNumber={setIndex} length={length} />
    </div>
  );
};

export default App;
