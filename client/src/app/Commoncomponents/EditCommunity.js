import { Button, Form, Upload, Select, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function EditCommunity({ form, selectedCommunity, productOptions, handleUpdateCommunity, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Community</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Community')}>
          Community List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateCommunity}
          initialValues={{
            name: selectedCommunity.name,
          }}
        >
          <Form.Item
            label="Image *"
            name="image"
            rules={[{ required: true, message: 'Please upload an image' }]}
          >
            <div>
              <Upload
                beforeUpload={() => false}
                onChange={(info) => {
                  if (info.fileList.length > 0) {
                    const file = info.fileList[0].originFileObj;
                    const maxSize = 1.5 * 1024 * 1024; // 1.5 MB in bytes
                    if (file.size > maxSize) {
                      message.error('Image size must be less than 1.5 MB');
                      return;
                    }
                    form.setFieldsValue({ image: file });
                  }
                }}
                fileList={
                  selectedCommunity.image && !form.getFieldValue('image')
                    ? [
                        {
                          uid: '-1',
                          name: 'Current Image',
                          status: 'done',
                          url: selectedCommunity.image,
                        },
                      ]
                    : undefined
                }
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
              <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
              {selectedCommunity.image && !form.getFieldValue('image') && (
                <div className="mt-2">
                  <a href={selectedCommunity.image} target="_blank" rel="noopener noreferrer">
                    Current Image
                  </a>
                </div>
              )}
            </div>
          </Form.Item>
          <Form.Item
            label="Select Product *"
            name="name"
            rules={[{ required: true, message: 'Please select a product' }]}
          >
            <Select placeholder="--Select Product--">
              {productOptions.map((product) => (
                <Option key={product.id} value={product.name}>{product.name}</Option>
              ))}
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