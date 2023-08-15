/* eslint-disable no-undef */
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas file 02-template-string', () => {
  
       test('getSaludo debe retornar "Hola Jorman"', () =>{

        const name = 'Jorman';
        const message = getSaludo( name );

        // eslint-disable-next-line no-undef
        expect( message ).toBe(`Hola ${name}`);
    });

});
