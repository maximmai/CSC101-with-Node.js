/*
https://en.wikipedia.org/wiki/Stack_(abstract_data_type)

In computer science, a stack is an abstract data type 
that serves as a collection of elements, with two principal 
operations: push, which adds an element to the collection, 
and pop, which removes the most recently added element 
that was not yet removed. The order in which elements 
come off a stack gives rise to its alternative name, 
LIFO (for last in, first out). Additionally, a peek 
operation may give access to the top without modifying the 
stack.
*/


function Stack(){
	this.stack = [];
}

Stack.prototype.push = function(element) {
	this.stack.push(element);
};

Stack.prototype.pop = function(){
	return this.stack.pop();
};

Stack.prototype.print = function(){
	this.stack.forEach(function(e, i, a){
		console.log(e);
	});
};

// Test

var mystack = new Stack();
mystack.push(1); // 1
mystack.push(2); // 1 2
mystack.push(2); // 1 2 2
mystack.push(2); // 1 2 2 2
mystack.push(2); // 1 2 2 2 2
mystack.push(2); // 1 2 2 2 2 2
mystack.push(2); // 1 2 2 2 2 2 2
mystack.print(); 
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 2
console.log("popping: ", mystack.pop()); // popping: 1
mystack.print();
console.log("popping: ", mystack.pop()); // no more element in the stack, undefined. popping: undefined

// Complexity Analysis

// The size of stack doesn't effect the two operations
// Therefore, 
// push(): O(1) for time complexity; O(n) for space complexity
// pop(): O(1) for time complexity; O(n) for space complexity