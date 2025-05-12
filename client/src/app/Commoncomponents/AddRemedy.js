import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

const AddRemedy = ({ categoryForm, remedies, setRemedies, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Remedy</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Remedy')}>
          Remedy List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={categoryForm}
          layout="vertical"
          onFinish={(values) => {
            const newRemedy = {
              id: remedies.length + 1,
              name: values.name,
              status: values.status ? 'Active' : 'Inactive',
            };
            setRemedies(prevRemedies => [...prevRemedies, newRemedy]);
            setSelectedMenu('Remedy');
            categoryForm.resetFields();
            message.success('Remedy added successfully');
          }}
        >
          <Form.Item
            label="Remedy Name"
            name="name"
            rules={[{ required: true, message: 'Please enter remedy name' }]}
          >
            <Input placeholder="Enter Remedy Name" />
          </Form.Item>
          <Form.Item label="Status" name="status" valuePropName="checked" initialValue={true}>
            <Checkbox>Active</Checkbox>
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

export default AddRemedy;