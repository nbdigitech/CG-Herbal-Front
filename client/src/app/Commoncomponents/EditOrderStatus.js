import React from 'react';
import { Form, Input, Button, message } from 'antd';

const EditOrderStatus = ({ orderStatusForm, selectedOrderStatus, orderStatuses, setOrderStatuses, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Order Status</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Order Status')}>
          Order Status List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={orderStatusForm}
          layout="vertical"
          initialValues={{ name: selectedOrderStatus.name }}
          onFinish={(values) => {
            setOrderStatuses(prevStatuses =>
              prevStatuses.map(status =>
                status.id === selectedOrderStatus.id ? { ...status, name: values.name } : status
              )
            );
            setSelectedMenu('Order Status');
            orderStatusForm.resetFields();
            message.success('Order status updated successfully');
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

export default EditOrderStatus;