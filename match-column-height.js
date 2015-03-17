var equalHeights = function (columns) {

	var countOfColumns = [];
	var heightsOfColumns = [];
	var i = 0;

	while (i < columns.length) {
		countOfColumns.push(0);
		i++;
	} 
	countOfColumns.forEach.call(columns, function (c, i, a) { 
		heightsOfColumns.push([c, a[i].clientHeight]); 
	});
	heightsOfColumns.sort(function (a, b) { return a[1] - b[1] });
	console.dir(heightsOfColumns);
}