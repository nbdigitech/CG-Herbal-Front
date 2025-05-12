import React from 'react';
import { Form, Input, Button, message } from 'antd';

const EditHsncode = ({ hsncodeForm, selectedHsncode, hsncodes, setHsncodes, setSelectedMenu }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Edit Hsncode</h2>
        <Button type="primary" onClick={() => setSelectedMenu('HSNCODE Master')}>
          Back to List
        </Button>
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Form
          form={hsncodeForm}
          layout="vertical"
          initialValues={{
            hsncode: selectedHsncode.hsncode,
            gstValue: selectedHsncode.gstValue,
          }}
          onFinish={(values) => {
            const updatedHsncodes = hsncodes.map(hsncode =>
              hsncode.id === selectedHsncode.id
                ? {
                    ...hsncode,
                    hsncode: values.hsncode,
                    gstValue: values.gstValue,
                  }
                : hsncode
            );
            setHsncodes(updatedHsncodes);
            setSelectedMenu('HSNCODE Master');
            message.success('HSN code updated successfully');
          }}
        >
          <Form.Item
            label="Hsncode"
            name="hsncode"
            rules={[{ required: true, message: 'Please enter HSN code' }]}
          >
            <Input placeholder="Enter HSN Code" />
          </Form.Item>
          <Form.Item
            label="GST Value"
            name="gstValue"
            rules={[{ required: true, message: 'Please enter GST value' }]}
          >
            <Input type="number" placeholder="Enter GST Value" />
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
};

export default EditHsncode;