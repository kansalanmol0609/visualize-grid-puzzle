export const solvable = (initialState, finalState) => {
  let ordering = new Map();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (finalState[i][j] !== "$") {
        ordering[finalState[i][j]] = i * 3 + j;
      }
    }
  }

  let inversions = 0;
  let arr = new Array(9);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr[i * 3 + j] = initialState[i][j];
    }
  }

  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (
        arr[i] !== "$" &&
        arr[j] !== "$" &&
        ordering[arr[i]] > ordering[arr[j]]
      ) {
        inversions++;
      }
    }
  }

  let f = false;
  if (inversions % 2 === 0) {
    f = true;
  }

  return f;
};
