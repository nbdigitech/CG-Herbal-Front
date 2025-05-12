import React from 'react';
import { Form, Input, Button, message, Select } from 'antd';

const { Option } = Select;

const EditCustomer = ({ customerForm, selectedCustomer, customers, setCustomers, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Customer</h2>
        <Button type="primary" onClick={() => setSelectedMenu('customerManager')}>
          Customer List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={customerForm}
          layout="vertical"
          initialValues={{
            name: selectedCustomer.name,
            email: selectedCustomer.email,
            mobile: selectedCustomer.mobile,
            gender: selectedCustomer.gender,
            dob: selectedCustomer.dob,
            status: selectedCustomer.status,
            shippingAddress: selectedCustomer.shippingAddress,
            address: selectedCustomer.address,
          }}
          onFinish={(values) => {
            setCustomers(prevCustomers =>
              prevCustomers.map(customer =>
                customer.id === selectedCustomer.id
                  ? {
                      ...customer,
                      name: values.name,
                      email: values.email,
                      mobile: values.mobile,
                      gender: values.gender,
                      dob: values.dob,
                      status: values.status,
                      shippingAddress: values.shippingAddress,
                      address: values.address,
                    }
                  : customer
              )
            );
            setSelectedMenu('customerManager');
            customerForm.resetFields();
            message.success('Customer updated successfully');
          }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter full name' }]}
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please enter email address' }]}
          >
            <Input placeholder="Enter Email Address" />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: 'Please enter mobile number' }]}
          >
            <Input placeholder="Enter Mobile Number" />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please select gender' }]}
          >
            <Select placeholder="Select Gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: 'Please enter date of birth' }]}
          >
            <Input placeholder="mm/dd/yyyy" />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select Status">
              <Option value="ON">Active</Option>
              <Option value="OFF">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Shipping Address"
            name="shippingAddress"
          >
            <Input.TextArea placeholder="Enter Shipping Address" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
          >
            <Input.TextArea placeholder="Enter Address" />
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

export default EditCustomer;