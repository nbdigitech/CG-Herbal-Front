import React from 'react';
import { Form, Input, Select, Button, Table, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddProduct = ({ form, weights, setWeights, benefits, setBenefits, faqs, setFaqs, handleAddProduct, setSelectedMenu }) => {
  const handleAddWeight = () => {
    setWeights([...weights, { wt: '', count: 0, price: 0, hsncode: '', gstAmount: 0, taxableAmount: 0, discount: 0, discountType: 'rupee' }]);
  };

  const handleDeleteWeight = (index) => {
    setWeights(weights.filter((_, i) => i !== index));
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, '']);
  };

  const handleDeleteBenefit = (index) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleDeleteFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const weightColumns = [
    {
      title: 'Weight',
      dataIndex: 'wt',
      render: (text, record, index) => (
        <Select
          value={text || '--Select Weight--'}
          onChange={(value) => {
            const updatedWeights = [...weights];
            updatedWeights[index].wt = value;
            setWeights(updatedWeights);
          }}
          style={{ width: '100%' }}
        >
          <Option value="600 gm">600 gm</Option>
          <Option value="800 gm">800 gm</Option>
          <Option value="1200 gm">1200 gm</Option>
          <Option value="200 gm">200 gm</Option>
          <Option value="300 gm">300 gm</Option>
          <Option value="100 gm">100 gm</Option>
          <Option value="15 ml">15 ml</Option>
          <Option value="250 gm">250 gm</Option>
          <Option value="120 gm">120 gm</Option>
          <Option value="50 gm">50 gm</Option>
          <Option value="110 gm">110 gm</Option>
          <Option value="30 gm">30 gm</Option>
          <Option value="500 gm">500 gm</Option>
          <Option value="1 Liter">1 Liter</Option>
          <Option value="400 gm">400 gm</Option>
          <Option value="500 ml">500 ml</Option>
          <Option value="125 gm">125 gm</Option>
          <Option value="50 ml">50 ml</Option>
          <Option value="100 ml">100 ml</Option>
        </Select>
      ),
    },
    {
      title: 'Stock Count',
      dataIndex: 'count',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => {
            const updatedWeights = [...weights];
            updatedWeights[index].count = e.target.value;
            setWeights(updatedWeights);
          }}
          type="number"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => {
            const updatedWeights = [...weights];
            updatedWeights[index].price = e.target.value;
            setWeights(updatedWeights);
          }}
          type="number"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Hsncode',
      dataIndex: 'hsncode',
      render: (text, record, index) => (
        <Select
          value={text || '--Select--'}
          onChange={(value) => {
            const updatedWeights = [...weights];
            updatedWeights[index].hsncode = value;
            setWeights(updatedWeights);
          }}
          style={{ width: '100%' }}
        >
          <Option value="30049011">30049011</Option>
          <Option value="08134090">08134090</Option>
          <Option value="09042211">09042211</Option>
          <Option value="19053211">19053211</Option>
          <Option value="19053100">19053100</Option>
          <Option value="21039090">21039090</Option>
          <Option value="17040000">17040000</Option>
          <Option value="38089400">38089400</Option>
          <Option value="34011110">34011110</Option>
          <Option value="09220900">09220900</Option>
          <Option value="32040000">32040000</Option>
          <Option value="32074100">32074100</Option>
          <Option value="7171910">7171910</Option>
          <Option value="34011941">34011941</Option>
          <Option value="17040990">17040990</Option>
        </Select>
      ),
    },
    {
      title: 'GST Amount',
      dataIndex: 'gstAmount',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => {
            const updatedWeights = [...weights];
            updatedWeights[index].gstAmount = e.target.value;
            setWeights(updatedWeights);
          }}
          type="number"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Taxable Amount',
      dataIndex: 'taxableAmount',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => {
            const updatedWeights = [...weights];
            updatedWeights[index].taxableAmount = e.target.value;
            setWeights(updatedWeights);
          }}
          type="number"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
      render: (text, record, index) => (
        <Select
          value={record.discountType || '--Select--'}
          onChange={(value) => {
            const updatedWeights = [...weights];
            updatedWeights[index].discountType = value;
            setWeights(updatedWeights);
          }}
          style={{ width: '100%' }}
        >
          <Option value="rupee">rupee</Option>
          <Option value="percent">percent</Option>
        </Select>
      ),
    },
    {
      title: 'Discount Value',
      dataIndex: 'discount',
      render: (text, record, index) => (
        <Input
          value={text}
          onChange={(e) => {
            const updatedWeights = [...weights];
            updatedWeights[index].discount = e.target.value;
            setWeights(updatedWeights);
          }}
          type="number"
          style={{ width: '100%' }}
        />
      ),
    },
    {
      title: 'Action',
      render: (_, __, index) => (
        <span
          style={{ color: 'red', cursor: 'pointer', fontSize: '16px' }}
          onClick={() => handleDeleteWeight(index)}
        >
          ✕
        </span>
      ),
    },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <Button 
          onClick={() => setSelectedMenu('Product')} 
          style={{ backgroundColor: '#1890ff', color: '#fff' }}
        >
          Product List
        </Button>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleAddProduct}
        initialValues={{
          weights,
          benefits,
          faq: faqs,
        }}
      >
        <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
        <Form.Item label="Meta Title" name="metaTitle">
          <Input />
        </Form.Item>
        <Form.Item label="Meta Description" name="metaDescription">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Product Schema" name="productSchema">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Breadcrumb Schema" name="breadcrumbSchema">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Product Images" name="images" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
  <Upload
    listType="picture"
    beforeUpload={() => false} // prevent auto-upload
    multiple
  >
    <Button icon={<UploadOutlined />}>Upload Images</Button>
  </Upload>
