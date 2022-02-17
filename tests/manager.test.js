const Manager = require('../lib/manager');

describe('manager\'s office number', () =>{
    it('properly gets office number from manager object', () =>{
        const manager = new Manager('priscilla', '8', 'priscilla@priscilla.net', '7');
        expect(manager.office).toBe('7');
    });
    it('returns office number when getOffice() is called', () =>{
        const manager = new Manager('priscilla', '8', 'priscilla@priscilla.net', '7');
        expect(manager.getOffice()).toBe('7');
    });
});

describe('manager role', () =>{
    it('returns \'Manager\' when using getRole() method', () =>{
        const manager = new Manager('priscilla', '8', 'priscilla@priscilla.net', '7');
        expect(manager.getRole()).toBe('Manager');
    });
});