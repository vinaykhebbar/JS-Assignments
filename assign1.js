function HashMap() {
	var map = {};
	this.setHash = function(key, value) {
		 map["\""+key+"\""] = value;
	}
	this.getValue = function(key) {
		return map["\""+key+"\""];
	}
}

var map = new HashMap();

map.setHash("abc", 5);
map.setHash(5, "qw");
console.log(map.getValue("abc"));
console.log(map.getValue(5));
