import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import AddContact from '../Commoncomponents/AddContact';
import axios from 'axios';

const ContactList = ({ contactList, contactListColumns,setSelectedMenu , handleDeleteContact }) => {
  console.log("Contact List Data:", contactList);
  console.log("Contact List Columns:", contactListColumns);
  console.log("Handle Delete Contact:", handleDeleteContact);

  const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
    fetchContactList();
  }, []);

  
   const fetchContactList = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact/list?ts=${Date.now()}`);
      const data = res.data?.data || [];

      const mapped = data.map((item, index) => ({
        id: item._id || index + 1,
        firstName: item.first_name,
        lastName: item.last_name,
        email: item.email,
        subject: item.subject,
        message: item.message,
      }));

      setContactList(mapped);
    } catch (err) {
      console.error("Failed to fetch contact list:", err);
    }
  };



  if (showAddForm) {
  return (
    <AddContact setSelectedMenu={() => {
      setShowAddForm(false);
      fetchContactList(); // ← always refresh when form closes
    }} />
  );
}

  if (!contactList || contactList.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Contact List</h3>
          </div>
          <p>No contacts available.</p>
        </div>
        <footer className="mt-8 text-center text-gray-600">
          Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
        </footer>
      </div>
    );
  }

 

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Contact List</h3>
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setShowAddForm(true)}>
            Add Contact
          </Button>

        </div>

        <Table
          columns={contactListColumns}
          dataSource={contactList}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          rowClassName={() => 'align-top'}
        />
      </div>
      
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default ContactList;