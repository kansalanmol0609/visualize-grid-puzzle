import React from "react";

import Box from "@material-ui/core/Box";

import { DrawTree } from "./components/DrawTree";
import { Menu } from "./components/Menu";
import { PuzzleForm } from "./components/PuzzleForm";

// import { myTreeData as initialData} from "./data/treeTmpData";
import { solvePuzzle } from "./data/solvePuzzle";
import { solvable } from "./data/solvable";

function App() {
  const [initialState, setInitialState] = React.useState("");
  const [finalState, setFinalState] = React.useState("");
  const [myTreeData, setMyTreeData] = React.useState([{}]);
  const [isSolvable, setIsSolvable] = React.useState(true);

  const submitHandler = () => {
    const initialStateMatrix = [];
    const finalStateMatrix = [];

    initialState
      .split("\n")
      .forEach((val) => initialStateMatrix.push(val.split(" ")));
    console.log(initialStateMatrix);
    console.log("Done");
    finalState
      .split("\n")
      .forEach((val) => finalStateMatrix.push(val.split(" ")));
    console.log(finalStateMatrix);

    let ff = solvable(initialStateMatrix, finalStateMatrix);
    console.log("is Solvable", ff);
    if (ff === true) {
      console.log("came here");
      setMyTreeData(solvePuzzle(initialStateMatrix, finalStateMatrix));
    } else {
      setIsSolvable(ff);
    }
  };

  return isSolvable ? (
    <Box display="flex" flexDirection="column" height="100vh">
      <Menu />
      <PuzzleForm
        initialState={initialState}
        setInitialState={setInitialState}
        finalState={finalState}
        setFinalState={setFinalState}
        submitHandler={submitHandler}
      />
      {{ myTreeData } && <DrawTree myTreeData={myTreeData} />}
    </Box>
  ) : (
    <h1>This Config cannot be solved</h1>
  );
}

export default App;
