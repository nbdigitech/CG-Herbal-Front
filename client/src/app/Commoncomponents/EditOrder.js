import React from 'react';
import { Form, Input, Button, Select, Table, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

const EditOrder = ({
  orderForm,
  selectedOrder,
  setOrders,
  setSelectedMenu,
  customers,
}) => {
  const selectedCustomer = customers.find(c => c.id === selectedOrder.customerId);

  const productColumns = [
    { title: 'Product', dataIndex: 'name', key: 'name' },
    { title: 'Weight', dataIndex: 'weight', key: 'weight' },
    { title: 'Qty', dataIndex: 'qty', key: 'qty' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Discount', dataIndex: 'discount', key: 'discount' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Order</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Order Manager')}>
          Order List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={orderForm}
          layout="vertical"
          initialValues={{
            customerId: selectedOrder.customerId,
            name: selectedCustomer?.name,
            phone: selectedCustomer?.mobile,
            email: selectedCustomer?.email,
            orderStatus: selectedOrder.orderStatus,
            shippingStatus: selectedOrder.shippingStatus,
            orderMode: selectedOrder.orderMode,
            address: selectedOrder.address,
          }}
          onFinish={(values) => {
            setOrders(prevOrders =>
              prevOrders.map(order =>
                order.id === selectedOrder.id
                  ? {
                      ...order,
                      customerId: values.customerId,
                      orderStatus: values.orderStatus,
                      shippingStatus: values.shippingStatus,
                      orderMode: values.orderMode,
                      trackingDetails: {
                        serviceProvider: values.serviceProvider,
                        trackingCode: values.trackingCode,
                        trackingUrl: values.trackingUrl,
                      },
                      address: values.address,
                    }
                  : order
              )
            );
            setSelectedMenu('Order Manager');
            message.success('Order updated successfully');
          }}
        >
          <Form.Item
            label="Customer"
            name="customerId"
            rules={[{ required: true, message: 'Please select a customer' }]}
          >
            <Select
              placeholder="Select Customer"
              onChange={(value) => {
                const customer = customers.find(c => c.id === value);
                orderForm.setFieldsValue({
                  name: customer?.name,
                  phone: customer?.mobile,
                  email: customer?.email,
                  address: customer?.address,
                });
              }}
            >
              {customers.map(customer => (
                <Option key={customer.id} value={customer.id}>
                  {`${customer.name} - ${customer.email}`}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter customer name' }]}
          >
            <Input placeholder="Enter Customer Name" />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please enter phone number' }]}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter email' }]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            label="Order Status"
            name="orderStatus"
            rules={[{ required: true, message: 'Please select order status' }]}
          >
            <Select placeholder="Select Order Status">
              <Option value="Placed">Placed</Option>
              <Option value="Processing">Processing</Option>
              <Option value="Shipped">Shipped</Option>
              <Option value="Delivered">Delivered</Option>
              <Option value="Cancelled">Cancelled</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Shipping Status"
            name="shippingStatus"
            rules={[{ required: true, message: 'Please select shipping status' }]}
          >
            <Select placeholder="Select Shipping Status">
              <Option value="Select Shipping Status">Select Shipping Status</Option>
              <Option value="Not Shipped">Not Shipped</Option>
              <Option value="Shipped">Shipped</Option>
              <Option value="In Transit">In Transit</Option>
              <Option value="Delivered">Delivered</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Order Mode"
            name="orderMode"
            rules={[{ required: true, message: 'Please enter order mode' }]}
          >
            <Input placeholder="Enter Order Mode" />
          </Form.Item>
          <div className="mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <UserOutlined /> Tracking Details
            </h3>
          </div>
          <Form.Item
            label="Service Provider"
            name="serviceProvider"
            rules={[{ required: true, message: 'Please select service provider' }]}
          >
            <Select placeholder="Select Service Provider">
              <Option value="Select Service Provider">Select Service Provider</Option>
              <Option value="DHL">DHL</Option>
              <Option value="FedEx">FedEx</Option>
              <Option value="UPS">UPS</Option>
              <Option value="India Post">India Post</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Tracking Code" name="trackingCode">
            <Input placeholder="Enter Tracking Code" />
          </Form.Item>
          <Form.Item label="Tracking URL" name="trackingUrl">
            <Input placeholder="Enter Tracking URL" />
          </Form.Item>
          <Table
            columns={productColumns}
            dataSource={selectedOrder.products}
            rowKey="name"
            pagination={false}
            className="mb-4"
            scroll={{ x: 'max-content' }}
          />
          <div className="mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <UserOutlined /> Address
            </h3>
          </div>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter address' }]}
          >
            <Input.TextArea placeholder="Enter Address" rows={4} />
          </Form.Item>
          <Form.Item className="text-right">
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

export default EditOrder;