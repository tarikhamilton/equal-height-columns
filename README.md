equal-height-columns
====================

Make any class have the same height as the tallest one in the group in pure vanilla JavaScript. Great for Bootstrap.

```
var columns = document.getElementsByClassName('col-sm-3');
equalHeightColumns(columns); 
```

## Breakpoints

If your elements' heights are changing on breakpoints, just call equal-height-columns again. Here's an example using [underscore](http://underscorejs.org/#debounce's debounce) function to change on resize.

```
var updateHeights = _.debounce(function () {
	equalHeightColumns(document.getElementsByClassName('home'));
}, 300);

window.onresize = updateHeights;
```