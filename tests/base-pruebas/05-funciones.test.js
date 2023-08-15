/* eslint-disable no-undef */
import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";


describe('test file 05 funciones', () => {

    test('getUser should return Id and username', () => {

      const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
     };

          const user = getUser();
          expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

      const nombre = 'Jorman';
      const userActivo = getUsuarioActivo(nombre);

      expect(userActivo).toStrictEqual({ uid: 'ABC567',
      username: nombre
      });
    });
});


