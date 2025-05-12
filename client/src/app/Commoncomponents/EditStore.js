import React from 'react';
import { Button, Form, Input } from 'antd';

const EditStore = ({ form, selectedStore, handleUpdateStore, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Store</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Store')}>
          Store List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateStore}
          initialValues={selectedStore}
        >
          <Form.Item
            label="Store Name"
            name="name"
            rules={[{ required: true, message: 'Please enter the store name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Map URL"
            name="mapUrl"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Store Locator"
            name="storeLocator"
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

export default EditStore;