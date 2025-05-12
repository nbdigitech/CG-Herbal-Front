import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddOrderStatus = ({ orderStatusForm, orderStatuses, setOrderStatuses, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Order Status</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Order Status')}>
          Order Status List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={orderStatusForm}
          layout="vertical"
          onFinish={(values) => {
            const newOrderStatus = {
              id: orderStatuses.length + 1,
              name: values.name,
            };
            setOrderStatuses(prevStatuses => [...prevStatuses, newOrderStatus]);
            setSelectedMenu('Order Status');
            orderStatusForm.resetFields();
            message.success('Order status added successfully');
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter order status name' }]}
          >
            <Input placeholder="Enter Order Status Name" />
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

export default AddOrderStatus;