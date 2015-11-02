function JSONDeepClone(jsonObj) {
	if(jsonObj == null)
		return;
	var obj = {};
	function iterateOverJSON(prop, curr) {
		
		for(var p in prop) {
			if(prop.hasOwnProperty(p)) {
				if(typeof p == "object")
					iterateOverJSON(prop[p], curr.p);
				else
					curr[p] = prop[p];
			}
		}
	}
	
	iterateOverJSON(jsonObj, obj);
	return obj;
}


var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var txt = '{'+
  '"firstName": "John",'+
  '"lastName": "Smith",'+
  '"isAlive": true,'+
  '"age": 25,'+
  '"address": {'+
  '"streetAddress": "21 2nd Street",'+
  '"city": "New York",'+
  '"state": "NY",'+
  '"postalCode": "10021-3100"'+
  '},'+
  '"phoneNumbers": ['+
  '{'+
      '"type": "home",'+
      '"number": "212 555-1234"'+
    '},'+
    '{'+
     '"type": "office",'+
     '"number": "646 555-4567"'+
    '}'+
  '],'+
  '"children": ["xyx","def"],'+
  '"spouse": null'+
'}';

var obj = JSON.parse(txt);

console.log(JSONDeepClone(obj));