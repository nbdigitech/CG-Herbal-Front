import React from 'react';
import { Table } from 'antd';

const PaymentList = () => {
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

  const paymentData = [
    {
      id: 1,
      user: 'sohinghosh3108@gmail.com',
      paymentId: '65446252721c0e3417288b',
      amount: 972,
      product: '1. Organic Wild Forest Honey\n2. Face Pack Powder\n3. Amla Pachak (Pack of Four)',
      createdAt: '11/3/2023, 8:30:34 AM',
    },
    {
      id: 2,
      user: 'kulhadebittu@gmail.com',
      paymentId: '6537eba5721c0e34164df4',
      amount: 829,
      product: '1. Face Pack Powder\n2. Organic Wild Forest Honey\n3. Amla Pachak (Pack of Four)',
      createdAt: '10/24/2023, 9:37:01 PM',
    },
    {
      id: 3,
      user: 'kulhadebittu@gmail.com',
      paymentId: '6537ebb721c0e34164df85',
      amount: 829,
      product: '1. Face Pack Powder\n2. Organic Wild Forest Honey\n3. Amla Pachak (Pack of Four)',
      createdAt: '10/24/2023, 9:36:31 PM',
    },
    {
      id: 4,
      user: 'sheshagiri.v1@gmail.com',
      paymentId: '6530d59721c0e3415c8eb',
      amount: 2227,
      product: '1. Organic Wild Forest Honey\n2. CTC Tea',
      createdAt: '10/19/2023, 12:37:04 PM',
    },
    {
      id: 5,
      user: 'gaurang.mathur95@gmail.com',
      paymentId: '652ed08721c0e3415b61b2',
      amount: 330,
      product: '1. Triphala Churna',
      createdAt: '10/17/2023, 11:52:16 PM',
    },
    {
      id: 6,
      user: 'amitupadhyay1987@gmail.com',
      paymentId: '652be97221c0e3415859e',
      amount: 684,
      product: '1. Wild Forest Honey',
      createdAt: '10/15/2023, 7:32:17 PM',
    },
    {
      id: 7,
      user: 'bhuwnesh.shrivastava@gmail.com',
      paymentId: '652bd72821c0e341507dab',
      amount: 11,
      product: '1. Lemon Soap',
      createdAt: '10/13/2023, 11:05:38 AM',
    },
    {
      id: 8,
      user: 'akm249@yahoo.com',
      paymentId: '652b375021c0e341491e84',
      amount: 295,
      product: '1. Ashwagandha Churna\n2. Madhumeh Nashak Churna',
      createdAt: '10/11/2023, 3:35:06 PM',
    },
    {
      id: 9,
      user: 'dilipukpwade@gmail.com',
      paymentId: '652b026b721c0e3414596fc',
      amount: 684,
      product: '1. Organic Wild Forest Honey',
      createdAt: '10/11/2023, 7:33:23 AM',
    },
    {
      id: 10,
      user: 'dilipukpwade@gmail.com',
      paymentId: '652b0269721c0e341459668',
      amount: 684,
      product: '1. Organic Wild Forest Honey',
      createdAt: '10/11/2023, 7:33:21 AM',
    },
    {
      id: 11,
      user: 'bd.anikpatpal@gmail.com',
      paymentId: '65237703721c0e341451d5b',
      amount: 655.2,
      product: '1. Aloevera Soothing Gel\n2. Aloevera Shampoo',
      createdAt: '10/10/2023, 9:38:35 PM',
    },
    {
      id: 12,
      user: 'harishkumarcam@gmail.com',
      paymentId: '652415e5721c0e3414b0f5',
      amount: 684,
      product: '1. Wild Forest Honey',
      createdAt: '10/9/2023, 8:31:57 PM',
    },
    {
      id: 13,
      user: 'sohinghosh3108@gmail.com',
      paymentId: '652123d4721c0e3413730d4',
      amount: 684,
      product: '1. Organic Wild Forest Honey',
      createdAt: '10/7/2023, 2:52:21 PM',
    },
    {
      id: 14,
      user: 'bvrao.hpcl@gmail.com',
      paymentId: '65211489721c0e341369b8a',
      amount: 684,
      product: '1. Organic Wild Forest Honey',
      createdAt: '10/7/2023, 1:49:21 PM',
    },
  ];

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
          dataSource={paymentData}
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