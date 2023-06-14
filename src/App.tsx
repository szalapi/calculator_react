import "./App.css";
import { Calculator } from "./components/calculator";

import { styled } from "styled-components";

const CalculatorBody = styled(Calculator)`
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalculatorBody></CalculatorBody>
      </header>
    </div>
  );
}

export default App;
