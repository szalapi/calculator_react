import { styled } from "styled-components";
import { Body } from "./body";
import { Screen } from "./screen";
import { useState } from "react";
import useStringNumber from "../../hooks/useStringNumber";

const CalculatorDiv = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: #282c34;
  display: grid;
  grid-template-rows: 0.25fr 0.75fr;
  padding: 0.5rem;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
`;

const buttons = [
  ["AC", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const leftEquation = useStringNumber("");
  const rightEquation = useStringNumber("");
  const [total, setTotal] = useState("");
  const [action, setAction] = useState("");

  const computations: { [key: string]: (() => void) | undefined } = {
    "/": () => {
      setTotal(leftEquation.value / rightEquation.value + "");
    },
    x: () => {
      setTotal(leftEquation.value * rightEquation.value + "");
    },
    "-": () => {
      setTotal(leftEquation.value - rightEquation.value + "");
    },
    "+": () => {
      setTotal(leftEquation.value + rightEquation.value + "");
    },
  };

  const invertSigns = () =>
    rightEquation.valueAsString
      ? rightEquation.invert()
      : leftEquation.invert();

  const cleanup = () => {
    leftEquation.setValueAsString("");
    rightEquation.setValueAsString("");
    setAction("");
    setTotal("");
  }

  const divideBy = (value: number) => {
    rightEquation.valueAsString
      ? rightEquation.divideBy(value)
      : leftEquation.divideBy(value);
  }

  const addDecimal = () => {
    rightEquation.valueAsString
      ? rightEquation.addDecimal()
      : leftEquation.addDecimal();
  }

  const computeResult = () => {
    const computatonAction = computations[action];
    computatonAction && computatonAction();
  }

  const valueModifiers: {
    [key: string]: (() => void) | undefined;
  } = {
    AC: cleanup,
    "+-": invertSigns,
    "%": () => divideBy(100),
    ".": addDecimal,
    "=": computeResult,
  };

  const onNumberClicked = (newValue: number) => {
    if (total) {
      valueModifiers["AC"] && valueModifiers["AC"]();
      leftEquation.setValueAsString(`${newValue}`);
    } else {
      action
        ? rightEquation.addDigit(newValue)
        : leftEquation.addDigit(newValue);
    }
  };

  const onOperationClicked = (action: string) => {
    if (total && action !== "AC") {
      return;
    }

    const valueModifier = valueModifiers[action];

    if (valueModifier) {
      valueModifier();
    } else {
      setAction(action);
    }
  };

  return (
    <CalculatorDiv>
      <Screen
        leftNumber={leftEquation.valueAsString}
        rightNumber={rightEquation.valueAsString}
        operation={action}
        total={total}
      ></Screen>
      <Body
        buttons={buttons}
        onNumberClick={onNumberClicked}
        onOperationClick={onOperationClicked}
      ></Body>
    </CalculatorDiv>
  );
};

export default Calculator;
