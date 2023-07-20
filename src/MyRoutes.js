
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart';
import About from './components/layouts/About';
import AddCategory from './components/pages/admin/AddCategory';
import AddProduct from './components/pages/admin/AddProduct';
import AdminCategory from './components/pages/admin/AdminCategory';
import AdminCustomers from './components/pages/admin/AdminCustomers';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import AdminProduct from './components/pages/admin/AdminProduct';
import { ProductDetails } from './components/pages/admin/ProductDetails';
import UpdateCategory from './components/pages/admin/UpdateCategory';
import UpdateProduct from './components/pages/admin/UpdateProduct';
import AxiosData from './components/pages/AxiosData';
import Contact from './components/pages/Contact';
import Counter from './components/pages/Counter';
import Data from './components/pages/Data';
import Display from './components/pages/Display';
import EmailConfirmation from './components/pages/EmailConfirmation';
import Faq from './components/pages/Faq';
import FetchData from './components/pages/FetchData';
import ForgetPassword from './components/pages/ForgetPassword';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import PaymentElement from './components/pages/PaymentElement';
import Product from './components/pages/Product';
import Register from './components/pages/Register';
import ResetPassword from './components/pages/ResetPassword';
import Shipping from './components/pages/Shipping';
import UserProfile from './components/pages/user/UserProfile';
import Counter2 from './components/redux-example/Counter2';
import Game from './components/redux-example/Game';
import First from './First'
import AdminRoute from './selectiveRoutes/AdminRoute';
import UserRoute from './selectiveRoutes/UserRoute';

const MyRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/First" element={<First />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/faq" element={<Faq />} />

            <Route path='/' element={<AdminRoute />}>
               <Route path='/admin/dashboard' element={<AdminDashboard />} />
               <Route path='/admin/category' element={<AdminCategory />} />
               <Route path='/admin/category/add' element={<AddCategory />} />
               <Route path='/admin/category/update/:id' element={<UpdateCategory />} />

               <Route path='/admin/products' element={<AdminProduct />} />
               <Route path='/admin/product/add' element={<AddProduct />} />
               <Route path='/admin/product/:id' element={<ProductDetails />} />
               <Route path='/admin/product/update/:id' element={<UpdateProduct />} />
               <Route path='/admin/customers' element={<AdminCustomers />} />
            </Route>
            <Route path='/' element={<UserRoute />}>
               <Route path='/userprofile' element={<UserProfile />} />
               <Route path="/cart" element={<Cart />} />
               <Route path='/shipping' element={<Shipping/>}/>
               <Route path='/payment' element={<PaymentElement/>}/>
            </Route>

            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/confirm/:token' element={<EmailConfirmation />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/resetpassword/:token' element={<ResetPassword />} />

            <Route path='/counter' element={<Counter />} />
            <Route path='/data' element={<Data />} />

            <Route path='/display' element={<Display />} />

            <Route path='/fetchdata' element={<FetchData />} />
            <Route path='/axiosdata' element={<AxiosData />} />

            {/* redux*/}
            <Route path='/count' element={<Counter2 />} />

            <Route path='/game' element={<Game />} />


         </Routes>
      </BrowserRouter>
   );
}

export default MyRoutes