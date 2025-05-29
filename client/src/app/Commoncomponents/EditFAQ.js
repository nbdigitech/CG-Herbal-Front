
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const EditFAQ = ({ faq, faqData, setFaqData, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit FAQ</h2>
        <Button type="primary" onClick={() => setSelectedMenu('faq')}>
          FAQ List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
  layout="vertical"
  initialValues={{
    question: faq?.question,
    answer: faq?.answer,
  }}
  onFinish={async (values) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/faq/${faq.id}`, {
        question: values.question,
        answer: values.answer,
      });
      message.success('FAQ updated successfully');
      setSelectedMenu('faq'); // Navigate back
    } catch (error) {
      console.error("Failed to update FAQ", error);
      message.error('Failed to update FAQ');
    }
  }}
>
          <Form.Item
            label="QUESTION"
            name="question"
            rules={[{ required: true, message: 'Please enter the question' }]}
          >
            <Input placeholder="Enter question" />
          </Form.Item>
          <Form.Item
            label="ANSWER"
            name="answer"
            rules={[{ required: true, message: 'Please enter the answer' }]}
          >
            <Input.TextArea rows={4} placeholder="Enter answer" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditFAQ;