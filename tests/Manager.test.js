const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Initalization", () =>{
        it('should extend the Employee class' , () => {
            const object = new Manager();

            expect (object instanceof Employee).toEqual(true);

    })
});




describe( "Get Functions", () => {
    it('should return correct role', () => {
    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';

    const correctRole = new Manager(name, id, email).getRole();

    expect(correctRole).toEqual('Manager')
   
   });

   it ('should return correct office number', () => {

    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';
    const officeNumber = 'office'

    const correctOff = new Manager(name, id, email, officeNumber).getOfficeNumber();

    expect(correctOff).toEqual(officeNumber)

   })
 })
});