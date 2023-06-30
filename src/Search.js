import React, { useState } from 'react';
import  './Allstyles.css'

const SearchBar = () => {
 
  return (
<div class="container">
  {/* <!-- For demo purpose --> */}
  <div class="row py-5">
    <div class="col-lg-9 mx-auto text-white text-center">
      <h1 class="display-4">Bootstrap 4 search bar</h1>
      <p class="lead mb-0">Collection of Bootstrap 4 search bar variants.</p>
      <p class="lead">Snippet by <a href="https://bootstrapious.com/snippets" class="text-white">
                <u>Bootstrapious</u></a>
      </p>
    </div>
  </div>
  {/* <!-- End --> */}


  <div class="row mb-5">
    <div class="col-lg-8 mx-auto">
      <h5 class="font-weight-light mb-4 font-italic text-white">Custom rounded search bars with input group</h5>
      <div class="bg-white p-5 rounded shadow">

        {/* <!-- Custom rounded search bars with input group --> */}
        <form action="">
          <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
          </div>

        </form>
        {/* <!-- End --> */}

      </div>
    </div>
  </div>
  </div>


  );
};

export default SearchBar;
