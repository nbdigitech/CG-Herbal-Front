
import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const FAQ = ({ faqData, setFaqData, setSelectedMenu, pageSize }) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id", width: 100 },
    { title: "QUESTION", dataIndex: "question", key: "question" },
    { title: "ANSWER", dataIndex: "answer", key: "answer" },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => setSelectedMenu(`editFAQ/${record.id}`)}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this FAQ?"
            onConfirm={() => {
              setFaqData(faqData.filter(faq => faq.id !== record.id));
              message.success('FAQ deleted successfully');
            }}
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
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">FAQ List</h3>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setSelectedMenu('addFAQ')}
          >
            Add
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={faqData}
          rowKey="id"
          pagination={{ pageSize }}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
    </div>
  );
};

export default FAQ;