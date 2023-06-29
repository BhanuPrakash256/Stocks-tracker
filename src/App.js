import React, { useState } from 'react';
import Api from './Api';
// import Navs from './Navs';

class App extends React.Component {
  render() {
    return (
      <>
<div class="jumbotron bg-dark text-white jumbotron-fluid ">
  <div class="container">
    <h1 class="display-4 text-center">Stock Tracker</h1>
  </div>
</div>

<div className="container-fluid p-0 rounded-0">
  <div className="card text-blue rounded-0" >
    <div className="card-body">
      <h2 className="card-title text-center">Stock Tracker</h2>
    </div>
  </div>
</div>


      <div>
          <Api symbol="AMZN" />
        </div></>
    );
  }
}

export default App;
