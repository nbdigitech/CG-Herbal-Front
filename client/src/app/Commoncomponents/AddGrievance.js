
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import axios from 'axios';
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
          onFinish={async (values) => {
            try {
              await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/grievance_category/create`, {
                name: values.name,
                status: values.status ? true : false,
              });

              message.success('Grievance category created successfully');
              setSelectedMenu('grievanceCategory');
            } catch (error) {
              console.error("❌ Failed to create grievance category:", error);
              message.error('Failed to create grievance category');
            }
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