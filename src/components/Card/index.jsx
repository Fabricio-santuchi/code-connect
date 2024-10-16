/* eslint-disable react/prop-types */
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import styled from "styled-components";

const ContainerArticle = styled.article`
  color: var(--cinza-claro);
  text-decoration: none;
  background-color: var(--cinza-escuro);
  border-radius: 8px;

  width: 100%;

  display: grid;
`;

const CardImg = styled.div`
  width: 100%;
  height: 240px;
  background-color: var(--cinza-claro);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 80%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 16px 24px 0px #0000003d;
  }
`;

const CardConteudo = styled.div`
  padding: 16px;
  height: 100%;
`;

const ConteudoTexto = styled.div`
  margin-bottom: 67px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 23px;
  }
`;

const ConteudoRodape = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    align-items: baseline;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      font-size: 15px;
    }
  }

  div {
    flex-grow: 0;
  }
`;

const Rodape = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

const Card = ({
  id,
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) => {
  return (
    <ContainerArticle id={id}>
      <CardImg>
        <img src={imagemUrl} alt="img capa" />
      </CardImg>
      <CardConteudo>
        <ConteudoTexto>
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </ConteudoTexto>

        <ConteudoRodape>
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {comentarios}
            </li>
          </ul>

          <Rodape>
            <img src={usuario.imagem} alt="icone user" />@{usuario.nome}
          </Rodape>
        </ConteudoRodape>
      </CardConteudo>
    </ContainerArticle>
  );
};

export default Card;
