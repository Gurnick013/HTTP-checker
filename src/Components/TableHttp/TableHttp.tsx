import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { IGetUrl } from "../constants/constants";

const TableHttp: FC<IGetUrl> = (value) => {
  const domainName = value.getUrl;

  const [status, setStatus] = useState("");
  console.log(status);
  useEffect(() => {
    fetch(`https://www.${domainName}`, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    })
      .then((res: any) => {
        console.log(res);
        setStatus(res.type);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [domainName]);
  console.log(status);

  return <div>{status}</div>;
};

export default TableHttp;
