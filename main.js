var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

//  problem #1 do a for loop on students.  use the object key to find a list of each student name

// for(var i =0; i<students.length; i++) {
// 	console.log(students[i].name);
// }



// problem #2 find each students age
for(var i =0; i<students.length; i++) {
	console.log(students[i].age);
}

// problem #3 find each students name and city

for(var i =0; i<students.length; i++) {
	console.log(students[i].name + ', ' + students[i].city);
}


// problem  4 find all of the students from boulder

for(var i=0; i<students.length; i++) {
	if(students[i].city === 'Boulder') {
		console.log(students[i].name + ' is from ' + students[i].city);
	}
}


// problem 5 find all of the students older than 25
for(var i =0; i<students.length; i++) {
	if(students[i].age > 25) {
		console.log(students[i].name + ' is older than 25' );
	}
}

$(document).on('ready', function() {
  
});

