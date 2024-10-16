import styled from "styled-components";

const ContainerOrdenacao = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 32px 0;
  gap: 28px;

  p {
    font-size: 22px;
  }
  .recentes{
    color: var(--verde-destaque);
    text-decoration: underline;
    font-weight: 500;
  }
  .anteriores{
    color: var(--cinza-medio);
    font-weight: normal;
  }
`;

const Ordenacao = () => {
  return (
    <ContainerOrdenacao>
      <p className="recentes">Recentes</p>{" "}
      <p className="anteriores">Anteriores</p>
    </ContainerOrdenacao>
  );
};

export default Ordenacao;
