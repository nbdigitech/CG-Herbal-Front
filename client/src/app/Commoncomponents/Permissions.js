import { Button, Checkbox, message } from 'antd';
import { useEffect, useState } from 'react';

export default function Permissions({ selectedRole, permissionCategories, setSelectedMenu, handleUpdateRole }) {
  // Local state to track permissions
  const [updatedPermissions, setUpdatedPermissions] = useState(selectedRole.permissions);

  // Ensure the menu is set to 'permissions' when the component mounts
  useEffect(() => {
    setSelectedMenu('permissions');
  }, [setSelectedMenu]);

  // Update local permissions when a checkbox is toggled
  const handleCheckboxChange = (permission, checked) => {
    if (checked) {
      setUpdatedPermissions([...updatedPermissions, permission]);
    } else {
      setUpdatedPermissions(updatedPermissions.filter((p) => p !== permission));
    }
  };

  // Handle the "Update" button click
  const handleUpdate = () => {
    // Update the role with the new permissions
    handleUpdateRole({ ...selectedRole, permissions: updatedPermissions });
    // Show the success message
    message.success('Role updated successfully');
    // Ensure the menu stays on the permissions view
    setSelectedMenu('permissions');
  };

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
                checked={updatedPermissions.includes(permission)}
                onChange={(e) => handleCheckboxChange(permission, e.target.checked)}
              >
                {permission}
              </Checkbox>
            </div>
          ))}
        </div>
      ))}
      <Button type="primary" onClick={handleUpdate}>
        Update
      </Button>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
}