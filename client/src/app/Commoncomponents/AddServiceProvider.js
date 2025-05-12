import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddServiceProvider = ({ serviceProviderForm, serviceProviders, setServiceProviders, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Service Provider</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Service Provider')}>
          Service Provider List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={serviceProviderForm}
          layout="vertical"
          onFinish={(values) => {
            const newServiceProvider = {
              id: serviceProviders.length + 1,
              name: values.name,
            };
            setServiceProviders(prevProviders => [...prevProviders, newServiceProvider]);
            setSelectedMenu('Service Provider');
            serviceProviderForm.resetFields();
            message.success('Service provider added successfully');
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
              Submit
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

export default AddServiceProvider;