import React from "react";
import {AliveScope} from "react-activation";
import RoutesIndex from "./routes";

const App = () => {
  return (
    <AliveScope>
      <RoutesIndex />
    </AliveScope>
  );
};

export default App;
