import React from 'react';
import { Form, Input, Button, message } from 'antd';

const EditServiceProvider = ({ serviceProviderForm, selectedServiceProvider, serviceProviders, setServiceProviders, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Service Provider</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Service Provider')}>
          Service Provider List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={serviceProviderForm}
          layout="vertical"
          initialValues={{ name: selectedServiceProvider.name }}
          onFinish={async (values) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/service-provider/update/${selectedServiceProvider.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: values.name }),
    });

    const data = await res.json();
    if (res.ok) {
      setServiceProviders(prev =>
        prev.map(provider =>
          provider.id === selectedServiceProvider.id
            ? { ...provider, name: values.name }
            : provider
        )
      );
      message.success('Service provider updated successfully');
      setSelectedMenu('Service Provider');
      serviceProviderForm.resetFields();
    } else {
      throw new Error(data.message || 'Failed to update');
    }
  } catch (err) {
    console.error(err);
    message.error('Error updating service provider');
  }
}}

        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter service provider name' }]}
          >
            <Input placeholder="Enter Service Provider Name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default EditServiceProvider;