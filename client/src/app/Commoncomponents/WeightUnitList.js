import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const WeightUnitList = ({ weightUnits, setWeightUnits, setSelectedWeightUnit, setSelectedMenu, selectedProductId }) => {
  const weightUnitColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Shipping Amount', dataIndex: 'shippingAmount', key: 'shippingAmount' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedWeightUnit(record);
              setSelectedMenu('editWeightUnit');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this weight unit?"
            onConfirm={async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/weight/${record._id}`,
      { method: 'DELETE' }
    );

    if (!response.ok) throw new Error('Delete failed');

    message.success('Weight deleted successfully');
    setWeightUnits(prev => prev.filter(w => w._id !== record._id));
  } catch (err) {
    console.error(err);
    message.error('Failed to delete weight');
  }
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
      <h2 className="text-2xl font-semibold mb-4">Weight Unit</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Weight Unit List</h3>
          <div className="flex gap-2">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setSelectedMenu('addWeightUnit')}
            >
              Add
            </Button>
          </div>
        </div>
        <Table
          columns={weightUnitColumns}
          dataSource={weightUnits}
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

export default WeightUnitList;