import { Select } from "antd";

const { Option } = Select;

export const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
export const selectAfter = (
  <Select defaultValue=".com" className="select-after">
    <Option value=".com">.com</Option>
    <Option value=".jp">.net</Option>
    <Option value=".cn">.ru</Option>
    <Option value=".org">.org</Option>
  </Select>
);
