import styled from "styled-components";
import iconPesquisa from "./assets/search.svg";
import { useState } from "react";

const ContainerInput = styled.input`
  width: 100%;
  height: 49px;
  color: var(--cinza-claro);
  padding: 0.5em 1em 0.5em 4em;
  font-size: 22px;
  font-family: var(--fonte);
  background: var(--cinza-escuro) url(${iconPesquisa}) no-repeat 32px;
  border: none;
  border-radius: 8px;
`;

const BarraDePesquisa = () => {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  return (
    <ContainerInput
      type="search"
      placeholder="Digite o que você procura"
      value={termoPesquisa}
      onChange={(evento) => setTermoPesquisa(evento.target.value)}
    />
  );
};

export default BarraDePesquisa;
