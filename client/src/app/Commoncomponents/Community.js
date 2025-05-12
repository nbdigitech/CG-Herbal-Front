import { Button, Table, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Community({ communityList, setSelectedCommunity, setSelectedMenu, handleDeleteCommunity }) {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img
          src={image}
          alt="community"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      ),
    },
    { title: 'Title', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedCommunity(record);
              setSelectedMenu('editCommunity');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this community?"
            onConfirm={() => handleDeleteCommunity(record.id)}
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
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Community</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Community List</h3>
          <div className="flex gap-2">
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addCommunity')}>
              Add
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={communityList}
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