import React from "react";
import './index.css';
import Header from "./components/Header";
import Posts from "./components/Posts/Card";

function App() {
  return (
    <div className="App">
      <Header/>
      <Posts/>
    </div>
  );
}

export default App;
