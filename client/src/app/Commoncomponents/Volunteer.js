import { useState } from 'react';
import { Table, Input, Button, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Volunteer = ({ volunteerRequests, setVolunteerRequests, pageSize }) => {


  const [volunteerSearch, setVolunteerSearch] = useState('');

  const handleDeleteVolunteer = (id) => {
    setVolunteerRequests(volunteerRequests.filter(request => request.id !== id));
    message.success('Volunteer request deleted successfully');
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
    { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
    { title: "EMAIL", dataIndex: "email", key: "email" },
    { title: "MOBILE", dataIndex: "mobile", key: "mobile" },
    { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
    {
      title: "ACTION",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => message.info('Edit functionality to be implemented')}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this request?"
            onConfirm={() => handleDeleteVolunteer(record.id)}
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

  const filteredVolunteerRequests = volunteerRequests.filter(request =>
  request.firstName?.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
  request.lastName?.toLowerCase().includes(volunteerSearch.toLowerCase()) ||
  request.email?.toLowerCase().includes(volunteerSearch.toLowerCase())
);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Volunteer Requests</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Volunteer Request List</h3>
          <Input.Search
            placeholder="Search by name or email"
            style={{ width: 200 }}
            value={volunteerSearch}
            onChange={(e) => setVolunteerSearch(e.target.value)}
            onSearch={(value) => setVolunteerSearch(value)}
          />
        </div>
        <Table
          columns={columns}
          dataSource={filteredVolunteerRequests}
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

export default Volunteer;