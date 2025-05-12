import React from 'react';
import { Button, Form, Input, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const EditNews = ({ form, selectedNews, handleUpdateNews, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit News</h2>
        <Button type="primary" onClick={() => setSelectedMenu('News')}>
          Back List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateNews}
          initialValues={{ ...selectedNews, date: dayjs(selectedNews.date, 'YYYY-MM-DD') }}
        >
          <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
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
          <h3 className="text-lg font-semibold mb-4">News Details</h3>
          <Form.Item label="Title" name="title" rules={[{ required: true, message: 'कृपया शीर्षक दर्ज करें' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Content" name="content" rules={[{ required: true, message: 'कृपया सामग्री दर्ज करें' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'कृपया विवरण दर्ज करें' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              { required: true, message: 'कृपया तारीख दर्ज करें' },
              {
                validator: (_, value) =>
                  value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('कृपया एक मान्य तारीख चुनें'),
              },
            ]}
          >
            <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Image" name="image" rules={[{ required: true, message: 'कृपया छवि अपलोड करें' }]}>
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              fileList={selectedNews.image ? [{ uid: '-1', name: selectedNews.image, status: 'done' }] : []}
            >
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
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

export default EditNews;