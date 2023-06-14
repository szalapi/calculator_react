import { styled } from "styled-components";
import { Button } from "./button";

const ButtonPanel = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
`;

const Body = ({
  buttons,
  onNumberClick,
  onOperationClick,
}: {
  buttons: (string | number)[][];
  onNumberClick?: (value: number) => void;
  onOperationClick?: (action: string) => void;
}) => {
  const onButtonClicked = (value: string | number) => {
    if (typeof value === "number") {
      onNumberClick && onNumberClick(+value);
    } else {
      onOperationClick && onOperationClick(value);
    }
  };

  return (
    <ButtonPanel>
      {buttons.flat().map((value) => (
        <Button
          onButtonClick={onButtonClicked}
          key={"button-" + value}
          value={value}
        ></Button>
      ))}
    </ButtonPanel>
  );
};

export default Body;
