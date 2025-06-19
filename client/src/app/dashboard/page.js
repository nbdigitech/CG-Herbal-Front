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
import Corporate from  '../Commoncomponents/Corporate';
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
import axios from 'axios';
import AddRoleModal from '../Commoncomponents/AddRoleModal';
import AddUserModal from '../Commoncomponents/AddUserModal';
import decode from "jwt-decode";

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
  const [categories, setCategories] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('dashboard' , );
  const [subCategories, setSubCategories] = useState([]);
  const [payments, setPayments] = useState([]);
  const [forestLoverRequests, setForestLoverRequests] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // If no token, redirect to login
      router.push('/login');
    }
  }, []);

 

  const fetchCategories = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
    const mappedCategories = (res.data.data || []).map(category => ({
      id: category._id,
      image: category.images?.[0]?.img || '',  // first image
      name: category.category_name || '',
      status: category.status ? 'Active' : 'Inactive',
    }));
    setCategories(mappedCategories);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  }
};

const fetchSubCategories = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/sub-category/list`);
    const mappedSubCategories = (res.data.data || []).map(subcategory => ({
  id: subcategory._id,
  image: (subcategory.images && subcategory.images.length && subcategory.images[0].img) ? subcategory.images[0].img : '',
  name: subcategory.category_name || '',
  category: subcategory.category?.category_name || '',
  status: subcategory.status ? 'Active' : 'Inactive',
}));

    setSubCategories(mappedSubCategories);
  } catch (error) {
    console.error("Failed to fetch subcategories:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'Sub Category') {
    fetchSubCategories();
  }
}, [selectedMenu]);


const fetchRemedies = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/remedy/list`);    const remediesData = res.data.data.map(remedy => ({
      id: remedy._id,         // map _id to id
      name: remedy.remedy_name, // map remedy_name to name
      status: remedy.status === true ? 'Active' : 'Inactive', // format status nicely
    }));
    setRemedies(remediesData);
  } catch (error) {
    console.error("Error fetching remedies:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Remedy') {
    fetchRemedies();
  }
}, [selectedMenu]);


useEffect(() => {
  if (selectedMenu === 'Ingridients') {   // match the key spelling exactly
    fetchIngredients();
  }
}, [selectedMenu]);


const fetchIngredients = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/ingridient/list`);
    const data = response.data.data || [];

    const mappedIngredients = data.map(ingredient => ({
      id: ingredient._id,        // Assuming MongoDB `_id`
      name: ingredient.name,     // Ingredient name
      createdAt: ingredient.createdAt ? new Date(ingredient.createdAt).toLocaleString() : 'N/A',
    }));

    setIngredients(mappedIngredients);
  } catch (error) {
    console.error('Error fetching ingredients:', error);
  }
};


useEffect(() => {
  if (selectedMenu === 'Weight Unit') {
    fetchWeightUnits();
  }
}, [selectedMenu]);


const fetchWeightUnits = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/units/weight/list`);
    const data = await response.json();
    if (data.data) {
      const mappedUnits = data.data.map(unit => ({
        id: unit._id,
        title: unit.weight_gram,
        shippingAmount: unit.shipping_amount,
      }));
      setWeightUnits(mappedUnits);
    }
  } catch (error) {
    console.error("Error fetching weight units:", error);
  }
};


const fetchHsncodes = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hsncode/list`);
    const data = await response.json();
    if (data.data) {
      const mappedHsncodes = data.data.map(item => ({
        id: item._id,
        hsncode: item.hsncode,
        gstValue: item.gst_value,  // Make sure API returns `gst_value`
      }));
      setHsncodes(mappedHsncodes);
    }
  } catch (error) {
    console.error("Error fetching HSN codes:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'HSNCODE Master') {
    fetchHsncodes();
  }
}, [selectedMenu]);


const fetchOrders = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/list`);
    const rawOrders = response.data.doc || [];

    const mappedOrders = rawOrders.map(order => ({
      id: order._id,
      email: order.billingAddress?.email || '', // fallback to empty if not available
      paymentStatus: order.paymentStatus || 'Pending', // If your backend adds this
      orderMode: order.orderMode || 'Online', // If your backend adds this
      qty: order.products_
        ? order.products_.reduce((sum, p) => sum + (p.quantity || 0), 0)
        : 0,

price: order.products_
        ? order.products_.reduce(
            (sum, p) => sum + ((p.price || 0) * (p.quantity || 0)),
            0
          )
        : 0,

        orderStatus: order.orderStatus || 'Placed', // Default fallback
      shippingStatus: order.shippingStatus || 'Despatched', // Default fallback
      createdAt: order.createdAt ? new Date(order.createdAt).toLocaleDateString() : '',
    }));

    setOrders(mappedOrders);
  } catch (error) {
    console.error("Failed to fetch orders", error);
  }
};



  useEffect(() => {
  if (selectedMenu === 'Order Manager') {
    fetchOrders();
  }
}, [selectedMenu]);

const fetchOrderStatuses = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/order-status/list`);
 const data = Array.isArray(response.data) ? response.data : response.data.data || [];


    const mappedStatuses = data.map(status => ({
      id: status._id,
      name: status.status,
    }));

    setOrderStatuses(mappedStatuses);
  } catch (error) {
    console.error("Failed to fetch order statuses", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Order Status') {
    fetchOrderStatuses();
  }
}, [selectedMenu]);


const fetchShippingStatuses = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/shipping-status/list`);
    const data = response.data.data || [];

    const mappedStatuses = data.map(status => ({
      id: status._id,
      name: status.status,
    }));

    setShippingStatuses(mappedStatuses);
  } catch (error) {
    console.error("Failed to fetch shipping statuses:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'Shipping Status') {
    fetchShippingStatuses();
  }
}, [selectedMenu]);


