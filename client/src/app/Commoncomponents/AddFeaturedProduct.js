import { Button, Form, Select } from 'antd';

const { Option } = Select;

export default function AddFeaturedProduct({ form, productOptions, handleAddFeaturedProduct, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add New Featured Product</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Featured Product')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddFeaturedProduct}
        >
          <Form.Item
            label="Select Product"
            name="productId"
            rules={[{ required: true, message: 'Please select a product' }]}
          >
            <Select placeholder="--Select Product--">
              {productOptions.map((product) => (
                <Option key={product.id} value={product.id}>{product.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
}