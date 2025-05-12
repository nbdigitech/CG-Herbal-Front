import React from 'react';
import { Form, Input, Button, message } from 'antd';

const EditWeightUnit = ({ weightUnitForm, selectedWeightUnit, weightUnits, setWeightUnits, setSelectedMenu }) => {
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
          onFinish={(values) => {
            const updatedWeightUnits = weightUnits.map(weightUnit =>
              weightUnit.id === selectedWeightUnit.id
                ? {
                    ...weightUnit,
                    title: values.title,
                    shippingAmount: values.shippingAmount,
                  }
                : weightUnit
            );
            setWeightUnits(updatedWeightUnits);
            setSelectedMenu('Weight Unit');
            message.success('Weight unit updated successfully');
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