</Form.Item>

        <Form.Item label="Organization Schema" name="organizationSchema">
          <Input.TextArea />
        </Form.Item>
        <h3 className="text-lg font-semibold mb-4">Product Details</h3>
        <Form.Item label="Select Category" name="category">
          <Select>
            <Option value="Premium Products">Premium Products</Option>
            <Option value="Gourmet Products">Gourmet Products</Option>
            <Option value="Ayush Products">Ayush Products</Option>
            <Option value="Other Products">Other Products</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Sub Category" name="subCategory">
          <Select>
            <Option value="Other">Other</Option>
            <Option value="Gourmet">Gourmet</Option>
            <Option value="Churna">Churna</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Remedy" name="remedy">
          <Select>
            <Option value="Diabetes">Diabetes</Option>
            <Option value="Digestives">Digestives</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Ingredients" name="ingredients">
          <Select placeholder="Select Ingredients">
            <Option value="ingredient1">Ingredient 1</Option>
            <Option value="ingredient2">Ingredient 2</Option>
            <Option value="ingredient3">Ingredient 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select Detail Icons" name="detailIcons">
          <Select placeholder="Select Detail Icons">
            <Option value="icon1">Icon 1</Option>
            <Option value="icon2">Icon 2</Option>
            <Option value="icon3">Icon 3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="Sub Title" name="subTitle">
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Hindi Description" name="hindiDescription">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="SKU Number" name="skuNumber">
          <Input />
        </Form.Item>
        <Form.Item label="GST (%)" name="gst">
          <Input type="number" />
        </Form.Item>
        <Table
          columns={weightColumns}
          dataSource={weights}
          pagination={false}
        />
        <div style={{ marginTop: '10px' }}>
          <Button
            type="primary"
            style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
            onClick={handleAddWeight}
          >
            + Add New Weight
          </Button>
        </div>
        <h3 className="text-lg font-semibold mb-4 mt-4">Benefits</h3>
        {benefits.map((benefit, index) => (
          <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <Input.TextArea
              placeholder="Benefit"
              value={benefit}
              onChange={(e) => {
                const newBenefits = [...benefits];
                newBenefits[index] = e.target.value;
                setBenefits(newBenefits);
                form.setFieldsValue({ benefits: newBenefits });
              }}
              rows={3}
            />
            <Button danger onClick={() => handleDeleteBenefit(index)}>X</Button>
          </div>
        ))}
        <Button 
          type="primary" 
          onClick={handleAddBenefit} 
          style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
        >
          + Add
        </Button>
        <h3 className="text-lg font-semibold mb-4 mt-4">FAQ</h3>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Form.Item label="Question">
              <Input
                placeholder="Question"
                value={faq.question}
                onChange={(e) => {
                  const newFaqs = [...faqs];
                  newFaqs[index].question = e.target.value;
                  setFaqs(newFaqs);
                  form.setFieldsValue({ faq: newFaqs });
                }}
              />
            </Form.Item>
            <Form.Item label="Answer">
              <Input.TextArea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => {
                  const newFaqs = [...faqs];
                  newFaqs[index].answer = e.target.value;
                  setFaqs(newFaqs);
                  form.setFieldsValue({ faq: newFaqs });
                }}
                rows={3}
              />
            </Form.Item>
            <Button danger onClick={() => handleDeleteFaq(index)}>X</Button>
          </div>
        ))}
        <Button 
          type="primary" 
          onClick={handleAddFaq} 
          style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
        >
          + Add
        </Button>
        <h3 className="text-lg font-semibold mb-4 mt-4">Image</h3>
        <Form.Item label="Image" name="image">
          <Upload beforeUpload={() => false} maxCount={1}>
            <Button icon={<UploadOutlined />}>Choose File</Button>
          </Upload>
          <p>Image size must be less than 1.5 MB</p>
        </Form.Item>
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            style={{ backgroundColor: '#1890ff', color: '#fff' }}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
      <footer className="mt-8 text-center text-gray-600">
        Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
      </footer>
    </div>
  );
};

export default AddProduct;