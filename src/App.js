import React from 'react';
import './App.css';
import Child from './FrontEnd.js';
import { TransactionProvider } from './transContext';

function App() {
  
  return (
    <TransactionProvider>
     
        <Child />
        <h5 className="nameTag">Copyright © 2020 Rana Subhan, LLC dba Autobots ® </h5>
      </TransactionProvider>
    
  );
}

export default App;