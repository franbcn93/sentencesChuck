import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  h1 {
    text-align: center;
    position: relative;
    padding-left: 4rem;
    padding-right: 4rem;
    &::before,
    &::after {
      font-size: 5rem;
      color: black;
      position: absolute;
    }
    &::after {
      content: close-quote;
      right: -1rem;
      // top: 2rem;
    }
    &::before {
      content: open-quote;
      left: -1rem;
      top: -2rem;
    }
  }
`;

export const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.value} </h1>
    </ContenedorFrase>
  );
};
