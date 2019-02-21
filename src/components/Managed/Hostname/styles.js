import styled from "styled-components";
import {
  Table as AntdTable,
  Input as AntdInput,
  Button as AntdButton
} from "antd";

export const StyledLink = styled.a`
  text-decoration: none;
`;
export const Button = styled(AntdButton)`
  padding: 5px 15px;

  :not(:last-child) {
    margin-right: 10px;
  }
`;
export const Input = styled(AntdInput)`
  margin-bottom: 10px;
  display: block;
`;
export const Table = styled(AntdTable)`
  width: 100%;
  overflow-x: scroll;
  .ant-table-column-has-actions.ant-table-column-has-filters {
    min-width: 140px;
  }
  .ant-table-thead th {
    cursor: pointer;
    span {
      white-space: nowrap;
    }
  }
  i.anticon.anticon-search {
    font-size: 18px;
    svg {
      top: 18px !important;
      left: 6px !important;
      margin: 0 !important;
    }
  }
`;
export const HostnamesTableWrapper = styled.div`
  button {
    margin-top: 20px;
  }
`;

export const SearchContainer = styled.div`
  padding: 20px;
  max-width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
