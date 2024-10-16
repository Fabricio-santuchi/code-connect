import styled from "styled-components";
import iconx from "./assets/close.svg";

const ContainerFiltro = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  ul {
    list-style-type: none;
    display: flex;
    gap: 10px;

    .ativo {
      background-color: var(--cinza-medio);
    }
    li {
      color: var(--cinza-escuro);
      background-color: var(--cinza-claro);
      font-size: 18px;
      padding: 0.25em 0.5em;
      border-radius: 4px;
    }
  }
  button { 
    border: none;
    background-color: transparent;
    color: var(--cinza-medio);
    font-size: 18px;
  }
`;

const IconX = styled.img`
  width: 10px;
`;

const Filtro = () => {
  return (
    <ContainerFiltro>
      <ul>
        <li className="ativo">
          Front-end <IconX src={iconx} />
        </li>
        <li>React</li>
        <li>Acessibilidade</li>
      </ul>
      <button>Limpar tudo</button>
    </ContainerFiltro>
  );
};

export default Filtro;
