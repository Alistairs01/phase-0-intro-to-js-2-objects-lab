// Write your solution in this file!
// create an object for employee
// create two keys one for the employ name and another for employee address
// eg Dean from supernatural
const employee = {
    name: "Dean Winchester",
    streetAdress: "53 Barker Avenue"
};
// create a function that updates the values without changing (mutating) the object
// instead it creates a new object that has the updated value and key
// use the spread operater
function updateEmployeeWithKeyAndValue (employee, key, value) {

    return {...employee, [key]: value  };
}
// create a function that will change the object passed in 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
// create a function that should take in the employee object and key 
// it should delete the property with that key from the object
// it should not mutate the object but return a new object that doesn't include the identified key and value pair
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
}
// create a function that also mutates the object

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