const fetchServiceProviders = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/service-provider/list`);
    const data = response.data.data || [];

    const mappedProviders = data.map(provider => ({
      id: provider._id,
      name: provider.name,
    }));

    setServiceProviders(mappedProviders);
  } catch (error) {
    console.error("Failed to fetch service providers:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Service Provider') {
    fetchServiceProviders();
  }
}, [selectedMenu]);

const fetchPayments = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/transactions/list`);
    const data = response.data.data || [];

    const mappedPayments = data.map((payment, index) => ({
  id: payment._id,
  user: payment.user_id?.full_Name || 'N/A',
  paymentId: payment.payment_id || 'N/A',
  amount: payment.amount || 0,  // ✅ Correct field
  product: payment.products_id?.map(p => p.title).join(', ') || 'N/A',
  createdAt: new Date(payment.createdAt).toLocaleString(),
}));

    setPayments(mappedPayments);
  } catch (error) {
    console.error("Failed to fetch payments:", error);
  }
};

useEffect(() => {
  console.log("Selected Menu:", selectedMenu);  // ✅ Add this
  if (selectedMenu.toLowerCase().includes('payment')) {

    fetchPayments();
  }
}, [selectedMenu]);



const fetchCustomers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/list`);
    const data = response.data.data || [];

    const mappedCustomers = data.map((customer, index) => ({
      id: customer._id,
      name: customer.full_Name || 'N/A',
      mobile: customer.mobile || 'N/A',
      email: customer.email || 'N/A',
      gender: customer.gender || 'N/A',
      dob: customer.dob || 'N/A',
      address: customer.address || '',
      shippingAddress: customer.shippingAddress || '',
      status: customer.status ? 'ON' : 'OFF',
      createdAt: customer.createdAt
        ? new Date(customer.createdAt).toLocaleDateString()
        : 'N/A',
    }));

    setCustomers(mappedCustomers);
  } catch (error) {
    console.error("Failed to fetch customers:", error);
  }
};


useEffect(() => {
  if (selectedMenu.toLowerCase().includes('customer')) {
  fetchCustomers();
}

}, [selectedMenu]);


const fetchBanners = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home/banner/list`);
    const data = response.data.data || [];

    const mappedBanners = data.map((banner, index) => ({
      id: banner._id,
      image: banner.images?.[0]?.img || '',
      title: banner.title || '',
      description: banner.description || '',
    }));

    setBannerList(mappedBanners);
  } catch (error) {
    console.error("Failed to fetch banners:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'Banner') {
    fetchBanners();
  }
}, [selectedMenu]);

const fetchCommunities = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home/community/list`);
    const data = response.data.data || [];

    const mappedCommunities = data.map((item) => ({
      id: item._id,
      image: item.images?.[0]?.img || '',
name: item.products?.[0]?.title || item.products?.[0]?._id || 'No Product Linked',
    }));

    setCommunityList(mappedCommunities);
  } catch (error) {
    console.error("Failed to fetch community data:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Community') {
    fetchCommunities();
  }
}, [selectedMenu]);

const fetchStores = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/store/list`);
    const data = res.data.data || [];

   const mappedStores = data.map((store, index) => ({
  id: store._id,
  name: store.name_of_store || 'N/A',
  mapUrl: store.geo_map_url || '',
  address: store.address || '',
  storeLocator: store.store_locater || '',
}));


    setStoreList(mappedStores);
  } catch (error) {
    console.error("Failed to fetch stores:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'Store') {
    fetchStores();
  }
}, [selectedMenu]);

const fetchFaqs = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faq/faqs`);
    const data = response.data.FAQs || [];

    const mappedFaqs = data.map(faq => ({
      id: faq._id,
      question: faq.question,
      answer: faq.answer,
    }));

    setFaqData(mappedFaqs);
  } catch (error) {
    console.error("Failed to fetch FAQs:", error);
  }
};

useEffect(() => {
  if (selectedMenu.toLowerCase() === 'faq') {
    fetchFaqs();
  }
}, [selectedMenu]);

const fetchGrievanceCategories = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/grievance_category/list`);
    const data = response.data.data || [];

    const mappedData = data.map((item) => ({
      id: item._id,
      name: item.name || 'N/A',
      status: item.status ? 'Active' : 'Inactive',
    }));

    setGrievanceData(mappedData);
  } catch (error) {
    console.error("Failed to fetch grievance categories:", error);
  }
};

useEffect(() => {
  const key = selectedMenu.toLowerCase();

  if (key === 'grievancecategory') {
    fetchGrievanceCategories();
  } else if (key === 'grievanceuserdata') {
    fetchGrievanceUserData();
  }
}, [selectedMenu]);


const fetchGrievanceUserData = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/grievance_category/user/list`);
    const data = response.data.data || [];

    const mappedData = data.map((item) => ({
      id: item._id,
      firstName: item.first_name_grievance,
      lastName: item.last_name_grievance,
      email: item.email_grievance,
      grievance: item.grievance_grievance,
      message: item.message_grievance,
    }));

    setGrievanceUserData(mappedData);
  } catch (error) {
    console.error("Failed to fetch Grievance User Data:", error);
  }
};

const fetchVolunteers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/volunteer/list?type=volunteer`);
    const data = response.data.data || [];

    const mappedVolunteers = data.map((item, index) => ({
      id: item._id || index + 1,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      mobile: item.mobile,
      createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A',
    }));

    setVolunteerRequests(mappedVolunteers);
  } catch (error) {
    console.error("Failed to fetch volunteer data:", error);
  }
};



useEffect(() => {
  if (selectedMenu?.toLowerCase() === 'volunteer') {
    fetchVolunteers();
  }
}, [selectedMenu]);


const fetchForestLovers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/volunteer/list?type=forestlover`);
    const data = response.data.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id || index + 1,
      firstName: item.first_name,
      lastName: item.last_name,
      email: item.email,
      mobile: item.mobile,
      createdAt: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A',
    }));

    setForestLoverRequests(mapped);
  } catch (error) {
    console.error("Failed to fetch forest lover data:", error);
  }
};

useEffect(() => {
  if (selectedMenu?.toLowerCase().includes('forest')) {
    fetchForestLovers();
  }
}, [selectedMenu]);


const fetchCoupons = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/payments/promo-code/list`);
    const data = response.data.data || [];

    const mapped = data.map((coupon) => ({
  _id: coupon._id, // ✅ include real _id
  code: coupon.code,
  amount: coupon.amount ?? 0,
  percent: coupon.percentage ?? '',
  description: coupon.description ?? '',
  status: coupon.status ? 'On' : 'Off',
  createdAt: coupon.createdAt ? new Date(coupon.createdAt).toLocaleDateString() : 'N/A',
}));


    setCouponList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch coupons:", error);
  }
};

