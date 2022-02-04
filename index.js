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