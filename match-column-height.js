var equalHeights = function (columns) {

	function getHeight(c, i, a) {
		return a[i].clientHeight;
	}

	var countOfColumns = [];
	var i = 0;

	while (i < columns.length) {
		countOfColumns.push(0);
		i++;
	} 
	console.dir(countOfColumns);

	countOfColumns.forEach.call(columns, getHeight);

	

}