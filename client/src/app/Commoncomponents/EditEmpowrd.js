import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function EditEmpowrd({ form, selectedEmpowrd, handleUpdateEmpowrd, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Empowerd</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Empowerd')}>
          Empowerd List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateEmpowrd}
          initialValues={selectedEmpowrd}
        >
          <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
          <Form.Item
            label="SEO Title"
            name="seoTitle"
            rules={[{ required: true, message: 'Please enter the SEO title' }]}
          >
            <Input maxLength={60} />
          </Form.Item>
          <Form.Item
            label="SEO Description"
            name="seoDescription"
            rules={[{ required: true, message: 'Please enter the SEO description' }]}
          >
            <Input.TextArea rows={2} maxLength={160} />
          </Form.Item>
          <Form.Item
            label="SEO Keywords"
            name="seoKeywords"
            rules={[{ required: true, message: 'Please enter SEO keywords' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="SEO Schema"
            name="seoSchema"
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <h3 className="text-lg font-semibold mb-4 mt-6">Blog Details</h3>
          <Form.Item
            label="Blog Title"
            name="blogTitle"
            rules={[{ required: true, message: 'Please enter the blog title' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Blog Content"
            name="blogContent"
            rules={[{ required: true, message: 'Please enter the blog content' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Blog Description"
            name="blogDescription"
            rules={[{ required: true, message: 'Please enter the blog description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Blog Date"
            name="blogDate"
            rules={[{ required: true, message: 'Please enter the blog date' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            label="Blog Image"
            name="blogImage"
            rules={[{ required: true, message: 'Please upload a blog image' }]}
          >
            <div>
              <Upload
                beforeUpload={() => false}
                onChange={(info) => {
                  if (info.fileList.length > 0) {
                    form.setFieldsValue({ blogImage: info.fileList[0].originFileObj });
                  }
                }}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
              {selectedEmpowrd.blogImage && (
                <div className="mt-2">
                  <a href={selectedEmpowrd.blogImage} target="_blank" rel="noopener noreferrer">
                    {selectedEmpowrd.blogImage}
                  </a>
                </div>
              )}
            </div>
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
}