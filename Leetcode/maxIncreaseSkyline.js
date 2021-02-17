Function maxSameSkyline(grid) { //2d array
	Let maxTopBottom = []; //[8, 7, 9, 3];
	Let maxLeftRight = [];

	for(let i = 0; i < grid.length; i++){ //check each column;
		Let currMaxRow = [];
		for(let k = 0; k < grid[0].length; k ++){ //then check col, row
			currMaxRow.push(grid[i][k]);
}
Let pushedMax = Math.max(...currMaxRow);
maxTopBottom.push(pushedMax);
}
for(j = 0; j < grid[0].length; j++){ //check each row
		Let currMaxCol = [];
		for(let m = 0; m < grid.length; m ++){
			currMaxCol.push(grid[j][m]);
}
Let pushedMax = Math.max(...currMaxCol);
maxLeftRightpush(pushedMax);
}
//everything is filled ;A;
Let copyGrid = grid;

For (let q = 0; q < copyGrid.length; q++){
	for(let w = 0; w < copyGrid[0].length; w ++){
		Let maxedValue = Math.min(maxTopBottom[q], maxLeftRight[w]);
		copyGrid[q][w] = maxedValue;
}
}

Let gridSum = 0;
let gridCpySum = 0;

For (let e = 0; e < copyGrid.length; e++){
	for(let r = 0; r < copyGrid[0].length; r ++){
		gridSum += grid[e][r];
gridCpySum += grid[e][r];
}
}
Return ( gridCpySum - gridSum);
}
