import React from 'react';
import { Table } from 'antd';

const PaymentList = ({ payments }) => {
  console.log("Rendering Payment List Page");
  const paymentColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'USER', dataIndex: 'user', key: 'user' },
    { title: 'PAYMENT ID', dataIndex: 'paymentId', key: 'paymentId' },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
      width: 100,
      render: (amount) => (amount !== undefined && amount !== null ? amount : 'N/A'),
    },
    { title: 'PRODUCT', dataIndex: 'product', key: 'product' },
    { title: 'CREATED AT', dataIndex: 'createdAt', key: 'createdAt' },
  ];

  const paymentData = [ ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Payment</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Payment List</h3>
          <div className="flex items-center">
            <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 px-3 py-1 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-r-md">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="full"
                    strokeLinejoin="full"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
                </svg>
            </button>
            </div>
        </div>
        <Table
          columns={paymentColumns}
          dataSource={payments}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
    </div>
  );
};

export default PaymentList;