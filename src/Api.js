// import React, { useEffect, useState } from 'react';
// // import Graph from './Graph';
// import Navs from './Navs';

// const Api = (props) => {
//   const [dailyData, setDailyData] = useState(null);
//   const [weeklyData, setWeeklyData] = useState(null);
//   const [monthlyData, setMonthlyData] = useState(null);

//   const { symbol } = props;
//   // const periodUpperCase = functionType ? functionType.toUpperCase() : '';
  
//   const weekUpperCase = "WEEKLY"
//   const dailyUpperCase = "DAILY"
//   const monthlyUpperCase = "MONTHLY"

//   useEffect(() => {
//     fetchStockData(dailyUpperCase, 1);
//     fetchStockData(weekUpperCase, 2);
//     fetchStockData(monthlyUpperCase, 3);

//   // console.log(dailyData)
//   // console.log(weeklyData)
//   // console.log(monthlyData)

//   }, []);


//   const fetchStockData = (functionType, num) => {


//     const API_KEY = 'RPPUF703E0INMVKS';
//     const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_${functionType}_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`; // Use functionType to construct API_Call

//     fetch(API_Call)
//       .then((response) => response.json())
//       .then((data) => {

//         if (functionType === "WEEKLY") {
//           setWeeklyData(data)
//         }
//         else if (functionType === "DAILY"){
//           setDailyData(data)
//         }else{
//           setMonthlyData(data)
//         }
//         // setStockData(data);
//         // console.log(data)
//       })
//       .catch((error) => {
//         console.error('Error fetching stock data:', error);
//       });

//     console.log('256////////\\\\\ '+ num + ' ////00/' )
      
//   };



//   return (

//     <div>
//     {dailyData ? (<Navs weeklyData={weeklyData} dailyData={dailyData} monthlyData={monthlyData} />)
//     : (<div>Loading stock data...</div>)}
//     </div>

// );
// };

// export default Api;

// {/* <div>
// <Navs weeklyData={weeklyData} dailyData={dailyData} monthlyData={monthlyData} />
// </div> */}

// // <div>
// //   {stockData ? (
// //     <Graph period={functionType} stockData={stockData} /> // Pass period and stockData as props
    
// //     ) : (
// //     <div>Loading stock data...</div>
// //   )}
// // </div>





import React, { useEffect, useState } from 'react';
import Navs from './Navs';

const Api = (props) => {
  const [dailyData, setDailyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);

  const { symbol } = props;

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = () => {
    const API_KEY = 'RPPUF703E0INMVKS';
    const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_{{functionType}}_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;

    Promise.all([
      fetch(API_Call.replace('{{functionType}}', 'DAILY')).then((response) => response.json()),
      fetch(API_Call.replace('{{functionType}}', 'WEEKLY')).then((response) => response.json()),
      fetch(API_Call.replace('{{functionType}}', 'MONTHLY')).then((response) => response.json())
    ])
      .then(([dailyData, weeklyData, monthlyData]) => {
        setDailyData(dailyData);
        setWeeklyData(weeklyData);
        setMonthlyData(monthlyData);
      })
      .catch((error) => {
        console.error('Error fetching stock data:', error);
      });

    console.log('256////////\\\\\   ////00/' )

  };

  return (
    <div>
      {(dailyData) ? (
        <Navs weeklyData={weeklyData} dailyData={dailyData} monthlyData={monthlyData} />
      ) : (
        <div>Loading stock data...</div>
      )}
    </div>
  );
};

export default Api;
