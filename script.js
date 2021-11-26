var person1 = { 
    FirstName: 'Gyani',
    LastName: 'Kumari',
    OfficeAdress: 'Patna-800001'
}; 
var person2 = {
    FirstName: 'Nitya',
    LastName: 'Ojha',
    OfficeAdress: 'Rajpur-802219'
} 
var person3 = {
    FirstName: 'Om',
    LastName: 'Kumar',
    OfficeAdress: 'Patna-800013'
}
function printPerson(person){
    console.log('=>Person_'+i);
    console.log("First Name: " + person.FirstName);
    console.log("Last Name: " + person.LastName);
    console.log("Office Adress: " + person.OfficeAdress);
    i++;
}
var i=1;
printPerson(person1);
printPerson(person2);
printPerson(person3);