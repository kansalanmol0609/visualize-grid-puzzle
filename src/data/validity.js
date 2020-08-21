const valid = (istate) => {
  let set = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(istate[i][j]);
      set.add(istate[i][j]);
    }
  }
  for (let i = 1; i < 9; i++) {
    if (set.has(i.toString()) === false) return false;
  }
  if (set.has("$") == false) {
    return false;
  }
  if (set.size !== 9) {
    return false;
  }
  return true;
};

export const validInput = (initialState, finalState) => {
  let f1 = valid(initialState);
  let f2 = valid(finalState);
  return f1 && f2;
};
