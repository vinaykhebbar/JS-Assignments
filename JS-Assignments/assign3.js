function HashMap() {
	var map = {};
	this.setHash = function(key, value) {
		 map["\""+key+"\""] = value;
	}
	this.getValue = function(key) {
		return map["\""+key+"\""];
	}
}

function updateProperties(originalJSON, updatedMappings) {
	
	var map = new HashMap();
	var i = 0;
	var arr = originalJSON["fieldMappings"];
	for(var obj in arr) {
		map.setHash(arr[obj].generate, i);
		i++;
	}
	
	for(var obj in updatedMappings) {
		var x = map.getValue(updatedMappings[obj].generate);
		if(x != null) 
			originalJSON["fieldMappings"][x] = updatedMappings[obj];
		else 
			originalJSON["fieldMappings"].push(updatedMappings[obj]);
	}
}

var originalJSON = {
	"fieldMappings" : [{
			"extract" : "customer_id",
			"generate" : "celigo_magento_id"
		}, {
			"extract" : "addressescompany",
			"generate" : "companyname"
		}, {
			"extract" : "email",
			"generate" : " email"
		}, {
			"extract" : "firstname",
			"generate" : "firstname"
		}, {
			"extract" : "T",
			"generate" : " isperson"
		}, {
			"extract" : "lastname",
			"generate" : "lastname"
		}, {
			"extract" : "middlename",
			"generate" : "middlename"
		}, {
			"extract" : "addressestelephone",
			"generate" : "phone"
		}
	]
}

var updatedMappings = [{
		"extract" : "newMiddleName",
		"generate" : "middlename"
	}, {
		"extract" : "newPhone",
		"generate" : "phone"
	}, {
		"extract" : "newFax",
		"generate" : "fax"
	}
]

console.log(originalJSON);
updateProperties(originalJSON, updatedMappings);
console.log(originalJSON);


