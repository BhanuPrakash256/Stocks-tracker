// import { Api } from './Api';
// import './SearchBar.css'
// import React, { useState } from 'react';
// // import  './Allstyles.css'
// const companyData = require('./data.json');



// function useSuggestion() {
//   function handleSuggestion(company, setInputVal, setSuggestions) {
//     console.log(company.symbol);
//     setInputVal(company.companyName);
//     setSuggestions([]);
//     // Perform any other actions with the selected company
//     sendSymbolToApi(company.symbol);
//   }

//   return handleSuggestion;
// }

// function SearchBar() {
//   const [inputVal, setInputVal] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedCompanySymbol, setSelectedCompanySymbol] = useState('');

//   const handleSuggestion = useSuggestion();

//   function sendSymbolToApi(symbol) {
//     setSelectedCompanySymbol(symbol);
//   }
  
//   function search(str) {
//     const results = [];
//     const val = str.toLowerCase();

//     for (const [companyName, symbol] of Object.entries(companyData)) {
//       if (companyName.toLowerCase().indexOf(val) > -1) {
//         results.push({ companyName, symbol });
//       }
//     }

//     return results;
//   }

//   function searchHandler(e) {
//     const inputValue = e.currentTarget.value;
//     let results = [];
//     if (inputValue.length > 0) {
//       results = search(inputValue);
//     }
//     setSuggestions(results.slice(0, 10)); // Limit suggestions to 10
//     setInputVal(inputValue);
//   }

//   function clearInput() {
//     setInputVal('');
//     setSuggestions([]);
//   }


  

//   return (
// <div className="search-bar shadow-lg bg-body rounded">
//           <div className="input-group">
//             <input
//               type="text"
//               name = "company"
//               id = "company"
//               value = {inputVal}
//               onChange={searchHandler}
//               placeholder="Search for a Company here"
//               aria-describedby="button-addon1"
//               className="form-control border-0 bg-light"
//             />
//         {inputVal.length > 0 && (
//           <button
//             className="clear-input"
//             onClick={clearInput}
//           >
//             <i class="fa-solid fa-circle-xmark" ></i>
//           </button>
//         )}
//           {suggestions.length > 0 && (
//         <div className="suggestions border border-4 rounded-3" >
//           <ul class="list-group list-group-flush">
//             {suggestions.map((company) => (
//               <li key={company.companyName} onClick={() => handleSuggestion(company, setInputVal, clearInput)}>
//                 {company.companyName}   
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//             <div className="input-group-append">
//               <button
//                 id="button-addon1"
//                 type="submit"
//                 className="btn btn-link text-primary"
//               >
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </button>


//             </div>
//           </div>
//           <Api symbol={selectedCompanySymbol} />
//         </div>

//   );
// };

// export default SearchBar;


import Api from './Api';
import './SearchBar.css';
import React, { useState } from 'react';
// import { Api as StockApi } from './Api';
const companyData = require('./data.json');

function useSuggestion() {
  const [selectedCompanySymbol, setSelectedCompanySymbol] = useState('');

  function handleSuggestion(company, setInputVal, setSuggestions) {
    console.log(company.symbol);
    setInputVal(company.companyName);
    setSuggestions([]);
    // Perform any other actions with the selected company
    setSelectedCompanySymbol(company.symbol);
  }

  return { handleSuggestion, selectedCompanySymbol };
}

function SearchBar() {
  const [inputVal, setInputVal] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const { handleSuggestion, selectedCompanySymbol } = useSuggestion();

  function search(str) {
    const results = [];
    const val = str.toLowerCase();

    for (const [companyName, symbol] of Object.entries(companyData)) {
      if (companyName.toLowerCase().indexOf(val) > -1) {
        results.push({ companyName, symbol });
      }
    }

    return results;
  }

  function searchHandler(e) {
    const inputValue = e.currentTarget.value;
    let results = [];
    if (inputValue.length > 0) {
      results = search(inputValue);
    }
    setSuggestions(results.slice(0, 10)); // Limit suggestions to 10
    setInputVal(inputValue);
  }

  function clearInput() {
    setInputVal('');
    setSuggestions([]);
  }

  return (
    <div className="search-bar shadow-lg bg-body rounded">
      <div className="input-group">
        <input
          type="text"
          name="company"
          id="company"
          value={inputVal}
          onChange={searchHandler}
          placeholder="Search for a Company here"
          aria-describedby="button-addon1"
          className="form-control border-0 bg-light"
        />
        {inputVal.length > 0 && (
          <button className="clear-input" onClick={clearInput}>
            <i className="fa-solid fa-circle-xmark"></i>
          </button>
        )}
        {suggestions.length > 0 && (
          <div className="suggestions border border-4 rounded-3">
            <ul className="list-group list-group-flush">
              {suggestions.map((company) => (
                <li
                  key={company.companyName}
                  onClick={() =>
                    handleSuggestion(company, setInputVal, clearInput)
                  }
                >
                  {company.companyName}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="input-group-append">
          <button
            id="button-addon1"
            type="submit"
            className="btn btn-link text-primary"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      {selectedCompanySymbol && <Api symbol={selectedCompanySymbol} />}
    </div>
  );
}

export default SearchBar;
