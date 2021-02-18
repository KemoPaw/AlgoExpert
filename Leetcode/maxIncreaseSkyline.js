Function maxSameSkyline(grid) { //2d array
	let maxTopBottom = []; //[8, 7, 9, 3];
	let maxLeftRight = [];

	for(let i = 0; i < grid.length; i++){ //check each column;
		let currMaxRow = [];
		for(let k = 0; k < grid[0].length; k ++){ //then check col, row
			currMaxRow.push(grid[i][k]);
        }
    let pushedMax = Math.max(...currMaxRow);
    maxTopBottom.push(pushedMax);
    }

    for(j = 0; j < grid[0].length; j++){ //check each row
		let currMaxCol = [];
		for(let m = 0; m < grid.length; m ++){
			currMaxCol.push(grid[j][m]);
        }
    let pushedMax = Math.max(...currMaxCol);
    maxLeftRightpush(pushedMax);
    }


    //everything is filled ;A;
    let copyGrid = grid;

    for (let q = 0; q < copyGrid.length; q++){
        for(let w = 0; w < copyGrid[0].length; w ++){
            let maxedValue = Math.min(maxTopBottom[q], maxLeftRight[w]);
            copyGrid[q][w] = maxedValue;
        }
    }

    let gridSum = 0;
    let gridCpySum = 0;

    for (let e = 0; e < copyGrid.length; e++){
        for(let r = 0; r < copyGrid[0].length; r ++){
            gridSum += grid[e][r];
            gridCpySum += grid[e][r];
        }
    }
    return ( gridCpySum - gridSum);
}
