import { Input, Button, message } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function Profile({ profileData, setProfileData }) {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <div className="border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <EditOutlined /> Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Input value="admin@cgherbal.com" disabled />
          </div>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <Input
              value={profileData.name}
              onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Role</label>
            <Input value="super-admin" disabled />
          </div>
        </div>

        <div className="text-right">
          <Button
            type="primary"
            className="bg-teal-500 text-white"
            onClick={() => message.success('Profile updated successfully')}
          >
            Update Profile
          </Button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-6 mt-6 rounded shadow">
        <div className="border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <EditOutlined /> Change Password
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">New Password</label>
            <Input.Password
              value={profileData.newPassword}
              onChange={(e) => setProfileData({ ...profileData, newPassword: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <Input.Password
              value={profileData.confirmPassword}
              onChange={(e) =>
                setProfileData({ ...profileData, confirmPassword: e.target.value })
              }
            />
          </div>
        </div>

        <div className="text-right">
          <Button
            type="primary"
            className="bg-teal-500 text-white"
            onClick={() => message.success('Password changed successfully')}
          >
            Change Password
          </Button>
        </div>
      </div>

      <footer className="mt-10 text-center text-gray-600 text-sm">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin. All rights reserved.
      </footer>
    </div>
  );
}