import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useEffect } from 'react';

const EditWeightUnit = ({ weightUnitForm, selectedWeightUnit, weightUnits, setWeightUnits, setSelectedMenu }) => {
  useEffect(() => {
  if (selectedWeightUnit) {
    weightUnitForm.setFieldsValue({
      title: selectedWeightUnit.title,
      shippingAmount: selectedWeightUnit.shippingAmount,
    });
  }
}, [selectedWeightUnit, weightUnitForm]);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Weight</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Weight Unit')}>
          Weight List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={weightUnitForm}
          layout="vertical"
          initialValues={{
            title: selectedWeightUnit.title,
            shippingAmount: selectedWeightUnit.shippingAmount,
          }}
          onFinish={async (values) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/units/weight/update/${selectedWeightUnit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        weight_gram: values.title,
        shipping_amount: values.shippingAmount,
      }),
    });

    if (res.ok) {
      message.success('✅ Weight unit updated successfully!');
      setSelectedMenu('Weight Unit'); // Go back to list after update
    } else {
      const data = await res.json();
      message.error(`❌ Failed to update: ${data.message}`);
    }
  } catch (error) {
    console.error('Error updating weight unit:', error);
    message.error('❌ Failed to update weight unit');
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

export default EditWeightUnit;