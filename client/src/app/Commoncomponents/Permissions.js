import { Button, Checkbox, message } from 'antd';

export default function Permissions({ selectedRole, permissionCategories, setSelectedMenu, handleUpdateRole }) {
  return (
    <div className="p-6">
      <Button type="primary" onClick={() => setSelectedMenu('roles')} className="mb-4">
        Back
      </Button>
      <h2 className="text-2xl font-semibold mb-4">Permission Access: {selectedRole.name.toUpperCase()}</h2>
      {Object.entries(permissionCategories).map(([category, permissions]) => (
        <div key={category} className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          {permissions.map((permission) => (
            <div key={permission} className="flex items-center mb-2">
              <Checkbox
                checked={selectedRole.permissions.includes(permission)}
                onChange={(e) => {
                  const updatedPermissions = e.target.checked
                    ? [...selectedRole.permissions, permission]
                    : selectedRole.permissions.filter(p => p !== permission);
                  handleUpdateRole({ ...selectedRole, permissions: updatedPermissions });
                }}
              >
                {permission}
              </Checkbox>
            </div>
          ))}
        </div>
      ))}
      <Button type="primary" onClick={() => message.success('Permissions updated successfully')}>
        Update
      </Button>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
}