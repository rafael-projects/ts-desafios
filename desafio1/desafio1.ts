/* Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee = {};
employee.code = 10;
employee.name = "John";*/

interface Employee {
    name: string,
    code: number,
}

const employeeObj = {} as Employee;
employeeObj.name = "Rafael";
employeeObj.code = 1;

