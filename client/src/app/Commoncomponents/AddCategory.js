import React from 'react';
import { Form, Input, Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddCategory = ({ categoryForm, categories, setCategories, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Category</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Category')}>
          Category List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={categoryForm}
          layout="vertical"
          onFinish={(values) => {
            const newCategory = {
              id: categories.length + 1,
              image: values.image?.file ? URL.createObjectURL(values.image.file) : '/placeholder.jpg',
              name: values.name,
              status: values.status || 'Active',
            };
            setCategories(prevCategories => [...prevCategories, newCategory]);
            setSelectedMenu('Category');
            categoryForm.resetFields();
            message.success('Category added successfully');
          }}
        >
          <Form.Item 
            label="Image" 
            name="image" 
            valuePropName="fileList" 
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload
              beforeUpload={() => false}
              listType="picture"
              maxCount={1}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item 
            label="Category Name" 
            name="name" 
            rules={[{ required: true, message: 'Please enter category name' }]}
          >
            <Input placeholder="Enter Category Name" />
          </Form.Item>
          <Form.Item label="Status" name="status" initialValue="Active">
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Category
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

export default AddCategory;