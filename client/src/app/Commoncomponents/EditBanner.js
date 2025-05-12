import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function EditBanner({ form, selectedBanner, handleUpdateBanner, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Banner</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Banner')}>
          Banner List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateBanner}
          initialValues={selectedBanner}
        >
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
              {selectedBanner.image && (
                <div className="mt-2">
                  <a href={selectedBanner.image} target="_blank" rel="noopener noreferrer">
                    {selectedBanner.image}
                  </a>
                </div>
              )}
            </div>
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
            <Input.TextArea rows={4} />
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