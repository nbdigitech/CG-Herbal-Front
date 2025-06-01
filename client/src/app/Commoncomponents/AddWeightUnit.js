import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddWeightUnit = ({ weightUnitForm, weightUnits, setWeightUnits, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Weight</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Weight Unit')}>
          Weight List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
  form={weightUnitForm}
  layout="vertical"
  onFinish={async (values) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/units/weight/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weight_gram: values.title,
          shipping_amount: values.shippingAmount,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        message.success('Weight unit added successfully');
        setSelectedMenu('Weight Unit');  // Go back to list
        weightUnitForm.resetFields();
      } else {
        message.error(data.message || 'Failed to add weight unit');
      }
    } catch (error) {
      console.error('Error creating weight unit:', error);
      message.error('Error adding weight unit');
    }
  }}
>

          <Form.Item
            label="Weight"
            name="title"
            rules={[{ required: true, message: 'Please enter weight' }]}
          >
            <Input placeholder="Enter Weight" />
          </Form.Item>
          <Form.Item
            label="Shipping Charge"
            name="shippingAmount"
            rules={[{ required: true, message: 'Please enter shipping amount' }]}
          >
            <Input type="number" placeholder="Enter Shipping Amount" />
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

export default AddWeightUnit;