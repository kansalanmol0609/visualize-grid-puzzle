import React from "react";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const PuzzleForm = ({
  initialState,
  setInitialState,
  finalState,
  setFinalState,
  submitHandler,
}) => {
  return (
    <Box display="flex" flexDirection="row" m={5}>
      <Box m={1}>
        <TextField
          id="standard-multiline-static"
          label="Enter Initial State"
          multiline
          rows={3}
          onChange={(e) => setInitialState(e.target.value)}
          value={initialState}
        />
      </Box>
      <Box m={1}>
        <TextField
          id="standard-multiline-static"
          label="Enter Final State"
          multiline
          rows={3}
          onChange={(e) => setFinalState(e.target.value)}
          value={finalState}
        />
      </Box>
      <Box m={1} display="flex"
        alignItems="center">
        <Button color="primary" variant="contained" size="large" onClick={() => submitHandler()}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};
