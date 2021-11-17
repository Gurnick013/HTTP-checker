import { Card } from "antd";
import "./Cards.css";

const Cards = ({ data }) => {
  const item = data.map((el, i) => (
    <div key={i.toString()} className="card">
      <Card title="Url" bordered={false} style={{ width: 300 }}>
        <span>{el.url}</span>
      </Card>
      <Card title="StatusCode" bordered={false} style={{ width: 300 }}>
        <span>{el.statusCode}</span>
      </Card>
      <Card title="StatusMessage" bordered={false} style={{ width: 300 }}>
        <span>{el.statusMessage}</span>
      </Card>
    </div>
  ));

  return <div className="site-card-border-less-wrapper">{item}</div>;
};

export default Cards;
