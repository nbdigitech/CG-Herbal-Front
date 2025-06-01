import { Modal, Form, Input, Button, Select, message } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const { Option } = Select;

export default function AddRoleModal({ visible, onClose, refreshRoles, initialValues = null }) {
  const [form] = Form.useForm();
  const [menuList, setMenuList] = useState([]);
  const [subMenuList, setSubMenuList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [selectedSubMenus, setSelectedSubMenus] = useState([]);

  useEffect(() => {
    if (visible) {
      fetchMenus();
      fetchSubMenus();

      // Prefill form if initialValues exist
      if (initialValues) {
        form.setFieldsValue({
  role_name: initialValues.role_name,
  menu_id: initialValues.menu_details?.[0]?.menu_id?._id || null,
  sub_menu_ids: initialValues.menu_details?.[0]?.sub_menu_ids?.map(sub => sub._id) || []
});

        setSelectedMenu(initialValues.menu_id?._id || null);
        const subMenuIds = initialValues.menu_details?.flatMap(detail => 
          (detail.sub_menu_ids || []).map(sub => sub._id)
        ) || [];
        setSelectedSubMenus(subMenuIds);
      } else {
        form.resetFields();
        setSelectedMenu(null);
        setSelectedSubMenus([]);
      }
    }
  }, [visible, initialValues, form]);

  const fetchMenus = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/permission/menu/list`);
      setMenuList(response.data || []);
    } catch (error) {
      console.error("Failed to fetch menus", error);
      message.error('Failed to load menus');
    }
  };

  const fetchSubMenus = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/permission/submenu/list`);
      setSubMenuList(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch submenus", error);
      message.error('Failed to load submenus');
    }
  };

  const handleSubmit = async (values) => {
    try {
      const payload = {
    role_name: values.role_name,
    menu_details: [
      {
        menu_id: values.menu_id || null,
        sub_menu_ids: values.sub_menu_ids,
      }
    ]
      };

      if (initialValues && initialValues.id) {
        // Update API
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/permission/update/${initialValues.id}`, payload);
        message.success('Role updated successfully');
      } else {
        // Create API
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/permission/create`, payload);
        message.success('Role created successfully');
      }

      form.resetFields();
      setSelectedMenu(null);
      setSelectedSubMenus([]);
      onClose();
      refreshRoles();
    } catch (error) {
      console.error('Failed to save role', error);
      message.error('Failed to save role');
    }
  };

  return (
    <Modal
      title={initialValues ? "Edit Role" : "Add New Role"}
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
          label="Role Name"
          name="role_name"
          rules={[{ required: true, message: 'Please enter role name' }]}
        >
          <Input placeholder="Enter Role Name" />
        </Form.Item>

        <Form.Item
          label="Menu"
          name="menu_id"
        >
          <Select
            placeholder="Select Menu"
            
            onChange={(value) => setSelectedMenu(value)}
            allowClear
          >
            {menuList.map(menu => (
              <Option key={menu._id} value={menu._id}>
                {menu.menu_name || `Menu ${menu.position}`}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Sub Menus"
          name="sub_menu_ids"
        >
          <Select
            mode="multiple"
            placeholder="Select Sub Menus"
            
            onChange={(value) => setSelectedSubMenus(value)}
            allowClear
          >
            {subMenuList.map(subMenu => (
              <Option key={subMenu._id} value={subMenu._id}>
                {subMenu.sub_menu_name || `SubMenu ${subMenu.position}`}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {initialValues ? "Update Role" : "Create Role"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
