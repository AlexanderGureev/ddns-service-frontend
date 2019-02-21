import React, { useState, useRef } from "react";
import { Icon, Divider, Tooltip } from "antd";
import Highlighter from "react-highlight-words";
import {
  HostnamesTableWrapper,
  SearchContainer,
  Table,
  Input,
  Button
} from "./styles";
import CreateHostnameModal from "./CreateHostnameModal";
import ModifyHostnameModal from "./ModifyHostnameModal";
import DeleteHostnameModal from "./DeleteHostnameModal";

const data = [
  {
    key: "1",
    hostname: "test.ddns.com",
    update: "Jan 2, 2019 16:31:38 PST",
    ip: "95.165.136.7",
    type: "ipv4"
  },
  {
    key: "2",
    hostname: "test2.ddns.com",
    update: "Jan 2, 2019 16:31:38 PST",
    ip: "95.165.136.7",
    type: "ipv4"
  },
  {
    key: "3",
    hostname: "test3.ddns.com",
    update: "Jan 2, 2019 16:31:38 PST",
    ip: "95.165.136.7",
    type: "ipv4"
  },
  {
    key: "4",
    hostname: "test4.ddns.com",
    update: "Jan 2, 2019 16:31:38 PST",
    ip: "95.165.136.7",
    type: "ipv4"
  }
];

const HostnamesTable = props => {
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <SearchContainer>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)}>Reset</Button>
      </SearchContainer>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible =>
      visible && setTimeout(() => searchInput.current.select()),
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    )
  });

  const columns = [
    {
      title: () => (
        <Tooltip title="A prefix of a domain name (shrt.zone) that will identufy your Dynamic DNS devices.">
          Hostname
        </Tooltip>
      ),
      dataIndex: "hostname",
      key: "hostname",
      width: "25%",
      ...getColumnSearchProps("hostname")
    },
    {
      title: (
        <Tooltip title="The last time that we have received an IP address update for your hostname.">
          Last update
        </Tooltip>
      ),
      dataIndex: "update",
      key: "update",
      width: "25%",
      render: () => "test"
    },
    {
      title: (
        <Tooltip title="The IP address that is assigned to your device.">
          IP/Target
        </Tooltip>
      ),
      dataIndex: "ip",
      key: "ip",
      width: "20%"
    },
    {
      title: (
        <Tooltip title="The DNS record type your hostnames is set to.">
          Type
        </Tooltip>
      ),
      dataIndex: "type",
      key: "type",
      width: "10%"
    },
    {
      title: "Action",
      key: "action",
      width: "20%",

      render: (text, record) => (
        <>
          <ModifyHostnameModal />
          <Divider type="vertical" />
          <DeleteHostnameModal />
        </>
      )
    }
  ];

  return (
    <HostnamesTableWrapper>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        locale={{ emptyText: "You have not yet created a single hostname" }}
      />
      <CreateHostnameModal />
    </HostnamesTableWrapper>
  );
};

export default HostnamesTable;
