import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';


const IngridientsList = ({ ingredients, setIngredients }) => {
  const [newIngredientName, setNewIngredientName] = useState('');
  const [editIngredientName, setEditIngredientName] = useState('');
  const IngridientsListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
  icon={<EditOutlined />}
  onClick={() => {
    Modal.confirm({
      title: 'Edit Ingredient',
      content: (
        <Input
          defaultValue={record.name}
          onChange={(e) => setEditIngredientName(e.target.value)}
        />
      ),
      onOk: async () => {
        try {
          await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/ingridient/update/${record.id}`, {
            name: editIngredientName,
          });
          message.success('Ingredient updated successfully');
          fetchIngredients(); // refresh
        } catch (err) {
          console.error(err);
          message.error('Failed to update ingredient');
        }
      },
    });
  }}
  className="text-yellow-500 border-yellow-500"
/>

          <Popconfirm
            title="Are you sure you want to delete this ingredient?"
            onConfirm={async () => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/ingridient/${record.id}`);
    message.success('Ingredient deleted successfully');
    fetchIngredients(); // refresh
  } catch (err) {
    console.error(err);
    message.error('Failed to delete ingredient');
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
      <h2 className="text-2xl font-semibold mb-4">Ingridients</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Ingridients List</h3>
          <div className="flex gap-2">
            <Button
  type="primary"
  icon={<PlusOutlined />}
  onClick={() => {
    Modal.confirm({
      title: 'Add New Ingredient',
      content: (
        <Input
          placeholder="Ingredient Name"
          onChange={(e) => setNewIngredientName(e.target.value)}
        />
      ),
      onOk: async () => {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/ingridient/create`, {
            name: newIngredientName,
          });
          message.success('Ingredient added successfully');
          fetchIngredients();  // re-fetch after add
        } catch (err) {
          console.error(err);
          message.error('Failed to add ingredient');
        }
      },
    });
  }}
>
  Add
</Button>

          </div>
        </div>
        <Table
          columns={IngridientsListColumns}
          dataSource={ingredients}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          rowClassName={() => 'align-top'}
          locale={{ emptyText: 'No data' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default IngridientsList;














