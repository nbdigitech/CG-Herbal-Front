import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import axios from 'axios';


const SubCategoryList = ({ subCategories, setSubCategories, setSelectedSubCategory, setSelectedMenu }) => {
  const subCategoryListColumns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <Image src={image} alt="Sub Category" width={50} height={50} />,
    },
    { title: 'Sub Category', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={`px-2 py-1 rounded ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {status}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedSubCategory(record);
              setSelectedMenu('editSubCategory');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={async () => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/category/sub-category/${record.id}`);
    setSubCategories(prev => prev.filter(sub => sub.id !== record.id));
    message.success("Sub Category deleted successfully");
  } catch (error) {
    console.error("Delete Sub Category failed:", error);
    message.error("Failed to delete sub category");
  }
}}

            okText="Yes"
            cancelText="No"
            icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Sub Category</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Sub Category List</h3>
          <div className="flex gap-2">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setSelectedMenu('addSubCategory')}
            >
              Add
            </Button>
          </div>
        </div>
        <Table
          columns={subCategoryListColumns}
          dataSource={subCategories}
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

export default SubCategoryList;