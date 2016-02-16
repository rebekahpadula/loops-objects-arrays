var myArray = [
	{
		"firstName": "amanda",
		"lastName": "harris",
		"age": 42,
		"gender": "female",
		"children":[

		{
			"name": "ben",
			"age": 18,
			"gender": "male",
		},
		{
			"name": "lisa",
			"age": 18,
			"gender": "female",
		},
		],
	},

	{
		"firstName": "brian",
		"lastName": "hall",
		"age": 36,
		"gender": "male",
		"children" :[
			{
				"name": "erica",
				"age": 11,
				"gender": "female",
			},
			{
				"name": "jenny",
				"age": 8,
				"gender": "female",
			},
		],
	},

	{
		"firstName": "terrence",
		"lastName": "smith",
		"age": 49,
		"gender": "male",
		"children" :[
			{
				"name": "david",
				"age": 17,
				"gender": "male",
			},
			{
				"name": "alex",
				"age": 23,
				"gender": "female",
			},
			{
				"name": "joe",
				"age": 25,
				"gender": "male",
			},
		],
	},

	{
		"firstName": "alyssa",
		"lastName": "ingram",
		"age": 28,
		"gender": "female",
		"children":[
			{
				"name": "jamie",
				"age": 3,
				"gender": "female"
			},
			{
				"name": "lori",
				"age": 2,
				"gender": "female",
			}
		]
	}
];

var numParents = 0;

var totalParentsAge = 0;

var childrenLength;

var childInfo

var numChildren = 0

var totalChildAge = 0

var numGirls = 0

var totalGirlsAges = 0

for (var i = 0; i < myArray.length; i++) {
	childrenLength = myArray[i].children.length
	myArray[i].children[childrenLength] = {
		"name": "addedChild",
		"age": 10,
		"gender": "male",
	};
	if (myArray[i].gender === "male") {
		myArray[i].age += 5
	};

	{
		numParents++ 
		totalParentsAge += myArray[i].age
	};

	for (var k = 0; k < myArray[i].children.length; k++) {
		childInfo = myArray[i].children[k]
		console.log(childInfo.name + '  ('+ childInfo.age + ', ' + childInfo.gender + ')');   
	
		if (childInfo.gender === "male") {
			numChildren++
			totalChildAge += childInfo.age
		}

		if (childInfo.gender === "female" && childInfo.age <12) {
			numGirls++
			totalGirlsAges += childInfo.age
		}
	
	}
};

console.log(childInfo.age / numChildren)

console.log(totalParentsAge / numParents);

console.log(totalGirlsAges / numGirls);

console.log(myArray);




