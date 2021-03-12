function canSeeSun(buildingHeights, dir){

	if(buildingHeights.length === 0) return [];
	if(buildingHeights.length === 1) return [0];

	let currHighestBuilding = 0; //5
	let resultIndices = []; // [7, 6, 3, 1]

	if(dir === “EAST”){ //right to left;

		currHighestBuilding = buildingHeights[buildingHeights.length - 1];
		resultIndices.push(buildingHeights.length - 1);

		for (let i = buildingHeights.length - 2; i >= 0; i --){ // i = 0;
			let currHeight = buildingHeights[i]; //3
			if (currHeight > currHighestBuilding){ //  3 > 5
				currHighestBuilding = currHeight;
				resultIndices.push(i);
			}
		}
	}

	if(dir === “WEST”){ //left to right;
		currHighestBuilding = buildingHeights[0];
		resultIndices.push(0);
		for (let i = 1; i < buildingHeights.length; i ++){
			let currHeight = buildingHeights[i];
			if (currHeight > currHighestBuilding){
				currHighestBuilding = currHeight;
				resultIndices.push(i);
			}
		}
	}

return resultIndices.sort((a, b)=> a - b);

}

