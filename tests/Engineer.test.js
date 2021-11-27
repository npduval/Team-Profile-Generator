const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

describe("Manager", () => {
    describe("Initalization", () =>{
        it('should extend the Employee class' , () => {
            const object = new Engineer();

            expect (object instanceof Employee).toEqual(true);

    })
});




describe( "Get Functions", () => {
    it('should return correct role', () => {
    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';

    const correctRole = new Engineer(name, id, email).getRole();

    expect(correctRole).toEqual('Engineer')
   
   });

   it ('should return correct gitHub username', () => {

    const name = 'nombre';
    const id = 'numero';
    const email = 'correo';
    const gitHub = 'username'

    const correctGit = new Engineer(name, id, email, gitHub).getGithub();

    expect(correctGit).toEqual(gitHub)

   })
 })
});