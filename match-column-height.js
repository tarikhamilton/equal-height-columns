var matchColumnHeight = function (columns) {
	var countOfColumns = [];
	var heightsOfColumns = [];

	for (var i = 0; i < columns.length; i++)
		countOfColumns.push(0);

	countOfColumns.forEach.call(columns, function (c, i, a) { 
		heightsOfColumns.push([c, a[i].clientHeight]); 
	});

	heightsOfColumns.sort(function (a, b) { 
		return b[1] - a[1] });

	for (column in columns)
		columns[column].style.height = heightsOfColumns[0][1] + "px";
}