'use client';
import { useEffect, useState } from 'react';
import { Modal, Input, Button, message, Spin, Form, Layout, Menu, Card, Table, Switch, Popconfirm, Select, Checkbox, Breadcrumb, Upload, DatePicker , Radio } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingOutlined, FileTextOutlined, PlusOutlined, EditOutlined, DeleteOutlined, LockOutlined, SettingOutlined, BellOutlined, LogoutOutlined, MenuOutlined, UploadOutlined, LeftOutlined, ExclamationCircleOutlined , EyeOutlined , FileExcelOutlined } from '@ant-design/icons'; 
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import Leftmenu from '../Commoncomponents/Leftmenu';
import Profile from  '../Commoncomponents/Profile';
import Users from  '../Commoncomponents/Users';
import Roles from  '../Commoncomponents/Roles';
import Permissions from  '../Commoncomponents/Permissions';
import Banner from  '../Commoncomponents/Banner';
import EditBanner from  '../Commoncomponents/EditBanner';
import AddBanner from  '../Commoncomponents/AddBanner';
import FeaturedProduct from  '../Commoncomponents/FeaturedProduct';
import AddFeaturedProduct from  '../Commoncomponents/AddFeaturedProduct';
import EditFeaturedProduct from  '../Commoncomponents/EditFeaturedProduct';
import Empowerd from  '../Commoncomponents/Empowerd';
import EditEmpowrd from  '../Commoncomponents/EditEmpowrd';
import AddEmpowrd from  '../Commoncomponents/AddEmpowrd';
import Community from  '../Commoncomponents/Community';
import AddCommunity from  '../Commoncomponents/AddCommunity';
import EditCommunity from  '../Commoncomponents/EditCommunity';
import DistrictList from  '../Commoncomponents/DistrictList';
import EditDistrict from  '../Commoncomponents/EditDistrict';
import AddDistrict from  '../Commoncomponents/AddDistrict';
import StoreList from  '../Commoncomponents/StoreList';
import EditStore from  '../Commoncomponents/EditStore';
import AddStore from  '../Commoncomponents/AddStore.';
import AboutList from  '../Commoncomponents/AboutList';
import AddAbout from  '../Commoncomponents/AddAbout';
import EditAbout from  '../Commoncomponents/EditAbout';
import NewsList from  '../Commoncomponents/NewsList';
import AddExhibition from  '../Commoncomponents/AddExhibition';
import EditNews from  '../Commoncomponents/EditNews';
import BlogList from  '../Commoncomponents/BlogList';
import AddBlog from  '../Commoncomponents/AddBlog';
import EditBlog from  '../Commoncomponents/EditBlog';
import CorporateList from  '../Commoncomponents/CorporateList';
import Stories from  '../Commoncomponents/Stories';
import Contact from  '../Commoncomponents/Contact';
import ProductList from  '../Commoncomponents/ProductList';
import AddProduct from  '../Commoncomponents/AddProduct';
import EditProduct from  '../Commoncomponents/EditProduct';
import CategoryList from  '../Commoncomponents/CategoryList';
import AddCategory  from  '../Commoncomponents/AddCategory';
import EditCategory from '../Commoncomponents/EditCategory';
import SubCategoryList from '../Commoncomponents/SubCategoryList';
import AddSubCategory  from '../Commoncomponents/AddSubCategory';
import EditSubCategory from '../Commoncomponents/EditSubCategory';
import RemedyList from '../Commoncomponents/RemedyList';
import AddRemedy from '../Commoncomponents/AddRemedy';
import EditRemedy from '../Commoncomponents/EditRemedy';
import IngridientsList from '../Commoncomponents/IngridientsList';
import WeightUnitList from '../Commoncomponents/WeightUnitList';
import AddWeightUnit from '../Commoncomponents/AddWeightUnit';
import EditWeightUnit from '../Commoncomponents/EditWeightUnit';
import TaxList from '../Commoncomponents/TaxList';
import AddTax from '../Commoncomponents/AddTax';
import EditTax from '../Commoncomponents/EditTax';
import HsncodeList from '../Commoncomponents/HsncodeList';
import AddHsncode from '../Commoncomponents/AddHsncode';
import EditHsncode from '../Commoncomponents/EditHsncode';
import OrderList from '../Commoncomponents/OrderList';
import AddOrder from '../Commoncomponents/AddOrder';
import ViewOrder from '../Commoncomponents/ViewOrder';
import EditOrder from '../Commoncomponents/EditOrder';
import OrderStatusList from '../Commoncomponents/OrderStatusList';
import AddOrderStatus from '../Commoncomponents/AddOrderStatus';
import EditOrderStatus from '../Commoncomponents/EditOrderStatus';
import ShippingStatusList from '../Commoncomponents/ShippingStatusList';
import AddShippingStatus from '../Commoncomponents/AddShippingStatus';
import EditShippingStatus from '../Commoncomponents/EditShippingStatus';
import ServiceProviderList from '../Commoncomponents/ServiceProviderList';
import AddServiceProvider from '../Commoncomponents/AddServiceProvider';
import EditServiceProvider from '../Commoncomponents/EditServiceProvider';
import CustomerManagerList from '../Commoncomponents/CustomerManagerList';
import AddCustomer from '../Commoncomponents/AddCustomer';
import EditCustomer from '../Commoncomponents/EditCustomer';
import PaymentList from '../Commoncomponents/PaymentList';
import InventoryList from '../Commoncomponents/InventoryList';
import Coupons from '../Commoncomponents/Coupons';
import AddCoupon from '../Commoncomponents/AddCoupon';
import EditCoupon from '../Commoncomponents/EditCoupon';
import Volunteer from '../Commoncomponents/Volunteer';
import ForestLover from '../Commoncomponents/ForestLover';
import FAQ from '../Commoncomponents/FAQ';
import AddFAQ from '../Commoncomponents/AddFAQ';
import EditFAQ from '../Commoncomponents/EditFAQ';
import GrievanceCategory  from '../Commoncomponents/GrievanceCategory';
import AddGrievance from '../Commoncomponents/AddGrievance';
import EditGrievance from '../Commoncomponents/EditGrievance';
import GrievanceUserData from '../Commoncomponents/GrievanceUserData';


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
  const [couponList, setCouponList] = useState([
  { id: 1, code: "CODE50", amount: 50, percent: "", status: "On", createdAt: "15-02-2022", description: "" },
    { id: 2, code: "NEWUSER", amount: 100, percent: "", status: "On", createdAt: "15-02-2022", description: "" },
    { id: 3, code: "xyz12345", amount: 50, percent: "", status: "Off", createdAt: "11-04-2022", description: "" },
]);

