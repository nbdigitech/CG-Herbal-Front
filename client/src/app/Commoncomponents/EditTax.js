import React from 'react';
import { Form, Input, Button, Radio, message } from 'antd';

const EditTax = ({ taxForm, selectedTax, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Tax</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Tax Manager')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={taxForm}
          layout="vertical"
          onFinish={async (values) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/units/tax/update/${selectedTax.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (res.ok) {
      message.success('Tax updated successfully');
      setSelectedMenu('Tax Manager');
    } else {
      throw new Error(data.message || 'Update failed');
    }
  } catch (error) {
    console.error(error);
    message.error('Failed to update tax');
  }
}}

        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter tax name' }]}
          >
            <Input placeholder="Enter Tax Name" />
          </Form.Item>
          <Form.Item
            label="Value (%)"
            name="value"
            rules={[{ required: true, message: 'Please enter tax value' }]}
          >
            <Input type="number" placeholder="Enter Tax Value" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            initialValue="Active"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Radio.Group>
              <Radio value="Active">Active</Radio>
              <Radio value="Inactive">Inactive</Radio>
            </Radio.Group>
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

export default EditTax;