useEffect(() => {
  if (selectedMenu?.toLowerCase().includes('coupon')) {
    fetchCoupons();
  }
}, [selectedMenu]);


  const [couponList, setCouponList] = useState([]);

const handleDeleteCoupon = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/promo-code/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      message.success('Coupon deleted successfully');
      fetchCoupons();  // Refresh from backend
    } else {
      const data = await res.json();
      throw new Error(data.message || 'Delete failed');
    }
  } catch (err) {
    console.error(err);
    message.error('Error deleting coupon');
  }
};


const [volunteerRequests, setVolunteerRequests] = useState([ ]);
  const [faqData, setFaqData] = useState([ ]);
  const [grievanceData, setGrievanceData] = useState([ ]);
  const [grievanceUserData, setGrievanceUserData] = useState([
    
  ]);


const fetchDistricts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/district/list`);
    const data = response.data.data || [];

    const mappedDistricts = data.map(district => ({
      id: district._id,
      name: district.district || 'N/A',
    }));

    setDistrictList(mappedDistricts);
  } catch (error) {
    console.error("Failed to fetch districts:", error);
  }
};


useEffect(() => {
  if (selectedMenu === 'District') {
    fetchDistricts();
  }
}, [selectedMenu]);


  const fetchDashboardCounts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/count`);
    const data = response.data;
    setDashboardCounts({
      total_orders: data.total_orders || 0,
      total_products: data.total_products || 0,
      total_customers: data.total_customers || 0,
      total_blogs: data.total_blogs || 0,
    });
  } catch (error) {
    console.error("Failed to fetch dashboard counts:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'dashboard') {
    fetchDashboardCounts();
  }
}, [selectedMenu]);

 
const fetchDashboardOrders = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/order`);
    const data = response.data.data || [];

    const mappedOrders = data.map(order => ({
      orderId: order.order_id,
      customer: order.user_id?.full_Name || 'N/A',
      total: order.total_amount || 0,
      createdAt: order.createdAt,
    }));

    setDashboardOrders(mappedOrders);
  } catch (error) {
    console.error("Failed to fetch dashboard orders:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'dashboard') {
    fetchDashboardCounts();
    fetchDashboardOrders();
  }
}, [selectedMenu]);

const fetchDashboardCustomers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/customer`);
    const data = response.data.data || [];

    const mappedCustomers = data.map(c => ({
      name: c.full_Name || 'N/A',
      email: c.email || 'N/A',
      mobile: c.mobile || 'N/A',
      createdAt: c.createdAt,
    }));

    setDashboardCustomers(mappedCustomers);
  } catch (error) {
    console.error("Failed to fetch dashboard customers:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'dashboard') {
    fetchDashboardCounts();
    fetchDashboardOrders();
    fetchDashboardCustomers();
  }
}, [selectedMenu]);


const fetchAdminUsers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/list`);
    const data = response.data.data || [];

    const mappedAdmins = data.map((admin, index) => {
  console.log('ADMIN RAW:', admin);  // 👈 Check if full_Name exists

  return {
    id: admin._id,
    name: admin.full_Name || admin.name || 'N/A',
    email: admin.email || 'N/A',
    role: admin.role || 'Admin',
    block: admin.block || 'N/A',
    status: admin.disable ? 'Active' : 'Inactive',
  };
});


    setAdminUsers(mappedAdmins); // this connects to mockAdminList in <Users />
  } catch (error) {
    console.error("Failed to fetch admin users:", error);
  }
};


useEffect(() => {
  if (selectedMenu.toLowerCase().includes('user')) {
    fetchAdminUsers();
  }
}, [selectedMenu]);

const fetchAdminRoles = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/permission/list`);
    const data = response.data.data || [];

    const mappedRoles = data.map((role) => {
  const menus = (role.menu_details || []).map(menu => {
    if (menu.menu_id && menu.menu_id.menu_name) {
      return menu.menu_id.menu_name;
    } else {
      return (menu.sub_menu_ids || []).map(sub => sub.sub_menu_name).join(", ");
    }
  }).join(", ");

  return {
    id: role._id,
    name: role.role_name || 'N/A',
    menus: menus,
    role_name: role.role_name,
    menu_details: role.menu_details,  // <-- ADD THIS
  };
});

    setAdminRoles(mappedRoles);
  } catch (error) {
    console.error("Failed to fetch admin roles:", error);
  }
};


useEffect(() => {
  if (selectedMenu.toLowerCase().includes('role')) {
    fetchAdminRoles();
  }
}, [selectedMenu]);

const fetchFeaturedProducts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/featured/list`);
    const data = response.data.data || [];

    const mapped = data.map((item, index) => ({
      id: index + 1,
      name: item.products_id?.title || 'N/A',
      image: item.products_id?.images?.[0]?.img || '',
      category: item.products_id?.category?.category_name || '',
      subCategory: item.products_id?.sub_category?.category_name || '',
    }));

    setFeaturedProductList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch featured products:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Featured Product') {
    fetchFeaturedProducts();
  }
}, [selectedMenu]);

const fetchEmpowrdList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/empowerd/list`);
    
    const data = response.data?.data || response.data;  // support both .data and root-level array

    const mapped = data.map((item, index) => ({
      id: item._id,
      title: item.title || 'N/A',
      description: item.description || '',
      image: item.images?.[0]?.img || '',
    }));

    setEmpowrdList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch Empowerd list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Empowerd') {
    fetchEmpowrdList();
  }
}, [selectedMenu]);


const fetchAboutList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/list`);
    const data = response.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id,
      title: item.title || 'N/A',
      description: item.description || '',
      image: item.images?.[0]?.img || '',
    }));

    setAboutList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch about list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'About') {
    fetchAboutList();
  }
}, [selectedMenu]);

const fetchCorporateList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/corporate/enquiry/list`);
    const data = response.data?.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name || 'N/A',
      email: item.email || 'N/A',
      phone: item.phone || 'N/A',
      organization: item.organization || 'N/A',
      message: item.message || 'N/A',
    }));

    setCorporateList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch corporate list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Corporate') {
    fetchCorporateList();
  }
}, [selectedMenu]);

