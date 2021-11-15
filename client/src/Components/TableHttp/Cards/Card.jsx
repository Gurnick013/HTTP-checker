import { Card } from "antd";
import "./Cards.css";

const Cards = ({ data }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Url" bordered={false} style={{ width: 300 }}>
        <span>{data.url}</span>        
      </Card>
      <Card title='StatusCode' bordered={false} style={{ width: 300 }}>
        <span>{data.statusCode}</span>        
      </Card>
      <Card title="StatusMessage" bordered={false} style={{ width: 300 }}>        
        <span>{data.statusMessage}</span>
      </Card>

    </div>
  );
};

export default Cards;
