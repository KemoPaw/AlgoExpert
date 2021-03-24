function findNumShips(grid){
	let visited = []; //2d array of trues and falses;
	let counter = 0;

	for (let i = 0; i < grid.length; i ++){
		for (let k = 0; k < grid[i].length; k ++){
			if (grid[i][k] === "."){ //set as true; so I know I do not need to recheck it
				visited[i][k] = true;
			}
			else {
				visited[i][k] = false;

			}
		}
	}

//visited, if the ele is false, it needs to be counted at some point;

	for (let m = 0; m < visited.length; m ++){
		for (let q = 0; q < visited[m].length; q ++){

			if(visited[m][q] === false){
				//increase count
				// know how long the ship is, and mark visited to true accordingly
				
				markVisitedShips([m, q], visited);
				Counter += 1;
				
			}
		}
	}


	function markVisitedShips(startPos, visited){ //startPos is an array [x, y]
		let dirs = [[0, 1],[1, 0],[0, -1],[-1, 0]];
		
		let queue = [startPos]; // []
		
		while(queue.length !== 0){
			visited[queue[0]] = true;
			let newDirs = findDirs(queue[0], dirs, visited); //array of neighbors
			queue.shift();
			queue = queue.concat(newDirs);
	}
	}

	function findDirs(start, dirs, visited){
		let result = [];

		for (let y = 0; y < dirs.length; y++){
			let currRow = start[0] + dirs[y][0];
			let currCol = start[1] + dirs[y][1];

			if (currRow < 0 || currCol < 0 || currRow > visited.length || currCol > visited[0].length){
				continue;
			}
			else {
				result.push([currRow, currCol]);
			}


		}
		return result; //nested array;
	}


	return counter;
}

// var countBattleships = function(board) {
//     let count = 0;
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (board[i][j] === '.') continue;
//             if (board[i - 1] && board[i - 1][j] === "X") continue;
//             if (board[i][j - 1] === "X") continue;
//             count += 1;
//         }
//     }
//     return count
// };

