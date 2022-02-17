const Intern = require('../lib/intern');

describe('intern\'s school', () =>{
    it('gets school from intern object', () =>{
        const intern = new Intern('priscilla', '8', 'priscilla@priscilla.net', 'univ');
        expect(intern.school).toBe('univ');
    });
    it('returns school when getSchool() is used', () =>{
        const intern = new Intern('priscilla', '8', 'priscilla@priscilla.net', 'univ');
        expect(intern.getSchool()).toBe('univ');
    });
});

describe('intern role', () =>{
    it('returns \'Intern\' when using getRole() method', () =>{
        const intern = new Intern('priscilla', '8', 'priscilla@priscilla.net', 'univ');
        expect(intern.getRole()).toBe('Intern');
    });
});