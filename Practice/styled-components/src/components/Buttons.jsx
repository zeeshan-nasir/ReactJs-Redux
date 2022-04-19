import styled from "styled-components";

const Buttons = styled.button`
   background-color: ${(props) =>
      props.theme === "light" ? "white" : "black"};
   color: ${(props) => (props.theme === "light" ? "black" : "white")};
   border-radius: 10px;
   padding: 10px;
   margin: 20px 10px 0px;
   cursor: pointer;
   border: none;

   &:hover {
      box-shadow: 0px 0px 10px tomato;
      transition: 0.3s;
   }
`;

export { Buttons };
