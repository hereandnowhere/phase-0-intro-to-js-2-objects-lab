const employee = {
    name : `Bobby Fisher`,
    streetaddress : `321 W 150th st`,
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return  {
        ...employee,
        [key]:value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    delete employee.address
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}

console.log(updateEmployeeWithKeyAndValue(employee, streetaddress, `32 W 185th st`));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, streetaddress, `64 Doober ln`));
console.log(deleteFromEmployeeByKey(employee, `name`));
console.log(destructivelyDeleteFromEmployeeByKey(employee, `name`));