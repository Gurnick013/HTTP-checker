import { Input, Space, Tooltip } from "antd";
import { useState } from "react";
import { FC } from "react";
import TableHttp from "../TableHttp/TableHttp";
import "antd/dist/antd.css";

const { Search } = Input;

const InputHttp: FC = () => {
  const [domian, setDomian] = useState("");
  const onSearch = (value: string) => {
    setDomian(value);
    localStorage.setItem(value.substring(0, value.indexOf(".")), value);
  };

  return (
    <>
      <Tooltip placement="topLeft" title="http://www.">
        <Space direction="vertical">
          <Search
            placeholder="check status"
            onSearch={onSearch}
            enterButton
            type="url"
          />
        </Space>
      </Tooltip>
      {!localStorage.length ? (
        <div>Таблица запросов пуста</div>
      ) : (
        <TableHttp getUrl={domian} />
      )}
    </>
  );
};

export default InputHttp;
