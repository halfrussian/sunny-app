import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Homepage';

const App = () => {
  return (
  <>

    <Router>
      <Routes>
      <Route  path='/' element={<HomePage  />}/>
       </Routes>
    </Router>
    
  </>
  );
}



export default App;
//npm install react-scripts --save