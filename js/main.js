// ----- Fat Arrow Functions ------

// 	If there is only one JS expression in the function, we can write the function like this:

// Written in ES5:
// const add = function(a, b) {
// 	return a + b;
// }

// add(1, 4);

// Written in ES6:
// const add = (a, b) => {
// 	return a + b;
// }


// If there is only one JS expression in the function, we can write the function like this. The expression on the right side of the arrow is known as implicit return of the function and only works when both the curly braces and return key word are both removed

// const add = (a, b) => a + b;


// If there is only one argument in the function, we can eliminate the parens around it, so:
// const double = (number) => number * 2;
// becomes:
	// const double = number => number * 2


// If there is NO argument in the function, we write it like this:
	// const num = () => { return 2; };


// Another example:

// const numbers = [1,2,3];

// numbers.map(function(number) {
// 	return 2 * number
// });


// Refactored:
// const numbers = [1,2,3];

// let example = numbers.map(number => 2 * number)

// console.log(example)


// Example: Map over the list of members of a team and create a string that says "member is on teamName."
// const team = {
// 	members: ['Jane', 'Bill'],
// 	teamName: 'Super Squad',
// 	teamSummary: function() {
// 		return this.members.map(function(member) {
// 			// When we use this.teamName here, the this isn't referring back to the team object like we want, but instead to the teamSummary function. It throws a Cannot read property "teamName" of undefined error.
// 			return `${member} is on ${this.teamName}.`;
// 		});
// 	}
// };

// console.log(team.teamSummary())


// One fix would be to add .bind(this) to our .map method, like so:
// const team = {
// 	members: ['Jane', 'Bill'],
// 	teamName: 'Super Squad',
// 	teamSummary: function() {
// 		return this.members.map(function(member) {
// 			return `${member} is on ${this.teamName}.`;
// 		}.bind(this));
// 	}
// };

// console.log(team.teamSummary())


// Another fix is to define this:
// const team = {
// 	members: ['Jane', 'Bill'],
// 	teamName: 'Super Squad',
// 	teamSummary: function() {
// 		var self = this;
// 		return this.members.map(function(member) {
// 			return `${member} is on ${self.teamName}.`;
// 		});
// 	}
// };

// console.log(team.teamSummary())


// But the best way is to use a fat arrow function:
// const team = {
// 	members: ['Jane', 'Bill'],
// 	teamName: 'Super Squad',
// 	teamSummary: function() {
// 		// By using a fat arrow function, it basically puts this === team within this function block. We could also replace this.teamName with team.teamName and the results would be the same.
// 		return this.members.map(member => `${member} is on ${this.teamName}.`);
// 	}
// };

// console.log(team.teamSummary())


// Refactor the code using a fat arrow function
// const fibonacci = function(n) {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const fibonacci = (n) => {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }


// Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect. Add another key to this object called 'getName' that is a function that returns the profile's name, using 'this.name'. Does the solution work with a fat arrow function or do we have to use the function keyword instead?
// const profile = {
//     name: 'Alex',
//     getName: function() {
//     	return this.name;
//     }
// };

// // Can't use a fat arrow function in this case
// console.log(profile.getName())