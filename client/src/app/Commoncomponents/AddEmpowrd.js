import { Button, Form, Input, Upload, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function AddEmpowrd({ form, handleAddEmpowrd, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Empowerd</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Empowerd')}>
          Empowerd List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddEmpowrd}
        >
          <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
          <Form.Item
            label="SEO Title"
            name="seoTitle"
            rules={[{ required: true, message: 'Please enter the SEO title' }]}
          >
            <Input placeholder="Enter SEO Title (max 60 characters)" maxLength={60} />
          </Form.Item>
          <Form.Item
            label="SEO Description"
            name="seoDescription"
            rules={[{ required: true, message: 'Please enter the SEO description' }]}
          >
            <Input.TextArea rows={2} placeholder="Enter SEO Description (max 160 characters)" maxLength={160} />
          </Form.Item>
          <Form.Item
            label="SEO Keywords"
            name="seoKeywords"
            rules={[{ required: true, message: 'Please enter SEO keywords' }]}
          >
            <Input placeholder="Enter SEO Keywords (comma separated)" />
          </Form.Item>
          <Form.Item
            label="SEO Schema"
            name="seoSchema"
          >
            <Input.TextArea rows={4} placeholder="Enter SEO Schema (JSON-LD format)" />
          </Form.Item>

          <h3 className="text-lg font-semibold mb-4 mt-6">Details</h3>
          <Form.Item
            label="Image"
            name="image"
            rules={[{ required: true, message: 'Please upload an image' }]}
          >
            <div>
              <Upload
                beforeUpload={() => false}
                onChange={(info) => {
                  if (info.fileList.length > 0) {
                    form.setFieldsValue({ image: info.fileList[0].originFileObj });
                  }
                }}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
              <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
            </div>
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>
          <Form.Item
            label="Sub Title"
            name="subTitle"
            rules={[{ required: true, message: 'Please enter the subtitle' }]}
          >
            <Input placeholder="Enter Sub Title" />
          </Form.Item>
          <Form.Item
            label="Keyword"
            name="keyword"
            rules={[{ required: true, message: 'Please enter the keyword' }]}
          >
            <Input placeholder="Enter Keyword" />
          </Form.Item>
          <Form.Item
            label="Url Customize"
            name="urlCustomize"
            rules={[{ required: true, message: 'Please enter the URL customize' }]}
          >
            <Input placeholder="Enter URL Customize" />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please enter the content' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter Content" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter the description' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter Description" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please enter the date' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please select the status' }]}
            initialValue="Active"
          >
            <Select placeholder="Select Status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
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
}