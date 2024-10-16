/* eslint-disable react/prop-types */

import styled from "styled-components";

const ContainerLi = styled.li`
  a {
    color: ${(props) =>
      props.$ativo ? "var(--branco)" : "var(--cinza-claro);"};
  }
`;

const LinkSideBar = ({ img, msg, ativo = false }) => {
  return (
    <ContainerLi $ativo={ativo}>
      <a href="#">
        <img src={img} alt="" />
        <span>{msg}</span>
      </a>
    </ContainerLi>
  );
};

export default LinkSideBar;
