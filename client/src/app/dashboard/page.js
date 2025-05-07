'use client';
import { useEffect, useState } from 'react';
import { Modal, Input, Button, message, Spin, Form, Layout, Menu, Card, Table, Switch, Popconfirm, Select, Checkbox, Breadcrumb, Upload, DatePicker , Radio } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingOutlined, FileTextOutlined, PlusOutlined, EditOutlined, DeleteOutlined, LockOutlined, SettingOutlined, BellOutlined, LogoutOutlined, MenuOutlined, UploadOutlined, LeftOutlined, ExclamationCircleOutlined , EyeOutlined , FileExcelOutlined } from '@ant-design/icons'; 
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
const { Header, Sider, Content } = Layout;
const { Option } = Select;

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default function AdminDashboard() {
  
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    { id: 1, image: '/placeholder1.jpg', name: 'Holi Gift Package', status: 'Inactive' },
    { id: 2, image: '/placeholder2.jpg', name: 'Gourmet Products', status: 'Active' },
    { id: 3, image: '/placeholder3.jpg', name: 'Personal Care', status: 'Active' },
    { id: 4, image: '/placeholder4.jpg', name: 'Ayush Products', status: 'Active' },
    { id: 5, image: '/placeholder5.jpg', name: 'Home Care', status: 'Inactive' },
    { id: 6, image: '/placeholder6.jpg', name: 'Sweets', status: 'Inactive' },
    { id: 7, image: '/placeholder7.jpg', name: 'Combo', status: 'Inactive' },
    { id: 8, image: '/placeholder8.jpg', name: 'Premium Products', status: 'Active' },
    { id: 9, image: '/placeholder9.jpg', name: 'Other Products', status: 'Active' },
  ]);

  const [subCategories, setSubCategories] = useState([
    { id: 1, image: '/placeholder.jpg', name: 'Gourmet', category: 'Gourmet Products', status: 'Active' },
    { id: 2, image: '/placeholder.jpg', name: 'Herbal Soaps', category: 'Personal Care', status: 'Active' },
    { id: 3, image: '/placeholder.jpg', name: 'Herbal Foods', category: 'Gourmet Products', status: 'Active' },
    { id: 4, image: '/placeholder.jpg', name: 'Aloe Vera Products', category: 'Personal Care', status: 'Inactive' },
    { id: 5, image: '/placeholder.jpg', name: 'Grooming', category: 'Personal Care', status: 'Inactive' },
    { id: 6, image: '/placeholder.jpg', name: 'Essential Oils', category: 'Personal Care', status: 'Active' },
    { id: 7, image: '/placeholder.jpg', name: 'Churna', category: 'Ayush Products', status: 'Active' },
    { id: 8, image: '/placeholder.jpg', name: 'Energy, Strengthens', category: 'Ayush Products', status: 'Active' },
    { id: 9, image: '/placeholder.jpg', name: 'Aloevera Products', category: 'Premium Products', status: 'Active' },
  ]);

  const [remedies, setRemedies] = useState([
    { id: 1, name: 'Diabetes', status: 'Active' },
    { id: 2, name: 'Acidity', status: 'Active' },
    { id: 3, name: 'Hair Problems', status: 'Active' },
    { id: 4, name: 'Digestives', status: 'Active' },
    { id: 5, name: 'Joint Pain', status: 'Active' },
    { id: 6, name: 'Body & Skin Care', status: 'Active' },
    { id: 7, name: 'Health Tonic for Males', status: 'Active' },
    { id: 8, name: 'Laxatives', status: 'Active' },
    { id: 9, name: 'Memory Booster', status: 'Active' },
    { id: 10, name: 'Immunity Booster', status: 'Active' },
    { id: 11, name: 'Hepato-protective', status: 'Active' },
    { id: 12, name: 'Heart Diseases', status: 'Inactive' },
  ]);
  const [ingredients, setIngredients] = useState([]);
  const [weightUnits, setWeightUnits] = useState([
    { id: 1, title: '100 gm', shippingAmount: 120 },
    { id: 2, title: '15 ml', shippingAmount: 120 },
    { id: 3, title: '250 gm', shippingAmount: 120 },
    { id: 4, title: '120 gm', shippingAmount: 120 },
    { id: 5, title: '50 gm', shippingAmount: 120 },
    { id: 6, title: '110 gm', shippingAmount: 120 },
    { id: 7, title: '30 gm', shippingAmount: 120 },
    { id: 8, title: '200 gm', shippingAmount: 120 },
    { id: 9, title: '500 gm', shippingAmount: 120 },
    { id: 10, title: '1 Liter', shippingAmount: 120 },
    { id: 11, title: '400 gm', shippingAmount: 120 },
    { id: 12, title: '500 ml', shippingAmount: 120 },
  ]);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [taxes, setTaxes] = useState([
    { id: 1, name: 'IGST', value: 10, status: 'Active' },
    { id: 2, name: 'GST', value: 18, status: 'Active' },
  ]);
  const [selectedTax, setSelectedTax] = useState(null);
  const [taxForm] = Form.useForm();
  const [hsncodes, setHsncodes] = useState([
    { id: 1, hsncode: '3004 9011', gstValue: 12 },
    { id: 2, hsncode: '0813 4090', gstValue: 12 },
    { id: 3, hsncode: '0904 2211', gstValue: 12 },
    { id: 4, hsncode: '1905 3100', gstValue: 12 },
    { id: 5, hsncode: '2103 9090', gstValue: 12 },
    { id: 6, hsncode: '1704 0000', gstValue: 12 },
    { id: 7, hsncode: '3808 9400', gstValue: 18 },
    { id: 8, hsncode: '3401 1110', gstValue: 18 },
    { id: 9, hsncode: '0920 2090', gstValue: 5 },
    { id: 10, hsncode: '3204 0000', gstValue: 5 },
    { id: 11, hsncode: '3307 4100', gstValue: 5 },
    { id: 12, hsncode: '7117 1910', gstValue: 5 },
  ]);
  const [selectedHsncode, setSelectedHsncode] = useState(null);
  const [hsncodeForm] = Form.useForm();
  const [orders, setOrders] = useState([
    { id: '0105020502', email: 'capricorncorporation@gmail.com', paymentStatus: 'failure!!!', orderMode: 'online-order', qty: 2, price: 240, orderStatus: 'Order Failed', shippingStatus: 'Not shipped', createdAt: '01-05-2025 11:50:00' },
    { id: '0105020501', email: 'ind2soul@gmail.com', paymentStatus: 'COD', orderMode: 'online-order', qty: 1, price: 575, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '01-05-2025 10:23:13' },
    { id: '3004202506', email: 'narendrasankhla64@gmail.com', paymentStatus: 'COD', orderMode: 'online-order', qty: 2, price: 1250, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 03:39:15' },
    { id: '3004202505', email: 'narendrasankhla64@gmail.com', paymentStatus: 'failure!!!', orderMode: 'online-order', qty: 2, price: 1200, orderStatus: 'Order Failed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 03:38:35' },
    { id: '3004202504', email: 'narendrasankhla64@gmail.com', paymentStatus: 'COD', orderMode: 'online-order', qty: 2, price: 1250, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 03:36:34' },
    { id: '3004202503', email: 'sanjoy.ddj@gmail.com', paymentStatus: 'success', orderMode: 'online-order', qty: 5, price: 645, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 08:44:40' },
    { id: '3004202502', email: 'sanjoy.ddj@gmail.com', paymentStatus: 'failure!!!', orderMode: 'online-order', qty: 5, price: 645, orderStatus: 'Order Failed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 08:44:10' },
    { id: '3004202501', email: 'vigneswar chowdary@gmail.com', paymentStatus: 'COD', orderMode: 'online-order', qty: 2, price: 1250, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '30-04-2025 06:37:12' },
    { id: '2904202503', email: 'akashkhanna315@gmail.com', paymentStatus: 'success', orderMode: 'online-order', qty: 6, price: 700, orderStatus: 'Placed', shippingStatus: 'Not shipped', createdAt: '29-04-2025 11:37:44' },
    { id: '2904202502', email: 'chanchalverma6614@gmail.com', paymentStatus: 'failure!!!', orderMode: 'online-order', qty: 1, price: 405, orderStatus: 'Order Failed', shippingStatus: 'Not shipped', createdAt: '29-04-2025 05:40:35' },
  ]);
  const [orderStatuses, setOrderStatuses] = useState([
    { id: 1, name: 'Delivered' },
    { id: 2, name: 'Placed' },
    { id: 3, name: 'Shipped' },
    { id: 4, name: 'Processing' },
    { id: 5, name: 'Cancelled' },
    { id: 6, name: 'Return' },
  ]);
  const [shippingStatuses, setShippingStatuses] = useState([
    { id: 1, name: 'Despatched' },
    { id: 2, name: 'Delivered' },
    { id: 3, name: 'In-transit' },
  ]);
  const [serviceProviders, setServiceProviders] = useState([
    { id: 1, name: 'Ajay Dewangan' },
    { id: 2, name: 'Speed Post' },
    { id: 3, name: 'shiprocket' },
  ]);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Ashok Jain', mobile: '9136892721', email: 'ashokjain72@gmail.com', gender: 'Male', dob: '02/18/1992', status: 'ON', createdAt: '18.02.2022' },
    { id: 2, name: 'Saurabh Agrawal', mobile: '8310810162', email: 'agrawalsaurabh4439@gmail.com', gender: 'Male', dob: '08/10/1987', status: 'ON', createdAt: '19.02.2022' },
    { id: 3, name: 'ARNAB BHATTACHARYA', mobile: '7978141413', email: 'arnab_bhatta431@gmail.com', gender: 'Male', dob: '08/31/1986', status: 'ON', createdAt: '18.02.2022' },
    { id: 4, name: 'Rajni khunte', mobile: '8319766085', email: 'rajnikhunte125@gmail.com', gender: 'Female', dob: '02/22/2022', status: 'ON', createdAt: '13.04.2022' },
    { id: 5, name: 'Ramesh', mobile: '9981680881', email: 'admin@travelbastar.com', gender: '', dob: '', status: 'ON', createdAt: '22.04.2022' },
    { id: 6, name: 'cg herbal', mobile: '', email: 'cgherbalstore@gmail.com', gender: '', dob: '', status: 'ON', createdAt: '03.06.2022' },
    { id: 7, name: 'Vikas', mobile: '7000684647', email: 'vikasrajsahu28@gmail.com', gender: '', dob: '', status: 'ON', createdAt: '14.06.2022' },
    { id: 8, name: 'Vikas shu', mobile: '9770445586', email: 'otcvikasrajsahu@gmail.com', gender: '', dob: '', status: 'ON', createdAt: '14.06.2022' },
    { id: 9, name: 'abcd', mobile: '9876543210', email: 'abcd@gmail.com', gender: 'Male', dob: '01/01/2022', status: 'ON', createdAt: '11.07.2022' },
    { id: 10, name: 'test', mobile: '8249864532', email: 'test@test.com', gender: '', dob: '', status: 'ON', createdAt: '12.07.2022' },
  ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(null);
  const [selectedShippingStatus, setSelectedShippingStatus] = useState(null);
  const [orderStatusForm] = Form.useForm();
  const [shippingStatusForm] = Form.useForm();
  const [serviceProviderForm] = Form.useForm();
  const [customerForm] = Form.useForm();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderForm] = Form.useForm();
  const [pageSize, setPageSize] = useState(10);
  const [showProductTable, setShowProductTable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderSearch, setOrderSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [selectedMenu, setSelectedMenu] = useState('Order Manager' ,);
 

  
  const [profileData, setProfileData] = useState({
    name: 'Superadmin',
    newPassword: '',
    confirmPassword: '',
  });
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [form] = Form.useForm();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [collapsed, setCollapsed] = useState(false);
  const [empowrdList, setEmpowrdList] = useState([
    {
      id: 1,
      blogImage: 'https://res.cloudinary.com/chhattisgarhherbals-org/image/upload/v1626216174/chhattisgarhherbals-org/category/p9hixh5s3cynecdumchv.jpg',
      blogTitle: 'Empowering Tribal Communities',
      blogContent: 'Empowering Tribal Women',
      blogDescription: 'From the heart of Chhattisgarh',
      blogDate: '2022-02-09',
      seoTitle: 'Empowering Tribal Communities SEO',
      seoDescription: 'SEO description for empowering tribal communities',
      seoKeywords: 'tribal, empowerment, chhattisgarh',
      seoSchema: '{"@type":"Article"}',
    },
    {
      id: 2,
      blogImage: 'https://via.placeholder.com/50',
      blogTitle: 'Sustainable Living',
      blogContent: 'Promoting Eco-Friendly Practices',
      blogDescription: 'A journey towards sustainability',
      blogDate: '2023-05-15',
      seoTitle: 'Sustainable Living SEO',
      seoDescription: 'SEO description for sustainable living',
      seoKeywords: 'sustainability, eco-friendly',
      seoSchema: '{"@type":"Article"}',
    },
  ]);
  const [communityList, setCommunityList] = useState([
    { image: 'https://res.cloudinary.com/chhattisgarhherbals-org/image/upload/v1626216174/chhattisgarhherbals-org/category/p9hixh5s3cynecdumchv.jpg',  description: 'Empowering tribal people', status: 'Active' },
    { image: 'https://via.placeholder.com/50',  description: 'Sustainable living group', status: 'Inactive' },
  ]);
  const [selectedEmpowrd, setSelectedEmpowrd] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [districtList, setDistrictList] = useState([
    { id: 1, name: 'Bilaspur' },
    { id: 2, name: 'Raipur' },
    { id: 3, name: 'Korba' },
    { id: 4, name: 'Ambikapur' },
    { id: 5, name: 'Janjgir-Champa' },
    { id: 6, name: 'Bhilai' },
  ]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [storeList, setStoreList] = useState([
    { id: 1, name: 'EVD TECHNOLOGY LLP', mapUrl: 'azdsf', address: '', storeLocator: '' },
    { id: 2, name: '1', mapUrl: '4', address: '', storeLocator: '' },
    { id: 3, name: 'Sanju', mapUrl: 'dfgsdf', address: '', storeLocator: '' },
    { id: 4, name: 'EVD TECHNOLOGY LLP', mapUrl: '', address: 'RAIPUR ABHANPUR', storeLocator: '' },
    { id: 5, name: 'EVD TECHNOLOGY LLP', mapUrl: 'azdsf', address: '', storeLocator: '' },
    { id: 6, name: 'test', mapUrl: 'nil', address: '', storeLocator: '' },
  ]);
  const [aboutList, setAboutList] = useState([
    { id: 1, image: 'path/to/image1.jpg', title: 'Who We Are', description: 'CHHATTISGARH HERBALS is a brand dedicated to the cause of tribal prosperity and dignity, women empowerment, forest conservation and biodiversity conservation. The products are made using the MFP species from local forests. Chhattisgarh Minor Forest Produce (T&DO) Cooperative Federation Ltd is a state Government mandated, three tiered cooperative body with more than 13.5 Lakh forest dwellers as primary members. CGMFP Federation is the custodian of the brand CHHATTISGARH HERBALS and works on behalf of its members. Every rupee generated from sales of these products translates towards providing financial and social benefits to the cooperative members.' },
    { id: 2, image: 'path/to/image2.jpg', title: 'What We Do', description: 'CGMFP Cooperative members collect MFP which is procured by Women SHG at haat bazaars, brought to Van Dhan Kendras for primary processing by Women SHG members and Storage. 52 Micro processing units owned and Operated by Women SHG members and supported by technical staff from CGMFP produce more than 120 products under the brand name of CHHATTISGARH HERBALS. CGMFP Federation provides the marketing and promotion support for sales of products at brick and mortar and Digital channels.' },
    { id: 3, image: 'path/to/image3.jpg', title: 'Impact Numbers', description: 'Impact Numbers.' },
    { id: 4, image: 'path/to/image4.jpg', title: 'Test', description: 'Test123' },
    { id: 5, image: 'path/to/image5.jpg', title: 'Test', description: 'Test' },
  ]);
  const [newsList, setNewsList] = useState([
    { id: 1, image: 'path/to/news1.jpg', title: 'बस्तर की महिलाओं का सिंगापुर में सम्मान', content: '20 जुलाई को चार आदिवासी महिलाएं स्वयं-सहायता समूह (SHGs) से बस्तर से सिंगापुर गईं और ESG Grit Awards समारोह में भाग लिया।', description: 'यह पुरस्कार छत्तीसगढ़ की महिलाओं को उनके सतत विकास, गरीबी उन्मूलन और महिला सशक्तिकरण में योगदान के लिए दिया जाना चाहिए। यह पुरस्कार जगदलपुर और कोरबा से दो स्वयं-सहायता समूहों की महिलाओं को दिया जाएगा, जो पहली बार विदेश में हैं।', date: '2022-06-22' },
    { id: 2, title: 'छत्तीसगढ़ हर्बल्स का अंतरराष्ट्रीय स्तर', content: 'पिछले 9 महीनों में वित्तीय वर्ष 2022-23 में छत्तीसगढ़ हर्बल्स ने विभिन्न अंतरराष्ट्रीय, राष्ट्रीय और अंतर-राज्यीय प्रदर्शनियों में भाग लिया।', description: 'जड़ी-बूटियों के उत्पाद धनवंतरी जेनेरिक मेडिकल स्टोर्स और 30 सनजीवनी केंद्रों में उपलब्ध हैं। राज्य माइनर फॉरेस्ट प्रोड्यूस कोऑपरेटिव फेडरेशन 150 से अधिक मूल्यवर्धित उत्पादों का उत्पादन कर रहा है।', date: '2022-01-17' },
  ]);

  const [blogList, setBlogList] = useState([
    { id: 1, image: 'path/to/blog1.jpg', title: '10 Tips for natural skincare that will boost your summer skin regime', content: 'Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultricies nibh, a tincidunt risus pretium eleifend.', date: '2022-02-11', status: 'Active' },
    { id: 2, image: 'path/to/blog2.jpg', title: 'Herbal ingredients you can add to your daily cup of tea', content: 'Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultricies nibh, a tincidunt risus pretium eleifend.', date: '2022-02-11', status: 'Active' },
    { id: 3, image: 'path/to/blog3.jpg', title: 'How honey is sourced across the world', content: 'Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultricies nibh, a tincidunt risus pretium eleifend.', date: '2022-02-11', status: 'Active' },
    { id: 4, image: 'path/to/blog4.jpg', title: 'Ayurveda in everyday life', content: 'Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultricies nibh, a tincidunt risus pretium eleifend.', date: '2022-04-14', status: 'Active' },
  ]);

  const [corporateList, setCorporateList] = useState([
    { id: 1, name: 'Ashutosh Sinha', email: 'as0984108@gmail.com', phone: '7354760926', organization: 'Individual', message: 'I want to become Jamun & Mahua supplier for Chhattisgarh Herbals.' },
    { id: 2, name: 'Reeta Sinha', email: 'as0984109@gmail.com', phone: '7354760926', organization: 'AKTA SELF HELP GROUP', message: 'I want to collaborate with Chhattisgarh Herbals.' },
    { id: 3, name: 'Mustak Khan Khatri mara', email: '', phone: '6207464237', organization: '1500', message: 'Flipkart Mai doping' },
    { id: 4, name: 'Mustak Khan Khatri mara', email: '', phone: '6207464237', organization: '1500', message: 'Flipkart Mai doping' },
    { id: 5, name: 'Shyam Shankar Pandey', email: 'pshymshankar6@gmail.com', phone: '09452056741', organization: 'MVW GROW INDIA', message: 'Please solution' },
    { id: 6, name: 'Ranjan Nath', email: 'nathranjan@gmail.com', phone: '9826680467', organization: 'Reliance Retail Ltd', message: 'I have interested for distribution ship in Raipur' },
    { id: 7, name: 'Amrita Singh', email: 'singhamrita1@gmail.com', phone: '+919617223333', organization: 'Rural Support LLP', message: 'Au urgent requirement of nearly 40 Processed herbs quality of export quality. Want to get a contact person’s number. Thank you' },
  ]);
  const [exhibitionList, setExhibitionList] = useState([]);
  const [contactList, setContactList] = useState([
    { id: 1, firstName: 'Ajay', lastName: 'Dewangan', email: 'ajaydewangan215@gmail.com', subject: 'Subject', message: 'This is Testing' },
    { id: 2, firstName: 'test', lastName: 'test', email: 'test@gmail.com', subject: 'test', message: 'test' },
    { id: 3, firstName: 'abcd', lastName: 'abcd', email: 'abcd@gmail.com', subject: 'abcdddd', message: 'test' },
    { id: 4, firstName: 'Vinod', lastName: 'Dewangan', email: 'vinod.dewangan@gmail.com', subject: 'Supply my order no. 2508202201.', message: 'Please quick supply my order no. 2508202201.' },
    { id: 5, firstName: 'Debosmita', lastName: 'Saha', email: 'debosmita.sh4@gmail.com', subject: 'I didn\'t get my product yet after payment', message: 'HI, When I will get my product I had already paid for mahua jam, mahua squash mahua chikki etc. Through paytm but 1week has passed till I didn\'t receive my products yet.' },
    { id: 6, firstName: 'Abhishek', lastName: 'Verma', email: 'abhishek_verma_all@yahoo.in', subject: 'Cricket Association', message: 'Please let us know of whom to connect for marketing tie ups for cricket products.' },
    { id: 7, firstName: 'Carl', lastName: 'E.', email: 'c.e@aneesho.com', subject: 'DESIGN WORK', message: 'Do you need help with graphic design – brochures, banners, flyers, advertisements, social media posts, logos etc? We charge a low fixed monthly fee. Let me know if you’re interested and I would like to see your portfolio.' },
    { id: 8, firstName: 'Janardan L', lastName: 'Kulkarani', email: 'kulkarnijanardan@gmail.com', subject: 'Please give me your contact number', message: 'I have same purchase' },
    { id: 9, firstName: 'Luna', lastName: 'Luna Wilson', email: 'luna@theheritage-seo.com', subject: 'Website Design with 6 Months Free Maintenance', message: 'Hi, We have a team of 55+ highly qualified and award-winning design teams that creates Innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals. With our web design services, you can resolve your design.' },
  ]);
const [selectedProduct, setSelectedProduct] = useState(null);
const [weightList, setWeightList] = useState([]);
const [isAddCategoryModalVisible, setIsAddCategoryModalVisible] = useState(false);
const [isEditCategoryModalVisible, setIsEditCategoryModalVisible] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedSubCategory, setSelectedSubCategory] = useState(null);
const [selectedRemedy, setSelectedRemedy] = useState(null);


const [categoryForm] = Form.useForm();
const [weightUnitForm] = Form.useForm();
const [productList, setProductList] = useState([
  { id: 1, image: '/images/product1.jpg', name: 'Organic Wild Forest Honey', category: 'Premium Products', subCategory: 'Other', weights: [{ wt: '600 gm', price: 525, count: 10 }, { wt: '800 gm', price: 760, count: 0 }, { wt: '1200 gm', price: 1080, count: 0 }, { wt: '200 gm', price: 195, count: 11 }, { wt: '300 gm', price: 315, count: 0 }] },
  { id: 2, image: '/images/product2.jpg', name: 'Jeera Millet Cookies', category: 'Gourmet Products', subCategory: 'Gourmet', weights: [{ wt: '200 gm', price: 120, count: 100 }] },
  { id: 3, image: '/images/product3.jpg', name: 'Triphala Churna', category: 'Ayush Products', subCategory: 'Churna', weights: [{ wt: '100 gm', price: 55, count: 0 }, { wt: '200 gm', price: 90, count: 6 }, { wt: '500 gm', price: 190, count: 0 }] },
  { id: 4, image: '/images/product4.jpg', name: 'Pure Honey', category: 'Premium Products', subCategory: 'Gourmet', weights: [{ wt: '800 gm', price: 760, count: 0 }, { wt: '1200 gm', price: 1080, count: 0 }, { wt: '600 gm', price: 525, count: 22 }, { wt: '300 gm', price: 315, count: 0 }] },
  { id: 5, image: '/images/product5.jpg', name: 'Wild Forest Honey', category: 'Other Products', subCategory: 'Gourmet', weights: [{ wt: '600 gm', price: 600, count: 15 }, { wt: '800 gm', price: 760, count: 0 }, { wt: '1200 gm', price: 1080, count: 0 }, { wt: '200 gm', price: 195, count: 14 }, { wt: '300 gm', price: 315, count: 0 }] },
  { id: 6, image: '/images/product6.jpg', name: 'Jackfruit & Mango Mix Pickle', category: 'Gourmet Products', subCategory: 'Gourmet', weights: [{ wt: '425 gm', price: 285, count: 0 }, { wt: '200 gm', price: 145, count: 0 }] },
  { id: 7, image: '/images/product7.jpg', name: 'Bastard Cashew (Salted)', category: 'Gourmet Products', subCategory: 'Gourmet', weights: [{ wt: '30 gm', price: 50, count: 0 }, { wt: '80 gm', price: 149, count: 0 }] },
]);


const [addBenefits, setAddBenefits] = useState([]);
const router = useRouter();

  // Mock banner list data
  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      image: 'https://res.cloudinary.com/chhattisgarhherbals-org/image/upload/v1626216174/chhattisgarhherbals-org/category/p9hixh5s3cynecdumchv.jpg',
      title: 'Purity that is priceless',
      description: 'Each product is handcrafted with care and love by the empowered woman of these forest areas, endowing each product with the purity that is truly priceless',
    },
  ]);

  // Mock featured product list data
  const [featuredProductList, setFeaturedProductList] = useState([
    { id: 1, image: 'https://via.placeholder.com/50', name: 'Diwali Gift Hamper', category: 'Premium Products', subCategory: '', price: '₹500' },
    { id: 2, image: 'https://via.placeholder.com/50', name: 'Lemon Soap', category: 'Personal Care', subCategory: '', price: '₹150' },
    { id: 3, image: 'https://via.placeholder.com/50', name: 'Activated Charcoal Soap', category: 'Personal Care', subCategory: '', price: '₹200' },
    { id: 4, image: 'https://via.placeholder.com/50', name: 'Multani Soap', category: 'Personal Care', subCategory: '', price: '₹180' },
    { id: 5, image: 'https://via.placeholder.com/50', name: 'Honey Soap', category: 'Personal Care', subCategory: '', price: '₹160' },
    { id: 6, image: 'https://via.placeholder.com/50', name: 'Camel Milk Soap', category: 'Personal Care', subCategory: '', price: '₹220' },
    { id: 7, image: 'https://via.placeholder.com/50', name: 'Amla Murabba', category: 'Gourmet Foods', subCategory: '', price: '₹300' },
    { id: 8, image: 'https://via.placeholder.com/50', name: 'Tikhur Powder', category: 'Gourmet Foods', subCategory: '', price: '₹250' },
  ]);

  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedFeaturedProduct, setSelectedFeaturedProduct] = useState(null);
  const [weights, setWeights] = useState(selectedProduct?.weights || [
    { wt: '600 gm', count: 10, price: 525, hsncode: '', gstAmount: 28.57, taxableAmount: 571.43, discount: 0, discountType: 'rupee' },
    { wt: '800 gm', count: 0, price: 760, hsncode: '', gstAmount: 36.19, taxableAmount: 723.81, discount: 10, discountType: 'percent' },
    { wt: '1200 gm', count: 0, price: 1080, hsncode: '', gstAmount: 51.43, taxableAmount: 1028.57, discount: 10, discountType: 'percent' },
    { wt: '200 gm', count: 11, price: 195, hsncode: '', gstAmount: 10.48, taxableAmount: 209.52, discount: 0, discountType: 'rupee' },
    { wt: '300 gm', count: 0, price: 315, hsncode: '', gstAmount: 33.75, taxableAmount: 281.25, discount: 40, discountType: 'rupee' },
  ]);
  const [benefits, setBenefits] = useState(selectedProduct?.benefits || ['']);
  const handleAddBenefit = () => {
    setBenefits([...benefits, '']); // Add a new empty benefit string
  };

  const [faqs, setFaqs] = useState(selectedProduct?.faq || [{ question: '', answer: '' }]);
  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };
  
  const handleDeleteFaq = (indexToDelete) => {
    setFaqs(faqs.filter((_, index) => index !== indexToDelete));
  };
  const [weights2, setWeights2] = useState([]);
 
  const handleDeleteWeight2 = (index) => {
    const updatedWeights2 = weights2.filter((_, i) => i !== index);
    setWeights2(updatedWeights2);
  };
  const handleAddWeight2 = (newWeight) => {
    setWeights2([...weights2, newWeight]);
  };

  const handleDeleteWeight = (index) => {
    const updatedWeights = weights.filter((_, i) => i !== index);
    setWeights(updatedWeights);
  };
  
  
  // Mock product list for dropdown in Add/Edit Featured Product
  const productOptions = [
    { id: 1, name: 'Diwali Gift Hamper', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Lemon Soap', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Activated Charcoal Soap', image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Multani Soap', image: 'https://via.placeholder.com/50' },
    { id: 5, name: 'Honey Soap', image: 'https://via.placeholder.com/50' },
    { id: 6, name: 'Camel Milk Soap', image: 'https://via.placeholder.com/50' },
    { id: 7, name: 'Amla Murabba', image: 'https://via.placeholder.com/50' },
    { id: 8, name: 'Tikhur Powder', image: 'https://via.placeholder.com/50' },
  ];
  const weightOptions = weightUnits.map(unit => ({
    value: unit.title,
    label: unit.title,
  }));
  const handleProductChange = (id, field, value) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'Select product',
      weight: 'Select weight',
      qty: 0,
      price: 0,
      discount: 0,
    };
    setProducts([...products, newProduct]);
  };
  // Mock admin list data
  const [mockAdminList, setMockAdminList] = useState([
    { id: 1, name: 'Ajay Dewangan', email: 'superadmin@gmail.com', role: 'admin', district: 'Bilaspur', block: 'Raipur', village: 'Raipur', status: 'Active' },
    { id: 2, name: 'CG HERBAL', email: 'cgherbalsamiti@gmail.com', role: 'samiti-admin', district: 'Korba', block: 'Korba', village: 'Korba', status: 'Active' },
    { id: 3, name: 'Superadmin', email: 'admin@cgherbal.com', role: 'super-admin', district: 'Raipur', block: 'Raipur', village: 'Raipur', status: 'Active' },
    { id: 4, name: 'Ravi Sharma', email: 'ravi@cgherbal.com', role: 'volunteer', district: 'Raipur', block: 'Dhamtari', village: 'Dhamtari', status: 'Inactive' },
    { id: 5, name: 'Priya Patel', email: 'priya@cgherbal.com', role: 'warehouse-admin', district: 'Korba', block: 'Katghora', village: 'Katghora', status: 'Active' },
    { id: 6, name: 'Suresh Kumar', email: 'suresh@cgherbal.com', role: 'data-entry', district: 'Bilaspur', block: 'Takhatpur', village: 'Takhatpur', status: 'Active' },
    { id: 7, name: 'Anita Gupta', email: 'anita@cgherbal.com', role: 'forest-lover', district: 'Raipur', block: 'Abhanpur', village: 'Abhanpur', status: 'Inactive' },
    { id: 8, name: 'Vikram Singh', email: 'vikram@cgherbal.com', role: 'customer-manager', district: 'Korba', block: 'Pali', village: "Pali", status: 'Active' },
  ]);

  // Mock role list data
  const [mockRoleList, setMockRoleList] = useState([
    { id: 1, name: 'forest-lover', permissions: ['Dashboard', 'Profile'] },
    { id: 2, name: 'admin', permissions: ['Users', 'Roles'] },
    { id: 3, name: 'samiti-admin', permissions: ['Home Component', 'Pages'] },
    { id: 4, name: 'warehouse-admin', permissions: ['Product Manager', 'Order Manager'] },
    { id: 5, name: 'volunteer', permissions: ['Customer Manager', 'Connect'] },
    { id: 6, name: 'Data Entry', permissions: ['FAQ', 'Grievance Category'] },
  ]);
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [orderRes, userRes, productRes, blogRes] = await Promise.all([
          fetch('http://localhost:5000/api/orders'),
          fetch('http://localhost:5000/api/user'),
          fetch('http://localhost:5000/api/products'),
          fetch('http://localhost:5000/api/blogs'),
        ]);

        if (!orderRes.ok || !userRes.ok || !productRes.ok || !blogRes.ok) {
          throw new Error('Failed to fetch data');
        }

        setOrders(await orderRes.json());
        setUsers(await userRes.json());
        setProducts(await productRes.json());
        setBlogs(await blogRes.json());
      } catch (error) {
        message.error('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Reset form when navigating to addFeaturedProduct or editFeaturedProduct
  useEffect(() => {
    if (selectedMenu === 'addFeaturedProduct') {
      form.resetFields();
    }
    if (selectedMenu === 'editFeaturedProduct' && selectedFeaturedProduct) {
      form.setFieldsValue({
        productId: productOptions.find(p => p.name === selectedFeaturedProduct.name)?.id,
      });
    }
  }, [selectedMenu, selectedFeaturedProduct, form]);

  const debouncedOrderSearch = debounce((value) => setOrderSearch(value), 300);
  const debouncedUserSearch = debounce((value) => setUserSearch(value), 300);

  const filteredOrders = orders.filter(order =>
    (order.orderId?.toLowerCase() || '').includes(orderSearch.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    (user.name?.toLowerCase() || '').includes(userSearch.toLowerCase()) ||
    (user.email?.toLowerCase() || '').includes(userSearch.toLowerCase())
  );

  const handleMenuSelect = ({ key }) => {
    console.log('Menu selected:', key); // Debug log to confirm key
    setSelectedMenu(key);
  };
 
  const calculateTotalRevenue = () => {
    return orders.reduce((total, order) => total + parseFloat(order.total || 0), 0).toFixed(2);
  };

  const latestOrder = orders
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  const latestCustomer = users
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  const lastOrderColumns = [
    { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Amount', dataIndex: 'total', key: 'total', render: (total) => `₹${total}` },
    { title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt', render: (createdAt) => moment(createdAt).format('YYYY-MM-DD HH:mm:ss') },
  ];

  const recentCustomerColumns = [
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile', dataIndex: 'phone', key: 'phone' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt', render: (createdAt) => moment(createdAt).format('YYYY-MM-DD HH:mm:ss') },
  ];

  const bannerListColumns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img src={image} alt="banner" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      ),
    },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedBanner(record);
              setSelectedMenu('editBanner');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this banner?"
            onConfirm={() => handleDeleteBanner(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const featuredProductListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img src={image} alt="product" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      ),
    },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Sub Category', dataIndex: 'subCategory', key: 'subCategory' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedFeaturedProduct(record);
              setSelectedMenu('editFeaturedProduct');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this featured product?"
            onConfirm={() => handleDeleteFeaturedProduct(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const empowrdListColumns = [
    {
      title: 'Image',
      dataIndex: 'blogImage',
      key: 'blogImage',
      render: (blogImage) => (
        <img
          src={blogImage}
          alt="empowrd"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      ),
    },
    { title: ' Title', dataIndex: 'blogTitle', key: 'blogTitle' },
    { title: ' Content', dataIndex: 'blogContent', key: 'blogContent' },
    { title: 'Description', dataIndex: 'blogDescription', key: 'blogDescription' },
    { title: ' Date', dataIndex: 'blogDate', key: 'blogDate' },
    { title: 'SEO Title', dataIndex: 'seoTitle', key: 'seoTitle' },
    { title: 'SEO Keywords', dataIndex: 'seoKeywords', key: 'seoKeywords' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedEmpowrd(record);
              setSelectedMenu('editEmpowrd');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this empowrd?"
            onConfirm={() => handleDeleteEmpowrd(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const requestSort = (key, direction) => {
    setSortConfig({ key, direction });
  };

  const sortedRoleList = [...mockRoleList].sort((a, b) => {
    if (!sortConfig.key) return 0;
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];
    if (sortConfig.key === 'id') {
      aValue = parseInt(aValue);
      bValue = parseInt(bValue);
    }
    return sortConfig.direction === 'desc' ? (bValue > aValue ? 1 : -1) : (aValue > bValue ? 1 : -1);
  });

  const adminListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
    { title: 'NAME', dataIndex: 'name', key: 'name' },
    { title: 'EMAIL ADDRESS', dataIndex: 'email', key: 'email' },
    { title: 'ROLE', dataIndex: 'role', key: 'role' },
    { title: 'BLOCK', dataIndex: 'block', key: 'block' },
    { title: 'STATUS', dataIndex: 'status', key: 'status', render: (status) => (
      <span className={`px-2 py-1 rounded ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {status}
      </span>
    )},
    { 
      title: 'ACTION', 
      key: 'action', 
      render: (_, record) => (
        <div className="flex gap-2">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => {
              setSelectedAdmin(record);
              setIsEditModalVisible(true);
            }} 
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDeleteAdmin(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              icon={<DeleteOutlined />} 
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const roleListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { 
      title: 'Permissions', 
      key: 'permissions', 
      render: (_, record) => (
        <Button
          icon={<SettingOutlined />}
          className="bg-cyan-500 text-white flex items-center justify-center w-10 h-10 rounded"
          onClick={() => {
            setSelectedRole(record);
            setSelectedMenu('permissions');
          }}
        />
      ),
    },
    { 
      title: 'Action', 
      key: 'action', 
      render: (_, record) => (
        <div className="flex gap-2">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => {
              setSelectedRole(record);
              setIsEditModalVisible(true);
            }} 
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this role?"
            onConfirm={() => handleDeleteRole(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              icon={<DeleteOutlined />} 
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const districtListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { title: 'District', dataIndex: 'name', key: 'name' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedDistrict(record);
              setSelectedMenu('editDistrict');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this district?"
            onConfirm={() => handleDeleteDistrict(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];
  const storeListColumns = [
    { title: '#ID', dataIndex: 'id', key: 'id' },
    { title: 'NAME', dataIndex: 'name', key: 'name' },
    { title: 'MAP URL', dataIndex: 'mapUrl', key: 'mapUrl' },
    { title: 'ADDRESS', dataIndex: 'address', key: 'address' },
    { title: 'STORE LOCATOR', dataIndex: 'storeLocator', key: 'storeLocator' },
    {
      title: 'ACTION',
      key: 'action',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedStore(record);
              setSelectedMenu('editStore');
            }}
            className="text-yellow-500 border-yellow-500"
          />
          <Popconfirm
            title="Are you sure to delete this store?"
            onConfirm={() => handleDeleteStore(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-500 border-red-500"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

 const aboutListColumns = [
  { title: 'Image', dataIndex: 'image', key: 'image', render: (text) => <img src={text} alt="About" style={{ width: '50px' }} /> },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { 
    title: 'Description', 
    dataIndex: 'description', 
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-2">
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            setSelectedAbout(record);
            setSelectedMenu('editAbout');
          }}
          className="text-yellow-500 border-yellow-500"
        />
        <Popconfirm
          title="Are you sure to delete this about?"
          onConfirm={() => handleDeleteAbout(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<DeleteOutlined />}
            className="text-red-500 border-red-500"
          />
        </Popconfirm>
      </div>
    ),
  },
];

const newsListColumns = [
  { title: 'Image', dataIndex: 'image', key: 'image', render: (text) => <img src={text} alt="News" style={{ width: '50px' }} /> },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Content', dataIndex: 'content', key: 'content' },
  { 
    title: 'Description', 
    dataIndex: 'description', 
    key: 'description',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-2">
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            setSelectedNews(record);
            setSelectedMenu('editNews');
          }}
          className="text-yellow-500 border-yellow-500"
        />
        <Popconfirm
          title="क्या आप इस समाचार को हटाना चाहते हैं?"
          onConfirm={() => handleDeleteNews(record.id)}
          okText="हां"
          cancelText="नहीं"
        >
          <Button
            icon={<DeleteOutlined />}
            className="text-red-500 border-red-500"
          />
        </Popconfirm>
      </div>
    ),
  },
];

const blogListColumns = [
  { title: 'IMG', dataIndex: 'image', key: 'image', render: (text) => <img src={text} alt="Blog" style={{ width: '50px' }} /> },
  { title: 'TITLE', dataIndex: 'title', key: 'title' },
  { 
    title: 'CONTENT', 
    dataIndex: 'content', 
    key: 'content',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  { title: 'DATE', dataIndex: 'date', key: 'date' },
  {
    title: 'ACTION',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-2">
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            setSelectedBlog(record);
            setSelectedMenu('editBlog');
          }}
          className="text-yellow-500 border-yellow-500"
        />
        <Popconfirm
          title="Are you sure you want to delete this blog?"
          onConfirm={() => handleDeleteBlog(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<DeleteOutlined />}
            className="text-red-500 border-red-500"
          />
        </Popconfirm>
      </div>
    ),
  },
];

const corporateListColumns = [
  { title: 'Sr.', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Organization', dataIndex: 'organization', key: 'organization' },
  { 
    title: 'Message', 
    dataIndex: 'message', 
    key: 'message',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Popconfirm
        title="Are you sure you want to delete this corporate entry?"
        onConfirm={() => handleDeleteCorporate(record.id)}
        okText="Yes"
        cancelText="No"
      >
        <Button
          icon={<DeleteOutlined />}
          className="text-red-500 border-red-500"
        />
      </Popconfirm>
    ),
  },
];

const exhibitionListColumns = [
  { title: 'Image', dataIndex: 'image', key: 'image', render: (text) => <img src={text} alt="Exhibition" style={{ width: '50px' }} /> },
  { title: 'Location', dataIndex: 'location', key: 'location' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { 
    title: 'Description', 
    dataIndex: 'description', 
    key: 'description',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Popconfirm
        title="Are you sure you want to delete this exhibition?"
        onConfirm={() => handleDeleteExhibition(record.id)}
        okText="Yes"
        cancelText="No"
      >
        <Button
          icon={<DeleteOutlined />}
          className="text-red-500 border-red-500"
        />
      </Popconfirm>
    ),
  },
];

const contactListColumns = [
  { title: 'Sr.', dataIndex: 'id', key: 'id' },
  { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
  { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Subject', dataIndex: 'subject', key: 'subject' },
  { 
    title: 'Message', 
    dataIndex: 'message', 
    key: 'message',
    render: (text) => (
      <div style={{ whiteSpace: 'pre-wrap', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {text}
      </div>
    ),
  },
  {
    title: 'Delete',
    key: 'action',
    render: (_, record) => (
      <Popconfirm
        title="Are you sure you want to delete this contact?"
        onConfirm={() => handleDeleteContact(record.id)}
        okText="Yes"
        cancelText="No"
      >
        <Button
          icon={<DeleteOutlined />}
          className="text-red-500 border-red-500"
        />
      </Popconfirm>
    ),
  },
];

const categoryListColumns = [
  { title: '#ID', dataIndex: 'id', key: 'id' },
  { 
    title: 'Image', 
    dataIndex: 'image', 
    key: 'image', 
    render: (image) => <Image src={image} alt="Category" width={50} height={50} /> 
  },
  { title: 'Category Name', dataIndex: 'name', key: 'name' },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status', 
    render: (status) => (
      <span style={{ color: status === 'Active' ? 'green' : 'red' }}>{status}</span>
    ) 
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-2">
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            setSelectedCategory(record);
            setSelectedMenu('editCategory');
          }}
          className="text-yellow-500 border-yellow-500"
        />
        <Popconfirm
          title="Are you sure you want to delete this category?"
          onConfirm={() => {
            setCategories(prevCategories => prevCategories.filter(category => category.id !== record.id));
            message.success('Category deleted successfully');
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<DeleteOutlined />}
            className="text-red-500 border-red-500"
          />
        </Popconfirm>
      </div>
    ),
  },
];

  // Mock roles and districts for dropdowns
  const roles = ['admin', 'super-admin', 'samiti-admin', 'warehouse-admin', 'forest-lover', 'Data Entry'];
  const districts = ['Bilaspur', 'Raipur', 'Korba', 'Geetanjali Nagar'];

  const showAddModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const showAddRoleModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const handleAddAdmin = (values) => {
    const newAdmin = {
      id: mockAdminList.length + 1,
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    };
    setMockAdminList([...mockAdminList, newAdmin]);
    setIsAddModalVisible(false);
    message.success('Admin added successfully');
  };

  const handleAddRole = (values) => {
    const newRole = {
      id: mockRoleList.length + 1,
      name: values.name,
      permissions: values.permissions || [],
    };
    setMockRoleList([...mockRoleList, newRole]);
    setIsAddModalVisible(false);
    message.success('Role added successfully');
  };

  const handleEditAdmin = (admin) => {
    setSelectedAdmin(admin);
    form.setFieldsValue({
      ...admin,
      status: admin.status === 'Active',
    });
    setIsEditModalVisible(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    form.setFieldsValue({
      name: role.name,
      permissions: role.permissions,
    });
    setIsEditModalVisible(true);
  };

  const handleUpdateAdmin = (values) => {
    const updatedList = mockAdminList.map((admin) =>
      admin.id === selectedAdmin.id
        ? { ...admin, ...values, status: values.status ? 'Active' : 'Inactive' }
        : admin
    );
    setMockAdminList(updatedList);
    setIsEditModalVisible(false);
    setSelectedAdmin(null);
    message.success('Admin updated successfully');
  };

  const handleUpdateRole = (values) => {
    const updatedList = mockRoleList.map((role) =>
      role.id === selectedRole.id
        ? { ...role, name: values.name, permissions: values.permissions }
        : role
    );
    setMockRoleList(updatedList);
    setIsEditModalVisible(false);
    setSelectedRole(null);
    message.success('Role updated successfully');
  };

  const handleDeleteAdmin = (id) => {
    const updatedList = mockAdminList.filter((admin) => admin.id !== id);
    setMockAdminList(updatedList);
    message.success('Admin deleted successfully');
  };

  const handleDeleteRole = (id) => {
    const updatedList = mockRoleList.filter((role) => role.id !== id);
    setMockRoleList(updatedList);
    message.success('Role deleted successfully');
  };

  const handleDeleteBanner = (id) => {
    const updatedList = bannerList.filter((banner) => banner.id !== id);
    setBannerList(updatedList);
    message.success('Banner deleted successfully');
  };

  const handleDeleteFeaturedProduct = (id) => {
    const updatedList = featuredProductList.filter((product) => product.id !== id);
    setFeaturedProductList(updatedList);
    message.success('Featured Product deleted successfully');
  };

  const handleAddBanner = (values) => {
    const newBanner = {
      id: bannerList.length + 1,
      image: values.image ? URL.createObjectURL(values.image) : '',
      title: values.title,
      description: values.description,
    };
    setBannerList([...bannerList, newBanner]);
    setSelectedMenu('Banner');
    message.success('Banner added successfully');
  };

  const handleAddCommunity = (values) => {
    const newCommunity = {
      id: communityList.length + 1, 
      image: values.image ? URL.createObjectURL(values.image) : '',
      name: values.name,
      description: values.description,
      status: values.status,
    };
    setCommunityList([...communityList, newCommunity]);
    setSelectedMenu('Community');
    message.success('Community added successfully');
  };

  const handleUpdateBanner = (values) => {
    const updatedList = bannerList.map((banner) =>
      banner.id === selectedBanner.id
        ? { ...banner, ...values, image: values.image ? URL.createObjectURL(values.image) : banner.image }
        : banner
    );
    setBannerList(updatedList);
    setSelectedMenu('Banner');
    setSelectedBanner(null);
    message.success('Banner updated successfully');
  };


  const handleAddFeaturedProduct = (values) => {
    const selectedProduct = productOptions.find(product => product.id === values.productId);
    if (!selectedProduct) {
      message.error('Please select a valid product');
      return;
    }
    const newFeaturedProduct = {
      id: featuredProductList.length + 1,
      image: selectedProduct.image,
      name: selectedProduct.name,
      category: featuredProductList.find(p => p.name === selectedProduct.name)?.category || 'Unknown',
      subCategory: '',
      price: featuredProductList.find(p => p.name === selectedProduct.name)?.price || '₹0',
    };
    setFeaturedProductList([...featuredProductList, newFeaturedProduct]);
    setSelectedMenu('Featured Product');
    message.success('Featured Product added successfully');
  };

  const handleUpdateFeaturedProduct = (values) => {
    const selectedProduct = productOptions.find(product => product.id === values.productId);
    if (!selectedProduct) {
      message.error('Please select a valid product');
      return;
    }
    const updatedList = featuredProductList.map((product) =>
      product.id === selectedFeaturedProduct.id
        ? { 
            ...product, 
            image: selectedProduct.image,
            name: selectedProduct.name, 
            category: featuredProductList.find(p => p.name === selectedProduct.name)?.category || 'Unknown', 
            price: featuredProductList.find(p => p.name === selectedProduct.name)?.price || '₹0' 
          }
        : product
    );
    setFeaturedProductList(updatedList);
    setSelectedMenu('Featured Product');
    setSelectedFeaturedProduct(null);
    message.success('Featured Product updated successfully');
  };
  const handleAddEmpowrd = (values) => {
    const newEmpowrd = {
      id: empowrdList.length + 1,
      blogImage: values.blogImage ? URL.createObjectURL(values.blogImage) : '',
      blogTitle: values.blogTitle,
      blogContent: values.blogContent,
      blogDescription: values.blogDescription,
      blogDate: values.blogDate,
      seoTitle: values.seoTitle,
      seoDescription: values.seoDescription,
      seoKeywords: values.seoKeywords,
      seoSchema: values.seoSchema,
    };
    setEmpowrdList([...empowrdList, newEmpowrd]);
    setSelectedMenu('Empowerd');
    message.success('Empowrd added successfully');
  };
  
  const handleUpdateEmpowrd = (values) => {
    const updatedList = empowrdList.map((empowrd) =>
      empowrd.id === selectedEmpowrd.id
        ? {
            ...empowrd,
            ...values,
            blogImage: values.blogImage ? URL.createObjectURL(values.blogImage) : empowrd.blogImage,
          }
        : empowrd
    );
    setEmpowrdList(updatedList);
    setSelectedMenu('Empowerd');
    setSelectedEmpowrd(null);
    message.success('Empowrd updated successfully');
  };
  const handleDeleteEmpowrd = (id) => {
    const updatedList = empowrdList.filter((empowrd) => empowrd.id !== id);
    setEmpowrdList(updatedList);
    message.success('Empowrd deleted successfully');
  };
  const handleUpdateCommunity = (values) => {
    const updatedList = communityList.map((community) =>
      community.id === selectedCommunity.id
        ? {
            ...community,
            image: values.image instanceof File ? URL.createObjectURL(values.image) : community.image, // Preserve existing image if no new one is uploaded
            name: values.name,
            status: 'Active', // Default to Active
          }
        : community
    );
    setCommunityList(updatedList);
    setSelectedMenu('Community');
    setSelectedCommunity(null);
    message.success('Community updated successfully');
  };
  const handleDeleteCommunity = (id) => {
    const updatedList = communityList.filter((community) => community.id !== id);
    setCommunityList(updatedList);
    message.success('Community deleted successfully');
  };
  const handleAddDistrict = (values) => {
    const newDistrict = {
      id: districtList.length + 1,
      name: values.name,
    };
    setDistrictList([...districtList, newDistrict]);
    setSelectedMenu('District');
    message.success('District added successfully');
  };

  const handleUpdateDistrict = (values) => {
    const updatedList = districtList.map((district) =>
      district.id === selectedDistrict.id ? { ...district, ...values } : district
    );
    setDistrictList(updatedList);
    setSelectedMenu('District');
    setSelectedDistrict(null);
    message.success('District updated successfully');
  };

  const handleDeleteDistrict = (id) => {
    const updatedList = districtList.filter((district) => district.id !== id);
    setDistrictList(updatedList);
    message.success('District deleted successfully');
  };

  const handleAddStore = (values) => {
    const newStore = {
      id: storeList.length + 1,
      name: values.name,
      address: values.address || '',
      mapUrl: values.mapUrl || '',
      storeLocator: values.storeLocator || '',
    };
    setStoreList([...storeList, newStore]);
    setSelectedMenu('Store');
    message.success('Store added successfully');
  };

  const handleUpdateStore = (values) => {
    const updatedList = storeList.map((store) =>
      store.id === selectedStore.id ? { ...store, ...values } : store
    );
    setStoreList(updatedList);
    setSelectedMenu('Store');
    setSelectedStore(null);
    message.success('Store updated successfully');
  };

  const handleDeleteStore = (id) => {
    const updatedList = storeList.filter((store) => store.id !== id);
    setStoreList(updatedList);
    message.success('Store deleted successfully');
  };

  const handleAddAbout = (values) => {
    const newAbout = {
      id: aboutList.length + 1,
      image: values.image ? values.image.file.name : '',
      title: values.title,
      description: values.description,
    };
    setAboutList([...aboutList, newAbout]);
    setSelectedMenu('About');
    message.success('About added successfully');
  };

  const handleUpdateAbout = (values) => {
    const updatedList = aboutList.map((about) =>
      about.id === selectedAbout.id ? { ...about, ...values, image: values.image ? values.image.file.name : about.image } : about
    );
    setAboutList(updatedList);
    setSelectedMenu('About');
    setSelectedAbout(null);
    message.success('About updated successfully');
  };

  const handleDeleteAbout = (id) => {
    const updatedList = aboutList.filter((about) => about.id !== id);
    setAboutList(updatedList);
    message.success('About deleted successfully');
  };

  const handleUpdateNews = (values) => {
    const updatedList = newsList.map((news) =>
      news.id === selectedNews.id
        ? {
            ...news,
            ...values,
            date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : news.date,
            image: values.image ? values.image.file.name : news.image,
          }
        : news
    );
    setNewsList(updatedList);
    setSelectedMenu('News');
    setSelectedNews(null);
    message.success('समाचार सफलतापूर्वक अपडेट किया गया');
  };

  const handleDeleteNews = (id) => {
    const updatedList = newsList.filter((news) => news.id !== id);
    setNewsList(updatedList);
    message.success('समाचार सफलतापूर्वक हटाया गया');
  };

  const handleAddExhibition = (values) => {
    const newNews = {
      id: newsList.length + 1,
      image: values.image ? values.image.file.name : '',
      title: values.title,
      content: values.content,
      description: values.description,
      date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'), // Fallback to current date
    };
    setNewsList([...newsList, newNews]);
    setSelectedMenu('News');
    message.success('नई प्रदर्शनी सफलतापूर्वक जोड़ी गई');
  };

  const handleUpdateBlog = (values) => {
    const updatedList = blogList.map((blog) =>
      blog.id === selectedBlog.id
        ? {
            ...blog,
            ...values,
            date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : blog.date,
            image: values.image ? values.image.file.name : blog.image,
            status: values.status ? 'Active' : 'Inactive',
          }
        : blog
    );
    setBlogList(updatedList);
    setSelectedMenu('Blogs');
    setSelectedBlog(null);
    message.success('Blog updated successfully');
  };

  const handleDeleteBlog = (id) => {
    const updatedList = blogList.filter((blog) => blog.id !== id);
    setBlogList(updatedList);
    message.success('Blog deleted successfully');
  };

  const handleAddBlog = (values) => {
    const newBlog = {
      id: blogList.length + 1,
      image: values.image ? values.image.file.name : '',
      title: values.title,
      content: values.content,
      date: values.date ? dayjs(values.date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      status: values.status ? 'Active' : 'Inactive',
    };
    setBlogList([...blogList, newBlog]);
    setSelectedMenu('Blogs');
    message.success('Blog added successfully');
  };

  const handleDeleteCorporate = (id) => {
    const updatedList = corporateList.filter((corporate) => corporate.id !== id);
    setCorporateList(updatedList);
    message.success('Corporate entry deleted successfully');
  };

  const handleDeleteExhibition = (id) => {
    const updatedList = exhibitionList.filter((exhibition) => exhibition.id !== id);
    setExhibitionList(updatedList);
    message.success('Exhibition deleted successfully');
  };

  const handleDeleteContact = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedList);
    message.success('Contact deleted successfully');
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    form.setFieldsValue({
      metaTitle: product.metaTitle || '',
      metaDescription: product.metaDescription || '',
      productSchema: product.productSchema || '',
      breadcrumbSchema: product.breadcrumbSchema || '',
      organizationSchema: product.organizationSchema || '',
      category: product.category || '',
      subCategory: product.subCategory || '',
      remedy: product.remedy || '',
      title: product.name || '',
      subTitle: product.subTitle || '',
      description: product.description || '',
      hindiDescription: product.hindiDescription || '',
      skuNumber: product.skuNumber || '',
      gst: product.gst || 0,
      weights: product.weights || [],
      benefits: product.benefits || [],
      faq: product.faq || [],
      image: product.image || '',
    });
    setSelectedMenu('editProduct');
  };
  
  const handleAddWeight = (values) => {
    const newWeight = { wt: values.weight, count: values.count || 0, price: values.price || 0 };
    setWeightList([...weightList, newWeight]);
    form.setFieldsValue({ weights: [...(form.getFieldValue('weights') || []), newWeight] });
  };
  
  const handleUpdateProduct = (values) => {
    console.log('Updated Product:', values);
    setSelectedMenu('Product');
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure to delete this product?', 
      icon: <ExclamationCircleOutlined />, 
      content: `Do you want to delete ${record.name}?`, 
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        setProductList(productList.filter(item => item.id !== record.id));
      },
      onCancel: () => {
        console.log('Delete cancelled');
      },
    });
  };

  const handleAddProduct = (values) => {
    console.log('Added Product:', values);
    setSelectedMenu('Product');
  };

  const handleLogout = () => {
    message.success('Logged out successfully');
    router.push('/');
  };

  const permissionCategories = {
    'Dashboard': ['Dashboard', 'Profile'],
    'Admin': ['Users', 'Roles'],
    'Home Component': ['Banner', 'Featured Product', 'Empowerd', 'Community', 'District', 'Store', 'Warhouse', 'Samiti'],
    'Pages': ['About', 'News', 'Blog', 'Corporate', 'Stories', 'Contact'],
    'Product Manager': ['Product', 'Category', 'Sub Category', 'Remedy', 'Ingridients', 'Weight Unit', 'Length Unit', 'Tax Manager', 'HSNCODE Master'],
    'Order Manager': ['Order Manager', 'Order Status', 'Shipping Status', 'Service Provider'],
    'Customer Manager': ['Payment', 'Inventory', 'Discount', 'Coupons'],
    'Connect': ['Volunteer', 'Forest Lover'],
    'FAQ': ['FAQ'],
    'Grievance Category': ['Grievance Category', 'Grievance UserData'],
  };

  // Define menu structure for breadcrumb navigation
  const menuStructure = {
    dashboard: { parent: null, label: 'Dashboard' },
    profile: { parent: null, label: 'Profile' },
    users: { parent: 'admin', label: 'Users' },
    roles: { parent: 'admin', label: 'Roles' },
    permissions: { parent: 'roles', label: `Permission Access: ${selectedRole?.name?.toUpperCase() || ''}` },
    admin: { parent: null, label: 'Admin' },
    homeComponent: { parent: null, label: 'Home Component' },
    Banner: { parent: 'homeComponent', label: 'Banner' },
    addBanner: { parent: 'Banner', label: 'Add Banner' },
    editBanner: { parent: 'Banner', label: 'Edit Banner' },
    'Featured Product': { parent: 'homeComponent', label: 'Featured Product List' },
    addFeaturedProduct: { parent: 'Featured Product', label: 'Add New Featured Product' },
    editFeaturedProduct: { parent: 'Featured Product', label: 'Edit Featured Product' },
    Empowerd: { parent: 'homeComponent', label: 'Empowerd' },
    Community: { parent: 'homeComponent', label: 'Community' },
    District: { parent: 'homeComponent', label: 'District' },
    Store: { parent: 'homeComponent', label: 'Store' },
    Warhouse: { parent: 'homeComponent', label: 'Warhouse' },
    Samiti: { parent: 'homeComponent', label: 'Samiti' },
    pages: { parent: 'null', label: 'Pages' },
    About: { parent: 'pages', label: 'About' },
    News: { parent: 'pages', label: 'News' },
    Blog: { parent: 'pages', label: 'Blog' },
    Corporate: { parent: 'pages', label: 'Corporate' },
    Stories: { parent: 'pages', label: 'Stories' },
    Contact: { parent: 'pages', label: 'Contact' },
    productManager: { parent: null, label: 'Product Manager' },
    Product: { parent: 'productManager', label: 'Product' },
    Category: { parent: 'productManager', label: 'Category' },
    'Sub Category': { parent: 'productManager', label: 'Sub Category' },
    Remedy: { parent: 'productManager', label: 'Remedy' },
    Ingridients: { parent: 'productManager', label: 'Ingridients' },
    'Weight Unit': { parent: 'productManager', label: 'Weight Unit' },
    'Length Unit': { parent: 'productManager', label: 'Length Unit' },
    'Tax Manager': { parent: 'productManager', label: 'Tax Manager' },
    'HSNCODE Master': { parent: 'productManager', label: 'HSNCODE Master' },
    orderManager: { parent: null, label: 'Order Manager' },
    'Order Manager': { parent: 'orderManager', label: 'Order Manager' },
    'Order Status': { parent: 'orderManager', label: 'Order Status' },
    'Shipping Status': { parent: 'orderManager', label: 'Shipping Status' },
    'Service Provider': { parent: 'orderManager', label: 'Service Provider' },
    customerManager: { parent: null, label: 'Customer Manager' },
    payment: { parent: null, label: 'Payment' },
    inventory: { parent: null, label: 'Inventory' },
    discount: { parent: null, label: 'Discount' },
    Coupons: { parent: 'discount', label: 'Coupons' },
    connect: { parent: null, label: 'Connect' },
    Volunteer: { parent: 'connect', label: 'Volunteer' },
    'Forest Lover': { parent: 'connect', label: 'Forest Lover' },
    faq: { parent: null, label: 'FAQ' },
    grievanceCategory: { parent: null, label: 'Grievance Category' },
    grievanceUserData: { parent: null, label: 'Grievance User Data' },
  };

  // Breadcrumb Navigation Logic
  const getBreadcrumbItems = () => {
    const items = [{ title: 'Home', onClick: () => setSelectedMenu('dashboard') }];
    
    const buildBreadcrumb = (key) => {
      if (!menuStructure[key]) return;
      
      const { parent, label } = menuStructure[key];
      if (parent) {
        buildBreadcrumb(parent);
      }
      items.push({
        title: label,
        onClick: () => setSelectedMenu(key),
      });
    };

    if (selectedMenu === 'permissions' && selectedRole) {
      buildBreadcrumb('roles');
      items.push({
        title: `Permission Access: ${selectedRole.name.toUpperCase()}`,
      });
    } else if (selectedMenu in menuStructure) {
      buildBreadcrumb(selectedMenu);
    }

    return items;
  };

  const renderContent = () => {
    console.log('Current selectedMenu:', selectedMenu); // Debug log to check selectedMenu value

    if (selectedMenu === 'dashboard') {
      return (
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-teal-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL ORDER</span>}>
              <p className="text-2xl font-bold">{orders.length} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-red-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL PRODUCT</span>}>
              <p className="text-2xl font-bold">{products.length} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-green-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL CUSTOMER</span>}>
              <p className="text-2xl font-bold">{users.length} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-yellow-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL BLOG</span>}>
              <p className="text-2xl font-bold">{blogs.length} <span className="text-sm">More +</span></p>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Latest Orders</h3>
              <Input
                placeholder="Search Order by ID..."
                onChange={(e) => debouncedOrderSearch(e.target.value)}
                value={orderSearch}
                className="mb-4 w-full"
              />
              <Table
                columns={lastOrderColumns}
                dataSource={filteredOrders.length > 0 ? latestOrder : []}
                rowKey="orderId"
                pagination={false}
                className="bg-white"
                scroll={{ x: 'max-content' }}
              />
              <div className="mt-4 flex justify-between">
                <Button type="primary" onClick={() => setSelectedMenu('addOrder')}>  
                  Place New Order
                </Button>
                <Button type="link" onClick={() => setSelectedMenu('Order Manager')}>
                  View All Orders
                </Button>
              </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Recently Added Customer</h3>
              <Input
                placeholder="Search Customer by Name or Email..."
                onChange={(e) => debouncedUserSearch(e.target.value)}
                value={userSearch}
                className="mb-4 w-full"
              />
              <Table
                columns={recentCustomerColumns}
                dataSource={filteredUsers.length > 0 ? latestCustomer : []}
                rowKey="email"
                pagination={false}
                className="bg-white"
                scroll={{ x: 'max-content' }}
              />
              <div className="mt-4 flex justify-end">
                <Button type="link" onClick={() => setSelectedMenu('customerManager')}>
                  View All Customers
                </Button>
              </div>
            </div>
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'profile') {
      return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <EditOutlined /> Profile
              </h2>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 font-medium">Username</label>
                <Input value="admin@cgherbal.com" disabled />
              </div>
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <Input
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Role</label>
                <Input value="super-admin" disabled />
              </div>
            </div>
    
            <div className="text-right">
              <Button
                type="primary"
                className="bg-teal-500 text-white"
                onClick={() => message.success('Profile updated successfully')}
              >
                Update Profile
              </Button>
            </div>
          </div>
    
          <div className="max-w-4xl mx-auto bg-white p-6 mt-6 rounded shadow">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <EditOutlined /> Change Password
              </h2>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 font-medium">New Password</label>
                <Input.Password
                  value={profileData.newPassword}
                  onChange={(e) => setProfileData({ ...profileData, newPassword: e.target.value })}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Confirm Password</label>
                <Input.Password
                  value={profileData.confirmPassword}
                  onChange={(e) =>
                    setProfileData({ ...profileData, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>
    
            <div className="text-right">
              <Button
                type="primary"
                className="bg-teal-500 text-white"
                onClick={() => message.success('Password changed successfully')}
              >
                Change Password
              </Button>
            </div>
          </div>
    
          <footer className="mt-10 text-center text-gray-600 text-sm">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin. All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'users') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Admin</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Admin List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={showAddModal}>
                  Add
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <Select
                defaultValue="ID desc"
                style={{ width: 120, marginLeft: 10 }}
                onChange={(value) => {
                  const [key, direction] = value.split(' ');
                  requestSort(key, direction);
                }}
              >
                <Option value="ID desc">ID desc</Option>
                <Option value="ID asc">ID asc</Option>
                <Option value="Name desc">Name desc</Option>
                <Option value="Name asc">Name asc</Option>
                <Option value="Role desc">Role desc</Option>
              </Select>
            </div>
            <Table
              columns={adminListColumns}
              dataSource={mockAdminList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'roles') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Role</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Role List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={showAddRoleModal}>
                  Add
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <Select
                defaultValue="ID desc"
                style={{ width: 120, marginLeft: 10 }}
                onChange={(value) => {
                  const [key, direction] = value.split(' ');
                  requestSort(key, direction);
                }}
              >
                <Option value="ID desc">ID desc</Option>
                <Option value="ID asc">ID asc</Option>
                <Option value="Name desc">Name desc</Option>
                <Option value="Name asc">Name asc</Option>
                <Option value="Permissions desc">Permissions desc</Option>
              </Select>
            </div>
            <Table
              columns={roleListColumns}
              dataSource={sortedRoleList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'permissions' && selectedRole) {
      return (
        <div className="p-6">
          <Button type="primary" onClick={() => setSelectedMenu('roles')} className="mb-4">
            Back
          </Button>
          <h2 className="text-2xl font-semibold mb-4">Permission Access : {selectedRole.name.toUpperCase()}</h2>
          {Object.entries(permissionCategories).map(([category, permissions]) => (
            <div key={category} className="bg-white p-4 shadow-md rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              {permissions.map((permission) => (
                <div key={permission} className="flex items-center mb-2">
                  <Checkbox
                    checked={selectedRole.permissions.includes(permission)}
                    onChange={(e) => {
                      const updatedPermissions = e.target.checked
                        ? [...selectedRole.permissions, permission]
                        : selectedRole.permissions.filter(p => p !== permission);
                      handleUpdateRole({ ...selectedRole, permissions: updatedPermissions });
                    }}
                  >
                    {permission}
                  </Checkbox>
                </div>
              ))}
            </div>
          ))}
          <Button type="primary" onClick={() => message.success('Permissions updated successfully')}>
            Update
          </Button>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'Banner') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Banner</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Banner List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addBanner')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={bannerListColumns}
              dataSource={bannerList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addBanner') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Banner</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Banner')}>
              Banner List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddBanner}
            >
              <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <div>
                  <Upload
                    beforeUpload={() => false}
                    onChange={(info) => {
                      if (info.fileList.length > 0) {
                        form.setFieldsValue({ image: info.fileList[0].originFileObj });
                      }
                    }}
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Choose File</Button>
                  </Upload>
                  <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
                </div>
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input placeholder="Enter Title" />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the description' }]}
              >
                <Input.TextArea rows={4} />
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
    if (selectedMenu === 'editBanner' && selectedBanner) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Banner</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Banner')}>
              Banner List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateBanner}
              initialValues={selectedBanner}
            >
              <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <div>
                  <Upload
                    beforeUpload={() => false}
                    onChange={(info) => {
                      if (info.fileList.length > 0) {
                        form.setFieldsValue({ image: info.fileList[0].originFileObj });
                      }
                    }}
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Choose File</Button>
                  </Upload>
                  {selectedBanner.image && (
                    <div className="mt-2">
                      <a href={selectedBanner.image} target="_blank" rel="noopener noreferrer">
                        {selectedBanner.image}
                      </a>
                    </div>
                  )}
                </div>
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the description' }]}
              >
                <Input.TextArea rows={4} />
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
    if (selectedMenu === 'Featured Product') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Featured Product List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addFeaturedProduct')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={featuredProductListColumns}
              dataSource={productList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addFeaturedProduct') {
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
    if (selectedMenu === 'editFeaturedProduct' && selectedFeaturedProduct) {
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

    if (selectedMenu === 'Empowerd') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Empowerd</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Empowerd List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addEmpowrd')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={empowrdListColumns}
              dataSource={empowrdList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addEmpowrd') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Empowerd</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Empowerd')}>
              Empowerd List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddEmpowrd}
            >
              <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
              <Form.Item
                label="SEO Title"
                name="seoTitle"
                rules={[{ required: true, message: 'Please enter the SEO title' }]}
              >
                <Input placeholder="Enter SEO Title (max 60 characters)" maxLength={60} />
              </Form.Item>
              <Form.Item
                label="SEO Description"
                name="seoDescription"
                rules={[{ required: true, message: 'Please enter the SEO description' }]}
              >
                <Input.TextArea rows={2} placeholder="Enter SEO Description (max 160 characters)" maxLength={160} />
              </Form.Item>
              <Form.Item
                label="SEO Keywords"
                name="seoKeywords"
                rules={[{ required: true, message: 'Please enter SEO keywords' }]}
              >
                <Input placeholder="Enter SEO Keywords (comma separated)" />
              </Form.Item>
              <Form.Item
                label="SEO Schema"
                name="seoSchema"
              >
                <Input.TextArea rows={4} placeholder="Enter SEO Schema (JSON-LD format)" />
              </Form.Item>
    
              <h3 className="text-lg font-semibold mb-4 mt-6">Details</h3>
              <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleAddEmpowrd} 
                >
                  <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Please upload an image' }]}
                  >
                    <Upload
                      beforeUpload={() => false}
                      onChange={(info) => {
                        if (info.fileList.length > 0) {
                          form.setFieldsValue({ image: info.fileList[0].originFileObj });
                        }
                      }}
                      maxCount={1}
                    >
                      <Button icon={<UploadOutlined />}>Choose File</Button>
                    </Upload>
                    <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
                  </Form.Item>
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please enter the title' }]}
                  >
                    <Input placeholder="Enter Title" />
                  </Form.Item>
                  <Form.Item
                    label="Sub Title"
                    name="subTitle"
                    rules={[{ required: true, message: 'Please enter the subtitle' }]}
                  >
                    <Input placeholder="Enter Sub Title" />
                  </Form.Item>
                  <Form.Item
                    label="Keyword"
                    name="keyword"
                    rules={[{ required: true, message: 'Please enter the keyword' }]}
                  >
                    <Input placeholder="Enter Keyword" />
                  </Form.Item>
                  <Form.Item
                    label="Url Customize"
                    name="urlCustomize"
                    rules={[{ required: true, message: 'Please enter the URL customize' }]}
                  >
                    <Input placeholder="Enter URL Customize" />
                  </Form.Item>
                  <Form.Item
                    label="Content"
                    name="content"
                    rules={[{ required: true, message: 'Please enter the content' }]}
                  >
                    <Input.TextArea rows={4} placeholder="Enter Content" />
                  </Form.Item>
                  <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please enter the description' }]}
                  >
                    <Input.TextArea rows={4} placeholder="Enter Description" />
                  </Form.Item>
                  <Form.Item
                    label="Date"
                    name="date"
                    rules={[{ required: true, message: 'Please enter the date' }]}
                  >
                    <Input type="date" />
                  </Form.Item>
                  <Form.Item
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: 'Please select the status' }]}
                    initialValue="Active"
                  >
                    <Select placeholder="Select Status">
                      <Option value="Active">Active</Option>
                      <Option value="Inactive">Inactive</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
            </Form>
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'editEmpowrd' && selectedEmpowrd) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Empowerd</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Empowerd')}>
              Empowerd List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateEmpowrd}
              initialValues={selectedEmpowrd}
            >
              <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
              <Form.Item
                label="SEO Title"
                name="seoTitle"
                rules={[{ required: true, message: 'Please enter the SEO title' }]}
              >
                <Input maxLength={60} />
              </Form.Item>
              <Form.Item
                label="SEO Description"
                name="seoDescription"
                rules={[{ required: true, message: 'Please enter the SEO description' }]}
              >
                <Input.TextArea rows={2} maxLength={160} />
              </Form.Item>
              <Form.Item
                label="SEO Keywords"
                name="seoKeywords"
                rules={[{ required: true, message: 'Please enter SEO keywords' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="SEO Schema"
                name="seoSchema"
              >
                <Input.TextArea rows={4} />
              </Form.Item>
    
              <h3 className="text-lg font-semibold mb-4 mt-6">Blog Details</h3>
              <Form.Item
                label="Blog Title"
                name="blogTitle"
                rules={[{ required: true, message: 'Please enter the blog title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Blog Content"
                name="blogContent"
                rules={[{ required: true, message: 'Please enter the blog content' }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Blog Description"
                name="blogDescription"
                rules={[{ required: true, message: 'Please enter the blog description' }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Blog Date"
                name="blogDate"
                rules={[{ required: true, message: 'Please enter the blog date' }]}
              >
                <Input type="date" />
              </Form.Item>
              <Form.Item
                label="Blog Image"
                name="blogImage"
                rules={[{ required: true, message: 'Please upload a blog image' }]}
              >
                <Upload
                  beforeUpload={() => false}
                  onChange={(info) => {
                    if (info.fileList.length > 0) {
                      form.setFieldsValue({ blogImage: info.fileList[0].originFileObj });
                    }
                  }}
                  maxCount={1}
                >
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
                {selectedEmpowrd.blogImage && (
                  <div className="mt-2">
                    <a href={selectedEmpowrd.blogImage} target="_blank" rel="noopener noreferrer">
                      {selectedEmpowrd.blogImage}
                    </a>
                  </div>
                )}
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

    if (selectedMenu === 'Community') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Community</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Community List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addCommunity')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={[
                { title: 'Image',
                  dataIndex: 'image',
                  key: 'image',
                  render: (image) => (
                    <img
                      src={image}
                      alt="community"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ), },
                { title: 'Title', dataIndex: 'name', key: 'name' },
                {
                  title: 'Action',
                  key: 'action',
                  render: (_, record) => (
                    <div className="flex gap-2">
                      <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                          setSelectedCommunity(record);
                          setSelectedMenu('editCommunity');
                        }}
                        className="text-yellow-500 border-yellow-500"
                      />
                      <Popconfirm
                        title="Are you sure to delete this community?"
                        onConfirm={() => handleDeleteCommunity(record.id)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          icon={<DeleteOutlined />}
                          className="text-red-500 border-red-500"
                        />
                      </Popconfirm>
                    </div>
                  ),
                },
              ]}
              dataSource={communityList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'editCommunity' && selectedCommunity) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Community</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Community')}>
              Community List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateCommunity}
              initialValues={{
                name: selectedCommunity.name,
                // Note: We don't set the image field here because Upload component handles it differently
              }}
            >
              <Form.Item
                label="Image *"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <div>
                  <Upload
                    beforeUpload={() => false}
                    onChange={(info) => {
                      if (info.fileList.length > 0) {
                        const file = info.fileList[0].originFileObj;
                        const maxSize = 1.5 * 1024 * 1024; // 1.5 MB in bytes
                        if (file.size > maxSize) {
                          message.error('Image size must be less than 1.5 MB');
                          return;
                        }
                        form.setFieldsValue({ image: file });
                      }
                    }}
                    fileList={
                      selectedCommunity.image && !form.getFieldValue('image')
                        ? [
                            {
                              uid: '-1',
                              name: 'Current Image',
                              status: 'done',
                              url: selectedCommunity.image,
                            },
                          ]
                        : undefined
                    }
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Choose File</Button>
                  </Upload>
                  <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
                  {selectedCommunity.image && !form.getFieldValue('image') && (
                    <div className="mt-2">
                      <a href={selectedCommunity.image} target="_blank" rel="noopener noreferrer">
                        Current Image
                      </a>
                    </div>
                  )}
                </div>
              </Form.Item>
              <Form.Item
                label="Select Product *"
                name="name"
                rules={[{ required: true, message: 'Please select a product' }]}
              >
                <Select placeholder="--Select Product--">
                  {productOptions.map((product) => (
                    <Option key={product.id} value={product.name}>{product.name}</Option>
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
    if (selectedMenu === 'addCommunity') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Community</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Community')}>
              Community List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddCommunity}
            >
              <Form.Item
                label="Image *"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <div>
                  <Upload
                    beforeUpload={() => false}
                    onChange={(info) => {
                      if (info.fileList.length > 0) {
                        const file = info.fileList[0].originFileObj;
                        const maxSize = 1.5 * 1024 * 1024; // 1.5 MB in bytes
                        if (file.size > maxSize) {
                          message.error('Image size must be less than 1.5 MB');
                          return;
                        }
                        form.setFieldsValue({ image: file });
                      }
                    }}
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Choose File</Button>
                  </Upload>
                  <p className="text-gray-500 text-sm mt-2">Image size must be less than 1.5 MB</p>
                </div>
              </Form.Item>
              <Form.Item
                label="Select Product *"
                name="name"
                rules={[{ required: true, message: 'Please select a product' }]}
              >
                <Select placeholder="--Select Product--">
                  {productOptions.map((product) => (
                    <Option key={product.id} value={product.name}>{product.name}</Option>
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
    
    if (selectedMenu === 'District') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">District</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">District List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addDistrict')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={districtListColumns}
              dataSource={districtList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
  
    if (selectedMenu === 'addDistrict') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New District</h2>
            <Button type="primary" onClick={() => setSelectedMenu('District')}>
              District List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddDistrict}
            >
              <Form.Item
                label="District"
                name="name"
                rules={[{ required: true, message: 'Please enter the district name' }]}
              >
                <Input placeholder="Enter District Name" />
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
    if (selectedMenu === 'editDistrict' && selectedDistrict) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit District</h2>
            <Button type="primary" onClick={() => setSelectedMenu('District')}>
              District List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateDistrict}
              initialValues={selectedDistrict}
            >
              <Form.Item
                label="District"
                name="name"
                rules={[{ required: true, message: 'Please enter the district name' }]}
              >
                <Input />
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
    
    if (selectedMenu === 'Store') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Store</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Store List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addStore')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={storeListColumns}
              dataSource={storeList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addStore') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Store</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Store')}>
              Store List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddStore}
            >
              <Form.Item
                label="Store Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the store name' }]}
              >
                <Input placeholder="Enter Store Name" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
              >
                <Input placeholder="Enter Address" />
              </Form.Item>
              <Form.Item
                label="Map URL"
                name="mapUrl"
              >
                <Input placeholder="Enter Map URL" />
              </Form.Item>
              <Form.Item
                label="Store Locator"
                name="storeLocator"
              >
                <Input placeholder="Enter Store Locator" />
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
    if (selectedMenu === 'editStore' && selectedStore) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Store</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Store')}>
              Store List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateStore}
              initialValues={selectedStore}
            >
              <Form.Item
                label="Store Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the store name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Map URL"
                name="mapUrl"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Store Locator"
                name="storeLocator"
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Category
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
    if (selectedMenu === 'About') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">About List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addAbout')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={aboutListColumns}
              dataSource={aboutList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addAbout') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add About</h2>
            <Button type="primary" onClick={() => setSelectedMenu('About')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddAbout}
            >
              <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the description' }]}
              >
                <Input.TextArea />
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

    if (selectedMenu === 'editAbout' && selectedAbout) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit About</h2>
            <Button type="primary" onClick={() => setSelectedMenu('About')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateAbout}
              initialValues={selectedAbout}
            >
              <Form.Item
                label="Image"
                name="image"
                rules={[{ required: true, message: 'Please upload an image' }]}
              >
                <Upload beforeUpload={() => false} maxCount={1} fileList={selectedAbout.image ? [{ uid: '-1', name: selectedAbout.image, status: 'done' }] : []}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please enter the description' }]}
              >
                <Input.TextArea />
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
    if (selectedMenu === 'News') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">News</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">News List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addExhibition')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={newsListColumns}
              dataSource={newsList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'editNews' && selectedNews) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit News</h2>
            <Button type="primary" onClick={() => setSelectedMenu('News')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateNews}
              initialValues={{ ...selectedNews, date: dayjs(selectedNews.date, 'YYYY-MM-DD') }}
            >
              <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
              <Form.Item label="SEO Title" name="seoTitle">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Description" name="seoDescription">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Keywords" name="seoKeywords">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Schema" name="seoSchema">
                <Input.TextArea />
              </Form.Item>
              <h3 className="text-lg font-semibold mb-4">News Details</h3>
              <Form.Item label="Title" name="title" rules={[{ required: true, message: 'कृपया शीर्षक दर्ज करें' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="content" rules={[{ required: true, message: 'कृपया सामग्री दर्ज करें' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={[{ required: true, message: 'कृपया विवरण दर्ज करें' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[
                  { required: true, message: 'कृपया तारीख दर्ज करें' },
                  {
                    validator: (_, value) =>
                      value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('कृपया एक मान्य तारीख चुनें'),
                  },
                ]}
              >
                <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Image" name="image" rules={[{ required: true, message: 'कृपया छवि अपलोड करें' }]}>
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
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
    if (selectedMenu === 'addExhibition') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Exhibition</h2>
            <Button type="primary" onClick={() => setSelectedMenu('News')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddExhibition}
            >
              <h3 className="text-lg font-semibold mb-4">SEO Details</h3>
              <Form.Item label="SEO Title" name="seoTitle">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Description" name="seoDescription">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Keywords" name="seoKeywords">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Schema" name="seoSchema">
                <Input.TextArea />
              </Form.Item>
              <h3 className="text-lg font-semibold mb-4">News Details</h3>
              <Form.Item label="Title" name="title" rules={[{ required: true, message: 'कृपया शीर्षक दर्ज करें' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="content" rules={[{ required: true, message: 'कृपया सामग्री दर्ज करें' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item label="Description" name="description" rules={[{ required: true, message: 'कृपया विवरण दर्ज करें' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[
                  { required: true, message: 'कृपया तारीख दर्ज करें' },
                  {
                    validator: (_, value) =>
                      value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('कृपया एक मान्य तारीख चुनें'),
                  },
                ]}
              >
                <DatePicker format="YYYY-MM-DD" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Image" name="image" rules={[{ required: true, message: 'कृपया छवि अपलोड करें' }]}>
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
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
    if (selectedMenu === 'Blogs') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Blog</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Blog List</h3>
              <div className="flex gap-2">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addBlog')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={blogListColumns}
              dataSource={blogList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'editBlog' && selectedBlog) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Blog</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Blogs')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateBlog}
              initialValues={{ ...selectedBlog, date: dayjs(selectedBlog.date, 'YYYY-MM-DD'), status: selectedBlog.status === 'Active' }}
            >
              <h3 className="text-lg font-semibold mb-2">SEO Details</h3>
              <Form.Item label="SEO Title" name="seoTitle">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Description" name="seoDescription">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Keywords" name="seoKeywords">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Schema" name="seoSchema">
                <Input.TextArea />
              </Form.Item>
              <h3 className="text-lg font-semibold mb-2 mt-4">Blog Details</h3>
              <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Url Customize" name="urlCustomize">
                <Input />
              </Form.Item>
              <Form.Item label="Keyword" name="keyword">
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[
                  { required: true, message: 'Please select a date' },
                  {
                    validator: (_, value) =>
                      value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('Please select a valid date'),
                  },
                ]}
              >
                <DatePicker format="MM/DD/YYYY" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked">
                <Checkbox>Active</Checkbox>
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

    if (selectedMenu === 'addBlog') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Blog</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Blogs')}>
              Back List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddBlog}
            >
              <h3 className="text-lg font-semibold mb-2">SEO Details</h3>
              <Form.Item label="SEO Title" name="seoTitle">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Description" name="seoDescription">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Keywords" name="seoKeywords">
                <Input />
              </Form.Item>
              <Form.Item label="SEO Schema" name="seoSchema">
                <Input.TextArea />
              </Form.Item>
              <h3 className="text-lg font-semibold mb-2 mt-4">Blog Details</h3>
              <Form.Item label="Image" name="image" rules={[{ required: true, message: 'Please upload an image' }]}>
                <Upload beforeUpload={() => false} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter the title' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="Url Customize" name="urlCustomize">
                <Input />
              </Form.Item>
              <Form.Item label="Keyword" name="keyword">
                <Input />
              </Form.Item>
              <Form.Item label="Content" name="content" rules={[{ required: true, message: 'Please enter the content' }]}>
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                label="Date"
                name="date"
                rules={[
                  { required: true, message: 'Please select a date' },
                  {
                    validator: (_, value) =>
                      value && dayjs(value).isValid() ? Promise.resolve() : Promise.reject('Please select a valid date'),
                  },
                ]}
              >
                <DatePicker format="MM/DD/YYYY" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked" initialValue={true}>
                <Checkbox>Active</Checkbox>
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

    if (selectedMenu === 'Corporate') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Corporate</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Corporate List</h3>
            </div>
            <Table
              columns={corporateListColumns}
              dataSource={corporateList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'Stories') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Exhibition</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upcoming Exhibition List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    message.info({
                      content: (
                        <>
                          <p className="text-lg font-semibold">This section is under development.</p>
                          <p>Please contact the administrator to add new exhibitions. We are working to enable this feature soon!</p>
                        </>
                      ),
                      duration: 5, // 5 seconds tak notification dikhegi
                    });
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={exhibitionListColumns}
              dataSource={exhibitionList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
     
    if (selectedMenu === 'Contact') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Contact List</h3>
            </div>
            <Table
              columns={contactListColumns}
              dataSource={contactList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'Product') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Product List </h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span>Show</span>
                  <Select
                    defaultValue="10"
                    style={{ width: 120 }}
                    onChange={(value) => console.log(`Show ${value} entries`)}
                  >
                    <Option value="10">10</Option>
                    <Option value="25">25</Option>
                    <Option value="50">50</Option>
                    <Option value="100">100</Option>
                  </Select>
                  <span>entries</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Input placeholder="Search..." className="w-64" />
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setSelectedMenu('addProduct')}>
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={[
                { title: '#ID', dataIndex: 'id', key: 'id' },
                { title: 'Image', dataIndex: 'image', key: 'image', render: (text) => <img src={text} alt="product" width={50} /> },
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Category', dataIndex: 'category', key: 'category' },
                { title: 'Sub Category', dataIndex: 'subCategory', key: 'subCategory' },
                { title: 'Wt/Price', dataIndex: 'weights', key: 'weights', render: (weights) => (
                  <ul>
                    {weights.map((w, index) => <li key={index}>{w.wt} | price: {w.price} | count: {w.count}</li>)}
                  </ul>
                )},
                { title: 'Action', key: 'action', render: (_, record) => (
                  <div className="flex gap-2">
                    <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
                    <Button icon={<DeleteOutlined />} danger onClick={() => handleDelete(record)} />
                  </div>
                )},
              ]}
              dataSource={productList}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'editProduct' && selectedProduct) {
      const handleAddWeight = (values) => {
        const newWeight = {
          wt: values.weight,
          count: values.count || 0,
          price: values.price || 0,
          hsncode: values.hsncode || '',
          gstAmount: values.gstAmount || 0,
          taxableAmount: values.taxableAmount || 0,
          discount: values.discount || 0,
          discountType: values.discountType || 'rupee',
        };
        setWeights([...weights, newWeight]);
        form.resetFields(['weight', 'count', 'price', 'hsncode', 'gstAmount', 'taxableAmount', 'discount', 'discountType']);
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
    
      return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Edit Product</h2>
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
            onFinish={handleUpdateProduct}
            initialValues={{
              ...selectedProduct,
              weights: weights,
              benefits: benefits,
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
            <Form.Item label="Select Ingridients" name="ingredients">
              <Select placeholder="Select Ingridients">
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
                  columns={[
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
                  ]}
                  dataSource={weights}
                  pagination={false}
                />
                <div style={{ marginTop: '10px' }}>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                    onClick={() => {
                      setWeights([...weights, { wt: '', count: 0, price: 0, hsncode: '', gstAmount: 0, taxableAmount: 0, discount: 0, discountType: 'rupee' }]);
                    }}
                  >
                    + Add New Weight
                  </Button>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Table
                    columns={[
                      {
                        title: 'Weight',
                        dataIndex: 'wt',
                        render: (text, record, index) => (
                          <Select
                            value={text || '--Select Weight--'}
                            onChange={(value) => {
                              const updatedWeights2 = [...weights2];
                              updatedWeights2[index].wt = value;
                              setWeights2(updatedWeights2);
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
                        title: 'Add/Remove',
                        dataIndex: 'discountType',
                        render: (text, record, index) => (
                          <Select
                            value={text || '--Select Operation--'}
                            onChange={(value) => {
                              const updatedWeights2 = [...weights2];
                              updatedWeights2[index].discountType = value;
                              setWeights2(updatedWeights2);
                            }}
                            style={{ width: '100%' }}
                          >
                            <Option value="rupee">rupee</Option>
                            <Option value="percent">percent</Option>
                          </Select>
                        ),
                      },
                      {
                        title: 'Quantity',
                        dataIndex: 'count',
                        render: (text, record, index) => (
                          <Input
                            value={text}
                            onChange={(e) => {
                              const updatedWeights2 = [...weights2];
                              updatedWeights2[index].count = e.target.value;
                              setWeights2(updatedWeights2);
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
                            onClick={() => handleDeleteWeight2(index)}
                          >
                            ✕
                          </span>
                        ),
                      },
                    ]}
                    dataSource={weights2}
                    pagination={false}
                  />
                  <div style={{ marginTop: '10px' }}>
                    <Button
                      type="primary"
                      style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                      onClick={() => {
                        setWeights2([...weights2, { wt: '', count: 0, discountType: '' }]);
                      }}
                    >
                      + Add
                    </Button>
                  </div>
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
            <Button type="primary" onClick={handleAddBenefit} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>+ Add</Button>
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
            <Button type="primary" onClick={handleAddFaq} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>+ Add</Button>
            <h3 className="text-lg font-semibold mb-4 mt-4">Image</h3>
            <Form.Item label="Image" name="image">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
              <p>Image size must be less than 1.5 MB</p>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#1890ff', color: '#fff' }}>
                Update
              </Button>
            </Form.Item>
          </Form>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addProduct') {

      const handleAddWeight = (values) => {
        const newWeight = {
          wt: values.weight,
          count: values.count || 0,
          price: values.price || 0,
          hsncode: values.hsncode || '',
          gstAmount: values.gstAmount || 0,
          taxableAmount: values.taxableAmount || 0,
          discount: values.discount || 0,
          discountType: values.discountType || 'rupee',
        };
        setWeights([...weights, newWeight]);
        form.resetFields(['weight', 'count', 'price', 'hsncode', 'gstAmount', 'taxableAmount', 'discount', 'discountType']);
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
            onFinish={handleUpdateProduct}
            initialValues={{
              ...selectedProduct,
              weights: weights,
              benefits: benefits,
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
            <Form.Item label="Breadcrum Schema" name="breadcrum Schema">
              <Input.TextArea />
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
            <Form.Item label="Select Ingridients" name="ingredients">
              <Select placeholder="Select Ingridients">
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
                  columns={[
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
                  ]}
                  dataSource={weights}
                  pagination={false}
                />
                <div style={{ marginTop: '10px' }}>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
                    onClick={() => {
                      setWeights([...weights, { wt: '', count: 0, price: 0, hsncode: '', gstAmount: 0, taxableAmount: 0, discount: 0, discountType: 'rupee' }]);
                    }}
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
            <Button type="primary" onClick={handleAddBenefit} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>+ Add</Button>
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
            <Button type="primary" onClick={handleAddFaq} style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}>+ Add</Button>
            <h3 className="text-lg font-semibold mb-4 mt-4">Image</h3>
            <Form.Item label="Image" name="image">
              <Upload beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined />}>Choose File</Button>
              </Upload>
              <p>Image size must be less than 1.5 MB</p>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: '#1890ff', color: '#fff' }}>
                Update
              </Button>
            </Form.Item>
          </Form>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'Category') {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Category</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Category List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addCategory')} // Changed to setSelectedMenu
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={categoryListColumns}
              dataSource={categories}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'editCategory' && selectedCategory) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Category</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Category')}>
              Category List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              initialValues={{ ...selectedCategory, image: undefined }} // Avoid setting file input value
              onFinish={(values) => {
                const updatedCategories = categories.map(category =>
                  category.id === selectedCategory.id
                    ? {
                        ...category,
                        image: values.image?.file ? URL.createObjectURL(values.image.file) : category.image,
                        name: values.name,
                        status: values.status,
                      }
                    : category
                );
                setCategories(updatedCategories);
                setSelectedMenu('Category');
                message.success('Category updated successfully');
              }}
            >
              <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                <Upload
                  beforeUpload={() => false} // Prevent auto upload
                  listType="picture"
                  maxCount={1}
                  accept="image/*"
                >
                  <Button icon={<UploadOutlined />}>Upload Image</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Category Name" name="name" rules={[{ required: true, message: 'Please enter category name' }]}>
                <Input placeholder="Enter Category Name" />
              </Form.Item>
              <Form.Item label="Status" name="status">
                <Select>
                  <Option value="Active">Active</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Category
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

    if (selectedMenu === 'addCategory') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Category</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Category')}>
              Category List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              onFinish={(values) => {
                const newCategory = {
                  id: categories.length + 1,
                  image: values.image?.file ? URL.createObjectURL(values.image.file) : '/placeholder.jpg',
                  name: values.name,
                  status: values.status || 'Active',
                };
                setCategories(prevCategories => [...prevCategories, newCategory]);
                setSelectedMenu('Category');
                categoryForm.resetFields();
                message.success('Category added successfully');
              }}
            >
              <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                <Upload
                  beforeUpload={() => false}
                  listType="picture"
                  maxCount={1}
                  accept="image/*"
                >
                  <Button icon={<UploadOutlined />}>Upload Image</Button>
                </Upload>
              </Form.Item>
              <Form.Item label="Category Name" name="name" rules={[{ required: true, message: 'Please enter category name' }]}>
                <Input placeholder="Enter Category Name" />
              </Form.Item>
              <Form.Item label="Status" name="status" initialValue="Active">
                <Select>
                  <Option value="Active">Active</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Category
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

    if (selectedMenu === 'Sub Category') {
      const subCategoryListColumns = [
        { 
          title: 'Image', 
          dataIndex: 'image', 
          key: 'image', 
          render: (image) => <Image src={image} alt="Sub Category" width={50} height={50} /> 
        },
        { title: 'Sub Category', dataIndex: 'name', key: 'name' },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        { 
          title: 'Status', 
          dataIndex: 'status', 
          key: 'status', 
          render: (status) => (
            <span className={`px-2 py-1 rounded ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status}
            </span>
          ) 
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedSubCategory(record);
                  setSelectedMenu('editSubCategory');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this category?"
                onConfirm={() => {
                  setSubCategories(prevSubCategories => prevSubCategories.filter(subCategory => subCategory.id !== record.id));
                  message.success('Sub Category deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Sub Category</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sub Category List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addSubCategory')}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={subCategoryListColumns}
              dataSource={subCategories}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'editSubCategory' && selectedSubCategory) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Sub Category</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Sub Category')}>
              Sub Category List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              initialValues={{ 
                category: selectedSubCategory.category, 
                name: selectedSubCategory.name, 
                status: selectedSubCategory.status === 'Active', 
                image: undefined 
              }}
              onFinish={(values) => {
                const updatedSubCategories = subCategories.map(subCategory =>
                  subCategory.id === selectedSubCategory.id
                    ? {
                        ...subCategory,
                        category: values.category,
                        name: values.name,
                        status: values.status ? 'Active' : 'Inactive',
                        image: values.image?.file ? URL.createObjectURL(values.image.file) : subCategory.image,
                      }
                    : subCategory
                );
                setSubCategories(updatedSubCategories);
                setSelectedMenu('Sub Category');
                message.success('Sub Category updated successfully');
              }}
            >
              <Form.Item label="Select Category" name="category" rules={[{ required: true, message: 'Please select a category' }]}>
                <Select placeholder="Select Category">
                  {categories.map(category => (
                    <Option key={category.id} value={category.name}>{category.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Sub Category Name" name="name" rules={[{ required: true, message: 'Please enter sub category name' }]}>
                <Input placeholder="Enter Sub Category Name" />
              </Form.Item>
              <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                <Upload
                  beforeUpload={() => false}
                  listType="picture"
                  maxCount={1}
                  accept="image/*"
                >
                  <Button icon={<UploadOutlined />}>Choose File</Button>
                </Upload>
                <p>Image size must be less than 1.5 MB</p>
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked">
                <Checkbox>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Category
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

    if (selectedMenu === 'addSubCategory') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Sub Category</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Sub Category')}>
              Sub Category List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              onFinish={(values) => {
                const newSubCategory = {
                  id: subCategories.length + 1,
                  category: values.category,
                  name: values.name,
                  status: values.status ? 'Active' : 'Inactive',
                  image: values.image?.file ? URL.createObjectURL(values.image.file) : '/placeholder.jpg',
                };
                setSubCategories(prevSubCategories => [...prevSubCategories, newSubCategory]);
                setSelectedMenu('Sub Category');
                categoryForm.resetFields();
                message.success('Sub Category added successfully');
              }}
            >
              <Form.Item label="Select Category" name="category" rules={[{ required: true, message: 'Please select a category' }]}>
                <Select placeholder="Select Category">
                  {categories.map(category => (
                    <Option key={category.id} value={category.name}>{category.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label="Sub Category Name" name="name" rules={[{ required: true, message: 'Please enter sub category name' }]}>
                <Input placeholder="Enter Sub Category Name" />
              </Form.Item>
              <Form.Item label="Image" name="image" valuePropName="fileList" getValueFromEvent={(e) => e.fileList}>
                <Upload
                  beforeUpload={() => false}
                  listType="picture"
                  maxCount={1}
                  accept="image/*"
                >
                  <Button icon={<UploadOutlined />}>Upload Image</Button>
                </Upload>
                <p>Image size must be less than 1.5 MB</p>
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked" initialValue={true}>
                <Checkbox>Active</Checkbox>
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

    if (selectedMenu === 'Remedy') {
      const remedyListColumns = [
        { title: '#ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { 
          title: 'Status', 
          dataIndex: 'status', 
          key: 'status', 
          render: (status) => (
            <span className={`px-2 py-1 rounded ${status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {status}
            </span>
          ) 
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedRemedy(record);
                  setSelectedMenu('editRemedy');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this remedy?"
                onConfirm={() => {
                  setRemedies(prevRemedies => prevRemedies.filter(remedy => remedy.id !== record.id));
                  message.success('Remedy deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Remedy</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Remedy List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addRemedy')}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={remedyListColumns}
              dataSource={remedies}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'editRemedy' && selectedRemedy) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Remedy</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Remedy')}>
              Remedy List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              initialValues={{ 
                name: selectedRemedy.name, 
                status: selectedRemedy.status === 'Active', 
              }}
              onFinish={(values) => {
                const updatedRemedies = remedies.map(remedy =>
                  remedy.id === selectedRemedy.id
                    ? {
                        ...remedy,
                        name: values.name,
                        status: values.status ? 'Active' : 'Inactive',
                      }
                    : remedy
                );
                setRemedies(updatedRemedies);
                setSelectedMenu('Remedy');
                message.success('Remedy updated successfully');
              }}
            >
              <Form.Item label="Remedy Name" name="name" rules={[{ required: true, message: 'Please enter remedy name' }]}>
                <Input placeholder="Enter Remedy Name" />
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked">
                <Checkbox>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Remedy
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

    if (selectedMenu === 'addRemedy') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Remedy</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Remedy')}>
              Remedy List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={categoryForm}
              layout="vertical"
              onFinish={(values) => {
                const newRemedy = {
                  id: remedies.length + 1,
                  name: values.name,
                  status: values.status ? 'Active' : 'Inactive',
                };
                setRemedies(prevRemedies => [...prevRemedies, newRemedy]);
                setSelectedMenu('Remedy');
                categoryForm.resetFields();
                message.success('Remedy added successfully');
              }}
            >
              <Form.Item label="Remedy Name" name="name" rules={[{ required: true, message: 'Please enter remedy name' }]}>
                <Input placeholder="Enter Remedy Name" />
              </Form.Item>
              <Form.Item label="Status" name="status" valuePropName="checked" initialValue={true}>
                <Checkbox>Active</Checkbox>
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
    
    if (selectedMenu === 'Ingridients') {
      const IngridientsListColumns = [
        { title: '#ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  message.info('This section is under development. Please contact the administrator to edit ingredients.');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this ingredient?"
                onConfirm={() => {
                  setIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== record.id));
                  message.success('Ingredient deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Ingridients</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ingridients List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    message.info('This section is under development. Please contact the administrator to add new ingredients. We are working to enable this feature soon!');
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={IngridientsListColumns}
              dataSource={ingredients}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'Weight Unit') {
      const weightUnitColumns = [
        { title: '#ID', dataIndex: 'id', key: 'id' },
        { title: 'Title', dataIndex: 'title', key: 'title' },
        { title: 'Shipping Amount', dataIndex: 'shippingAmount', key: 'shippingAmount' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedWeightUnit(record);
                  setSelectedMenu('editWeightUnit');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this weight unit?"
                onConfirm={() => {
                  setWeightUnits(prevWeightUnits => prevWeightUnits.filter(weightUnit => weightUnit.id !== record.id));
                  message.success('Weight unit deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Weight Unit</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Weight Unit List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addWeightUnit')}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={weightUnitColumns}
              dataSource={weightUnits}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'editWeightUnit' && selectedWeightUnit) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Weight</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Weight Unit')}>
              Weight List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={weightUnitForm}
              layout="vertical"
              initialValues={{ 
                title: selectedWeightUnit.title,
                shippingAmount: selectedWeightUnit.shippingAmount,
              }}
              onFinish={(values) => {
                const updatedWeightUnits = weightUnits.map(weightUnit =>
                  weightUnit.id === selectedWeightUnit.id
                    ? {
                        ...weightUnit,
                        title: values.title,
                        shippingAmount: values.shippingAmount,
                      }
                    : weightUnit
                );
                setWeightUnits(updatedWeightUnits);
                setSelectedMenu('Weight Unit');
                message.success('Weight unit updated successfully');
              }}
            >
              <Form.Item
                label="Weight"
                name="title"
                rules={[{ required: true, message: 'Please enter weight' }]}
              >
                <Input placeholder="Enter Weight" />
              </Form.Item>
              <Form.Item
                label="Shipping Charge"
                name="shippingAmount"
                rules={[{ required: true, message: 'Please enter shipping amount' }]}
              >
                <Input type="number" placeholder="Enter Shipping Amount" />
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

    if (selectedMenu === 'addWeightUnit') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Weight</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Weight Unit')}>
              Weight List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={weightUnitForm}
              layout="vertical"
              onFinish={(values) => {
                const newWeightUnit = {
                  id: weightUnits.length + 1,
                  title: values.title,
                  shippingAmount: values.shippingAmount,
                };
                setWeightUnits(prevWeightUnits => [...prevWeightUnits, newWeightUnit]);
                setSelectedMenu('Weight Unit');
                weightUnitForm.resetFields();
                message.success('Weight unit added successfully');
              }}
            >
              <Form.Item
                label="Weight"
                name="title"
                rules={[{ required: true, message: 'Please enter weight' }]}
              >
                <Input placeholder="Enter Weight" />
              </Form.Item>
              <Form.Item
                label="Shipping Charge"
                name="shippingAmount"
                rules={[{ required: true, message: 'Please enter shipping amount' }]}
              >
                <Input type="number" placeholder="Enter Shipping Amount" />
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
    if (selectedMenu === 'Tax Manager') {
      const taxColumns = [
        { title: '#ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Value (%)', dataIndex: 'value', key: 'value' },
        { 
          title: 'Status', 
          dataIndex: 'status', 
          key: 'status',
          render: (status) => (
            <span className={status === 'Active' ? 'text-green-500' : 'text-red-500'}>
              {status}
            </span>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedTax(record);
                  setSelectedMenu('editTax');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this tax?"
                onConfirm={() => {
                  setTaxes(prevTaxes => prevTaxes.filter(tax => tax.id !== record.id));
                  message.success('Tax deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Tax</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Tax List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addTax')}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={taxColumns}
              dataSource={taxes}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addTax') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Tax</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Tax Manager')}>
              Back to List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={taxForm}
              layout="vertical"
              onFinish={(values) => {
                const newTax = {
                  id: taxes.length + 1,
                  name: values.name,
                  value: values.value,
                  status: values.status,
                };
                setTaxes(prevTaxes => [...prevTaxes, newTax]);
                setSelectedMenu('Tax Manager');
                taxForm.resetFields();
                message.success('Tax added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter tax name' }]}
              >
                <Input placeholder="Enter Tax Name" />
              </Form.Item>
              <Form.Item
                label="Value (%)"
                name="value"
                rules={[{ required: true, message: 'Please enter tax value' }]}
              >
                <Input type="number" placeholder="Enter Tax Value" />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                initialValue="Active"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Radio.Group>
                  <Radio value="Active">Active</Radio>
                  <Radio value="Inactive">Inactive</Radio>
                </Radio.Group>
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
    if (selectedMenu === 'editTax' && selectedTax) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Tax</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Tax Manager')}>
              Back to List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={taxForm}
              layout="vertical"
              initialValues={{ 
                name: selectedTax.name,
                value: selectedTax.value,
                status: selectedTax.status,
              }}
              onFinish={(values) => {
                const updatedTaxes = taxes.map(tax =>
                  tax.id === selectedTax.id
                    ? {
                        ...tax,
                        name: values.name,
                        value: values.value,
                        status: values.status,
                      }
                    : tax
                );
                setTaxes(updatedTaxes);
                setSelectedMenu('Tax Manager');
                message.success('Tax updated successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter tax name' }]}
              >
                <Input placeholder="Enter Tax Name" />
              </Form.Item>
              <Form.Item
                label="Value (%)"
                name="value"
                rules={[{ required: true, message: 'Please enter tax value' }]}
              >
                <Input type="number" placeholder="Enter Tax Value" />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Radio.Group>
                  <Radio value="Active">Active</Radio>
                  <Radio value="Inactive">Inactive</Radio>
                </Radio.Group>
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
    if (selectedMenu === 'HSNCODE Master') {
      const hsncodeColumns = [
        { title: '#ID', dataIndex: 'id', key: 'id' },
        { title: 'Hsncode', dataIndex: 'hsncode', key: 'hsncode' },
        { title: 'GST Value', dataIndex: 'gstValue', key: 'gstValue' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedHsncode(record);
                  setSelectedMenu('editHsncode');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this HSN code?"
                onConfirm={() => {
                  setHsncodes(prevHsncodes => prevHsncodes.filter(hsncode => hsncode.id !== record.id));
                  message.success('HSN code deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">HSNCODE MASTER</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">HSNCODE List</h3>
              <div className="flex gap-2">
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => setSelectedMenu('addHsncode')}
                >
                  Add
                </Button>
              </div>
            </div>
            <Table
              columns={hsncodeColumns}
              dataSource={hsncodes}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              rowClassName={() => 'align-top'}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addHsncode') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Hsncode</h2>
            <Button type="primary" onClick={() => setSelectedMenu('HSNCODE Master')}>
              Back to List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={hsncodeForm}
              layout="vertical"
              onFinish={(values) => {
                const newHsncode = {
                  id: hsncodes.length + 1,
                  hsncode: values.hsncode,
                  gstValue: values.gstValue,
                };
                setHsncodes(prevHsncodes => [...prevHsncodes, newHsncode]);
                setSelectedMenu('HSNCODE Master');
                hsncodeForm.resetFields();
                message.success('HSN code added successfully');
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
    if (selectedMenu === 'editHsncode' && selectedHsncode) {
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
    }
    if (selectedMenu === 'Order Manager') {
      const orderColumns = [
        { title: 'Order ID', dataIndex: 'id', key: 'id' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Payment Status', dataIndex: 'paymentStatus', key: 'paymentStatus', width: 100, },
        { title: 'Order Mode', dataIndex: 'orderMode', key: 'orderMode' },
        { title: 'Qty', dataIndex: 'qty', key: 'qty', width: 100, },
        { title: 'Price', dataIndex: 'price', key: 'price' , width: 100, },
        { title: 'Order Status', dataIndex: 'orderStatus', key: 'orderStatus' },
        { title: 'Shipping Status', dataIndex: 'shippingStatus', key: 'shippingStatus' },
        { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EyeOutlined />}
                onClick={() => {
                  setSelectedOrder(record);
                  setSelectedMenu('viewOrder');
                }}
                className="text-blue-500 border-blue-500"
              />
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedOrder(record);
                  setSelectedMenu('editOrder');
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this order?"
                onConfirm={() => {
                  setOrders(prevOrders => prevOrders.filter(order => order.id !== record.id));
                  message.success('Order deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      const handleExportToExcel = () => {
        const csv = [
          ['Order ID,Email,Payment Status,Order Mode,Qty,Price,Order Status,Shipping Status,Created At'],
          ...orders.map(order => [
            order.id, order.email, order.paymentStatus, order.orderMode, order.qty, order.price,
            order.orderStatus, order.shippingStatus, order.createdAt
          ].join(','))
        ].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'order.csv';
        a.click();
      };
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Order List</h3>
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setSelectedMenu('addOrder')}
                  >
                    Add
                  </Button>
                  <Button
                    type="primary"
                    icon={<FileExcelOutlined />}
                    onClick={handleExportToExcel}
                    className="bg-green-500"
                  >
                    Excel
                  </Button>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Search:</span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border p-1 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4 gap-4">
              <div className="flex items-center">
                <span className="mr-2">Show</span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="border p-1 rounded"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
            </div>
            <Table
              columns={orderColumns}
              dataSource={orders}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addOrder') {
      
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
              onFinish={(values) => {
                const newOrder = {
                  id: `300420250${orders.length + 1}`,
                  email: values.email,
                  paymentStatus: values.paymentStatus,
                  orderMode: values.orderMode,
                  qty: products.reduce((sum, p) => sum + p.qty, 0),
                  price: products.reduce((sum, p) => sum + p.price * p.qty, 0),
                  orderStatus: values.orderStatus,
                  shippingStatus: values.shippingStatus,
                  createdAt: new Date().toLocaleString(),
                  products: products,
                };
                setOrders(prevOrders => [...prevOrders, newOrder]);
                setSelectedMenu('Order Manager');
                orderForm.resetFields();
                setProducts([]);
                message.success('Order added successfully');
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
    }
    if (selectedMenu === 'viewOrder' && selectedOrder) {
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
    }

    if (selectedMenu === 'editOrder' && selectedOrder) {
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
                setSelectedMenu('orderManager');
                message.success('Order updated successfully');
              }}
            >
              {/* Customer Section */}
              <Form.Item
                label="Customer"
                name="customerId"
                rules={[{ required: true, message: 'Please select a customer' }]}
              >
                <Select
                  placeholder="Select Customer"
                  onChange={(value) => {
                    const customer = customers.find(c => c.id === value);
                    editOrderForm.setFieldsValue({
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
                <Input placeholder="Enter Customer Name"  />
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
                <Input placeholder="Enter Email"  />
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
    
              {/* Tracking Details */}
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
    
              {/* Products Table */}
              <Table
                columns={productColumns}
                dataSource={selectedOrder.products}
                rowKey="name"
                pagination={false}
                className="mb-4"
                scroll={{ x: 'max-content' }}
              />
    
              {/* Address Section */}
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
    
              {/* Submit Button */}
              <Form.Item className="text-right">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }
    if (selectedMenu === 'Order Status') {
      const orderStatusColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedOrderStatus(record);
                  setSelectedMenu('editOrderStatus');
                  orderStatusForm.setFieldsValue({ name: record.name });
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this order status?"
                onConfirm={() => {
                  setOrderStatuses(prevStatuses => prevStatuses.filter(status => status.id !== record.id));
                  message.success('Order status deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Order Status List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addOrderStatus')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={orderStatusColumns}
              dataSource={orderStatuses}
              rowKey="id"
              pagination={false}
              className="bg-white"
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addOrderStatus') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Order Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Order Status')}>
              Order Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={orderStatusForm}
              layout="vertical"
              onFinish={(values) => {
                const newOrderStatus = {
                  id: orderStatuses.length + 1,
                  name: values.name,
                };
                setOrderStatuses(prevStatuses => [...prevStatuses, newOrderStatus]);
                setSelectedMenu('Order Status');
                orderStatusForm.resetFields();
                message.success('Order status added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter order status name' }]}
              >
                <Input placeholder="Enter Order Status Name" />
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

    if (selectedMenu === 'editOrderStatus' && selectedOrderStatus) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Order Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Order Status')}>
              Order Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={orderStatusForm}
              layout="vertical"
              initialValues={{ name: selectedOrderStatus.name }}
              onFinish={(values) => {
                setOrderStatuses(prevStatuses =>
                  prevStatuses.map(status =>
                    status.id === selectedOrderStatus.id ? { ...status, name: values.name } : status
                  )
                );
                setSelectedMenu('Order Status');
                orderStatusForm.resetFields();
                message.success('Order status updated successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter order status name' }]}
              >
                <Input placeholder="Enter Order Status Name" />
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
    if (selectedMenu === 'Order status') {
      const orderStatusColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedOrderStatus(record);
                  setSelectedMenu('editOrderStatus');
                  orderStatusForm.setFieldsValue({ name: record.name });
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this order status?"
                onConfirm={() => {
                  setOrderStatuses(prevStatuses => prevStatuses.filter(status => status.id !== record.id));
                  message.success('Order status deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Order Status List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addOrderStatus')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={orderStatusColumns}
              dataSource={orderStatuses}
              rowKey="id"
              pagination={false}
              className="bg-white"
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addOrderStatus') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Order Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Order status')}>
              Order Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={orderStatusForm}
              layout="vertical"
              onFinish={(values) => {
                const newOrderStatus = {
                  id: orderStatuses.length + 1,
                  name: values.name,
                };
                setOrderStatuses(prevStatuses => [...prevStatuses, newOrderStatus]);
                setSelectedMenu('Order status');
                orderStatusForm.resetFields();
                message.success('Order status added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter order status name' }]}
              >
                <Input placeholder="Enter Order Status Name" />
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

    if (selectedMenu === 'Shipping Status') {
      const shippingStatusColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedShippingStatus(record);
                  setSelectedMenu('editShippingStatus');
                  shippingStatusForm.setFieldsValue({ name: record.name });
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this shipping status?"
                onConfirm={() => {
                  setShippingStatuses(prevStatuses => prevStatuses.filter(status => status.id !== record.id));
                  message.success('Shipping status deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Shipping Status</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Shipping Status List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addShippingStatus')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={shippingStatusColumns}
              dataSource={shippingStatuses}
              rowKey="id"
              pagination={false}
              className="bg-white"
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addShippingStatus') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Shipping Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Shipping Status')}>
              Shipping Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={shippingStatusForm}
              layout="vertical"
              onFinish={(values) => {
                const newShippingStatus = {
                  id: shippingStatuses.length + 1,
                  name: values.name,
                };
                setShippingStatuses(prevStatuses => [...prevStatuses, newShippingStatus]);
                setSelectedMenu('Shipping Status');
                shippingStatusForm.resetFields();
                message.success('Shipping status added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter shipping status name' }]}
              >
                <Input placeholder="Enter Shipping Status Name" />
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
    if (selectedMenu === 'addShippingStatus') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Shipping Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Shipping Status')}>
              Shipping Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={shippingStatusForm}
              layout="vertical"
              onFinish={(values) => {
                const newShippingStatus = {
                  id: shippingStatuses.length + 1,
                  name: values.name,
                };
                setShippingStatuses(prevStatuses => [...prevStatuses, newShippingStatus]);
                setSelectedMenu('Shipping Status');
                shippingStatusForm.resetFields();
                message.success('Shipping status added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter shipping status name' }]}
              >
                <Input placeholder="Enter Shipping Status Name" />
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

    if (selectedMenu === 'editShippingStatus' && selectedShippingStatus) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Shipping Status</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Shipping Status')}>
              Shipping Status List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={shippingStatusForm}
              layout="vertical"
              initialValues={{ name: selectedShippingStatus.name }}
              onFinish={(values) => {
                setShippingStatuses(prevStatuses =>
                  prevStatuses.map(status =>
                    status.id === selectedShippingStatus.id ? { ...status, name: values.name } : status
                  )
                );
                setSelectedMenu('Shipping Status');
                shippingStatusForm.resetFields();
                message.success('Shipping status updated successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter shipping status name' }]}
              >
                <Input placeholder="Enter Shipping Status Name" />
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
    if (selectedMenu === 'Service Provider') {
      const serviceProviderColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedServiceProvider(record);
                  setSelectedMenu('editServiceProvider');
                  serviceProviderForm.setFieldsValue({ name: record.name });
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this service provider?"
                onConfirm={() => {
                  setServiceProviders(prevProviders => prevProviders.filter(provider => provider.id !== record.id));
                  message.success('Service provider deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Service Provider</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Service Provider List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addServiceProvider')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={serviceProviderColumns}
              dataSource={serviceProviders}
              rowKey="id"
              pagination={false}
              className="bg-white"
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addServiceProvider') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add Service Provider</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Service Provider')}>
              Service Provider List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={serviceProviderForm}
              layout="vertical"
              onFinish={(values) => {
                const newServiceProvider = {
                  id: serviceProviders.length + 1,
                  name: values.name,
                };
                setServiceProviders(prevProviders => [...prevProviders, newServiceProvider]);
                setSelectedMenu('Service Provider');
                serviceProviderForm.resetFields();
                message.success('Service provider added successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter service provider name' }]}
              >
                <Input placeholder="Enter Service Provider Name" />
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
    if (selectedMenu === 'editServiceProvider' && selectedServiceProvider) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Service Provider</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Service Provider')}>
              Service Provider List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={serviceProviderForm}
              layout="vertical"
              initialValues={{ name: selectedServiceProvider.name }}
              onFinish={(values) => {
                setServiceProviders(prevProviders =>
                  prevProviders.map(provider =>
                    provider.id === selectedServiceProvider.id ? { ...provider, name: values.name } : provider
                  )
                );
                setSelectedMenu('Service Provider');
                serviceProviderForm.resetFields();
                message.success('Service provider updated successfully');
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter service provider name' }]}
              >
                <Input placeholder="Enter Service Provider Name" />
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
    if (selectedMenu === 'customerManager') { 
      console.log("Rendering Customer Manager Page"); 
      const customerColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'DOB', dataIndex: 'dob', key: 'dob' },
        { title: 'Status', dataIndex: 'status', key: 'status' , width: 100,},
        { title: 'CreatedAt', dataIndex: 'createdAt', key: 'createdAt' },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setSelectedCustomer(record);
                  setSelectedMenu('editCustomer');
                  customerForm.setFieldsValue({
                    name: record.name,
                    email: record.email,
                    mobile: record.mobile,
                    gender: record.gender,
                    dob: record.dob,
                    status: record.status,
                    shippingAddress: record.shippingAddress,
                    address: record.address,
                  });
                }}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure you want to delete this customer?"
                onConfirm={() => {
                  setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== record.id));
                  message.success('Customer deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
                icon={<ExclamationCircleOutlined style={{ color: '#faad14' }} />}
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Customer</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Customer List</h3>
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setSelectedMenu('addCustomer')}
                  >
                    Add
                  </Button>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Search:</span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="border p-1 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4 gap-4">
              <div className="flex items-center">
                <span className="mr-2">Show</span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  className="border p-1 rounded"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
            </div>
            <Table
              columns={customerColumns}
              dataSource={customers}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
            <div className="mt-4">
              <span>Showing 1 to {Math.min(pageSize, customers.length)} of {customers.length} entries</span>
            </div>
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }
    if (selectedMenu === 'addCustomer') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Customer</h2>
            <Button type="primary" onClick={() => setSelectedMenu('customerManager')}>
              Customer List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={customerForm}
              layout="vertical"
              onFinish={(values) => {
                const newCustomer = {
                  id: customers.length + 1,
                  name: values.name,
                  email: values.email,
                  mobile: values.mobile,
                  gender: values.gender,
                  dob: values.dob,
                  status: values.status || 'ON',
                  createdAt: new Date().toLocaleDateString(),
                  shippingAddress: values.shippingAddress,
                  address: values.address,
                };
                setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
                setSelectedMenu('customerManager'); // यहाँ भी सही करें
                customerForm.resetFields();
                message.success('Customer added successfully');
              }}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: 'Please enter full name' }]}
              >
                <Input placeholder="Enter Full Name" />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter email address' }]}
              >
                <Input placeholder="Enter Email Address" />
              </Form.Item>
              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[{ required: true, message: 'Please enter mobile number' }]}
              >
                <Input placeholder="Enter Mobile Number" />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please select gender' }]}
              >
                <Select placeholder="Select Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[{ required: true, message: 'Please enter date of birth' }]}
              >
                <Input placeholder="mm/dd/yyyy" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter password' }]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
              <Form.Item
                label="Shipping Address"
                name="shippingAddress"
              >
                <Input.TextArea placeholder="Enter Shipping Address" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
              >
                <Input.TextArea placeholder="Enter Address" />
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
    if (selectedMenu === 'editCustomer' && selectedCustomer) {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Customer</h2>
            <Button type="primary" onClick={() => setSelectedMenu('customerManager')}>
              Customer List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              form={customerForm}
              layout="vertical"
              initialValues={{
                name: selectedCustomer.name,
                email: selectedCustomer.email,
                mobile: selectedCustomer.mobile,
                gender: selectedCustomer.gender,
                dob: selectedCustomer.dob,
                status: selectedCustomer.status,
                shippingAddress: selectedCustomer.shippingAddress,
                address: selectedCustomer.address,
              }}
              onFinish={(values) => {
                setCustomers(prevCustomers =>
                  prevCustomers.map(customer =>
                    customer.id === selectedCustomer.id
                      ? {
                          ...customer,
                          name: values.name,
                          email: values.email,
                          mobile: values.mobile,
                          gender: values.gender,
                          dob: values.dob,
                          status: values.status,
                          shippingAddress: values.shippingAddress,
                          address: values.address,
                        }
                      : customer
                  )
                );
                setSelectedMenu('customerManager'); 
                customerForm.resetFields();
                message.success('Customer updated successfully');
              }}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: 'Please enter full name' }]}
              >
                <Input placeholder="Enter Full Name" />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter email address' }]}
              >
                <Input placeholder="Enter Email Address" />
              </Form.Item>
              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[{ required: true, message: 'Please enter mobile number' }]}
              >
                <Input placeholder="Enter Mobile Number" />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[{ required: true, message: 'Please select gender' }]}
              >
                <Select placeholder="Select Gender">
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[{ required: true, message: 'Please enter date of birth' }]}
              >
                <Input placeholder="mm/dd/yyyy" />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select placeholder="Select Status">
                  <Option value="ON">Active</Option>
                  <Option value="OFF">Inactive</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Shipping Address"
                name="shippingAddress"
              >
                <Input.TextArea placeholder="Enter Shipping Address" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
              >
                <Input.TextArea placeholder="Enter Address" />
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
    if (selectedMenu === 'payment') {
      console.log("Rendering Payment List Page");
      const paymentColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'USER', dataIndex: 'user', key: 'user' },
        { title: 'PAYMENT ID', dataIndex: 'paymentId', key: 'paymentId' },
        {
          title: 'AMOUNT',
          dataIndex: 'amount',
          key: 'amount',
          width: 100,
          render: (amount) => (amount !== undefined && amount !== null ? amount : 'N/A'),
        },
        { title: 'PRODUCT', dataIndex: 'product', key: 'product' },
        { title: 'CREATED AT', dataIndex: 'createdAt', key: 'createdAt' },
      ];
    
      const paymentData = [
        {
          id: 1,
          user: 'sohinghosh3108@gmail.com',
          paymentId: '65446252721c0e3417288b',
          amount: 972,
          product: '1. Organic Wild Forest Honey\n2. Face Pack Powder\n3. Amla Pachak (Pack of Four)',
          createdAt: '11/3/2023, 8:30:34 AM',
        },
        {
          id: 2,
          user: 'kulhadebittu@gmail.com',
          paymentId: '6537eba5721c0e34164df4',
          amount: 829,
          product: '1. Face Pack Powder\n2. Organic Wild Forest Honey\n3. Amla Pachak (Pack of Four)',
          createdAt: '10/24/2023, 9:37:01 PM',
        },
        {
          id: 3,
          user: 'kulhadebittu@gmail.com',
          paymentId: '6537ebb721c0e34164df85',
          amount: 829,
          product: '1. Face Pack Powder\n2. Organic Wild Forest Honey\n3. Amla Pachak (Pack of Four)',
          createdAt: '10/24/2023, 9:36:31 PM',
        },
        {
          id: 4,
          user: 'sheshagiri.v1@gmail.com',
          paymentId: '6530d59721c0e3415c8eb',
          amount: 2227,
          product: '1. Organic Wild Forest Honey\n2. CTC Tea',
          createdAt: '10/19/2023, 12:37:04 PM',
        },
        {
          id: 5,
          user: 'gaurang.mathur95@gmail.com',
          paymentId: '652ed08721c0e3415b61b2',
          amount: 330,
          product: '1. Triphala Churna',
          createdAt: '10/17/2023, 11:52:16 PM',
        },
        {
          id: 6,
          user: 'amitupadhyay1987@gmail.com',
          paymentId: '652be97221c0e3415859e',
          amount: 684,
          product: '1. Wild Forest Honey',
          createdAt: '10/15/2023, 7:32:17 PM',
        },
        {
          id: 7,
          user: 'bhuwnesh.shrivastava@gmail.com',
          paymentId: '652bd72821c0e341507dab',
          amount: 11,
          product: '1. Lemon Soap',
          createdAt: '10/13/2023, 11:05:38 AM',
        },
        {
          id: 8,
          user: 'akm249@yahoo.com',
          paymentId: '652b375021c0e341491e84',
          amount: 295,
          product: '1. Ashwagandha Churna\n2. Madhumeh Nashak Churna',
          createdAt: '10/11/2023, 3:35:06 PM',
        },
        {
          id: 9,
          user: 'dilipukpwade@gmail.com',
          paymentId: '652b026b721c0e3414596fc',
          amount: 684,
          product: '1. Organic Wild Forest Honey',
          createdAt: '10/11/2023, 7:33:23 AM',
        },
        {
          id: 10,
          user: 'dilipukpwade@gmail.com',
          paymentId: '652b0269721c0e341459668',
          amount: 684,
          product: '1. Organic Wild Forest Honey',
          createdAt: '10/11/2023, 7:33:21 AM',
        },
        {
          id: 11,
          user: 'bd.anikpatpal@gmail.com',
          paymentId: '65237703721c0e341451d5b',
          amount: 655.2,
          product: '1. Aloevera Soothing Gel\n2. Aloevera Shampoo',
          createdAt: '10/10/2023, 9:38:35 PM',
        },
        {
          id: 12,
          user: 'harishkumarcam@gmail.com',
          paymentId: '652415e5721c0e3414b0f5',
          amount: 684,
          product: '1. Wild Forest Honey',
          createdAt: '10/9/2023, 8:31:57 PM',
        },
        {
          id: 13,
          user: 'sohinghosh3108@gmail.com',
          paymentId: '652123d4721c0e3413730d4',
          amount: 684,
          product: '1. Organic Wild Forest Honey',
          createdAt: '10/7/2023, 2:52:21 PM',
        },
        {
          id: 14,
          user: 'bvrao.hpcl@gmail.com',
          paymentId: '65211489721c0e341369b8a',
          amount: 684,
          product: '1. Organic Wild Forest Honey',
          createdAt: '10/7/2023, 1:49:21 PM',
        },
      ];
    
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Payment</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment List</h3>
              <div className="flex items-center">
                <span className="mr-2">Search:</span>
                <input
                  type="text"
                  placeholder="Search"
                  className="border p-1 rounded"
                />
              </div>
            </div>
            <Table
              columns={paymentColumns}
              dataSource={paymentData}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }
    if (selectedMenu === 'inventory') {
      console.log("Rendering Inventory Page");
      const inventoryColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'IMAGE', dataIndex: 'image', key: 'image' },
        { title: 'TITLE', dataIndex: 'title', key: 'title' },
        { title: 'CATEGORY', dataIndex: 'category', key: 'category' },
        { title: 'SUBCATEGORY', dataIndex: 'subcategory', key: 'subcategory' },
        { title: 'WT/QUANTITY', dataIndex: 'wtQuantity', key: 'wtQuantity' },
        {
          title: 'VIEW',
          key: 'view',
          render: () => <Button>View</Button>,
        },
      ];
  
      const inventoryData = []; //blank because data is not available 
      const handleExportToExcel = () => {
        const csv = [
          ['Order ID,Email,Payment Status,Order Mode,Qty,Price,Order Status,Shipping Status,Created At'],
          ...orders.map(order => [
            order.id, order.email, order.paymentStatus, order.orderMode, order.qty, order.price,
            order.orderStatus, order.shippingStatus, order.createdAt
          ].join(','))
        ].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Inventory.csv';
        a.click();
      };
  
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Inventory</h3>
              <div className="flex items-center gap-2">
              <Button
                    type="primary"
                    icon={<FileExcelOutlined />}
                    onClick={handleExportToExcel}
                    className="bg-green-500"
                  >
                    Excel
                  </Button>
              </div>
            </div>
            <Table
              columns={inventoryColumns}
              dataSource={inventoryData}
              rowKey="id"
              pagination={false}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }
   
    if (selectedMenu === 'Coupons') {
      const couponData = [
        { id: 1, code: "CODE50", amount: 50, percent: "", status: "On", createdAt: "15-02-2022" },
        { id: 2, code: "NEWUSER", amount: 100, percent: "", status: "On", createdAt: "15-02-2022" },
        { id: 3, code: "xyz12345", amount: 50, percent: "", status: "Off", createdAt: "11-04-2022" },
      ];

      const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "COUPON CODE", dataIndex: "code", key: "code" },
        { title: "AMOUNT", dataIndex: "amount", key: "amount" },
        { title: "PERCENT", dataIndex: "percent", key: "percent" , width: 100, },
        { 
          title: "STATUS", 
          dataIndex: "status", 
          key: "status", 
          render: (text) => (
            <span className={text === "On" ? "text-green-500" : "text-red-500"}>{text}</span>
          )
        },
        { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
        {
          title: "ACTION",
          key: "action",
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => setSelectedMenu(`editCoupon/${record.id}`)}
                className="text-yellow-500 border-yellow-500"
              >      
              </Button>
              <Popconfirm
                title="Are you sure to delete this coupon?"
                onConfirm={() => {
                  
                  message.success('Coupon deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                >
                </Button>
              </Popconfirm>
            </div>
          ),
        },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Coupons</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Coupons List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addCoupon')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={couponData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
          <footer className="mt-8 text-center text-gray-600">
            Copyright © {new Date().getFullYear()} CG HERBALS Admin All rights reserved.
          </footer>
        </div>
      );
    }

    if (selectedMenu === 'addCoupon') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Coupon</h2>
            <Button type="primary" onClick={() => setSelectedMenu('Coupons')}>
              Coupons List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              layout="vertical"
              onFinish={(values) => {
                message.success('Coupon added successfully');
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
                <Checkbox defaultChecked>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Coupon
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

    if (selectedMenu.startsWith('editCoupon/')) {
      const couponId = selectedMenu.split('/')[1];
      const couponData = [
        { id: 1, code: "CODE50", amount: 50, percent: "", status: "On", createdAt: "15-02-2022" },
        { id: 2, code: "NEWUSER", amount: 100, percent: "", status: "On", createdAt: "15-02-2022" },
        { id: 3, code: "xyz12345", amount: 50, percent: "", status: "Off", createdAt: "11-04-2022" },
      ];
      const coupon = couponData.find(c => c.id === parseInt(couponId));

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
                code: coupon?.code,
                offerType: coupon?.amount ? 'amount' : 'percent',
                value: coupon?.amount || coupon?.percent,
                description: "New Offer",
                status: coupon?.status === "On",
              }}
              onFinish={(values) => {
                
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
    }
    if (selectedMenu === 'Volunteer') {
      const requestData = [
        { id: 1, firstName: "Ajay", lastName: "Dewangan", email: "ajaydewangan215@gmail.com", mobile: "7999672902", createdAt: "25.04.2022" },
        { id: 2, firstName: "Aayush", lastName: "Nandeshwar", email: "aayushnandeshwar9@gmail.com", mobile: "747110458", createdAt: "05.06.2023" },
      ];

      const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
        { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
        { title: "EMAIL", dataIndex: "email", key: "email" },
        { title: "MOBILE", dataIndex: "mobile", key: "mobile" },
        { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Request</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Request List</h3>
              <Input.Search
                placeholder="Search"
                style={{ width: 200 }}
                onSearch={(value) => console.log(value)}
              />
            </div>
            <Table
              columns={columns}
              dataSource={requestData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }
    if (selectedMenu === 'Forest Lover') {
      const requestData = [
        { id: 1, firstName: "Ajay", lastName: "Dewangan", email: "ajaydewangan215@gmail.com", mobile: "7999672902", createdAt: "25.04.2022" },
        { id: 2, firstName: "Aayush", lastName: "Nandeshwar", email: "aayushnandeshwar9@gmail.com", mobile: "747110458", createdAt: "05.06.2023" },
      ];

      const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
        { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
        { title: "EMAIL", dataIndex: "email", key: "email" },
        { title: "MOBILE", dataIndex: "mobile", key: "mobile" },
        { title: "CREATEDAT", dataIndex: "createdAt", key: "createdAt" },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Request</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Request List</h3>
              <Input.Search
                placeholder="Search"
                style={{ width: 200 }}
                onSearch={(value) => console.log(value)}
              />
            </div>
            <Table
              columns={columns}
              dataSource={requestData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }
    if (selectedMenu === 'faq') {
      const faqData = [
        { id: 1, question: "How do I place an order?", answer: "Step 1: Pick the product of your choice. Step 2: Click on SHOP NOW. Step 3: Click on ADD TO CART the products you wish to purchase. Step 4: Click on PLACE ORDER Step 5: Fill out your personal details required for the delivery of your order. Step 6: Choose a payment option most convenient to you. Step 7: Confirm & place your order." },
        { id: 2, question: "Can I ship the products to an address that is different from my billing address?", answer: "Yes, you can do this by filling in your address in the 'Billing address'. Check the box that says 'Is this order a gift?' and enter the details of the address you wish to ship it to in the box below it." },
        { id: 3, question: "How do I know that my order is confirmed?", answer: "For all orders, the confirmation status will be automatically updated in the 'My Profile' section." },
        { id: 4, question: "Do I have to have an account to place an order?", answer: "We strongly recommend making an account on our website to make your shopping experience swift and simple. This will also help you enjoy special benefits as well as share ratings and review our products as per your experience." },
        { id: 5, question: "Can I order a product that is 'Out of Stock'?", answer: "Unfortunately, products listed as 'Out of Stock' are not available for immediate sale. We consistently restock our products, so rest assured that it will be back in stock soon." },
        { id: 6, question: "How safe is it to use my Debit/Credit card and make an online payment on Chattisgarh Herbals?", answer: "All transactions at Chattisgarh Herbals Online are protected by SSL (Secure Sockets Layer) and Secure Data Encryption using a 1024-bit process. Any information you enter when transacting with Chattisgarh Herbals Online is sent in a Secure Socket Layer (SSL) session and is encrypted to protect you against unintentional disclosure to third parties. This is an assurance that we follow the best security practices adopted by major online vendors, where all payments are processed in real-time for your security and immediate peace of mind. You can tell if you are in secure mode at 'Checkout', by looking for the padlock icon at the bottom corner or at the end of the address bar of your browser window." },
        { id: 7, question: "Why was my online payment rejected?", answer: "There are various reasons why this may have happened ranging from validity of card/net banking details, insufficient funds in the account to technical difficulties. If you were recently issued a new card, some of the information may have changed. In that case, please confirm your credit card details and try again. Also, check that your name and address match the name and address on your current credit card." },
        { id: 8, question: "I cannot complete my registration, what do I do?", answer: "Contact us, detailing the problem you have encountered. You can either email us on support@chattisgarhherbals.com and our Customer Care will be happy to assist you." },
      ];

      const columns = [
        { title: "ID", dataIndex: "id", key: "id"  , width: 100},
        { title: "QUESTION", dataIndex: "question", key: "question" },
        { title: "ANSWER", dataIndex: "answer", key: "answer" },
        {
          title: "ACTION",
          key: "action",
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => setSelectedMenu(`editFAQ/${record.id}`)}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure to delete this FAQ?"
                onConfirm={() => {
                  message.success('FAQ deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];
      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">FAQ List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addFAQ')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={faqData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }

    if (selectedMenu === 'addFAQ') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New FAQ</h2>
            <Button type="primary" onClick={() => setSelectedMenu('faq')}>
              FAQ List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              layout="vertical"
              onFinish={(values) => {
                message.success('FAQ added successfully');
                setSelectedMenu('faq');
              }}
            >
              <Form.Item
                label="QUESTION"
                name="question"
                rules={[{ required: true, message: 'Please enter the question' }]}
              >
                <Input placeholder="Enter question" />
              </Form.Item>
              <Form.Item
                label="ANSWER"
                name="answer"
                rules={[{ required: true, message: 'Please enter the answer' }]}
              >
                <Input.TextArea rows={4} placeholder="Enter answer" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }

    if (selectedMenu.startsWith('editFAQ/')) {
      const faqId = selectedMenu.split('/')[1];
      const faqData = [
        { id: 1, question: "How do I place an order?", answer: "Step 1: Pick the product of your choice. Step 2: Click on SHOP NOW. Step 3: Click on ADD TO CART the products you wish to purchase. Step 4: Click on PLACE ORDER Step 5: Fill out your personal details required for the delivery of your order. Step 6: Choose a payment option most convenient to you. Step 7: Confirm & place your order." },
        { id: 2, question: "Can I ship the products to an address that is different from my billing address?", answer: "Yes, you can do this by filling in your address in the 'Billing address'. Check the box that says 'Is this order a gift?' and enter the details of the address you wish to ship it to in the box below it." },
        { id: 3, question: "How do I know that my order is confirmed?", answer: "For all orders, the confirmation status will be automatically updated in the 'My Profile' section." },
        { id: 4, question: "Do I have to have an account to place an order?", answer: "We strongly recommend making an account on our website to make your shopping experience swift and simple. This will also help you enjoy special benefits as well as share ratings and review our products as per your experience." },
        { id: 5, question: "Can I order a product that is 'Out of Stock'?", answer: "Unfortunately, products listed as 'Out of Stock' are not available for immediate sale. We consistently restock our products, so rest assured that it will be back in stock soon." },
        { id: 6, question: "How safe is it to use my Debit/Credit card and make an online payment on Chattisgarh Herbals?", answer: "All transactions at Chattisgarh Herbals Online are protected by SSL (Secure Sockets Layer) and Secure Data Encryption using a 1024-bit process. Any information you enter when transacting with Chattisgarh Herbals Online is sent in a Secure Socket Layer (SSL) session and is encrypted to protect you against unintentional disclosure to third parties. This is an assurance that we follow the best security practices adopted by major online vendors, where all payments are processed in real-time for your security and immediate peace of mind. You can tell if you are in secure mode at 'Checkout', by looking for the padlock icon at the bottom corner or at the end of the address bar of your browser window." },
        { id: 7, question: "Why was my online payment rejected?", answer: "There are various reasons why this may have happened ranging from validity of card/net banking details, insufficient funds in the account to technical difficulties. If you were recently issued a new card, some of the information may have changed. In that case, please confirm your credit card details and try again. Also, check that your name and address match the name and address on your current credit card." },
        { id: 8, question: "I cannot complete my registration, what do I do?", answer: "Contact us, detailing the problem you have encountered. You can either email us on support@chattisgarhherbals.com and our Customer Care will be happy to assist you." },
      ];
      const faq = faqData.find(f => f.id === parseInt(faqId));

      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit FAQ</h2>
            <Button type="primary" onClick={() => setSelectedMenu('faq')}>
              FAQ List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              layout="vertical"
              initialValues={{
                question: faq?.question,
                answer: faq?.answer,
              }}
              onFinish={(values) => {
                message.success('FAQ updated successfully');
                setSelectedMenu('faq');
              }}
            >
              <Form.Item
                label="QUESTION"
                name="question"
                rules={[{ required: true, message: 'Please enter the question' }]}
              >
                <Input placeholder="Enter question" />
              </Form.Item>
              <Form.Item
                label="ANSWER"
                name="answer"
                rules={[{ required: true, message: 'Please enter the answer' }]}
              >
                <Input.TextArea rows={4} placeholder="Enter answer" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }

    if (selectedMenu === 'grievanceCategory') {
      const grievanceData = [
        { id: 1, name: "Support and Feedback", status: "Active" },
        { id: 2, name: "Grievances", status: "Active" },
      ];

      const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "NAME", dataIndex: "name", key: "name" },
        { 
          title: "STATUS", 
          dataIndex: "status", 
          key: "status", 
          render: (text) => (
            <span className={text === "Active" ? "text-green-500" : "text-red-500"}>{text}</span>
          )
        },
        {
          title: "ACTION",
          key: "action",
          render: (_, record) => (
            <div className="flex gap-2">
              <Button
                icon={<EditOutlined />}
                onClick={() => setSelectedMenu(`editGrievance/${record.id}`)}
                className="text-yellow-500 border-yellow-500"
              />
              <Popconfirm
                title="Are you sure to delete this grievance category?"
                onConfirm={() => {
                  message.success('Grievance category deleted successfully');
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  className="text-red-500 border-red-500"
                />
              </Popconfirm>
            </div>
          ),
        },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Grievance Category</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Grievance List</h3>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setSelectedMenu('addGrievance')}
              >
                Add
              </Button>
            </div>
            <Table
              columns={columns}
              dataSource={grievanceData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }

    if (selectedMenu === 'addGrievance') {
      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Add New Grievance</h2>
            <Button type="primary" onClick={() => setSelectedMenu('grievanceCategory')}>
              Grievance List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              layout="vertical"
              onFinish={(values) => {
                message.success('Grievance category added successfully');
                setSelectedMenu('grievanceCategory');
              }}
            >
              <Form.Item
                label="NAME"
                name="name"
                rules={[{ required: true, message: 'Please enter the name' }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>
              <Form.Item
                label="STATUS"
                name="status"
                valuePropName="checked"
              >
                <Checkbox defaultChecked>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }

    if (selectedMenu.startsWith('editGrievance/')) {
      const grievanceId = selectedMenu.split('/')[1];
      const grievanceData = [
        { id: 1, name: "Support and Feedback", status: "Active" },
        { id: 2, name: "Grievances", status: "Active" },
      ];
      const grievance = grievanceData.find(g => g.id === parseInt(grievanceId));

      return (
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Edit Grievance</h2>
            <Button type="primary" onClick={() => setSelectedMenu('grievanceCategory')}>
              Grievance List
            </Button>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <Form
              layout="vertical"
              initialValues={{
                name: grievance?.name,
                status: grievance?.status === "Active",
              }}
              onFinish={(values) => {
                message.success('Grievance category updated successfully');
                setSelectedMenu('grievanceCategory');
              }}
            >
              <Form.Item
                label="NAME"
                name="name"
                rules={[{ required: true, message: 'Please enter the name' }]}
              >
                <Input placeholder="Enter name" />
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
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }
    if (selectedMenu === 'grievanceUserData') {
      const userData = []; // Screenshot ke hisaab se abhi data khali hai

      const columns = [
        { title: "ID", dataIndex: "id", key: "id" },
        { title: "FIRST NAME", dataIndex: "firstName", key: "firstName" },
        { title: "LAST NAME", dataIndex: "lastName", key: "lastName" },
        { title: "EMAIL", dataIndex: "email", key: "email" },
        { title: "GRIEVANCE", dataIndex: "grievance", key: "grievance" },
        { title: "MESSAGE", dataIndex: "message", key: "message" },
      ];

      return (
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Grievance UserData</h2>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Grievance UserData List</h3>
              <Input.Search
                placeholder="Search"
                style={{ width: 200 }}
                onSearch={(value) => console.log(value)}
              />
            </div>
            <Table
              columns={columns}
              dataSource={userData}
              rowKey="id"
              pagination={{ pageSize }}
              className="bg-white"
              scroll={{ x: 'max-content', y: 400 }}
              locale={{ emptyText: 'No data' }}
            />
          </div>
        </div>
      );
    }
    return <div>Select a section from the menu</div>;
  };
  return (
    <Layout className="   min-h-screen">
      <Sider 
        width={250} 
        className="bg-gray-800 text-white" 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)} 
        trigger={null}
      >
        <div className="p-4 flex items-center bg-white full">
          <Image
            src="/images/leaf 4.png"
            alt="CG Herbals Logo"
            width={140}
            height={150}
            className="mb-1 relative  left-7"
          />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          className="bg-gray-800 text-white"
          style={{
            backgroundColor: '#ffffff', 
            color: '#000000', 
          }}
          onClick={handleMenuSelect}
          items={[
            { key: 'dashboard', icon: <HomeOutlined />, label: 'Dashboard' },
            { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
            { key: 'admin', icon: <UserOutlined />, label: 'Admin', children: [
              { key: 'users', label: 'Users' },
              { key: 'roles', label: 'Roles' },
            ] },
            { key: 'productManager', icon: <ShoppingOutlined />, label: 'Product Manager', children: [
              { key: 'Product', label: 'Product' },
              { key: 'Category', label: 'Category' },
              { key: 'Sub Category', label: 'Sub Category' },
              { key: 'Remedy', label: 'Remedy' },
              { key: 'Ingridients', label: 'Ingridients' },
              { key: 'Weight Unit', label: 'Weight Unit' },
              { key: 'Length Unit', label: 'Length Unit' },
              { key: 'Tax Manager', label: 'Tax Manager' },
              { key: 'HSNCODE Master', label: 'HSNCODE Master' },
            ] },
            { key: 'orderManager', icon: <ShoppingOutlined />, label: 'Order Manager', children: [
              { key: 'Order Manager', label: 'Order Manager' },
              { key: 'Order Status', label: 'Order Status' },
              { key: 'Shipping Status', label: 'Shipping Status' },
              { key: 'Service Provider', label: 'Service Provider' },
            ] },
            { key: 'payment', icon: <ShoppingOutlined />, label: 'Payment' },
            { key: 'customerManager', icon: <UserOutlined />, label: 'Customer Manager' },
            { key: 'inventory', icon: <ShoppingOutlined />, label: 'Inventory' },
            { key: 'homeComponent', icon: <HomeOutlined />, label: 'Home Component', children: [
              { key: 'Banner', label: 'Banner' },
              { key: 'Featured Product', label: 'Featured Product' },
              { key: 'Empowerd', label: 'Empowerd' },
              { key: 'Community', label: 'Community' },
              { key: 'District', label: 'District' },
              { key: 'Store', label: 'Store' },
              { key: 'Warhouse', label: 'Warhouse' },
              { key: 'Samiti', label: 'Samiti' },
            ] },
            { key: 'pages', icon: <FileTextOutlined />, label: 'Pages', children: [
              { key: 'About', label: 'About' },
              { key: 'News', label: 'News' },
              { key: 'Blogs', label: 'Blogs' },
              { key: 'Corporate', label: 'Corporate' },
              { key: 'Stories', label: 'Stories' },
              { key: 'Contact', label: 'Contact' },
            ] },
            { key: 'customerManager', icon: <UserOutlined />, label: 'Customer Manager' },
           
            { key: 'inventory', icon: <ShoppingOutlined />, label: 'Inventory' },
            { key: 'discount', icon: <ShoppingOutlined />, label: 'Discount', children: [
              { key: 'Coupons', label: 'Coupons' },
            ] },
            { key: 'connect', icon: <HomeOutlined />, label: 'Connect', children: [
              { key: 'Volunteer', label: 'Volunteer' },
              { key: 'Forest Lover', label: 'Forest Lover' },
            ] },
            { key: 'faq', icon: <FileTextOutlined />, label: 'FAQ' },
            { key: 'grievanceCategory', icon: <UserOutlined />, label: 'Grievance Category' },
            { key: 'grievanceUserData', icon: <UserOutlined />, label: 'Grievance User Data' },
          ]}
        /> 
      </Sider>
      <Layout>
      <Header className="!bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-black">CG HERBALS</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                icon={<BellOutlined style={{ color: 'white' }} />}
                className="!text-black border border-gray-300 hover:bg-gray-200 hover:!text-black"
                onClick={() => message.info('Notifications functionality to be implemented')}
              />
              <Button
                icon={<LogoutOutlined style={{ color: 'white' }} />}
                style={{ backgroundColor: '#042521' }}
                className="w-full text-white p-2 rounded-xl hover:opacity-90 transition"  
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
        </Header>
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <Button
            icon={<MenuOutlined />}
            className="text-black border-gray-500 hover:bg-gray-200"
            onClick={() => setCollapsed(!collapsed)}
          />
          <Breadcrumb
            items={getBreadcrumbItems()}
            className="mb-4"
            separator="/"
          />
        </div>
        <Content className="p-6 bg-gray-100">
          {loading && (
            <div className="flex justify-center mb-6">
              <Spin size="large" />
            </div>
          )}
          {renderContent()}
          {/* Add New Admin Modal */}
          <Modal
            title="Add New Admin"
            visible={isAddModalVisible && selectedMenu === 'users'}
            onCancel={() => setIsAddModalVisible(false)}
            footer={null}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleAddAdmin}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter the email' }, { type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter the password' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please select a role' }]}
              >
                <Select placeholder="---Select Admin Role---">
                  {roles.map((role) => (
                    <Option key={role} value={role}>{role}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'Please select a district' }]}
              >
                <Select placeholder="---Select District---">
                  {districts.map((district) => (
                    <Option key={district} value={district}>{district}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Block"
                name="block"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Village"
                name="village"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                valuePropName="checked"
              >
                <Checkbox>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Admin
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          {/* Add/Edit Role Modal */}
          <Modal
            title={selectedRole ? 'Edit Role' : 'Add New Role'}
            visible={isAddModalVisible && selectedMenu === 'roles'}
            onCancel={() => setIsAddModalVisible(false)}
            footer={null}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={selectedRole ? handleUpdateRole : handleAddRole}
              initialValues={selectedRole || {}}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the role name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Permissions"
                name="permissions"
              >
                <Select mode="multiple" placeholder="Select permissions">
                  {[
                    'Dashboard', 'Profile', 'Users', 'Roles', 'Banner', 'Featured Product', 'Empowerd', 'Community',
                    'District', 'Store', 'Warhouse', 'Samiti', 'About', 'News', 'Blog', 'Corporate', 'Stories',
                    'Contact', 'Product', 'Category', 'Sub Category', 'Remedy', 'Ingridients', 'Weight Unit',
                    'Length Unit', 'Tax Manager', 'HSNCODE Master', 'Order Manager', 'Order Status',
                    'Shipping Status', 'Service Provider', 'Payment', 'Inventory', 'Discount', 'Coupons',
                    'Volunteer', 'Forest Lover', 'FAQ', 'Grievance Category', 'Grievance UserData'
                  ].map((perm) => (
                    <Option key={perm} value={perm}>{perm}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {selectedRole ? 'Update Role' : 'Add Role'}
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          {/* Edit Admin Modal */}
          <Modal
            title="Edit Admin"
            visible={isEditModalVisible && selectedMenu === 'users'}
            onCancel={() => setIsEditModalVisible(false)}
            footer={null}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateAdmin}
              initialValues={selectedAdmin}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please enter the email' }, { type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Role"
                name="role"
                rules={[{ required: true, message: 'Please select a role' }]}
              >
                <Select placeholder="---Select Admin Role---">
                  {roles.map((role) => (
                    <Option key={role} value={role}>{role}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="District"
                name="district"
                rules={[{ required: true, message: 'Please select a district' }]}
              >
                <Select placeholder="---Select District---">
                  {districts.map((district) => (
                    <Option key={district} value={district}>{district}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Block"
                name="block"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Village"
                name="village"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Status"
                name="status"
                valuePropName="checked"
              >
                <Checkbox>Active</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update User
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          {/* Edit Role Modal */}
          <Modal
            title="Edit Role"
            visible={isEditModalVisible && selectedMenu === 'roles'}
            onCancel={() => setIsEditModalVisible(false)}
            footer={null}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleUpdateRole}
              initialValues={selectedRole}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter the role name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Permissions"
                name="permissions"
              >
                <Select mode="multiple" placeholder="Select permissions">
                  {[
                    'Dashboard', 'Profile', 'Users', 'Roles', 'Banner', 'Featured Product', 'Empowerd', 'Community',
                    'District', 'Store', 'Warhouse', 'Samiti', 'About', 'News', 'Blog', 'Corporate', 'Stories',
                    'Contact', 'Product', 'Category', 'Sub Category', 'Remedy', 'Ingridients', 'Weight Unit',
                    'Length Unit', 'Tax Manager', 'HSNCODE Master', 'Order Manager', 'Order Status',
                    'Shipping Status', 'Service Provider', 'Payment', 'Inventory', 'Discount', 'Coupons',
                    'Volunteer', 'Forest Lover', 'FAQ', 'Grievance Category', 'Grievance UserData'
                  ].map((perm) => (
                    <Option key={perm} value={perm}>{perm}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Role
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}



