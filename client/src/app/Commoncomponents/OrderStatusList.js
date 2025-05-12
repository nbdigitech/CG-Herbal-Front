import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const OrderStatusList = ({ orderStatuses, setOrderStatuses, setSelectedOrderStatus, setSelectedMenu, orderStatusForm }) => {
  const orderStatusColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedOrderStatus(record);
              setSelectedMenu('editOrderStatus');
              orderStatusForm.setFieldsValue({ name: record.name });
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this order status?"
            onConfirm={() => {
              setOrderStatuses(prevStatuses => prevStatuses.filter(status => status.id !== record.id));
              message.success('Order status deleted successfully');
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
      <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Order Status List</h3>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setSelectedMenu('addOrderStatus')}
          >
            Add
          </Button>
        </div>
        <Table
          columns={orderStatusColumns}
          dataSource={orderStatuses}
          rowKey="id"
          pagination={false}
          className="bg-white"
          locale={{ emptyText: 'No data' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default OrderStatusList;