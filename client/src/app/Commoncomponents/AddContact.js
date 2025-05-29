import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const AddContact = ({ setSelectedMenu }) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/create`, values);
      message.success("Contact created successfully");
      setSelectedMenu("Contact"); // go back to list
    } catch (err) {
      console.error("Create Contact failed:", err);
      message.error("Failed to create contact");
    }
  };

  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Contact</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Contact')}>Back to List</Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item label="First Name" name="first_name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="last_name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Subject" name="subject" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddContact;
