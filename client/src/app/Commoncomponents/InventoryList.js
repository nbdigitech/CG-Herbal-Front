import React from 'react';
import { Table, Button } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';

const InventoryList = () => {
  console.log("Rendering Inventory Page");
  const inventoryColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'IMAGE', dataIndex: 'image', key: 'image' },
    { title: 'TITLE', dataIndex: 'title', key: 'title' },
    { title: 'CATEGORY', dataIndex: 'category', key: 'category' },
    { title: 'SUBCATEGORY', dataIndex: 'subcategory', key: 'subcategory' },
    { title: 'WT/QUANTITY', dataIndex: 'wtQuantity', key: 'wtQuantity' },
    {
      title: 'VIEW',
      key: 'view',
      render: () => <Button>View</Button>,
    },
  ];

  const inventoryData = []; // Blank as per provided code

  const handleExportToExcel = () => {
    // Placeholder for CSV export logic
    // Since inventoryData is empty and 'orders' is not defined, this is a dummy implementation
    const csv = [
      ['ID,Image,Title,Category,Subcategory,WT/Quantity'],
      ...inventoryData.map(item => [
        item.id, item.image, item.title, item.category, item.subcategory, item.wtQuantity
      ].join(','))
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Inventory.csv';
    a.click();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Inventory</h3>
          <div className="flex items-center gap-2">
            <Button
              type="primary"
              icon={<FileExcelOutlined />}
              onClick={handleExportToExcel}
              className="bg-green-500"
            >
              Excel
            </Button>
          </div>
        </div>
        <Table
          columns={inventoryColumns}
          dataSource={inventoryData}
          rowKey="id"
          pagination={false}
          className="bg-white"
          scroll={{ x: 'max-content', y: 400 }}
          locale={{ emptyText: 'No data' }}
        />
      </div>
    </div>
  );
};

export default InventoryList;