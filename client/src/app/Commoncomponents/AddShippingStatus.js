import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddShippingStatus = ({ shippingStatusForm, shippingStatuses, setShippingStatuses, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Shipping Status</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Shipping Status')}>
          Shipping Status List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={shippingStatusForm}
          layout="vertical"
          onFinish={(values) => {
            const newShippingStatus = {
              id: shippingStatuses.length + 1,
              name: values.name,
            };
            setShippingStatuses(prevStatuses => [...prevStatuses, newShippingStatus]);
            setSelectedMenu('Shipping Status');
            shippingStatusForm.resetFields();
            message.success('Shipping status added successfully');
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter shipping status name' }]}
          >
            <Input placeholder="Enter Shipping Status Name" />
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

export default AddShippingStatus;