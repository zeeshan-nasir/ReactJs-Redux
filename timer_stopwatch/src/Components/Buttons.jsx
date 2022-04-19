import styled from "styled-components";

const Button = styled.button`
   background-color: rgb(48, 127, 231);
   border: 1px solid rgb(48, 127, 231);
   height: 30px;
   width: 70px;
   color: white;
   cursor: pointer;

   &:hover {
      background-color: rgb(36, 100, 192);
      transition: 0.3s;
   }
`;

export { Button };
