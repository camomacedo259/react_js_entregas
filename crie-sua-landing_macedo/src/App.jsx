import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./styles.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vinda à nossa loja, Camila!" />
    </>
  );
}

export default App;
