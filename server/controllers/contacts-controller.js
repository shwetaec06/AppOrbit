  
console.log('starting contacts.js');
const fs = require('fs');

var fetchContacts = () => {
	try{
		var contactString = fs.readFileSync('contacts-add.json');
	    return JSON.parse(contactString);
	} catch(e){
		return [];
	}
}

var addContact = (req,res) =>{
	
	var contacts = fetchContacts();
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var emails = req.body.emails;
	var phoneNos = req.body.phoneNos;
	

	
	var contact = {   firstName,
					  lastName,
					  emails,
					  phoneNos
					};
	contacts.unshift(contact);
	fs.writeFileSync('contacts-add.json',JSON.stringify(contacts));	
	res.send(contact);
}

var getAll = (req,res) =>{
	res.send(fetchContacts());
	console.log('Getting all contacts');
}

module.exports = {
	addContact,
	getAll
}
