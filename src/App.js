import React, { Fragment, useState, useEffect } from "react";
import { Frase } from "./components/Frase";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #6c757d 0%,
    #495057 40%,
    #212529 100%
  );
  // background-size: 300px;
  font-family: Roboto Slab, serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 7px;
  transition: background-size 0.8s ease, font-size 1s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
    font-size: 2.15rem;
  }
`;

function App() {
  // State de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch("https://api.chucknorris.io/jokes/random");
    const frase = await api.json();
    // console.log(frase);
    guardarFrase(frase);
  };

  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      <Contenedor>
        <Frase frase={frase} />

        <Boton onClick={consultarAPI}>Change Sentence</Boton>
      </Contenedor>
    </Fragment>
  );
}

export default App;
