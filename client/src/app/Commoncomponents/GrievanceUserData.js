
import React, { useState } from 'react';
import { Table, Input } from 'antd';

const GrievanceUserData = ({ grievanceUserData, pageSize }) => {
  const [searchText, setSearchText] = useState('');

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
    { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
    { title: "EMAIL", dataIndex: "email", key: "email" },
    { title: "GRIEVANCE", dataIndex: "grievance", key: "grievance" },
    { title: "MESSAGE", dataIndex: "message", key: "message" },
  ];

  // सर्च फंक्शनैलिटी
  const filteredData = grievanceUserData.filter(data =>
    data.firstName?.toLowerCase().includes(searchText.toLowerCase()) ||
    data.lastName?.toLowerCase().includes(searchText.toLowerCase()) ||
    data.email?.toLowerCase().includes(searchText.toLowerCase()) ||
    data.grievance?.toLowerCase().includes(searchText.toLowerCase()) ||
    data.message?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Grievance UserData</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Grievance UserData List</h3>
          <Input.Search
            placeholder="Search"
            style={{ width: 200 }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSearch={(value) => setSearchText(value)}
          />
        </div>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{ pageSize }}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
    </div>
  );
};

export default GrievanceUserData;