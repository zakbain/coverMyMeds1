window.onload = function() {
	var indeces = [0, 1, 2, 3, 4]
	var friends = ['Ray', 'Oscar', 'Gwen', 'Bob', 'Marie'];
	var colors = ['red', 'orange', 'green', 'blue', 'magenta'];
	var contrastingColors = ['green', 'black', 'red', 'yellow', 'green'];
	printGreetings(friends, colors, contrastingColors, indeces);
}

function printGreetings(friends, colors, contrastingColors, indeces) {
	for (var i = 0; i < friends.length; i++) {
		let x = getRandomIndex(indeces);
		let greeting = document.createElement('div')
		greeting.setAttribute('class', 'center-container');
		greeting.setAttribute('style', 'color:' + colors[x] + '; background-color: ' + contrastingColors[x])
		greeting.innerHTML = 'Hello ' + friends[x];
		document.querySelector('#friend-greetings').appendChild(greeting)
	}
}

function getRandomIndex(indeces) {
	randomIndex = Math.floor((Math.random() * (indeces.length)));
	var removed = indeces.splice(randomIndex, 1)
	console.log(removed);
	return removed;
}