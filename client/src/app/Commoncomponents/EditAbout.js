import React from 'react';
import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const EditAbout = ({ form, selectedAbout, handleUpdateAbout, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit About</h2>
        <Button type="primary" onClick={() => setSelectedMenu('About')}>
          Back List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateAbout}
          initialValues={selectedAbout}
        >
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: 'Please upload an image' }]}
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              fileList={selectedAbout.image ? [{ uid: '-1', name: selectedAbout.image, status: 'done' }] : []}
            >
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea />
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

export default EditAbout;