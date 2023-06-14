import { useCallback, useEffect, useState } from "react";

const useStringNumber = (data: string | string) => {
  const [valueAsString, setValueAsString] = useState(`${data}`);
  const [value, setValue] = useState(+data);
  const [hasDecimal, setHasDecimal] = useState(false);

  useEffect(() => {
    setValue(+valueAsString);
    setHasDecimal(valueAsString.includes("."));
  }, [valueAsString]);

  const addDigit = useCallback(
    (newNumber: number) => setValueAsString(+(valueAsString + newNumber) + ""),
    [valueAsString]
  );
  const invert = useCallback(() => setValueAsString(-value + ""), [value]);
  const divideBy = useCallback(
    (division: number) =>
      setValueAsString((prevValue) => +prevValue / division + ""),
    []
  );
  const addDecimal = useCallback(() => {
    if (hasDecimal) {
      return;
    }

    setValueAsString((prevValue) => (!prevValue ? "0." : prevValue + "."));
  }, [hasDecimal]);

  return {
    value,
    valueAsString,
    setValueAsString,
    addDigit,
    addDecimal,
    invert,
    divideBy,
  };
};

export default useStringNumber;
