import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const TaxList = ({ taxes, setTaxes, setSelectedTax, setSelectedMenu }) => {
  const taxColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Value (%)', dataIndex: 'value', key: 'value' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={status === 'Active' ? 'text-green-500' : 'text-red-500'}>
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedTax(record);
              setSelectedMenu('editTax');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this tax?"
            onConfirm={() => {
              setTaxes(prevTaxes => prevTaxes.filter(tax => tax.id !== record.id));
              message.success('Tax deleted successfully');
            }}
            okText="Yes"
            cancelText="No"
            icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
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
      <h2 className="text-2xl font-semibold mb-4">Tax</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Tax List</h3>
          <div className="flex gap-2">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setSelectedMenu('addTax')}
            >
              Add
            </Button>
          </div>
        </div>
        <Table
          columns={taxColumns}
          dataSource={taxes}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          rowClassName={() => 'align-top'}
          locale={{ emptyText: 'No data' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default TaxList;