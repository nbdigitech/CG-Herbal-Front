import React from 'react';
import { Table } from 'antd';

const ContactList = ({ contactList, contactListColumns, setSelectedMenu, handleDeleteContact }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Contact List</h3>
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