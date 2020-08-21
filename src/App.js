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

function App() {
  const [initialState, setInitialState] = React.useState("");
  const [finalState, setFinalState] = React.useState("");
  const [myTreeData, setMyTreeData] = React.useState([{}]);
  const [isSolvable, setIsSolvable] = React.useState(true);
  const [initState, setInitState] = React.useState(true);

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
    }
    setIsSolvable(ff);
    setInitState(false);
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
      <Alert severity="error">
        The following combination of states is not solvable
      </Alert>
    </Box>
  );
}

export default App;
