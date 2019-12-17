import React from 'react';
import Layout from  './components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
      <div>
        <Router>
        <Layout/>
        </Router>
      </div>
    );
}

export default App;
