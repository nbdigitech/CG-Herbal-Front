import React from 'react';
import { Form, Input, Select, Button, Upload, Checkbox, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Option } = Select;

const EditSubCategory = ({ categoryForm, selectedSubCategory, subCategories, setSubCategories, categories, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Sub Category</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Sub Category')}>
          Sub Category List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={categoryForm}
          layout="vertical"
          initialValues={{
            category: selectedSubCategory.category,
            name: selectedSubCategory.name,
            status: selectedSubCategory.status === 'Active',
            image: undefined,
          }}
          onFinish={async (values) => {
  const formData = new FormData();
  formData.append("category", values.category); // category ID
  formData.append("category_name", values.name);
  formData.append("status", values.status); // boolean
  if (values.image?.[0]?.originFileObj) {
    formData.append("images", values.image[0].originFileObj);
  }

  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/category/sub-category/update/${selectedSubCategory.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    message.success("Sub Category updated successfully");
    setSelectedMenu("Sub Category");
  } catch (err) {
    console.error("Update Sub Category failed:", err);
    message.error("Failed to update sub category");
  }
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
          <Form.Item label="Status" name="status" valuePropName="checked">
            <Checkbox>Active</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Category
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

export default EditSubCategory;