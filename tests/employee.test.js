const Employee = require('../lib/employee');

describe('employee object', () =>{
    it('gets corresponding constructor values', () =>{
        const employee = new Employee('priscilla', '8', 'priscilla@priscilla.net');
        expect(employee.name).toBe('priscilla');
        expect(employee.id).toBe('8');
        expect(employee.email).toBe('priscilla@priscilla.net');
    });
});

describe('employee functions', () =>{
    it('returns proper name with getName() function', () =>{
        const employee = new Employee('priscilla', '8', 'priscilla@priscilla.net');
        expect(employee.getName()).toBe('priscilla');
    });
    it('returns proper ID number using getID() func', () =>{
        const employee = new Employee('priscilla', '8', 'priscilla@priscilla.net');
        expect(employee.getID()).toBe('8');
    });
    it('returns proper email address using getEmail()', () =>{
        const employee = new Employee('priscilla', '8', 'priscilla@priscilla.net');
        expect(employee.getEmail()).toBe('priscilla@priscilla.net');
    });
    it('returns \'EMPLOYEE\' when using getRole() function.', () =>{
        const employee = new Employee('priscilla', '8', 'priscilla@priscilla.net');
        expect(employee.getRole()).toBe('Employee');
    });
});