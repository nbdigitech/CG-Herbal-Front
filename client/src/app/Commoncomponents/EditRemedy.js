import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';

const EditRemedy = ({ categoryForm, selectedRemedy, remedies, setRemedies, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Remedy</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Remedy')}>
          Remedy List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={categoryForm}
          layout="vertical"
          initialValues={{
            name: selectedRemedy.name,
            status: selectedRemedy.status === 'Active',
          }}
          onFinish={async (values) => {
  try {
    const payload = {
      remedy_name: values.name,
      status: values.status,
    };

    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/remedy/update/${selectedRemedy.id}`, payload);

    const updated = remedies.map(remedy =>
      remedy.id === selectedRemedy.id
        ? { ...remedy, name: values.name, status: values.status ? 'Active' : 'Inactive' }
        : remedy
    );

    setRemedies(updated);
    setSelectedMenu('Remedy');
    message.success('Remedy updated successfully');
  } catch (err) {
    console.error(err);
    message.error('Failed to update remedy');
  }
}}
        >
          <Form.Item
            label="Remedy Name"
            name="name"
            rules={[{ required: true, message: 'Please enter remedy name' }]}
          >
            <Input placeholder="Enter Remedy Name" />
          </Form.Item>
          <Form.Item label="Status" name="status" valuePropName="checked">
            <Checkbox>Active</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Remedy
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

export default EditRemedy;