const fetchContactList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/contact/list`);
    const data = response.data?.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id || index + 1,
      firstName: item.first_name || 'N/A',
      lastName: item.last_name || 'N/A',
      email: item.email || 'N/A',
      subject: item.subject || 'N/A',
      message: item.message || 'N/A',
    }));

    setContactList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch contact list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Contact') {
    fetchContactList();
  }
}, [selectedMenu]);



  const [editingRole, setEditingRole] = useState(null);
const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [remedies, setRemedies] = useState([ ]);
  const [ingredients, setIngredients] = useState([]);
  const [weightUnits, setWeightUnits] = useState([ ]);
  const [selectedWeightUnit, setSelectedWeightUnit] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [taxes, setTaxes] = useState([ ]);
  const [selectedTax, setSelectedTax] = useState(null);
  const [taxForm] = Form.useForm();
  const [hsncodes, setHsncodes] = useState([ ]);
  const [selectedHsncode, setSelectedHsncode] = useState(null);
  const [hsncodeForm] = Form.useForm();
  const [orders, setOrders] = useState([ ]);
  const [orderStatuses, setOrderStatuses] = useState([ ]);
  const [shippingStatuses, setShippingStatuses] = useState([  ]);
  const [serviceProviders, setServiceProviders] = useState([  ]);
  const [customers, setCustomers] = useState([ ]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(null);
  const [selectedShippingStatus, setSelectedShippingStatus] = useState(null);
  const [orderStatusForm] = Form.useForm();
  const [shippingStatusForm] = Form.useForm();
  const [serviceProviderForm] = Form.useForm();
  const [customerForm] = Form.useForm();
  const [dashboardCustomers, setDashboardCustomers] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderForm] = Form.useForm();
  const [pageSize, setPageSize] = useState(10);
  const [showProductTable, setShowProductTable] = useState(false);
  const [dashboardOrders, setDashboardOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orderSearch, setOrderSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [dashboardCounts, setDashboardCounts] = useState({
  total_orders: 0,
  total_products: 0,
  total_customers: 0,
  total_blogs: 0,
});
const selectedFAQId = selectedMenu.startsWith('editFAQ/') ? selectedMenu.split('/')[1] : null;
const selectedFAQ = faqData.find(faq => faq.id === selectedFAQId);


const empowrdListColumns = [
  { title: '#ID', dataIndex: 'id', key: 'id' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (img) => (
      <img src={img} alt="Empowerd" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
    ),
  },
];

const fetchNewsList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/newsroom/list`);
    const data = response.data.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id,
      image: item.images?.[0]?.img || '',
      title: item.title || 'N/A',
      content: item.content || '',
      description: item.description || '',
      date: item.date ? new Date(item.date).toLocaleDateString() : '',
    }));

    setNewsList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch news list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'News') {
    fetchNewsList();
  }
}, [selectedMenu]);

const fetchBlogList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/about/blog/list`);
    const rawData = Array.isArray(response.data) ? response.data : response.data.data;

    const mapped = rawData.map((item) => ({
      id: item._id, // for rowKey
      title: item.title || 'N/A',
      content: item.content || '',
      description: item.description || '',
      date: item.date ? new Date(item.date).toLocaleDateString() : '',
      image: item.images?.[0]?.img || '', // map the first image
    }));

    setBlogList(mapped); // used in <Table dataSource={blogList} />
  } catch (error) {
    console.error("❌ Failed to fetch blog list:", error);
  }
};


useEffect(() => {
  if (selectedMenu?.toLowerCase().includes('blog')) {
    fetchBlogList();
  }
}, [selectedMenu]);

const fetchTaxList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/units/tax/list`);
    const data = response.data.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name || 'N/A',
      value: item.value || '0',  // Fix: correct key from backend
      status: item.status ? 'Active' : 'Inactive',  // Fix: convert boolean to text
    }));

    setTaxes(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch tax list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Tax Manager') {
    fetchTaxList();
  }
}, [selectedMenu]);

const handleDeleteTax = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/units/tax/${id}`);
    setTaxes(prev => prev.filter(t => t.id !== id));
    message.success('Tax deleted successfully');
  } catch (error) {
    console.error("❌ Failed to delete tax entry:", error);
    message.error('Failed to delete');
  }
};

useEffect(() => {
  if (selectedMenu === 'addProduct') {
    fetchCategories();
    fetchSubCategories();
    fetchRemedies();
    fetchIngredients();
    fetchWeightUnits(); 
    fetchHsncodes();
  }
}, [selectedMenu]);


const taxListColumns = [
  { title: '#ID', dataIndex: 'id', key: 'id' },
  { title: 'Tax Name', dataIndex: 'name', key: 'name' },
  { title: 'Percentage (%)', dataIndex: 'percentage', key: 'percentage' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
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
          title="Are you sure to delete this tax entry?"
          onConfirm={() => handleDeleteTax(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button icon={<DeleteOutlined />} className="text-red-500 border-red-500" />
        </Popconfirm>
      </div>
    ),
  },
];

const requestSort = (key) => {
  let direction = 'asc';
  if (sortConfig.key === key && sortConfig.direction === 'asc') {
    direction = 'desc';
  }
  setSortConfig({ key, direction });
};
const fetchSamitiList = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/store/samiti/list`);
    const data = response.data.data || [];

    const mapped = data.map((item, index) => ({
      id: item._id || index + 1,
      name: item.name || 'N/A',
      address: item.address || 'N/A',
      district: item.district || 'N/A',
      mapUrl: item.map_url || '',
    }));

    setSamitiList(mapped);
  } catch (error) {
    console.error("❌ Failed to fetch samiti list:", error);
  }
};

useEffect(() => {
  if (selectedMenu === 'Samiti') {
    fetchSamitiList();
  }
}, [selectedMenu]);

