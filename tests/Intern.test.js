const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


describe("Manager", () => {
    describe("Initalization", () =>{
        it('should extend the Employee class' , () => {
            const object = new Intern();

            expect (object instanceof Employee).toEqual(true);

    })
});




describe( "Get Functions", () => {
    it('should return correct role', () => {
    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';

    const correctRole = new Intern(name, id, email).getRole();

    expect(correctRole).toEqual('Intern')
   
   });

   it ('should return correct office number', () => {

    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';
    const school = 'colegio'

    const correctSchool = new Intern(name, id, email, school).getSchool();

    expect(correctSchool).toEqual(school)

   })
 })
});