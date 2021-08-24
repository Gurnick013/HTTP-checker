import { Descriptions, Badge } from "antd";
import { FC, useEffect } from "react";
import { IGetUrl } from "../constants/constants";
import "antd/dist/antd.css";
// import axios from "axios";

const TableHttp: FC<IGetUrl> = () => {
  const storage = Object.entries(localStorage);

  useEffect(() => {
    storage.map(async (el) => {
      return await fetch(`https://www.${el[1]}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          mode: 'no-cors'
        })
        .then((data: any) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [storage]);

  const items = storage.map(
    (el: Array<any>, index: number): JSX.Element | undefined => {
      return (
        <div key={index.toString()}>
          <Descriptions.Item label={el[0]} span={3}>
            <Badge status="processing" text={el[0]} />
          </Descriptions.Item>
        </div>
      );
    }
  );

  return (
    <>
      <div>{items}</div>
    </>
  );
};

export default TableHttp;
