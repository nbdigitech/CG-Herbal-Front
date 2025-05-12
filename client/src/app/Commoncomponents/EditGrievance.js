
import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

const EditGrievance = ({ grievance, grievanceData, setGrievanceData, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Grievance</h2>
        <Button type="primary" onClick={() => setSelectedMenu('grievanceCategory')}>
          Grievance List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          layout="vertical"
          initialValues={{
            name: grievance?.name,
            status: grievance?.status === "Active",
          }}
          onFinish={(values) => {
            setGrievanceData(grievanceData.map(item =>
              item.id === grievance.id ? { ...item, name: values.name, status: values.status ? "Active" : "Inactive" } : item
            ));
            message.success('Grievance category updated successfully');
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
            <Checkbox>Active</Checkbox>
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

export default EditGrievance;