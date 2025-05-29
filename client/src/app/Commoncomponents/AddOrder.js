import React from 'react';
import { Form, Input, Button, Select, Table, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddOrder = ({
  orderForm,
  orders,
  setOrders,
  setSelectedMenu,
  products,
  setProducts,
  orderStatuses,
  shippingStatuses,
  serviceProviders,
  productOptions,
  weightOptions,
  addProduct,
  handleProductChange,
}) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Add Order</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Order Manager')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={orderForm}
          layout="vertical"
          onFinish={async (values) => {
  try {
    const payload = {
      email: values.email,
      name: values.name,
      phone: values.phone,
      paymentStatus: values.paymentStatus,
      orderStatus: values.orderStatus,
      shippingStatus: values.shippingStatus,
      serviceProvider: values.serviceProvider,
      orderMode: values.orderMode,
      address: values.address,
      products: products,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      message.success('Order added successfully');
      setSelectedMenu('Order Manager');
      orderForm.resetFields();
      setProducts([]);
    } else {
      throw new Error(data.message || 'Order creation failed');
    }
  } catch (err) {
    console.error(err);
    message.error('Failed to create order');
  }
}}

        >
          <Form.Item
            label="Customer"
            name="email"
            rules={[{ required: true, message: 'Please select customer' }]}
          >
            <Input placeholder="Select Customer" />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter name' }]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please enter phone' }]}
          >
            <Input placeholder="Enter Phone" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            label="Payment Mode"
            name="paymentStatus"
            rules={[{ required: true, message: 'Please select payment mode' }]}
          >
            <Select placeholder="Select Payment Mode">
              <Option value="COD">Cash on Delivery</Option>
              <Option value="success">Success</Option>
              <Option value="failure!!!">Failure!!!</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Order Status"
            name="orderStatus"
            rules={[{ required: true, message: 'Please select order status' }]}
          >
            <Select placeholder="Select Order Status">
              {orderStatuses.map(status => (
                <Option key={status.id} value={status.name}>
                  {status.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Shipping Status"
            name="shippingStatus"
            rules={[{ required: true, message: 'Please select shipping status' }]}
          >
            <Select placeholder="Select Shipping Status">
              {shippingStatuses.map(status => (
                <Option key={status.id} value={status.name}>
                  {status.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Service Provider"
            name="serviceProvider"
            rules={[{ required: true, message: 'Please select service provider' }]}
          >
            <Select placeholder="Select Service Provider">
              {serviceProviders.map(provider => (
                <Option key={provider.id} value={provider.name}>
                  {provider.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Order Mode"
            name="orderMode"
            rules={[{ required: true, message: 'Please select order mode' }]}
          >
            <Input placeholder="Enter Order Mode" />
          </Form.Item>
          <Form.Item label="Product">
            <Button type="primary" onClick={addProduct}>
              + Add Product
            </Button>
            {products.length > 0 && (
              <Table
                columns={[
                  {
                    title: 'Product',
                    dataIndex: 'name',
                    key: 'name',
                    render: (text, record) => (
                      <Select
                        value={record.name}
                        onChange={(value) => handleProductChange(record.id, 'name', value)}
                        style={{ width: 200 }}
                      >
                        {productOptions.map(option => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                    ),
                  },
                  {
                    title: 'Weight',
                    dataIndex: 'weight',
                    key: 'weight',
                    render: (text, record) => (
                      <Select
                        value={record.weight}
                        onChange={(value) => handleProductChange(record.id, 'weight', value)}
                        style={{ width: 100 }}
                      >
                        {weightOptions.map(option => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                    ),
                  },
                  {
                    title: 'Qty',
                    dataIndex: 'qty',
                    key: 'qty',
                    render: (text, record) => (
                      <Input
                        type="number"
                        value={record.qty}
                        onChange={(e) => handleProductChange(record.id, 'qty', Number(e.target.value))}
                        style={{ width: 80 }}
                      />
                    ),
                  },
                  {
                    title: 'Price',
                    dataIndex: 'price',
                    key: 'price',
                    render: (text, record) => (
                      <Input
                        type="number"
                        value={record.price}
                        onChange={(e) => handleProductChange(record.id, 'price', Number(e.target.value))}
                        style={{ width: 80 }}
                      />
                    ),
                  },
                  {
                    title: 'Discount',
                    dataIndex: 'discount',
                    key: 'discount',
                    render: (text, record) => (
                      <Input
                        type="number"
                        value={record.discount}
                        onChange={(e) => handleProductChange(record.id, 'discount', Number(e.target.value))}
                        style={{ width: 80 }}
                      />
                    ),
                  },
                  {
                    title: 'Total',
                    dataIndex: 'total',
                    key: 'total',
                    render: (_, record) => (record.price * record.qty) - (record.discount || 0),
                  },
                  {
                    title: 'Action',
                    key: 'action',
                    render: (_, record) => (
                      <Button
                        type="link"
                        danger
                        onClick={() => setProducts(products.filter(p => p.id !== record.id))}
                      >
                        X
                      </Button>
                    ),
                  },
                ]}
                dataSource={products.map(product => ({
                  ...product,
                  key: product.id,
                }))}
                pagination={false}
              />
            )}
          </Form.Item>
          <Form.Item label="Shipping Address">
            <Input.TextArea placeholder="Enter Shipping Address" />
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
};

export default AddOrder;