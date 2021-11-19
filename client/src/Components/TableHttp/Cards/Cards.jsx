import { Card } from "antd";
import "./Cards.css";

const Cards = ({ data }) => {
  const item = data.map((el, i) => (
    <div key={i.toString()} className="cards">
      <Card title="Url" bordered={true} className="cards__item">
        <span>{el.url}</span>
      </Card>
      <Card title="StatusCode" bordered={true} className="cards__item">
        <span>{el.statusCode}</span>
      </Card>
      <Card title="StatusMessage" bordered={true} className="cards__item">
        <span>{el.statusMessage}</span>
      </Card>
    </div>
  ));

  return <div className="wrapper__cards">{item}</div>;
};

export default Cards;
