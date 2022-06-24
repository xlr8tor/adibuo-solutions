import styled from "styled-components";

const Apply = () => {
  return <Button>Apply</Button>;
};

export default Apply;

const Button = styled.button`
  background-color: var(--bg-color-secondary-light);
  color: var(--text-color);
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  font: inherit;
  font-size: var(--small-font-size);
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
