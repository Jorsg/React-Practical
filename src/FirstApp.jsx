/* eslint-disable react/prop-types */
import { PropTypes } from 'prop-types';



export const FirtsAPP = ( {title,
    subTile} ) => {
      title,
      subTile
    return (
     // <> simboliza un fragmento en React
     <>
     <h1>{title}</h1>
      {/* <code>{JSON.stringify( newMessage)}</code> */}
      <p>{subTile}</p>
     </>
     )
};

FirtsAPP.prototype = {
       title: PropTypes.string.isRequired,
       subTile: PropTypes.number
};

FirtsAPP.defauldProsp = {
  name: 'Jorman',
 subTile: 'No hay subtitulo',
 //title: 'NO titulo'
};