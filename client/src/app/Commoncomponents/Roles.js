import { Button, Select, Table, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import AddRoleModal from './AddRoleModal';
import { useState } from 'react';

const { Option } = Select;

export default function Roles({ sortedRoleList, roleListColumns, showAddRoleModal, requestSort, fetchAdminRoles, handleDeleteRole }) {
  const [isAddRoleModalVisible, setIsAddRoleModalVisible] = useState(false);
  const [isEditRoleModalVisible, setIsEditRoleModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const openAddModal = () => {
    setSelectedRole(null);   // clear previous selected role
    setIsAddRoleModalVisible(true);
  };

  const openEditModal = (record) => {
    setSelectedRole(record);
    setIsEditRoleModalVisible(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Role</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Role List</h3>
          <div className="flex gap-2">
            <Button type="primary" icon={<PlusOutlined />} onClick={openAddModal}>
              Add
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <Select
            defaultValue="ID desc"
            style={{ width: 120, marginLeft: 10 }}
            onChange={(value) => {
              const [key, direction] = value.split(' ');
              requestSort(key, direction);
            }}
          >
            <Option value="ID desc">ID desc</Option>
            <Option value="ID asc">ID asc</Option>
            <Option value="Name desc">Name desc</Option>
            <Option value="Name asc">Name asc</Option>
            <Option value="Permissions desc">Permissions desc</Option>
          </Select>
        </div>
        <Table
          columns={[
            { title: '#ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
            { title: 'Role Name', dataIndex: 'name', key: 'name' },
            { title: 'Menus', dataIndex: 'menus', key: 'menus' },
            {
              title: 'Action',
              key: 'action',
              render: (_, record) => (
                <div className="flex gap-2">
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => openEditModal(record)}
                    className="text-yellow-500 border-yellow-500"
                  />
                  <Popconfirm
                    title="Are you sure you want to delete this role?"
                    onConfirm={() => handleDeleteRole(record.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      className="text-red-500 border-red-500"
                    />
                  </Popconfirm>
                </div>
              ),
            },
          ]}
          dataSource={sortedRoleList}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content' }}
        />
      </div>

      {/* Add Role Modal */}
      <AddRoleModal
        visible={isAddRoleModalVisible}
        onClose={() => setIsAddRoleModalVisible(false)}
        refreshRoles={fetchAdminRoles}
      />

      {/* Edit Role Modal */}
      <AddRoleModal
        visible={isEditRoleModalVisible}
        onClose={() => setIsEditRoleModalVisible(false)}
        refreshRoles={fetchAdminRoles}
        initialValues={selectedRole}
      />

      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin. All rights reserved.
      </footer>
    </div>
  );
}
