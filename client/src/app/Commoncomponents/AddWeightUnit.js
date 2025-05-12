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
          onFinish={(values) => {
            const newWeightUnit = {
              id: weightUnits.length + 1,
              title: values.title,
              shippingAmount: values.shippingAmount,
            };
            setWeightUnits(prevWeightUnits => [...prevWeightUnits, newWeightUnit]);
            setSelectedMenu('Weight Unit');
            weightUnitForm.resetFields();
            message.success('Weight unit added successfully');
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