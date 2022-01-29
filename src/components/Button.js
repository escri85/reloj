import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background-color: #1883ba;
  border-radius: 6px;
  border: 2px solid #0016b0;
  cursor: pointer;
  margin: 0.5rem;
  :hover {
    color: #1883ba;
    background-color: #ffffff;
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }
`;

export default Button;
