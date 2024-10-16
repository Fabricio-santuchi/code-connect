import styled from "styled-components";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Sidebar from "./components/Sidebar";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenacao";
import Card from "./components/Card";
import { useEffect, useState } from "react";

const ContainerMain = styled.main`
  width: 62vw;
  margin: 3.5rem auto;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 1000px) {
    width: 80vw;
  }
`;

const ContainerDiv = styled.div`
  flex-grow: 2;
`;

const ListaDeCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
`;

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const resposta = await fetch(
          "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
        );
        const respostaJson = await resposta.json();
        setDados(respostaJson);
      } catch (err) {
        console.error("Aconteceu erro: " + err);
      }
    }

    fetchdata();
  }, []);

  return (
    <ContainerMain>
      <Sidebar />
      <ContainerDiv>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ListaDeCards>
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card
                    id={item.id}
                    imagemUrl={item.imagem_capa}
                    titulo={item.titulo}
                    resumo={item.resumo}
                    linhasDeCodigo={item.linhas_de_codigo}
                    compartilhamentos={item.compartilhamentos}
                    comentarios={item.comentarios}
                    usuario={item.usuario}
                  />
                </li>
              ))
            : null}
        </ListaDeCards>
      </ContainerDiv>
    </ContainerMain>
  );
}

export default App;
