import React from 'react';
import { Table, Button, Popconfirm, Input } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const CorporateList = ({ corporateList, setSelectedMenu, handleDeleteCorporate }) => {
  const columns = [
    { title: 'Sr.', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Organization', dataIndex: 'organization', key: 'organization' },
    { 
      title: 'Message', 
      dataIndex: 'message', 
      key: 'message',
      render: (text) => (
        <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this corporate entry?"
          onConfirm={() => handleDeleteCorporate(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<DeleteOutlined />}
            className="text-red-500 border-red-500"
          />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Corporate</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Corporate List</h3>
          
        </div>
        <Table
          columns={columns}
          dataSource={corporateList}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          rowClassName={() => 'align-top'}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default CorporateList;