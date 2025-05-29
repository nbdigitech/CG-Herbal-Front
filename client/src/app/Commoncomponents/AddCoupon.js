import { Button, Form, Input, Select, Checkbox, message } from 'antd';

export default function EditCoupon({ coupon, handleUpdateCoupon, setSelectedMenu }) {
  const [form] = Form.useForm();

  

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
          form={form}
          layout="vertical"
          initialValues={{
            code: coupon?.code,
            offerType: coupon?.amount ? 'amount' : 'percent',
            value: coupon?.amount || coupon?.percent,
            description: "New Offer",
            status: coupon?.status === "On",
          }}
          onFinish={async (values) => {
 const payload = {
  code: values.code,
  amount: values.offerType === 'amount' ? Number(values.value) : null,
  percentage: values.offerType === 'percent' ? Number(values.value) : null,
  description: values.description || '',
  status: values.status === true // send boolean
};



  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/promo-code/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      message.success('Coupon created successfully');
      setSelectedMenu('Coupons');
    } else {
      throw new Error(data.message || 'Failed to create');
    }
  } catch (err) {
    console.error(err);
    message.error('Error creating coupon');
  }
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
}