const handleDeleteFAQ = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/faq/${id}`);
    setFaqData(prev => prev.filter(faq => faq.id !== id));
    message.success('FAQ deleted successfully');
  } catch (error) {
    console.error("Failed to delete FAQ:", error);
    message.error('Failed to delete FAQ');
  }
};


const samitiListColumns = [
  { title: '#ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'District', dataIndex: 'district', key: 'district' },
  { 
    title: 'Map URL', 
    dataIndex: 'mapUrl', 
    key: 'mapUrl', 
    render: (url) => (
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Map
      </a>
    ),
  },
];



  const [profileData, setProfileData] = useState({
    name: 'Superadmin',
    newPassword: '',
    confirmPassword: '',
  });
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [form] = Form.useForm();
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [collapsed, setCollapsed] = useState(false);
 const [selectedProductId, setSelectedProductId] = useState(null);

  const [empowrdList, setEmpowrdList] = useState([ ]);
  const [communityList, setCommunityList] = useState([ ]);
  
  const [selectedEmpowrd, setSelectedEmpowrd] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [districtList, setDistrictList] = useState([ ]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedAbout, setSelectedAbout] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [storeList, setStoreList] = useState([ ]);
  const [aboutList, setAboutList] = useState([ ]);
  const [newsList, setNewsList] = useState([]);


 const [blogList, setBlogList] = useState([]);

const [samitiList, setSamitiList] = useState([]);
  const [corporateList, setCorporateList] = useState([ ]);
  const [exhibitionList, setExhibitionList] = useState([]);
  const [contactList, setContactList] = useState([]);
const [selectedProduct, setSelectedProduct] = useState(null);
const [weightList, setWeightList] = useState([]);
const [isAddCategoryModalVisible, setIsAddCategoryModalVisible] = useState(false);
const [isEditCategoryModalVisible, setIsEditCategoryModalVisible] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedSubCategory, setSelectedSubCategory] = useState(null);
const [selectedRemedy, setSelectedRemedy] = useState(null);
const handleDeleteCategory = async (categoryId) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}`);
    setCategories(prev => prev.filter(cat => cat.id !== categoryId));
    message.success("Category deleted successfully");
  } catch (err) {
    console.error("Delete category failed:", err);
    message.error("Failed to delete category");
  }
};

const [categoryForm] = Form.useForm();
const [weightUnitForm] = Form.useForm();
const [productList, setProductList] = useState([]);

const fetchProducts = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/product/listAll`);
    const mappedProducts = (res.data.data || []).map(product => ({
      id: product._id,  // Frontend expects 'id'
      image: product.images?.[0]?.img || '',  // first image
      name: product.title,  // title -> name
      category: product.category?.category_name || '',
      subCategory: product.sub_category?.category_name || '',
      weights: (product.weight || []).map(w => ({
        wt: w.weight_type?.weight_gram || '',
        price: w.price || 0,
        count: w.count || 0
      }))
    }));

    setProductList(mappedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};




const handleDeleteProduct = async (productId) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/product/${productId}`);
    message.success('Product deleted successfully');
    fetchProducts(); // ✅ Refresh product list
  } catch (error) {
    console.error("Failed to delete product:", error);
    message.error('Failed to delete product');
  }
};


const handleDeleteGrievanceCategory = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/grievance_category/${id}`);
    setGrievanceData(prev => prev.filter(item => item.id !== id));
    message.success('Grievance category deleted successfully');
  } catch (error) {
    console.error("Failed to delete grievance category:", error);
    message.error('Failed to delete grievance category');
  }
};


const [addBenefits, setAddBenefits] = useState([]);

const router = useRouter();

  // Mock banner list data
  const [bannerList, setBannerList] = useState([ ]);
  

  // Mock featured product list data
  const [featuredProductList, setFeaturedProductList] = useState([]);

  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedFeaturedProduct, setSelectedFeaturedProduct] = useState(null);
  const [weights, setWeights] = useState(selectedProduct?.weights || [ ]);
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

    useEffect(() => {
  if (selectedMenu === 'Product') {
    fetchProducts();
  }
}, [selectedMenu]);

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
  const [adminUsers, setAdminUsers] = useState([]);

  // Mock role list data
 const [adminRoles, setAdminRoles] = useState([]);
 
  
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
    (order._id?.toLowerCase() || '').includes(orderSearch.toLowerCase())
  );

  const filteredUsers = users.filter(user =>
    (user.name?.toLowerCase() || '').includes(userSearch.toLowerCase()) ||
    (user.email?.toLowerCase() || '').includes(userSearch.toLowerCase())
  );

 const handleMenuSelect = ({ key }) => {
  console.log('Menu selected:', key); 
  setSelectedMenu(key);

};

useEffect(() => {
  if (selectedMenu === 'Category') {
    fetchCategories();
  }
}, [selectedMenu]);

 
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
    render: (img) => (
      <img src={img} alt="product" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
    ),
  },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Category', dataIndex: 'category', key: 'category' },
  { title: 'Sub Category', dataIndex: 'subCategory', key: 'subCategory' },
];



const sortedRoleList = [...adminRoles].sort((a, b) => {

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
              setIsAddModalVisible(true);
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
  { title: 'Role Name', dataIndex: 'name', key: 'name' },
  { title: 'Menus', dataIndex: 'menus', key: 'menus' }, 
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
        <AddRoleModal
  visible={isEditModalVisible}
  onClose={() => setIsEditModalVisible(false)}
  refreshRoles={fetchAdminRoles}
  initialValues={selectedRole}   // <-- Pass this
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
  { title: '#ID', dataIndex: 'id', key: 'id' },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (img) => (
      <img src={img} alt="about" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
    ),
  },
];


const newsListColumns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <img src={text} alt="News" style={{ width: '50px' }} />,
  },
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
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (img) => (
      <img src={img} alt="blog" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
    ),
  },
  { title: 'Title', dataIndex: 'title', key: 'title' },
  { title: 'Content', dataIndex: 'content', key: 'content' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
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
        <Button icon={<DeleteOutlined />} className="text-red-500 border-red-500" />
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
  onConfirm={() => handleDeleteCategory(record.id)}
  okText="Yes"
  cancelText="No"
>
  <Button icon={<DeleteOutlined />} className="text-red-500 border-red-500" />
</Popconfirm>

      </div>
    ),
  },
];

  // Mock roles and districts for dropdowns
  const roles = [];
  const districts = [];

  const showAddModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const showAddRoleModal = () => {
    form.resetFields();
    setIsAddModalVisible(true);
  };

  const handleAddAdmin = async (values) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/signup`, {
      full_name: values.full_name,
      email: values.email,
      mobile: values.mobile,
      password: values.password,
      role: values.role, // optional if backend uses default
    });
    message.success("Admin created successfully");
    fetchAdmins();
    setShowAddModal(false);
  } catch (error) {
    console.error("Create admin failed", error.response?.data || error.message);
    message.error("Failed to create admin");
  }
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
  setEditingRole(role);
  setIsEditModalVisible(true);
};

