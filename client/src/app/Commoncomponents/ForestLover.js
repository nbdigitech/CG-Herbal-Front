import { useState } from 'react';
import { Table, Input, Button, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ForestLover = ({ pageSize, forestLoverRequests, setForestLoverRequests }) => {
  const [forestLoverSearch, setForestLoverSearch] = useState('');

  const handleDeleteForestLover = (id) => {
    setForestLoverRequests(forestLoverRequests.filter(request => request.id !== id));
    message.success('Forest Lover request deleted successfully');
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
    { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
    { title: "EMAIL", dataIndex: "email", key: "email" },
    { title: "MOBILE", dataIndex: "mobile", key: "mobile" },
    { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => message.info('Edit functionality to be implemented')}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this request?"
            onConfirm={() => handleDeleteForestLover(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const filteredForestLoverRequests = forestLoverRequests.filter(request =>
    request.firstName.toLowerCase().includes(forestLoverSearch.toLowerCase()) ||
    request.lastName.toLowerCase().includes(forestLoverSearch.toLowerCase()) ||
    request.email.toLowerCase().includes(forestLoverSearch.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Forest Lover Requests</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Forest Lover Request List</h3>
          <Input.Search
            placeholder="Search by name or email"
            style={{ width: 200 }}
            value={forestLoverSearch}
            onChange={(e) => setForestLoverSearch(e.target.value)}
            onSearch={(value) => setForestLoverSearch(value)}
          />
        </div>
        <Table
          columns={columns}
          dataSource={filteredForestLoverRequests}
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

export default ForestLover;