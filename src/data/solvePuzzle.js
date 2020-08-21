
// This function returns data in the required format for generating tree
// Receives two matrices
export const solvePuzzle = (initialState, finalState) => {
    // Possible moves
    const a = [1, -1, 0, 0];
    const b = [0, 0, 1, -1];

    // to mark already done matrices
    const done = new Set()

    // Heuristics function
    const heuristics = () => {
        let total=0;
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(initialState[i][j]!=finalState[i][j]){
                    total++;
                }
            }
        }
        return total;
    } 

    const toString = () => {
        let str=""
        for(let i=0; i<3; i++){
            str += initialState[i].join(' ');
            str += ' ';
        }
        return str;
    }

    const treeFormatData = [{
        name: "Matrix",
        attributes: {
            r1: toString().substr(0, 6),
            r2: toString().substr(6, 6),
            r3: toString().substr(12,),
            d_value: heuristics(),
        },
        children: []
    }]
    
    let childrenRef = treeFormatData[0];
    let steps=0;
    // While initialState != finalState
    while(heuristics()){
        // marking current state as done
        done.add(toString());

        // find location of empty cell
        let x,y;
        for(let i=0; i<3; i++){
            for(let j=0; j<3; j++){
                if(initialState[i][j]=='$'){
                    x=i; y=j;
                }
            }
        }

        // We have to choose the minimum heuristics value
        let minDiff = -1;
        let xI, xJ;

        console.log(`Step: ${++steps} \n`);
        console.log(`==============================================\n\n`);
        let tmpObj = {}
        // going all possible 4 directions
        for(let k=0; k<4; k++){
            let swapI = x+a[k];
            let swapJ = y+b[k];
            // if valid indexes
            if(swapI < 3 && swapI >= 0 && swapJ < 3 && swapJ >= 0){
                // Swap
                let tmp = initialState[x][y];
                initialState[x][y] = initialState[swapI][swapJ];
                initialState[swapI][swapJ] = tmp;
                // only do swap if we haven't reached this matrix before
                if(done.has(toString())==false){
                    const tmpNode = {
                        name: "Matrix",
                        attributes: {
                            r1: toString().substr(0, 6),
                            r2: toString().substr(6, 6),
                            r3: toString().substr(12,),
                            d_value: heuristics(),
                        },
                        children: []
                    }
                    if(minDiff==-1 || heuristics()< minDiff){
                        minDiff = heuristics();
                        xI = swapI;
                        xJ = swapJ;
                        tmpObj = tmpNode;
                    }
                    console.log(toString());
                    console.log(`D Value: ${heuristics()}`);
                    console.log();
                    try{
                        childrenRef.children.push(tmpNode);
                    }catch{
                        console.log("Error")
                    }
                }
                // Swap
                tmp = initialState[x][y];
                initialState[x][y] = initialState[swapI][swapJ];
                initialState[swapI][swapJ] = tmp;
            }
        }
        // Finally swap with min. heuristics value
        let tmp = initialState[x][y];
        initialState[x][y] = initialState[xI][xJ];
        initialState[xI][xJ] = tmp;
        console.log(`Matrix Chosen after Step: ${steps}` );
        console.log(toString());
        childrenRef = tmpObj;
    }

    return treeFormatData;
}

