import { styled } from "styled-components"

const StyledButton = styled.button`
  border: 1px blue solid;
  font-size: 1.5rem;

  &:hover {
    background-color: lightblue;
  }
`

const Button = ({ value, onButtonClick }: { value: string | number, onButtonClick: (value: number | string) => void }) => {

  const onClick = () => {
    onButtonClick(value);
  }

  return (
    <StyledButton onClick={onClick}>{value}</StyledButton>
  )
}

export default Button