/* eslint-disable no-undef */
describe('Pruebas en <DemoComponent/>', () => {

    test('test not retun nothing', () => {

        // 1. inicializacion
        const message1 = 'Hola Mundo';

        // 2. estimulo
        const message2 =  message1.trim();

        //3. Observar el comportamientio ... esperado

        expect(message1).toBe(message2);
     });

});

