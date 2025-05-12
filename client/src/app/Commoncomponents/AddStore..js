import React from 'react';
import { Button, Form, Input } from 'antd';

const AddStore = ({ form, handleAddStore, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Store</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Store')}>
          Store List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddStore}
        >
          <Form.Item
            label="Store Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the store name' }]}
          >
            <Input placeholder="Enter Store Name" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
          >
            <Input placeholder="Enter Address" />
          </Form.Item>
          <Form.Item
            label="Map URL"
            name="mapUrl"
          >
            <Input placeholder="Enter Map URL" />
          </Form.Item>
          <Form.Item
            label="Store Locator"
            name="storeLocator"
          >
            <Input placeholder="Enter Store Locator" />
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

export default AddStore;