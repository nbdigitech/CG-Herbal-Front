
import {  Menu,  } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingOutlined, FileTextOutlined, } from '@ant-design/icons'; 
const Leftmenu = ({handleMenuSelect}) => {
  return (
         <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          className="bg-gray-800 text-white"
          style={{
            backgroundColor: '#ffffff', 
            color: '#000000', 
          }}
          onClick={ handleMenuSelect}
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
    )
}
export default Leftmenu ;