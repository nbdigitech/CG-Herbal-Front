import { Button, Form, Select } from 'antd';

const { Option } = Select;

export default function EditFeaturedProduct({ form, selectedFeaturedProduct, productOptions, handleUpdateFeaturedProduct, setSelectedMenu }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Featured Product</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Featured Product')}>
          Featured Product List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleUpdateFeaturedProduct}
          initialValues={{ productId: selectedFeaturedProduct.productId }}
        >
          <Form.Item
            label="Select Product"
            name="productId"
            rules={[{ required: true, message: 'Please select a product' }]}
          >
            <Select>
              {productOptions.map((product) => (
                <Option key={product.id} value={product.id}>{product.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
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