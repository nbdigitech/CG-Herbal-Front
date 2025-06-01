import { Modal, Form, Input, Button, Select, message, Switch } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const { Option } = Select;

export default function AddUserModal({ visible, onClose, refreshUsers, initialValues }) {

  const [form] = Form.useForm();
  const [roles, setRoles] = useState([]);
  const [districts, setDistricts] = useState([]);

useEffect(() => {
  if (visible) {
    fetchRoles();
    fetchDistricts();
    if (initialValues) {
      form.setFieldsValue(initialValues);  // <-- set default values for Edit
    } else {
      form.resetFields();  // If no initialValues, reset for Add
    }
  }
}, [visible, initialValues]);


  const fetchRoles = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/permission/list`);
      const data = res.data.data || [];
      setRoles(data.map(role => ({
        id: role._id,
        name: role.role_name
      })));
    } catch (err) {
      console.error("Failed to fetch roles", err);
      message.error('Failed to load roles');
    }
  };

  const fetchDistricts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/district/list`);
      const data = res.data.data || [];
      setDistricts(data.map(dist => ({
        id: dist._id,
        name: dist.district
      })));
    } catch (err) {
      console.error("Failed to fetch districts", err);
      message.error('Failed to load districts');
    }
  };

 const handleSubmit = async (values) => {
  try {
    if (initialValues && initialValues.id) {
      // Edit Mode
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/update/${initialValues.id}`, {
        name: values.name,
        email: values.email,
        password: values.password,  // You might skip password on edit?
        role: values.role,
        district: values.district,
        block: values.block || '',
        village: values.village || '',
        disable: !values.status,
      });
      message.success('Admin updated successfully');
      form.resetFields();
refreshUsers();     // <--- first refresh list
onClose()
    } else {
      // Create Mode
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/signup`, {
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
        district: values.district,
        block: values.block || '',
        village: values.village || '',
        disable: !values.status,
      });
      message.success('Admin created successfully');
    }
    form.resetFields();
    onClose();
    refreshUsers();
  } catch (err) {
    console.error('Failed to submit admin', err);
    message.error('Failed to submit admin');
  }
};


  return (
    <Modal
      title="Add New Admin"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form
  form={form}
  layout="vertical"
  onFinish={handleSubmit}
>
  <Form.Item
    label="Full Name"
    name="name"  
    rules={[{ required: true, message: 'Please enter full name' }]}
  >
    <Input placeholder="Enter full name" />
  </Form.Item>

  <Form.Item
    label="Email"
    name="email"
    rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
  >
    <Input placeholder="Enter email" />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[{ required: true, message: 'Please enter password' }]}
  >
    <Input.Password placeholder="Enter password" />
  </Form.Item>

  <Form.Item
    label="Role"
    name="role"
    rules={[{ required: true, message: 'Please select role' }]}
  >
    <Select placeholder="Select role">
      {roles.map(role => (
        <Option key={role.id} value={role.name}>{role.name}</Option>
      ))}
    </Select>
  </Form.Item>

  <Form.Item
    label="District"
    name="district"
    rules={[{ required: true, message: 'Please select district' }]}
  >
    <Select placeholder="Select district">
      {districts.map(district => (
        <Option key={district.id} value={district.id}>{district.name}</Option>

      ))}
    </Select>
  </Form.Item>

  <Form.Item
    label="Block"
    name="block"
  >
    <Input placeholder="Enter block" />
  </Form.Item>

  <Form.Item
    label="Village"
    name="village"
  >
    <Input placeholder="Enter village" />
  </Form.Item>
<Form.Item
  label="Status"
  name="disable"
  valuePropName="checked"  // <-- for Switch
  initialValue={true}  // Default Active
>
  <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
</Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit" block>
      Create Admin
    </Button>
  </Form.Item>
</Form>

    </Modal>
  );
}
