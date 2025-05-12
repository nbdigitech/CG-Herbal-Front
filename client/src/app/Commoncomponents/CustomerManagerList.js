import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const CustomerManagerList = ({ customers, setCustomers, setSelectedCustomer, setSelectedMenu, customerForm, pageSize, setPageSize }) => {
  console.log("Rendering Customer Manager Page");
  const customerColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },
    { title: 'DOB', dataIndex: 'dob', key: 'dob' },
    { title: 'Status', dataIndex: 'status', key: 'status', width: 100 },
    { title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedCustomer(record);
              setSelectedMenu('editCustomer');
              customerForm.setFieldsValue({
                name: record.name,
                email: record.email,
                mobile: record.mobile,
                gender: record.gender,
                dob: record.dob,
                status: record.status,
                shippingAddress: record.shippingAddress,
                address: record.address,
              });
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this customer?"
            onConfirm={() => {
              setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== record.id));
              message.success('Customer deleted successfully');
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
      <h2 className="text-2xl font-semibold mb-4">Customer</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Customer List</h3>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addCustomer')}
              >
                Add
              </Button>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Search:</span>
              <input
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
          columns={customerColumns}
          dataSource={customers}
          rowKey="id"
          pagination={{ pageSize }}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
        <div className="mt-4">
          <span>Showing 1 to {Math.min(pageSize, customers.length)} of {customers.length} entries</span>
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default CustomerManagerList;