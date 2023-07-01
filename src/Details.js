import React from 'react';
import './Details.css';

const Details = (props) => {
    const { details } = props;

    console.log(details)


    const symbol = details["Global Quote"]["01. symbol"];
    const open = details["Global Quote"]["02. open"];
    const high = details["Global Quote"]["03. high"];
    const low = details["Global Quote"]["04. low"];
    const price = details["Global Quote"]["05. price"];
    const volume = details["Global Quote"]["06. volume"];
    const latestTradingDay = details["Global Quote"]["07. latest trading day"];
    const previousClose = details["Global Quote"]["08. previous close"];
    const change = details["Global Quote"]["09. change"];
    const changePercent = details["Global Quote"]["10. change percent"];

    // // Printing the values of the variables
    // console.log("symbol:", symbol);
    // console.log("open:", open);
    // console.log("high:", high);
    // console.log("low:", low);
    // console.log("price:", price);
    // console.log("volume:", volume);
    // console.log("latest trading day:", latestTradingDay);
    // console.log("previous close:", previousClose);
    // console.log("change:", change);
    // console.log("change percent:", changePercent);


    return (
        <div className="card">
        <div className="title">
          <div className="symbol">{symbol}</div>
          <div className="price-change">{price} + {changePercent}</div>
        </div>
        <div className="list-item">
          <div className="label">Low</div>
          <div className="value">{low}</div>
        </div>
        <div className="list-item">
          <div className="label">Change</div>
          <div className="value">{change}</div>
        </div>
      </div>

    );
  
};

export default Details;
