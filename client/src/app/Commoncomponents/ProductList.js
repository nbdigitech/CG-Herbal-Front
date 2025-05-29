import React from 'react';
import { Table, Button, Input, Select , Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Option } = Select;




const ProductList = ({ productList, setSelectedMenu, handleEditProduct, handleDeleteProduct }) => {
  const columns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { 
      title: 'Image', 
      dataIndex: 'image', 
      key: 'image', 
      render: (text) => <img src={text} alt="product" width={50} /> 
    },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Sub Category', dataIndex: 'subCategory', key: 'subCategory' },
    { 
      title: 'Wt/Price', 
      dataIndex: 'weights', 
      key: 'weights', 
      render: (weights) => (

  <ul>
    {(weights || []).map((w, index) => (
      <li key={index}>{w.wt} | price: {w.price} | count: {w.count}</li>
    ))}
  </ul>
)

    },
    { 
      title: 'Action', 
      key: 'action', 
      render: (_, record) => (
        <div className="flex gap-2">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEditProduct(record.id)} 
          />
           <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDeleteProduct(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              icon={<DeleteOutlined />} 
              danger 
            />
          </Popconfirm>
        </div>
      )
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Product List</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Select
                defaultValue="10"
                style={{ width: 120 }}
                onChange={(value) => console.log(`Show ${value} entries`)}
              >
                <Option value="10">10</Option>
                <Option value="25">25</Option>
                <Option value="50">50</Option>
                <Option value="100">100</Option>
              </Select>
              <span>entries</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search..." className="w-64" />
            <Button 
              type="primary" 
              icon={<PlusOutlined />} 
              onClick={() => setSelectedMenu('addProduct')}
            >
              Add
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={productList}
          rowKey="_id"
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
};

export default ProductList;