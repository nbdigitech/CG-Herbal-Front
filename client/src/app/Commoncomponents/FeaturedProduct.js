import { Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function FeaturedProduct({ productList, featuredProductListColumns, setSelectedMenu }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Featured Product List</h3>
          <div className="flex gap-2">
            <Button
  type="primary"
  icon={<PlusOutlined />}
  onClick={() => setSelectedMenu('addFeaturedProduct')}
>
  Add
</Button>
          </div>
        </div>
        <Table
          columns={featuredProductListColumns}
          dataSource={productList}
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