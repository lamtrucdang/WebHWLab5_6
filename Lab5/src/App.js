import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Ex1 from "./Component/Lab5/Ex1/App";
import Ex2 from "./Component/Lab5/Ex2/App";
export default function App() {
  const [myComponent, setComponent] = useState(() => () => null);
  useEffect(() => {
    import("./Component/Excersise_1/Ex1_0").then((module) => {
      setComponent(() => module.default);
    });
  }, []);
  return (
    <Router>
    </Router>
  );
}

function Home() {
  return <div></div>;
}

function Topics() {
  let match = useRouteMatch();

  return <div></div>;
}
