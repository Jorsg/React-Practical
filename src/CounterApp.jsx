/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const CounterApp = ( { value } ) => {


const [counter, setCounter] = useState ( value );

   // eslint-disable-next-line no-unused-vars
   const handleAdd = () => setCounter(counter  + 1);
   const handleRest = () => setCounter( counter - 1);
   const handleReset = () => setCounter(value);

    return (
    <>
     <h1>CounterApp</h1>
     <h2> { counter } </h2>
     <button onClick={ handleAdd}> +1 </button>
     <button onClick = {handleRest}>   - 1</button>
     <button onClick={handleReset}> Reset </button>
    </>
    )
}

CounterApp.prototype = {
           value: PropTypes.number.isRequired
};