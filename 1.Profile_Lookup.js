// The code iterates through an array with a for loop, looking up some required info by accessing nested data structures.

// Create an array of objects representing different people in the contacts lists
let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
	for(let i = 0; i < contacts.length; i++){
		if(contacts[i].firstName === name){           // Check if name is an actual contact's firstName 
			if(contacts[i].hasOwnProperty(prop)){ // and the given property (prop) is a property of that contact
				return contacts[i][prop];
			}else{				      // if prop does not correspond to any valid properties of a contact found to match name
				return "No such property.";
			}		
		}
	}
	// if name does not correspond to any contacts
	return "No such contact."; 
}

console.log("Akira likes " + lookUpProfile("Akira", "likes") + ".");
console.log("Kristian's last name is " + lookUpProfile("Kristian", "lastName") + ".");
console.log("Sherlock's contact number is " + lookUpProfile("Sherlock", "number") + ".");
console.log("Shelly's contact number is " + lookUpProfile("Shelly", "number") + ".");


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup/



