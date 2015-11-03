function Vehicle() {
	this.drive = function () {
  		console.log("vroom");
	}
}

function Car() {}

Car.prototype = new Vehicle();

Car.prototype.honk = function() {
  console.log("honk honk");
}


var myCar = new Car();

myCar.honk();  
myCar.drive();  