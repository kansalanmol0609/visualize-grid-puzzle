import React from "react";

import Box from "@material-ui/core/Box";

import { DrawTree } from "./components/DrawTree";
import { Menu } from "./components/Menu";
import { PuzzleForm } from "./components/PuzzleForm";

// import { myTreeData as initialData} from "./data/treeTmpData";
import { solvePuzzle } from "./data/solvePuzzle";

function App() {
  const [initialState, setInitialState] = React.useState("");
  const [finalState, setFinalState] = React.useState("");
  const [myTreeData, setMyTreeData] = React.useState([{}]);

  const submitHandler = () => {
    const initialStateMatrix = [];
    const finalStateMatrix = [];

    initialState.split("\n").forEach(val => initialStateMatrix.push(val.split(" ")))
    console.log(initialStateMatrix);
    console.log("Done")
    finalState.split("\n").forEach(val => finalStateMatrix.push(val.split(" ")))
    console.log(finalStateMatrix);

    setMyTreeData(solvePuzzle(initialStateMatrix, finalStateMatrix));
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Menu />
      <PuzzleForm
        initialState={initialState}
        setInitialState={setInitialState}
        finalState={finalState}
        setFinalState={setFinalState}
        submitHandler={submitHandler}
      />
      {{myTreeData} && (<DrawTree myTreeData={myTreeData} />)}
    </Box>
  );
}

export default App;
