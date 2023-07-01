import React, { useState } from 'react';
// import Api from './Api';
import Graph from './Graph';


const Navs = (props) => {
    const { weeklyData, dailyData, monthlyData } = props;
    const [activeTab, setActiveTab] = useState('Daily');

    // console.log(weeklyData)
    // console.log(dailyData)
    // console.log(monthlyData)



    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card bg-black w-60">
          <div className="card-body p-0">
            <ul className="nav bg-transparent nav-tabs">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'Daily' ? 'active' : ''}`}
                  onClick={() => handleTabChange('Daily')}
                >
                  Daily
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'Weekly' ? 'active' : ''}`}
                  onClick={() => handleTabChange('Weekly')}
                >
                  Weekly
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === 'Monthly' ? 'active' : ''}`}
                  onClick={() => handleTabChange('Monthly')}
                >
                  Monthly
                </button>
              </li>
            </ul>
  
            {activeTab === 'Daily' && (
              <Graph period={"Daily"} stockData={dailyData} />
            )}
            {activeTab === 'Weekly' && (
            <Graph period={"Weekly"} stockData={weeklyData} />

            )}
            {activeTab === 'Monthly' && (
            <Graph period={"Monthly"} stockData={monthlyData} />

            )}
          </div>
        </div>
      </div>

// <div></div>
    );
  
};

export default Navs;
