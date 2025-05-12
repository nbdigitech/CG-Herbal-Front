import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddHsncode = ({ hsncodeForm, hsncodes, setHsncodes, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Hsncode</h2>
        <Button type="primary" onClick={() => setSelectedMenu('HSNCODE Master')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={hsncodeForm}
          layout="vertical"
          onFinish={(values) => {
            const newHsncode = {
              id: hsncodes.length + 1,
              hsncode: values.hsncode,
              gstValue: values.gstValue,
            };
            setHsncodes(prevHsncodes => [...prevHsncodes, newHsncode]);
            setSelectedMenu('HSNCODE Master');
            hsncodeForm.resetFields();
            message.success('HSN code added successfully');
          }}
        >
          <Form.Item
            label="Hsncode"
            name="hsncode"
            rules={[{ required: true, message: 'Please enter HSN code' }]}
          >
            <Input placeholder="Enter HSN Code" />
          </Form.Item>
          <Form.Item
            label="GST Value"
            name="gstValue"
            rules={[{ required: true, message: 'Please enter GST value' }]}
          >
            <Input type="number" placeholder="Enter GST Value" />
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

export default AddHsncode;