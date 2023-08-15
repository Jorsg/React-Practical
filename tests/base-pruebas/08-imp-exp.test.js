/* eslint-disable no-undef */

import { getHeroeById, getHeroesByOwner } from  "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';




describe('test file 08-imp-exp', () => {
  
    test('getHeroeById should return a heroe by ID ', () => {

        const id = 1;
        const hero = getHeroeById( id );
        //const hero = getHeroeById( id );

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById should return undefined if not exists to Id', () => {
      const id = 90;
      const hero = getHeroeById( id );

      expect(hero).toEqual(undefined);

    });

    test('getHeroByOwner should return all owner from DC ', () => {
      const owner = 'DC';
      const ownerHero = getHeroesByOwner( owner );

    //    expect(ownerHero).toEqual([
    //      { id: 1, name: 'Batman', owner: 'DC' },
    //      { id: 3, name: 'Superman', owner: 'DC' },
    //      { id: 4, name: 'Flash', owner: 'DC' }
    //    ]);

    expect( ownerHero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroByOwner should return all owner from Marvel ', () => {
        const owner = 'Marvel';
        const ownerHero = getHeroesByOwner( owner );

        //   expect(ownerHero).toEqual([
        //     { id: 2, name: 'Spiderman', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
        //   ]);
        expect( ownerHero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
      });

})
