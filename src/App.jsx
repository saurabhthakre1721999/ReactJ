import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Greeting from "../day 6 props/greeting";

function App() {
  return (
    <div>
      <Greeting
        uname="saurabh"
        profile={{
          clg: "godavari",
          roll: "45",
        }}
        color="red"
      />
      <Greeting uname="rohit " profile={{ clg: " gh raisoni" }} />
    </div>
  );
}

export default App;