const handleDeleteCoupon = (couponId) => {
  setCouponList(couponList.filter(coupon => coupon.id !== couponId));
  message.success('Coupon deleted successfully');
};
const [volunteerRequests, setVolunteerRequests] = useState([
    { id: 1, firstName: "Ajay", lastName: "Dewangan", email: "ajaydewangan215@gmail.com", mobile: "7999672902", createdAt: "25.04.2022" },
    { id: 2, firstName: "Aayush", lastName: "Nandeshwar", email: "aayushnandeshwar9@gmail.com", mobile: "747110458", createdAt: "05.06.2023" },
  ]);
  const [faqData, setFaqData] = useState([
    { id: 1, question: "How do I place an order?", answer: "Step 1: Pick the product of your choice. Step 2: Click on SHOP NOW. Step 3: Click on ADD TO CART the products you wish to purchase. Step 4: Click on PLACE ORDER Step 5: Fill out your personal details required for the delivery of your order. Step 6: Choose a payment option most convenient to you. Step 7: Confirm & place your order." },
    { id: 2, question: "Can I ship the products to an address that is different from my billing address?", answer: "Yes, you can do this by filling in your address in the 'Billing address'. Check the box that says 'Is this order a gift?' and enter the details of the address you wish to ship it to in the box below it." },
    { id: 3, question: "How do I know that my order is confirmed?", answer: "For all orders, the confirmation status will be automatically updated in the 'My Profile' section." },
    { id: 4, question: "Do I have to have an account to place an order?", answer: "We strongly recommend making an account on our website to make your shopping experience swift and simple. This will also help you enjoy special benefits as well as share ratings and review our products as per your experience." },
    { id: 5, question: "Can I order a product that is 'Out of Stock'?", answer: "Unfortunately, products listed as 'Out of Stock' are not available for immediate sale. We consistently restock our products, so rest assured that it will be back in stock soon." },
    { id: 6, question: "How safe is it to use my Debit/Credit card and make an online payment on Chattisgarh Herbals?", answer: "All transactions at Chattisgarh Herbals Online are protected by SSL (Secure Sockets Layer) and Secure Data Encryption using a 1024-bit process. Any information you enter when transacting with Chattisgarh Herbals Online is sent in a Secure Socket Layer (SSL) session and is encrypted to protect you against unintentional disclosure to third parties. This is an assurance that we follow the best security practices adopted by major online vendors, where all payments are processed in real-time for your security and immediate peace of mind. You can tell if you are in secure mode at 'Checkout', by looking for the padlock icon at the bottom corner or at the end of the address bar of your browser window." },
    { id: 7, question: "Why was my online payment rejected?", answer: "There are various reasons why this may have happened ranging from validity of card/net banking details, insufficient funds in the account to technical difficulties. If you were recently issued a new card, some of the information may have changed. In that case, please confirm your credit card details and try again. Also, check that your name and address match the name and address on your current credit card." },
    { id: 8, question: "I cannot complete my registration, what do I do?", answer: "Contact us, detailing the problem you have encountered. You can either email us on support@chattisgarhherbals.com and our Customer Care will be happy to assist you." },
  ]);
  const [grievanceData, setGrievanceData] = useState([
    { id: 1, name: "Support and Feedback", status: "Active" },
    { id: 2, name: "Grievances", status: "Active" },
  ]);
  const [grievanceUserData, setGrievanceUserData] = useState([
    
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
  const [selectedMenu, setSelectedMenu] = useState('dashboard' , );

  
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
const handleDeleteCategory = (categoryId) => {
    setCategoryList(categoryList.filter(category => category.id !== categoryId));
    message.success('Category deleted successfully');
  };
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

const handleDeleteProduct = (productId) => {
    setSelectedMenu(`deleteProduct/${productId}`); 
  }

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
   const handleEditProduct = (productId) => {
  const product = productList.find(p => p.id === productId);
  if (product) {
    setSelectedProduct(product);
    setWeights(product.weights || []);
    setBenefits(product.benefits || []);
    setFaqs(product.faqs || []);
    setSelectedMenu(`editProduct/${productId}`); // Edit पेज पर स्विच करें
  }
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
      <Profile
        profileData={profileData}
        setProfileData={setProfileData}
      />
    );
  }
  if (selectedMenu === 'users') {
      return (
        <Users
          mockAdminList={mockAdminList}
          adminListColumns={adminListColumns}
          showAddModal={showAddModal}
          requestSort={requestSort}
        />
      );
    }
    if (selectedMenu === 'roles') {
      return (
        <Roles
          sortedRoleList={sortedRoleList}
          roleListColumns={roleListColumns}
          showAddRoleModal={showAddRoleModal}
          requestSort={requestSort}
        />
      );
    }
    if (selectedMenu === 'permissions' && selectedRole) {
      return (
        <Permissions
          selectedRole={selectedRole}
          permissionCategories={permissionCategories}
          setSelectedMenu={setSelectedMenu}
          handleUpdateRole={handleUpdateRole}
        />
      );
    }
    if (selectedMenu === 'Banner') {
      return (
        <Banner
          bannerList={bannerList}
          bannerListColumns={bannerListColumns}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'addBanner') {
      return (
        <AddBanner
          form={form}
          handleAddBanner={handleAddBanner}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    
    if (selectedMenu === 'Featured Product') {
      return (
        <FeaturedProduct
          productList={productList}
          featuredProductListColumns={featuredProductListColumns}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'addFeaturedProduct') {
      return (
        <AddFeaturedProduct
          form={form}
          productOptions={productOptions}
          handleAddFeaturedProduct={handleAddFeaturedProduct}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'editFeaturedProduct' && selectedFeaturedProduct) {
      return (
        <EditFeaturedProduct
          form={form}
          selectedFeaturedProduct={selectedFeaturedProduct}
          productOptions={productOptions}
          handleUpdateFeaturedProduct={handleUpdateFeaturedProduct}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'editBanner' && selectedBanner) {
      return (
        <EditBanner
          form={form}
          selectedBanner={selectedBanner}
          handleUpdateBanner={handleUpdateBanner}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'Empowerd') {
      return (
        <Empowerd
          empowrdList={empowrdList}
          empowrdListColumns={empowrdListColumns}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'addEmpowrd') {
      return (
        <AddEmpowrd
          form={form}
          handleAddEmpowrd={handleAddEmpowrd}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'editEmpowrd' && selectedEmpowrd) {
      return (
        <EditEmpowrd
          form={form}
          selectedEmpowrd={selectedEmpowrd}
          handleUpdateEmpowrd={handleUpdateEmpowrd}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'Community') {
      return (
        <Community
          communityList={communityList}
          setSelectedCommunity={setSelectedCommunity}
          setSelectedMenu={setSelectedMenu}
          handleDeleteCommunity={handleDeleteCommunity}
        />
      );
    }
    if (selectedMenu === 'addCommunity') {
      return (
        <AddCommunity
          form={form}
          productOptions={productOptions}
          handleAddCommunity={handleAddCommunity}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'editCommunity' && selectedCommunity) {
      return (
        <EditCommunity
          form={form}
          selectedCommunity={selectedCommunity}
          productOptions={productOptions}
          handleUpdateCommunity={handleUpdateCommunity}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }

    if (selectedMenu === 'District') {
    return (
      <DistrictList
        districtList={districtList}
        districtListColumns={districtListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteDistrict={handleDeleteDistrict}
      />
    );
  }
  if (selectedMenu === 'addDistrict') {
    return (
      <AddDistrict
        form={form}
        handleAddDistrict={handleAddDistrict}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editDistrict' && selectedDistrict) {
    return (
      <EditDistrict
        form={form}
        selectedDistrict={selectedDistrict}
        handleUpdateDistrict={handleUpdateDistrict}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }

     if (selectedMenu === 'Store') {
    return (
      <StoreList
        storeList={storeList}
        storeListColumns={storeListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteStore={handleDeleteStore}
      />
    );
  }
  if (selectedMenu === 'addStore') {
    return (
      <AddStore
        form={form}
        handleAddStore={handleAddStore}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editStore' && selectedStore) {
    return (
      <EditStore
        form={form}
        selectedStore={selectedStore}
        handleUpdateStore={handleUpdateStore}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'About') {
    return (
      <AboutList
        aboutList={aboutList}
        aboutListColumns={aboutListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteAbout={handleDeleteAbout}
      />
    );
  }
  if (selectedMenu === 'addAbout') {
    return (
      <AddAbout
        form={form}
        handleAddAbout={handleAddAbout}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editAbout' && selectedAbout) {
    return (
      <EditAbout
        form={form}
        selectedAbout={selectedAbout}
        handleUpdateAbout={handleUpdateAbout}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'News') {
    return (
      <NewsList
        newsList={newsList}
        newsListColumns={newsListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteNews={handleDeleteNews}
      />
    );
  }
  if (selectedMenu === 'addExhibition') {
    return (
      <AddExhibition
        form={form}
        handleAddExhibition={handleAddExhibition}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editNews' && selectedNews) {
    return (
      <EditNews
        form={form}
        selectedNews={selectedNews}
        handleUpdateNews={handleUpdateNews}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'Blogs') {
    return (
      <BlogList
        blogList={blogList}
        blogListColumns={blogListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteBlog={handleDeleteBlog}
      />
    );
  }
  if (selectedMenu === 'addBlog') {
    return (
      <AddBlog
        form={form}
        handleAddBlog={handleAddBlog}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editBlog' && selectedBlog) {
    return (
      <EditBlog
        form={form}
        selectedBlog={selectedBlog}
        handleUpdateBlog={handleUpdateBlog}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'CorporateList') {
    return (
      <CorporateList
        corporateList={corporateList}
        corporateListColumns={corporateListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteCorporate={handleDeleteCorporate}
      />
    );
  }

    if (selectedMenu === 'Stories') {
  return (
    <Stories
      setSelectedMenu={setSelectedMenu}
    />
  );
}  
    if (selectedMenu === 'Contact') {
      return (
        <Contact
      setSelectedMenu={setSelectedMenu}
    />
       
      );
    }

    if (selectedMenu === 'Product') {
    return (
      <ProductList
        productList={productList}
        setSelectedMenu={setSelectedMenu}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    );
  }
  if (selectedMenu === 'addProduct') {
    return (
      <AddProduct
        form={form}
        weights={weights}
        setWeights={setWeights}
        benefits={benefits}
        setBenefits={setBenefits}
        faqs={faqs}
        setFaqs={setFaqs}
        handleAddProduct={handleAddProduct}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu.startsWith('editProduct/')) {
  const productId = selectedMenu.split('/')[1];
  const product = productList.find(p => p.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <EditProduct
      selectedProduct={product}
      weights={weights}
      setWeights={setWeights}
      benefits={benefits}
      setBenefits={setBenefits}
      faqs={faqs}
      setFaqs={setFaqs}
      handleUpdateProduct={(updatedProduct) => {
        setProductList(productList.map(p => (p.id === product.id ? { ...p, ...updatedProduct } : p)));
        message.success('Product updated successfully');
        setSelectedMenu('Product');
      }}
      setSelectedMenu={setSelectedMenu}
    />
  );
}
 

     if (selectedMenu === 'Category') {
    return (
      <CategoryList
        categories={categories}
        categoryListColumns={categoryListColumns}
        setSelectedMenu={setSelectedMenu}
        handleDeleteCategory={handleDeleteCategory}
      />
    );
  }
  if (selectedMenu === 'addCategory') {
    return (
      <AddCategory
        categoryForm={categoryForm}
        categories={categories}
        setCategories={setCategories}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editCategory' && selectedCategory) {
    return (
      <EditCategory
        categoryForm={categoryForm}
        selectedCategory={selectedCategory}
        categories={categories}
        setCategories={setCategories}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'Sub Category') {
    return (
      <SubCategoryList
        subCategories={subCategories}
        setSubCategories={setSubCategories}
        setSelectedSubCategory={setSelectedSubCategory}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'addSubCategory') {
    return (
      <AddSubCategory
        categoryForm={categoryForm}
        subCategories={subCategories}
        setSubCategories={setSubCategories}
        categories={categories}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editSubCategory' && selectedSubCategory) {
    return (
      <EditSubCategory
        categoryForm={categoryForm}
        selectedSubCategory={selectedSubCategory}
        subCategories={subCategories}
        setSubCategories={setSubCategories}
        categories={categories}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'Remedy') {
    return (
      <RemedyList
        remedies={remedies}
        setRemedies={setRemedies}
        setSelectedRemedy={setSelectedRemedy}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'addRemedy') {
    return (
      <AddRemedy
        categoryForm={categoryForm}
        remedies={remedies}
        setRemedies={setRemedies}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editRemedy' && selectedRemedy) {
    return (
      <EditRemedy
        categoryForm={categoryForm}
        selectedRemedy={selectedRemedy}
        remedies={remedies}
        setRemedies={setRemedies}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    
    if (selectedMenu === 'Ingridients') {
    return (
      <IngridientsList
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    );
  }

if (selectedMenu === 'Weight Unit') {
    return (
      <WeightUnitList
        weightUnits={weightUnits}
        setWeightUnits={setWeightUnits}
        setSelectedWeightUnit={setSelectedWeightUnit}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'addWeightUnit') {
    return (
      <AddWeightUnit
        weightUnitForm={weightUnitForm}
        weightUnits={weightUnits}
        setWeightUnits={setWeightUnits}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editWeightUnit' && selectedWeightUnit) {
    return (
      <EditWeightUnit
        weightUnitForm={weightUnitForm}
        selectedWeightUnit={selectedWeightUnit}
        weightUnits={weightUnits}
        setWeightUnits={setWeightUnits}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
     if (selectedMenu === 'Tax Manager') {
    return (
      <TaxList
        taxes={taxes}
        setTaxes={setTaxes}
        setSelectedTax={setSelectedTax}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'addTax') {
    return (
      <AddTax
        taxForm={taxForm}
        taxes={taxes}
        setTaxes={setTaxes}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editTax' && selectedTax) {
    return (
      <EditTax
        taxForm={taxForm}
        selectedTax={selectedTax}
        taxes={taxes}
        setTaxes={setTaxes}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'HSNCODE Master') {
    return (
      <HsncodeList
        hsncodes={hsncodes}
        setHsncodes={setHsncodes}
        setSelectedHsncode={setSelectedHsncode}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'addHsncode') {
    return (
      <AddHsncode
        hsncodeForm={hsncodeForm}
        hsncodes={hsncodes}
        setHsncodes={setHsncodes}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editHsncode' && selectedHsncode) {
    return (
      <EditHsncode
        hsncodeForm={hsncodeForm}
        selectedHsncode={selectedHsncode}
        hsncodes={hsncodes}
        setHsncodes={setHsncodes}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
     if (selectedMenu === 'Order Manager') {
    return (
      <OrderList
        orders={orders}
        setOrders={setOrders}
        setSelectedOrder={setSelectedOrder}
        setSelectedMenu={setSelectedMenu}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    );
  }
  if (selectedMenu === 'addOrder') {
    return (
      <AddOrder
        orderForm={orderForm}
        orders={orders}
        setOrders={setOrders}
        setSelectedMenu={setSelectedMenu}
        products={products}
        setProducts={setProducts}
        orderStatuses={orderStatuses}
        shippingStatuses={shippingStatuses}
        serviceProviders={serviceProviders}
        productOptions={productOptions}
        weightOptions={weightOptions}
        addProduct={addProduct}
        handleProductChange={handleProductChange}
      />
    );
  }
  if (selectedMenu === 'viewOrder' && selectedOrder) {
    return (
      <ViewOrder
        selectedOrder={selectedOrder}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editOrder' && selectedOrder) {
    return (
      <EditOrder
        orderForm={orderForm}
        selectedOrder={selectedOrder}
        setOrders={setOrders}
        setSelectedMenu={setSelectedMenu}
        customers={customers}
      />
    );
  }
    if (selectedMenu === 'Order Status') {
    return (
      <OrderStatusList
        orderStatuses={orderStatuses}
        setOrderStatuses={setOrderStatuses}
        setSelectedOrderStatus={setSelectedOrderStatus}
        setSelectedMenu={setSelectedMenu}
        orderStatusForm={orderStatusForm}
      />
    );
  }
  if (selectedMenu === 'addOrderStatus') {
    return (
      <AddOrderStatus
        orderStatusForm={orderStatusForm}
        orderStatuses={orderStatuses}
        setOrderStatuses={setOrderStatuses}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editOrderStatus' && selectedOrderStatus) {
    return (
      <EditOrderStatus
        orderStatusForm={orderStatusForm}
        selectedOrderStatus={selectedOrderStatus}
        orderStatuses={orderStatuses}
        setOrderStatuses={setOrderStatuses}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'Shipping Status') {
    return (
      <ShippingStatusList
        shippingStatuses={shippingStatuses}
        setShippingStatuses={setShippingStatuses}
        setSelectedShippingStatus={setSelectedShippingStatus}
        setSelectedMenu={setSelectedMenu}
        shippingStatusForm={shippingStatusForm}
      />
    );
  }
  if (selectedMenu === 'addShippingStatus') {
    return (
      <AddShippingStatus
        shippingStatusForm={shippingStatusForm}
        shippingStatuses={shippingStatuses}
        setShippingStatuses={setShippingStatuses}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editShippingStatus' && selectedShippingStatus) {
    return (
      <EditShippingStatus
        shippingStatusForm={shippingStatusForm}
        selectedShippingStatus={selectedShippingStatus}
        shippingStatuses={shippingStatuses}
        setShippingStatuses={setShippingStatuses}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'Service Provider') {
    return (
      <ServiceProviderList
        serviceProviders={serviceProviders}
        setServiceProviders={setServiceProviders}
        setSelectedServiceProvider={setSelectedServiceProvider}
        setSelectedMenu={setSelectedMenu}
        serviceProviderForm={serviceProviderForm}
      />
    );
  }
  if (selectedMenu === 'addServiceProvider') {
    return (
      <AddServiceProvider
        serviceProviderForm={serviceProviderForm}
        serviceProviders={serviceProviders}
        setServiceProviders={setServiceProviders}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editServiceProvider' && selectedServiceProvider) {
    return (
      <EditServiceProvider
        serviceProviderForm={serviceProviderForm}
        selectedServiceProvider={selectedServiceProvider}
        serviceProviders={serviceProviders}
        setServiceProviders={setServiceProviders}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'customerManager') {
    return (
      <CustomerManagerList
        customers={customers}
        setCustomers={setCustomers}
        setSelectedCustomer={setSelectedCustomer}
        setSelectedMenu={setSelectedMenu}
        customerForm={customerForm}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    );
  }
  if (selectedMenu === 'addCustomer') {
    return (
      <AddCustomer
        customerForm={customerForm}
        customers={customers}
        setCustomers={setCustomers}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu === 'editCustomer' && selectedCustomer) {
    return (
      <EditCustomer
        customerForm={customerForm}
        selectedCustomer={selectedCustomer}
        customers={customers}
        setCustomers={setCustomers}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'payment') {
    return <PaymentList />;
  }
    if (selectedMenu === 'inventory') {
    return <InventoryList />;
  }
  if (selectedMenu === 'Coupons') {
  return (
    <Coupons
      couponList={couponList}
      pageSize={pageSize}
      setSelectedMenu={setSelectedMenu}
      handleDeleteCoupon={handleDeleteCoupon}
    />
  );
}
if (selectedMenu === 'addCoupon') {
  return (
    <AddCoupon
      handleAddCoupon={(newCoupon) => {
        setCouponList([...couponList, { id: Date.now(), ...newCoupon }]);
        message.success('Coupon added successfully');
        setSelectedMenu('Coupons');
      }}
      setSelectedMenu={setSelectedMenu}
    />
  );
}
if (selectedMenu.startsWith('editCoupon/')) {
  const couponId = selectedMenu.split('/')[1];
  const coupon = couponList.find(c => c.id === parseInt(couponId));
  if (!coupon) {
    return <div>Coupon not found</div>;
  }
  return (
    <EditCoupon
      coupon={coupon}
      handleUpdateCoupon={(updatedCoupon) => {
        setCouponList(couponList.map(c => (c.id === coupon.id ? { ...c, ...updatedCoupon } : c)));
        message.success('Coupon updated successfully');
        setSelectedMenu('Coupons');
      }}
      setSelectedMenu={setSelectedMenu}
    />
  );
}
  if (selectedMenu === 'Volunteer') {
  return (
    <Volunteer
      volunteerRequests={volunteerRequests}
      setVolunteerRequests={setVolunteerRequests}
      pageSize={pageSize}
    />
  );
}
  if (selectedMenu === 'Forest Lover') {
  return (
    <ForestLover
      forestLoverRequests={volunteerRequests}
      setForestLoverRequests={setVolunteerRequests}
      pageSize={pageSize}
    />
  );
}

 if (selectedMenu === 'faq') {
    return (
      <FAQ
        faqData={faqData}
        setFaqData={setFaqData}
        setSelectedMenu={setSelectedMenu}
        pageSize={pageSize}
      />
    );
  }
  if (selectedMenu === 'addFAQ') {
    return (
      <AddFAQ
        faqData={faqData}
        setFaqData={setFaqData}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu.startsWith('editFAQ/')) {
    const faqId = selectedMenu.split('/')[1];
    const faq = faqData.find(f => f.id === parseInt(faqId));
    if (!faq) {
      return <div>FAQ not found</div>;
    }
    return (
      <EditFAQ
        faq={faq}
        faqData={faqData}
        setFaqData={setFaqData}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
   if (selectedMenu === 'grievanceCategory') {
    return (
      <GrievanceCategory
        grievanceData={grievanceData}
        setGrievanceData={setGrievanceData}
        setSelectedMenu={setSelectedMenu}
        pageSize={pageSize}
      />
    );
  }
  if (selectedMenu === 'addGrievance') {
    return (
      <AddGrievance
        grievanceData={grievanceData}
        setGrievanceData={setGrievanceData}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
  if (selectedMenu.startsWith('editGrievance/')) {
    const grievanceId = selectedMenu.split('/')[1];
    const grievance = grievanceData.find(g => g.id === parseInt(grievanceId));
    if (!grievance) {
      return <div>Grievance not found</div>;
    }
    return (
      <EditGrievance
        grievance={grievance}
        grievanceData={grievanceData}
        setGrievanceData={setGrievanceData}
        setSelectedMenu={setSelectedMenu}
      />
    );
  }
    if (selectedMenu === 'grievanceUserData') {
    return (
      <GrievanceUserData
        grievanceUserData={grievanceUserData}
        pageSize={pageSize}
      />
    );
  }
    return <div>Select a section from the menu</div>;
  };
  return (
    <Layout className="min-h-screen">
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
        <Leftmenu handleMenuSelect={(key)=>  handleMenuSelect(key)}/>
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



