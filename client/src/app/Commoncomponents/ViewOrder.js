import React from 'react';
import { Table, Button } from 'antd';

const ViewOrder = ({ selectedOrder, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">View Order</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Order Manager')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <p><strong>Order Id:</strong> {selectedOrder.id}</p>
        <p><strong>Customer Name:</strong> {selectedOrder.name || 'N/A'}</p>
        <p><strong>Mobile:</strong> {selectedOrder.phone || 'N/A'}</p>
        <p><strong>Email:</strong> {selectedOrder.email}</p>
        <p><strong>Shipping Address:</strong> {selectedOrder.shippingAddress || 'N/A'}</p>
        <p><strong>Billing Address:</strong> {selectedOrder.billingAddress || 'N/A'}</p>
        <p><strong>Payment Status:</strong> {selectedOrder.paymentStatus}</p>
        <p><strong>Order Status:</strong> {selectedOrder.orderStatus}</p>
        <p><strong>Shipping Status:</strong> {selectedOrder.shippingStatus}</p>
        <p><strong>Order Mode:</strong> {selectedOrder.orderMode}</p>
        <p><strong>Promo:</strong> N/A</p>
        <p><strong>Total Qty:</strong> {selectedOrder.qty}</p>
        <p><strong>Shipping Amount:</strong> N/A</p>
        <p><strong>Total Amount:</strong> {selectedOrder.price}</p>
        <div>
          <Table
            columns={[
              { title: 'Product', dataIndex: 'name', key: 'name' },
              { title: 'Weight', dataIndex: 'weight', key: 'weight' },
              { title: 'Qty', dataIndex: 'qty', key: 'qty' },
              { title: 'Price', dataIndex: 'price', key: 'price' },
              { title: 'Discount', dataIndex: 'discount', key: 'discount' },
              { title: 'Total', dataIndex: 'total', key: 'total' },
            ]}
            dataSource={selectedOrder.products?.map(product => ({
              key: product.id || Date.now(),
              name: product.name,
              weight: product.weight,
              qty: product.qty,
              price: product.price,
              discount: product.discount,
              total: (product.price * product.qty) - (product.discount || 0),
            })) || [
              {
                key: Date.now(),
                name: 'Jamun Juice with Fiber',
                weight: '190ml',
                qty: 2,
                price: 120,
                discount: 120,
                total: 120,
              },
            ]}
            pagination={false}
            className="mt-4"
          />
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default ViewOrder;