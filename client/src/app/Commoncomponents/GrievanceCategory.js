
import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const GrievanceCategory = ({ grievanceData, setGrievanceData, setSelectedMenu, pageSize,  handleDeleteGrievanceCategory }) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "NAME", dataIndex: "name", key: "name" },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span className={text === "Active" ? "text-green-500" : "text-red-500"}>{text}</span>
      )
    },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => setSelectedMenu(`editGrievance/${record.id}`)}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
  title="Are you sure to delete this grievance category?"
  onConfirm={() => handleDeleteGrievanceCategory(record.id)}
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Grievance Category</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Grievance List</h3>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setSelectedMenu('addGrievance')}
          >
            Add
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={grievanceData}
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

export default GrievanceCategory;