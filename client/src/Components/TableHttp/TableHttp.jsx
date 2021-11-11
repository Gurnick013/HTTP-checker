import { useEffect, useState } from "react";
import queryUrl from "../../core/query";
import { Input, Space, Spin } from "antd";

const TableHttp = () => {
  const { Search } = Input;

  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const onSearch = (value) => setUrl(value);
  console.log(data);
  useEffect(() => {
    if (url) {
      setIsLoaded(true);
      queryUrl(url).then((res) => {
        setData(res.data);
        setIsLoaded(false);
      });
    }
  }, [url]);

  return (
    <>
      <h1>HTTP-Checker</h1>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Space>
      {!isLoaded ? (
        <h2>
          {data &&
            `${data.statusCode ? data.statusCode : ""} ${data.statusMessage}`}
        </h2>
      ) : (
        <Spin />
      )}
    </>
  );
};

export default TableHttp;
