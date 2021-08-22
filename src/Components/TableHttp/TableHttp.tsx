// import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";

interface IGetUrl {
  getUrl: any;
}

const TableHttp: FC<IGetUrl> = (value) => {
  const domainName = value.getUrl;
  console.log(value.getUrl);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://${domainName}`, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
      },
    })
      .then((res) => {
        console.log(res);
      })
      .then((result: any) => setStatus(result))
      .catch((err) => {
        console.log(err);
      });
  }, [domainName]);

  return <div>{status}</div>;
};

export default TableHttp;
