import { Button, Select, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

export default function Roles({ sortedRoleList, roleListColumns, showAddRoleModal, requestSort }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Role</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Role List</h3>
          <div className="flex gap-2">
            <Button type="primary" icon={<PlusOutlined />} onClick={showAddRoleModal}>
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
          columns={roleListColumns}
          dataSource={sortedRoleList}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
}