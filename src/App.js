import React, { useState } from 'react';
import Api from './Api';
// import Navs from './Navs';
// import SearchBar from './Search';
import Header from './Header';
class App extends React.Component {
  render() {
    return (
      <>
<div> <Header></Header></div>

{/* <div>
      <SearchBar />
    </div> */}

      <div>
          <Api symbol="AMZN" />
        </div></>
    );
  }
}

export default App;
