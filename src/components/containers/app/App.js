import React from "react";
import "./App.css";
import Header from "../header/header";
import Search from "../app/search/search";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Search />
      </>
    );
  }
}
export default App;
