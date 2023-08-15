import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

/* eslint-disable no-undef */
describe('test file 09-promesas', () => {
  
    test('getHeroeByIdAsync should return a hero', (done) => {

        const id = 1;
        getHeroeByIdAsync( id ).then( hero => {
            expect(hero).toEqual(
                {id: 1, name:'Batman', owner:'DC'});

           done();
        });
    });

    test('getHeroeByIdAsync should return exception if hero does not exists', (done) => {

        const id = 100;
        getHeroeByIdAsync( id ).catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);

            done();
        });
    });

})
