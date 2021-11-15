import { useEffect, useState } from "react";
import { queryDataBase, queryUrl } from "../../core/query";
import { Input, Space, Spin } from "antd";
import Cards from "./Cards/Card";
import "./TableHttp.css";

const TableHttp = () => {
  const { Search } = Input;
  const [data1, setData1] = useState(undefined);
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(data1);
  const onSearch = (value) => setUrl(value);
  console.log(data1);

  useEffect(() => {
    // setIsLoaded(true);
    queryDataBase().then((res) => {
      setData1(res);
      // setIsLoaded(false);
    });
  }, []);

  useEffect(() => {
    if (url) {
      setIsLoaded(true);
      queryUrl(url).then((res) => {
        // setData((prev) => (data ? [...prev, res.data] : [prev]));
        setData(res.data);
        setIsLoaded(false);
      });
    }
  }, [url]);

  return (
    <>
      <h1 className="title">HTTP-Checker</h1>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      {!isLoaded ? (
        <div>{data && <Cards data={data} />}</div>
      ) : (
        <Spin className="spin" />
      )}
    </>
  );
};

export default TableHttp;
