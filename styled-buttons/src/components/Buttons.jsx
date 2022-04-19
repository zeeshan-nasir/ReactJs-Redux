import styled from "styled-components";

const Button = styled.button`
   background-color: ${(props) => props.background};
   color: ${(props) => props.color};
   border: 1px ${(props) => props.border} #c3cbce;
   height: 35px;
   width: 130px;
`;

export { Button };
