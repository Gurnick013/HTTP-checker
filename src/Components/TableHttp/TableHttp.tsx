import { Descriptions, Badge } from "antd";
import { FC, useEffect } from "react";
import { IGetUrl } from "../constants/constants";
import "antd/dist/antd.css";

const TableHttp: FC<IGetUrl> = () => {
  const storage = Object.entries(localStorage);

  useEffect(() => {
    storage.map(async (el) => {
      return await fetch(`http://www.${el[1]}`, {
        mode: "no-cors",
      })
        .then((res: any) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [storage]);

  const items = storage.map(
    (el: Array<any>, index: number): JSX.Element | undefined => {
      return (
        <div key={index}>
          <Descriptions.Item label={el[0]} span={3}>
            <Badge status="processing" text={el[1]} />
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