const handleUpdateRole = async (updatedData) => {
  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/admin-role/update/${editingRole.id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    message.success("Role updated successfully");
    fetchRoles();
    setIsEditModalVisible(false);
  } catch (error) {
    console.error("Failed to update role", error);
    message.error("Failed to update role");
  }
};

  const handleUpdateAdmin = async (id, values) => {
  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/update/${id}`, {
      full_name: values.full_name,
      email: values.email,
      mobile: values.mobile,
      password: values.password, // optional
    });
    message.success("Admin updated successfully");
    fetchAdmins();
    setShowEditModal(false);
  } catch (error) {
    console.error("Update admin failed", error);
    message.error("Failed to update admin");
  }
};



const handleDeleteAdmin = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/admin/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    message.success('Admin deleted successfully');
    fetchAdminUsers(); // Refresh admin list
  } catch (error) {
    console.error("Failed to delete admin:", error.response?.data || error.message);
    message.error('Failed to delete admin');
  }
};



 const handleDeleteRole = async (roleId) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/permission/${roleId}`);
    message.success('Role deleted successfully');
    fetchAdminRoles(); // refresh roles after delete
  } catch (error) {
    console.error('Failed to delete role:', error);
    message.error('Failed to delete role');
  }
};



  const handleDeleteBanner = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/home/banner/${id}`);
    setBannerList(prev => prev.filter(b => b.id !== id));
    message.success("Banner deleted successfully");
  } catch (error) {
    console.error("Failed to delete banner:", error);
    message.error("Failed to delete banner");
  }
};


  const handleDeleteFeaturedProduct = (id) => {
    const updatedList = featuredProductList.filter((product) => product.id !== id);
    setFeaturedProductList(updatedList);
    message.success('Featured Product deleted successfully');
  };

  const handleAddBanner = async (values) => {
  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("description", values.description);
  formData.append("images", values.image);  // MUST match backend field name

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/home/banner/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    message.success("Banner created successfully");
    fetchBanners();  // optional: refresh list
    setSelectedMenu("Banner");  // navigate back
  } catch (error) {
    console.error("Failed to create banner:", error);
    message.error("Failed to create banner");
  }
};


 const handleAddCommunity = async (values) => {
  const formData = new FormData();
  formData.append("products", values.name); // product title
  formData.append("images", values.image); // required key for backend

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/home/community/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    message.success("Community created successfully");
    fetchCommunities(); // refresh list
    setSelectedMenu("Community");
  } catch (error) {
    console.error("Failed to add community:", error);
    message.error("Failed to create community");
  }
};


 const handleUpdateBanner = async (values) => {
  if (!selectedBanner) return;

  const formData = new FormData();
  formData.append("title", values.title);
  formData.append("description", values.description);

  if (values.image instanceof File) {
    formData.append("images", values.image);
  }

  try {
    await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/home/banner/update/${selectedBanner.id}`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    message.success("Banner updated successfully");
    fetchBanners(); // Refresh the list
    setSelectedMenu("Banner");
  } catch (error) {
    console.error("Failed to update banner:", error);
    message.error("Failed to update banner");
  }
};


  const handleAddFeaturedProduct = async (values) => {
  try {
    const payload = {
      products_id: values.productId,
    };
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/featured/create`, payload);
    message.success("Featured product added successfully");
    fetchFeaturedProducts(); // make sure this fetches updated list
    setSelectedMenu('Featured Product');
  } catch (error) {
    console.error(error);
    message.error("Failed to create featured product");
  }
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
  
const handleAddEmpowrd = async (values) => {
  const formData = new FormData();
  formData.append("seo_title", values.seoTitle);
  formData.append("seo_description", values.seoDescription);
  formData.append("seo_keywords", values.seoKeywords);
  formData.append("seo_schema", values.seoSchema || "");
  formData.append("title", values.title);
  formData.append("sub_title", values.subTitle);
  formData.append("keyword", values.keyword);
  formData.append("url_customize", values.urlCustomize);
  formData.append("content", values.content);
  formData.append("description", values.description);
  formData.append("date", values.date);
  formData.append("status", values.status === "Active");
  formData.append("images", values.image); // file object

  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/about/empowerd/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    message.success("Empowerd added successfully");
    setSelectedMenu("Empowerd");
  } catch (error) {
    console.error("API error:", error);
    message.error("Failed to add Empowerd");
  }
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
  const handleUpdateCommunity = async (values) => {
  const formData = new FormData();
  formData.append("name", values.name);

  if (values.image instanceof File) {
    formData.append("images", values.image);
  }

  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/home/community/update/${selectedCommunity.id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    message.success("Community updated successfully");
    fetchCommunities();
    setSelectedMenu("Community");
  } catch (error) {
    console.error("Failed to update community:", error);
    message.error("Failed to update community");
  }
};


  const handleDeleteCommunity = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/home/community/${id}`);
    message.success("Community deleted successfully");
    setCommunityList(prev => prev.filter(item => item.id !== id));
  } catch (error) {
    console.error("Failed to delete community:", error);
    message.error("Failed to delete community");
  }
};

  const handleAddDistrict = async (values) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/district/create`, {
      district: values.name  // ✅ convert 'name' to 'district'
    });
    message.success("District added successfully");
    setSelectedMenu("District");
  } catch (err) {
    console.error("Failed to add district", err);
    message.error("Error adding district");
  }
};

  const handleUpdateDistrict = async (values) => {
  try {
    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/district/update/${selectedDistrict.id}`, {
      district: values.name  // ✅ convert form name -> backend field district
    });
    message.success("District updated successfully");
    setSelectedMenu("District");
  } catch (err) {
    console.error("Update failed", err);
    message.error("Failed to update district");
  }
};

  const handleDeleteDistrict = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/users/district/${id}`);
    message.success("District deleted successfully");
    fetchDistricts(); // ✅ Refresh the list
  } catch (error) {
    console.error("Failed to delete district:", error);
    message.error("Failed to delete district");
  }
};


  const handleAddStore = async (values) => {
  try {
    const payload = {
      name_of_store: values.name,
      address: values.address,
      geo_map_url: values.mapUrl,
      store_locater: values.storeLocator,
    };

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/store/create`, payload);

    const newStore = response.data.data;
    setStoreList(prev => [...prev, {
      id: newStore._id,
      name: newStore.name_of_store,
      address: newStore.address,
      mapUrl: newStore.geo_map_url,
      storeLocator: newStore.store_locater
    }]);

    form.resetFields();
    message.success("Store created successfully");
    setSelectedMenu('Store');
  } catch (error) {
    console.error(error);
    message.error("Failed to create store");
  }
};


  const handleUpdateStore = async (values) => {
  try {
    const payload = {
      name_of_store: values.name,
      address: values.address,
      geo_map_url: values.mapUrl,
      store_locater: values.storeLocator,
    };

    const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/store/update/${selectedStore.id}`, payload);

    const updatedStore = response.data.data;
    const updatedList = storeList.map((store) =>
      store.id === selectedStore.id
        ? {
            id: updatedStore._id,
            name: updatedStore.name_of_store,
            address: updatedStore.address,
            mapUrl: updatedStore.geo_map_url,
            storeLocator: updatedStore.store_locater
          }
        : store
    );

    setStoreList(updatedList);
    message.success("Store updated successfully");
    setSelectedMenu("Store");
  } catch (error) {
    console.error(error);
    message.error("Failed to update store");
  }
};



const handleDeleteStore = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/store/${id}`);
    setStoreList(prev => prev.filter(store => store.id !== id));
    message.success("Store deleted successfully");
  } catch (error) {
    console.error(error);
    message.error("Failed to delete store");
  }
};


 const handleAddAbout = async (values) => {
  try {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.image && values.image.file) {
      formData.append("images", values.image.file);  // single image upload
    }

    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/about/create`, formData);
    
    if (res.status === 200 || res.status === 201) {
      message.success("About created successfully");
      fetchAboutList(); // refresh list
      setSelectedMenu("About");
    } else {
      message.error("Failed to create About entry");
    }
  } catch (error) {
    console.error("Error creating About:", error);
    message.error("An error occurred while adding About");
  }
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

  const handleUpdateNews = async (values) => {
  try {
    const formData = new FormData();
    
    formData.append('seo_title', values.seoTitle);
    formData.append('seo_description', values.seoDescription);
    formData.append('seo_keywords', values.seoKeywords);
    formData.append('seo_schema', values.seoSchema);
    formData.append('title', values.title);
    formData.append('content', values.content);
    formData.append('description', values.description);
    formData.append('date', values.date.format('YYYY-MM-DD'));
    formData.append('month', values.date.format('MMMM-YYYY'));
    formData.append('year', values.date.format('YYYY'));

    if (values.image && values.image.file) {
      formData.append('images', values.image.file); // 'images' matches backend multer field
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsroom/update/${selectedNews.id}`, {
      method: 'PUT',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      message.success('News updated successfully');
      fetchNewsList();  // refresh list
      setSelectedMenu('News');
    } else {
      throw new Error(data.message || 'Failed to update');
    }
  } catch (err) {
    console.error(err);
    message.error('Error updating news');
  }
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

