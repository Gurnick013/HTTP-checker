import { Input, Space } from "antd";
import { FC, useState } from "react";
import TableHttp from "../TableHttp/TableHttp";

const { Search } = Input;


const InputHttp: FC = () => {
  const [domain, setDomain] = useState('');
  
  const onSearch = (value: any) => setDomain(value);

  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="check status"
          onSearch={onSearch} 
          enterButton         
        />
      </Space>      
      {domain && <TableHttp getUrl={domain} />}
    </div>
  );
};

export default InputHttp;
