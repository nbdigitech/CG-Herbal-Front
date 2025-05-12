
import React from 'react';
import { Form, Input, Button, message } from 'antd';

const AddFAQ = ({ faqData, setFaqData, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New FAQ</h2>
        <Button type="primary" onClick={() => setSelectedMenu('faq')}>
          FAQ List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          layout="vertical"
          onFinish={(values) => {
            const newFAQ = {
              id: faqData.length + 1, // नया ID
              question: values.question,
              answer: values.answer,
            };
            setFaqData([...faqData, newFAQ]); // FAQ लिस्ट में नया FAQ जोड़ें
            message.success('FAQ added successfully');
            setSelectedMenu('faq');
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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddFAQ;