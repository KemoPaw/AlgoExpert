Function canSeeSun(buildingHeights, dir){

if(buildingHeights.length === 0) return [];
if(buildingHeights.length === 1) return [0];

Let currHighestBuilding = 0; //5
Let resultIndices = []; // [7, 6, 3, 1]

	if(dir === “EAST”){ //right to left;

		currHighestBuilding = buildingHeights[buildingHeights.length - 1];
		resultIndices.push(buildingHeights.length - 1);

		For (let i = buildingHeights.length - 2; i >= 0; i --){ // i = 0;
			Let currHeight = buildingHeights[i]; //3
			If (currHeight > currHighestBuilding){ //  3 > 5
				currHighestBuilding = currHeight;
				resultIndices.push(i);
}
}
}

if(dir === “WEST”){ //left to right;
	currHighestBuilding = buildingHeights[0];
		resultIndices.push(0);

		For (let i = 1; i < buildingHeights.length; i ++){
			Let currHeight = buildingHeights[i];
			If (currHeight > currHighestBuilding){
				currHighestBuilding = currHeight;
				resultIndices.push(i);
}
}
}

Return resultIndices.sort((a, b)=> a - b);

}

