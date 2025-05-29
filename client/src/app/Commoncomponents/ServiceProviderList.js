import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const ServiceProviderList = ({ serviceProviders, setServiceProviders, setSelectedServiceProvider, setSelectedMenu, serviceProviderForm }) => {
  const serviceProviderColumns = [
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
              setSelectedServiceProvider(record);
              setSelectedMenu('editServiceProvider');
              serviceProviderForm.setFieldsValue({ name: record.name });
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this service provider?"
            onConfirm={async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/service-provider/${record.id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      setServiceProviders(prev => prev.filter(provider => provider.id !== record.id));
      message.success('Service provider deleted successfully');
    } else {
      const data = await res.json();
      throw new Error(data.message || 'Delete failed');
    }
  } catch (err) {
    console.error(err);
    message.error('Error deleting service provider');
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
      <h2 className="text-2xl font-semibold mb-4">Service Provider</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Service Provider List</h3>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setSelectedMenu('addServiceProvider')}
          >
            Add
          </Button>
        </div>
        <Table
          columns={serviceProviderColumns}
          dataSource={serviceProviders}
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

export default ServiceProviderList;