import React , { useEffect, useState } from "react";
import {deleteDataBaseItem, queryDataBase, queryUrl} from "../../core/query";
import { Input, Space, Spin } from "antd";
import Cards from "./Cards/Cards";
import "./TableHttp.css";
import isRepeatUrl from "../../core/service/checkInBase";

const TableHttp = () => {
  const { Search } = Input;

  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState('')
  const onSearch = (value) => setUrl(value);

  useEffect(() => {
    setIsLoaded(true);
    queryDataBase().then((res) => {
      setData(res.data);
      setIsLoaded(false);
    });
  }, []);

  useEffect(() => {
    if (url && isRepeatUrl(data, url)) {
      setIsLoaded(true);
      queryUrl(url).then((res) => {
        setData((prev) => (prev ? [...prev, res.data] : [res.data]));
        setIsLoaded(false);
      });
    }
  }, [url]);

  useEffect(()=> {
   if(item) {
       deleteDataBaseItem(item).then((res)=>{
       setData(res.data);
     })
   }
  }, [item])

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
      {data && !isLoaded ? <Cards data={data} setItem={setItem}/> : <Spin id="spin" />}
     </>
  );
};

export default TableHttp;
