import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>Minha Loja</h1>
      <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Contato</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
