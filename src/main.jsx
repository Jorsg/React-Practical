/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorld } from './PracticApp';
 import { FirtsAPP } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';






ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
        {/* <HelloWorld></HelloWorld> */}
        <FirtsAPP title="Jorman Garcia"></FirtsAPP>
        {/* {<CounterApp value = {20}></CounterApp>} */}
     </React.StrictMode>
    );
