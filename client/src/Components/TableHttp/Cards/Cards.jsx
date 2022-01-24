import React, {memo, useEffect, useState} from 'react';
import {Card, Button} from "antd";
import "./Cards.css";


const Cards = memo(  ({ data, setItem }) => {
    console.log(data)
    return (
      <div className="wrapper__cards">{data.map((item , i) => (
        <div key={i.toString()} className="cards">
          <Card title="Url" bordered className="cards__item">
            <span>{item.url}</span>
          </Card>
          <Card title="StatusCode" bordered={true} className="cards__item">
            <span>{item.statusCode}</span>
          </Card>
          <Card title="StatusMessage" bordered={true} className="cards__item">
            <span>{item.statusMessage}</span>
          </Card>
          <Card title="Update" bordered={true} className="cards__item">
            <span>{item.update}</span>
          </Card>
          <Button type="primary" shape="circle" onClick={() =>setItem(item.url) }>
            Х
          </Button>
        </div>
      ))}
      </div>
    )}
);

export default Cards;