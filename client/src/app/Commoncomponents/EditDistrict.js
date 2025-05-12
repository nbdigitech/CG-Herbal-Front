import React from 'react';
import { Button, Form, Input } from 'antd';

const EditDistrict = ({ form, handleUpdateDistrict, selectedDistrict, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit District</h2>
        <Button type="primary" onClick={() => setSelectedMenu('District')}>
          District List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateDistrict}
          initialValues={selectedDistrict}
        >
          <Form.Item
            label="District"
            name="name"
            rules={[{ required: true, message: 'Please enter the district name' }]}
          >
            <Input />
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

export default EditDistrict;