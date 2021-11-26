 const Employee = require('../lib/Employee');

 describe("Employee", () => {
     describe("Initalization", () =>{
         it('should return an object with name, id, and email properties' , () => {
             const object = new Employee();

             expect ('name' in object).toEqual(true);
             expect ('id' in object).toEqual(true);
             expect ('email' in object).toEqual(true);
         })
     });
 
 
 

 describe( "Get Functions", () => {
     it('should return correct name', () => {
     const name = 'nombre';
     const id = 'numero';
     const email = 'correo';

     const correctName = new Employee(name, id, email).getName();

     expect(name).toEqual(correctName)
    
    });
    
    it ('should return correct id', () =>{
        const name = 'nombre';
        const id = 'numero';
        const email = 'correo';

        const correctId = new Employee(name, id, email).getId();

        expect(id).toEqual(correctId)

    });

    it ('should return correct email', ()=>{
        const name = 'nombre';
        const id = 'numero';
        const email = 'correo';

        const correctEmail = new Employee(name, id, email).getEmail();

        expect(email).toEqual(correctEmail)

    });

    it ('should return correct role',() => {
        const name = 'nombre';
        const id = 'numero';
        const email = 'correo';

        const correctRole = new Employee(name, id, email).getRole();

        expect(correctRole).toEqual('Employee')

     });
  });
});