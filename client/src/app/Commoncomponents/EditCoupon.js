import React from 'react';
import { Form, Input, Button, Select, Checkbox, message } from 'antd';

const EditCoupon = ({ selectedCoupon, coupons, setCoupons, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Coupon</h2>
        <Button type="primary" onClick={() => setSelectedMenu('Coupons')}>
          Coupons List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          layout="vertical"
          initialValues={{
            code: selectedCoupon?.code,
            offerType: selectedCoupon?.amount ? 'amount' : 'percent',
            value: selectedCoupon?.amount || selectedCoupon?.percent,
            description: 'New Offer',
            status: selectedCoupon?.status === 'On',
          }}
          onFinish={(values) => {
            setCoupons(prevCoupons =>
              prevCoupons.map(coupon =>
                coupon.id === selectedCoupon.id
                  ? {
                      ...coupon,
                      code: values.code,
                      amount: values.offerType === 'amount' ? values.value : '',
                      percent: values.offerType === 'percent' ? values.value : '',
                      status: values.status ? 'On' : 'Off',
                    }
                  : coupon
              )
            );
            message.success('Coupon updated successfully');
            setSelectedMenu('Coupons');
          }}
        >
          <Form.Item
            label="COUPON CODE"
            name="code"
            rules={[{ required: true, message: 'Please enter coupon code' }]}
          >
            <Input placeholder="Enter coupon code" />
          </Form.Item>
          <Form.Item
            label="OFFER TYPE"
            name="offerType"
            rules={[{ required: true, message: 'Please select offer type' }]}
          >
            <Select placeholder="Select Type">
              <Select.Option value="amount">Amount</Select.Option>
              <Select.Option value="percent">Percent</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="VALUE"
            name="value"
            rules={[{ required: true, message: 'Please enter value' }]}
          >
            <Input placeholder="Enter value" />
          </Form.Item>
          <Form.Item
            label="DESCRIPTION"
            name="description"
          >
            <Input.TextArea rows={4} placeholder="Enter description" />
          </Form.Item>
          <Form.Item
            label="STATUS"
            name="status"
            valuePropName="checked"
          >
            <Checkbox>Active</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Coupon
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

export default EditCoupon;