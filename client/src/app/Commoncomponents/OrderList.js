import React from 'react';
import { Table, Button, Popconfirm, message, Input } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, FileExcelOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const OrderList = ({ orders, setOrders, setSelectedOrder, setSelectedMenu, pageSize, setPageSize }) => {
  const orderColumns = [
    { title: 'Order ID', dataIndex: 'id', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Payment Status', dataIndex: 'paymentStatus', key: 'paymentStatus', width: 100 },
    { title: 'Order Mode', dataIndex: 'orderMode', key: 'orderMode' },
    { title: 'Qty', dataIndex: 'qty', key: 'qty', width: 100 },
    { title: 'Price', dataIndex: 'price', key: 'price', width: 100 },
    { title: 'Order Status', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: 'Shipping Status', dataIndex: 'shippingStatus', key: 'shippingStatus' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedOrder(record);
              setSelectedMenu('viewOrder');
            }}
            className="text-blue-500 border-blue-500"
          />
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedOrder(record);
              setSelectedMenu('editOrder');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this order?"
            onConfirm={async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${record.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== record.id));
      message.success('Order deleted successfully');
    } else {
      const data = await res.json();
      throw new Error(data.message || 'Delete failed');
    }
  } catch (err) {
    console.error(err);
    message.error('Failed to delete order');
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

  const handleExportToExcel = () => {
    const csv = [
      ['Order ID,Email,Payment Status,Order Mode,Qty,Price,Order Status,Shipping Status,Created At'],
      ...orders.map(order => [
        order.id, order.email, order.paymentStatus, order.orderMode, order.qty, order.price,
        order.orderStatus, order.shippingStatus, order.createdAt
      ].join(','))
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order.csv';
    a.click();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Order</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Order List</h3>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addOrder')}
              >
                Add
              </Button>
              <Button
                type="primary"
                icon={<FileExcelOutlined />}
                onClick={handleExportToExcel}
                className="bg-green-500"
              >
                Excel
              </Button>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Search:</span>
              <Input
                type="text"
                placeholder="Search"
                className="border p-1 rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mb-4 gap-4">
          <div className="flex items-center">
            <span className="mr-2">Show</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="border p-1 rounded"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="ml-2">entries</span>
          </div>
        </div>
        <Table
          columns={orderColumns}
          dataSource={orders}
          rowKey="id"
          pagination={{ pageSize }}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default OrderList;