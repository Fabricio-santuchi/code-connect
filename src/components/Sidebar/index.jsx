import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import SobreNos from "./assets/info.svg";
import Sair from "./assets/logout.svg";
import LinkSideBar from "../LinkSideBar";
import styled from "styled-components";

const ContainerAside = styled.aside`
  width: 177px;
  border-radius: 8px;
  background-color: var(--cinza-escuro);
  padding: 2.5em 1em;

  ul {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    list-style-type: none;
    margin-top: 5rem;

    a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 22px;
    }
    .item__link-publicacao {
      border: 1px solid var(--verde-destaque);
      color: var(--verde-destaque);
      padding: 0.75rem 1rem;
      border-radius: 8px;
    }
  }
  .item__link--ativo {
    color: var(--branco);
  }
`;

const Sidebar = () => {
  return (
    <ContainerAside>
      <img src={Logo} alt="img da logo" />
      <nav>
        <ul>
          <li>
            <a className="item__link-publicacao" href="#">
              Publicar
            </a>
          </li>

          <LinkSideBar ativo={true} img={Feed} msg="Feed" />
          <LinkSideBar img={Perfil} msg="Perfil" />
          <LinkSideBar img={SobreNos} msg="Sobre nós" />
          <LinkSideBar img={Sair} msg="Sair" />
        </ul>
      </nav>
    </ContainerAside>
  );
};

export default Sidebar;
