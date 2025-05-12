import { Button, Table, Popconfirm } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Coupons({ couponList = [], pageSize, setSelectedMenu, handleDeleteCoupon }) {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "COUPON CODE", dataIndex: "code", key: "code" },
    { title: "AMOUNT", dataIndex: "amount", key: "amount" },
    { title: "PERCENT", dataIndex: "percent", key: "percent", width: 100 },
    { 
      title: "STATUS", 
      dataIndex: "status", 
      key: "status", 
      render: (text) => (
        <span className={text === "On" ? "text-green-500" : "text-red-500"}>{text}</span>
      )
    },
    { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => setSelectedMenu(`editCoupon/${record.id}`)}
            className="text-yellow-500 border-yellow-500"
          />      
          <Popconfirm
            title="Are you sure to delete this coupon?"
            onConfirm={() => handleDeleteCoupon(record.id)}
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
      <h2 className="text-2xl font-semibold mb-4">Coupons</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Coupons List</h3>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setSelectedMenu('addCoupon')}
          >
            Add
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={couponList}
          rowKey="id"
          pagination={{ pageSize }}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
}