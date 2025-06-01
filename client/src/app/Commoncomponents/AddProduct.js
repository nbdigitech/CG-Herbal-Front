import React from 'react';
import { Form, Input, Select, Button, Table, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddProduct = ({ form, weights, setWeights, benefits, setBenefits, faqs, setFaqs, handleAddProduct, setSelectedMenu,categories, subCategories, remedies, ingredients ,weightUnits, hsncodes, fetchProducts}) => {
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
  value={record.wt || '--Select Weight--'}
  onChange={(value) => {
    const updatedWeights = [...weights];
    updatedWeights[index].wt = value;
    setWeights(updatedWeights);
  }}
  placeholder="Select Weight"
>
  {weightUnits.map((unit) => (
    <Option key={unit.id} value={unit.title}>
      {unit.title}
    </Option>
  ))}
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
  value={record.hsncode || '--Select--'}
  onChange={(value) => {
    const updatedWeights = [...weights];
    updatedWeights[index].hsncode = value;
    setWeights(updatedWeights);
  }}
  placeholder="Select HSN Code"
>
  {hsncodes.map((item) => (
    <Option key={item.id} value={item.hsncode}>
      {item.hsncode}
    </Option>
  ))}
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
  <Select placeholder="Select Category">
    {categories.map((category) => (
      <Option key={category.id} value={category.id}>
        {category.name}
      </Option>
    ))}
  </Select>
</Form.Item>

        <Form.Item label="Select Sub Category" name="subCategory">
  <Select placeholder="Select Sub Category">
    {subCategories.map((subcategory) => (
      <Option key={subcategory.id} value={subcategory.id}>
        {subcategory.name}
      </Option>
    ))}
  </Select>
</Form.Item>

       <Form.Item label="Select Remedy" name="remedy">
  <Select placeholder="Select Remedy" mode="multiple">
    {remedies.map((remedy) => (
      <Option key={remedy.id} value={remedy.id}>
        {remedy.name}
      </Option>
    ))}
  </Select>
</Form.Item>

        <Form.Item label="Select Ingredients" name="ingredients">
  <Select placeholder="Select Ingredients" mode="multiple">
    {ingredients.map((ingredient) => (
      <Option key={ingredient.id} value={ingredient.id}>
        {ingredient.name}
      </Option>
    ))}
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