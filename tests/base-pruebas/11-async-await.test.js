/* eslint-disable no-undef */
import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('test file 11-async-await', () => {

    test('getImagen should return img', async() => {

        const url = await getImagen();
       expect(typeof url).toBe('string');

    });
})
