import { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: end;
  border-radius: 5px;
  border: 2px solid black;
  padding: 0 0.5rem;
`;

const toExpIfThresholdExceeded = (value: string, precision = 6) => {
  return value && value.length > precision
    ? (+value).toPrecision(precision)
    : value;
};

const addBracketsIfNegative = (value: string) => {
  if (value && value.includes("-")) {
    return `(${value})`;
  }

  return value;
};

const Screen = ({
  leftNumber,
  operation,
  rightNumber,
  total,
}: {
  leftNumber: string;
  operation: string;
  rightNumber: string;
  total: string;
}) => {
  const [text, setText] = useState("");
  useEffect(() => {
    const isResultNaN = isNaN(+total);
    const leftValue = leftNumber === "" ? "0" : leftNumber;
    const rightValue = rightNumber ? rightNumber : "";
    const totalValue = isResultNaN ? `Not A Number 🤯` : total;
    const leftValueFormatted = addBracketsIfNegative(
      toExpIfThresholdExceeded(leftValue, 6)
    );
    const rightValueFormatted = addBracketsIfNegative(
      toExpIfThresholdExceeded(rightValue, 6)
    );
    const totalValueFormatted = isResultNaN
      ? totalValue
      : addBracketsIfNegative(toExpIfThresholdExceeded(totalValue, 6));

    setText(
      `${leftValueFormatted}${operation}${rightValueFormatted}${
        totalValueFormatted ? "=" : ""
      }${totalValueFormatted}`
    );
  }, [leftNumber, operation, rightNumber, total]);

  return (
    <StyledScreen>
      <StyledInput value={text} type="text" readOnly />
    </StyledScreen>
  );
};

export default Screen;
