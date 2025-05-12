import React from 'react';
import { Form, Input, Select, Button, Upload, Checkbox, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddSubCategory = ({ categoryForm, subCategories, setSubCategories, categories, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Sub Category</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Sub Category')}>
          Sub Category List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={categoryForm}
          layout="vertical"
          onFinish={(values) => {
            const newSubCategory = {
              id: subCategories.length + 1,
              category: values.category,
              name: values.name,
              status: values.status ? 'Active' : 'Inactive',
              image: values.image?.file ? URL.createObjectURL(values.image.file) : '/placeholder.jpg',
            };
            setSubCategories(prevSubCategories => [...prevSubCategories, newSubCategory]);
            setSelectedMenu('Sub Category');
            categoryForm.resetFields();
            message.success('Sub Category added successfully');
          }}
        >
          <Form.Item
            label="Select Category"
            name="category"
            rules={[{ required: true, message: 'Please select a category' }]}
          >
            <Select placeholder="Select Category">
              {categories.map(category => (
                <Option key={category.id} value={category.name}>{category.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Sub Category Name"
            name="name"
            rules={[{ required: true, message: 'Please enter sub category name' }]}
          >
            <Input placeholder="Enter Sub Category Name" />
          </Form.Item>
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
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
            <p>Image size must be less than 1.5 MB</p>
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

export default AddSubCategory;