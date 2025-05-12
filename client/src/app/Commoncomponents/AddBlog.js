import React from 'react';
import { Button, Form, Input, Upload, DatePicker, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const AddBlog = ({ form, handleAddBlog, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Blog</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Blogs')}>
          Back List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddBlog}
        >
          <h3 className="text-lg font-semibold mb-2">SEO Details</h3>
          <Form.Item label="SEO Title" name="seoTitle">
            <Input />
          </Form.Item>
          <Form.Item label="SEO Description" name="seoDescription">
            <Input />
          </Form.Item>
          <Form.Item label="SEO Keywords" name="seoKeywords">
            <Input />
          </Form.Item>
          <Form.Item label="SEO Schema" name="seoSchema">
            <Input.TextArea />
          </Form.Item>
          <h3 className="text-lg font-semibold mb-2 mt-4">Blog Details</h3>
          <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Url Customize" name="urlCustomize">
            <Input />
          </Form.Item>
          <Form.Item label="Keyword" name="keyword">
            <Input />
          </Form.Item>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              { required: true, message: 'Please select a date' },
              {
                validator: (_, value) =>
                  value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('Please select a valid date'),
              },
            ]}
          >
            <DatePicker format="MM/DD/YYYY" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Status" name="status" valuePropName="checked" initialValue={true}>
            <Checkbox>Active</Checkbox>
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

export default AddBlog;