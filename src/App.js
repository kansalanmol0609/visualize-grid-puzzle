import React from "react";

import Box from "@material-ui/core/Box";

import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

import { DrawTree } from "./components/DrawTree";
import { Menu } from "./components/Menu";
import { PuzzleForm } from "./components/PuzzleForm";

// import { myTreeData as initialData} from "./data/treeTmpData";
import { solvePuzzle } from "./data/solvePuzzle";
import { solvable } from "./data/solvable";
import { validInput } from "./data/validity";

function App() {
  const [initialState, setInitialState] = React.useState("");
  const [finalState, setFinalState] = React.useState("");
  const [myTreeData, setMyTreeData] = React.useState([{}]);
  const [isSolvable, setIsSolvable] = React.useState(true);
  const [initState, setInitState] = React.useState(true);
  const [valid, setValid] = React.useState(true);

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

    let v = validInput(initialStateMatrix, finalStateMatrix);
    console.log("Valid Input", v);
    let s = true;
    if (v) {
      s = solvable(initialStateMatrix, finalStateMatrix);
    }
    if (s === true && v === true) {
      console.log("came here");
      setMyTreeData(solvePuzzle(initialStateMatrix, finalStateMatrix));
    }

    setValid(v);
    setIsSolvable(s);
    setInitState(false);
  };

  return isSolvable && valid ? (
    <Box display="flex" flexDirection="column" height="100vh">
      <Menu />
      <PuzzleForm
        initialState={initialState}
        setInitialState={setInitialState}
        finalState={finalState}
        setFinalState={setFinalState}
        submitHandler={submitHandler}
      />
      {initState == false && (
        <Alert severity="success">The solution is as follows</Alert>
      )}
      {{ myTreeData } && <DrawTree myTreeData={myTreeData} />}
    </Box>
  ) : (
    <Box display="flex" flexDirection="column" height="100vh">
      <Menu />
      <PuzzleForm
        initialState={initialState}
        setInitialState={setInitialState}
        finalState={finalState}
        setFinalState={setFinalState}
        submitHandler={submitHandler}
      />
      {valid ? (
        <Alert severity="error">
          The following combination of states is not solvable
        </Alert>
      ) : (
        <Alert severity="warning">Entered Input is not valid</Alert>
      )}
    </Box>
  );
}

export default App;
