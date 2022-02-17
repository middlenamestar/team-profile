const Engineer = require('../lib/engineer');

describe('engineer\'s github', () =>{
    it('gets github from engineer object', () =>{
        const engineer = new Engineer('priscilla', '8', 'priscilla@priscilla.net', 'star');
        expect(engineer.github).toBe('star');
    });
    it('returns github when getGitHub() is used', () =>{
        const engineer = new Engineer('priscilla', '8', 'priscilla@priscilla.net', 'star');
        expect(engineer.getGitHub()).toBe('star');
    });
});

describe('engineer role', () =>{
    it('returns \'Engineer\' when using getRole() method', () =>{
        const engineer = new Engineer('priscilla', '8', 'priscilla@priscilla.net', 'star');
        expect(engineer.getRole()).toBe('Engineer');
    });
});