const handleAddBlog = async (values) => {
  try {
    const formData = new FormData();
    formData.append('seoTitle', values.seoTitle || '');
    formData.append('seoDescription', values.seoDescription || '');
    formData.append('seoKeywords', values.seoKeywords || '');
    formData.append('seoSchema', values.seoSchema || '');
    formData.append('title', values.title || '');
    formData.append('urlCustomize', values.urlCustomize || '');
    formData.append('keyword', values.keyword || '');
    formData.append('content', values.content || '');
    formData.append('date', values.date.format('YYYY-MM-DD'));
    formData.append('status', values.status ? 'true' : 'false');

   if (values.images && Array.isArray(values.images)) {
  const fileList = values.images;
  const file = fileList[0];

  if (file && file.originFileObj) {
    formData.append('images', file.originFileObj); // ✅ must be 'images' to match backend
  } else {
    console.warn("⚠️ Image file missing or improperly parsed:", file);
  }
} else {
  console.warn("⚠️ No image field found in form values.");
}


    // ✅ Wait for the backend call to finish
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/about/blog/create`, formData);

    if (!res?.data?.success) throw new Error('API call failed');

    // ✅ Only switch UI after successful response
    message.success('Blog added successfully');
    setSelectedMenu('Blogs');
    fetchBlogList(); // refresh blog list
  } catch (error) {
    console.error('Add blog failed:', error);
    message.error('Failed to add blog');
  }
};



  const handleDeleteCorporate = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/corporate/enquiry/${id}`);
    message.success('Corporate enquiry deleted successfully');
    setCorporateList(prev => prev.filter(item => item.id !== id));
  } catch (error) {
    console.error("❌ Failed to delete corporate enquiry:", error);
    message.error('Failed to delete entry');
  }
};


  const handleDeleteExhibition = (id) => {
    const updatedList = exhibitionList.filter((exhibition) => exhibition.id !== id);
    setExhibitionList(updatedList);
    message.success('Exhibition deleted successfully');
  };

  const handleDeleteContact = async (id) => {
  try {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/contact/${id}`);
    setContactList(prev => prev.filter(c => c.id !== id));
    message.success('Contact deleted successfully');
  } catch (error) {
    console.error("❌ Failed to delete contact:", error);
    message.error('Failed to delete');
  }
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

  const handleAddProduct = async (values) => {
  const formData = new FormData();

  formData.append('title', values.title);
  formData.append('slug', values.title.toLowerCase().replace(/ /g, '-'));
  formData.append('sub_title', values.subTitle || '');
  formData.append('meta_title', values.metaTitle || '');
  formData.append('meta_description', values.metaDescription || '');
  formData.append('product_schema', values.productSchema || '');
  formData.append('breadcrum_schema', values.breadcrumbSchema || '');
  formData.append('organisation_schema', values.organizationSchema || '');
  formData.append('description', values.description || '');
  formData.append('hindi_description', values.hindiDescription || '');
  formData.append('SKU_Number', values.skuNumber || '');
  formData.append('gst', values.gst || 0);

  formData.append('category', values.category);
  formData.append('sub_category', values.subCategory);

  formData.append('remedy', JSON.stringify(values.remedy ? values.remedy.map((id) => ({ remedy_id: id })) : []));
  formData.append('ingridients', JSON.stringify(values.ingredients ? values.ingredients.map((id) => ({ ingridients_id: id })) : []));
  formData.append('benefits', JSON.stringify(benefits || []));
  formData.append('questions', JSON.stringify(faqs || []));
  formData.append('weight', JSON.stringify(weights || []));
  formData.append('detail_icons', JSON.stringify(values.detailIcons ? [values.detailIcons] : []));

  if (values.images && values.images.length > 0) {
    values.images.forEach((fileWrapper) => {
      formData.append('images', fileWrapper.originFileObj); 
    });
  }

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/product/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (res.status === 201) { // ✅ Only check HTTP Status 201
      message.success({
        content: 'Product created successfully!',
        duration: 2,
      });

      form.resetFields();         // ✅ Clear Form after success
      fetchProducts();            // ✅ Refresh Product List
      setSelectedMenu('Product'); // ✅ Go back to Product List
    } else {
      message.error({
        content: res.data.message || '❌ Failed to create product.',
        duration: 2,
      });
    }
  } catch (error) {
    console.error('Error creating product:', error);
    message.error({
      content: '❌ Failed to create product.',
      duration: 2,
    });
  }
};


  const handleLogout = () => {
  localStorage.removeItem('token');   // Clear token
  localStorage.removeItem('user');    // Clear user (optional if you saved it)
  message.success('Logged out successfully');
  router.push('/login');              // Redirect to login page
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
              <p className="text-2xl font-bold">{dashboardCounts.total_orders} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-red-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL PRODUCT</span>}>
              <p className="text-2xl font-bold">{dashboardCounts.total_products} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-green-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL CUSTOMER</span>}>
              <p className="text-2xl font-bold">{dashboardCounts.total_customers} <span className="text-sm">More +</span></p>
            </Card>
            <Card className="bg-yellow-500 text-white shadow-md border-none" title={<span className="font-semibold">TOTAL BLOG</span>}>
              <p className="text-2xl font-bold">{dashboardCounts.total_blogs} <span className="text-sm">More +</span></p>
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
  title={() => 'Latest Orders'}
  dataSource={dashboardOrders}
  columns={[
    { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    { title: 'Amount', dataIndex: 'total', key: 'total', render: (amt) => `₹${amt}` },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt', render: date => moment(date).format('YYYY-MM-DD HH:mm') },
  ]}
  pagination={{ pageSize: 5 }}
  rowKey="orderId"
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
  title={() => 'Latest Customers'}
  dataSource={dashboardCustomers}
  columns={[
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt', render: date => moment(date).format('YYYY-MM-DD HH:mm') },
  ]}
  pagination={{ pageSize: 5 }}
  rowKey="email"
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
        <>
      {/* Your Users table */}
      <Users
        mockAdminList={adminUsers}
        adminListColumns={adminListColumns}
        showAddModal={() => setIsAddModalVisible(true)}
        requestSort={requestSort}
      />

     
     <AddUserModal
  visible={isAddModalVisible}
  onClose={() => setIsAddModalVisible(false)}
  refreshUsers={fetchAdminUsers}
  initialValues={selectedAdmin}  // <-- this is important!
/>

    </>        
      );
    }
    if (selectedMenu === 'roles') {
      return (
        <Roles
          sortedRoleList={sortedRoleList}
          mockRoleList={adminRoles}
    roleListColumns={roleListColumns}
    showAddModal={() => setIsAddModalVisible(true)}
    requestSort={requestSort}
    fetchAdminRoles={fetchAdminRoles}
    handleDeleteRole={handleDeleteRole} 
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
          productList={featuredProductList}
          featuredProductListColumns={featuredProductListColumns}
          setSelectedMenu={setSelectedMenu}
        />
      );
    }
    if (selectedMenu === 'addFeaturedProduct') {
      return (
         <AddFeaturedProduct
    form={form}
    productOptions={productList} // this should be fetched products
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
  console.log("Current selectedMenu:", selectedMenu);
if (selectedMenu === 'Corporate') {
  return (
    <Corporate
    corporateList={corporateList}
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
    console.log("AdminDashboard Rendering...");
console.log("Selected Menu:", selectedMenu);
console.log("Contact List before rendering Contact:", contactList);
console.log("Contact List Columns before rendering Contact:", contactListColumns);
console.log("Handle Delete Contact Function:", handleDeleteContact);

if (selectedMenu === 'Contact') {
  console.log("Rendering Contact Component with props:", {
    contactList,
    contactListColumns,
    handleDeleteContact,
    
  });
  
  return (
     <Contact
    contactList={contactList}
    contactListColumns={contactListColumns}
    handleDeleteContact={handleDeleteContact}
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
        categories={categories} 
        subCategories={subCategories} 
        remedies={remedies}  
        ingredients={ingredients}
        fetchProducts={fetchProducts} 
        weightUnits={weightUnits}
        hsncodes={hsncodes}
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
  selectedProductId={selectedProductId}
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
   weightUnitForm={form}
    selectedWeightUnit={selectedWeightUnit}  // ✅ add this
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
    taxListColumns={taxListColumns}
    setSelectedMenu={setSelectedMenu}
    setSelectedTax={setSelectedTax}
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
    return <PaymentList payments={payments} />;
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
       forestLoverRequests={forestLoverRequests}
       setForestLoverRequests={setForestLoverRequests}
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
  handleDeleteFAQ={handleDeleteFAQ}
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
        faq={selectedFAQ}
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
        handleDeleteGrievanceCategory={handleDeleteGrievanceCategory}
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

{selectedMenu === 'Ingridient' && (
  <IngridientsList ingredients={ingredients} setIngredients={setIngredients} />
)}



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



