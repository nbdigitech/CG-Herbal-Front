
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

const AddGrievance = ({ grievanceData, setGrievanceData, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Grievance</h2>
        <Button type="primary" onClick={() => setSelectedMenu('grievanceCategory')}>
          Grievance List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          layout="vertical"
          onFinish={(values) => {
            const newGrievance = {
              id: grievanceData.length + 1, // नया ID
              name: values.name,
              status: values.status ? "Active" : "Inactive",
            };
            setGrievanceData([...grievanceData, newGrievance]); // Grievance लिस्ट में नया Grievance जोड़ें
            message.success('Grievance category added successfully');
            setSelectedMenu('grievanceCategory');
          }}
        >
          <Form.Item
            label="NAME"
            name="name"
            rules={[{ required: true, message: 'Please enter the name' }]}
          >
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            label="STATUS"
            name="status"
            valuePropName="checked"
          >
            <Checkbox defaultChecked>Active</Checkbox>
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

export default AddGrievance;