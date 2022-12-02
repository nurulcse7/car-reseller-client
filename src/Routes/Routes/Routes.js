import { createBrowserRouter } from 'react-router-dom';
import Bmw from '../../components/Categories/Bmw/Bmw';
import Categories from '../../components/Categories/Categories/Categories';
import Mercedes from '../../components/Categories/Mercedes/Mercedes';
import Toyota from '../../components/Categories/Toyota/Toyota';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import AddSeller from '../../Pages/Dashboard/AddSeller/AddSeller';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import ManageProducts from '../../Pages/Dashboard/ManageProducts/ManageProducts';
import ManageSellers from '../../Pages/Dashboard/ManageSellers/ManageSellers';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Advertised from '../../Pages/Home/Advertised/Advertised';
import CallUs from '../../Pages/Home/Contact/CallUs';
import Contact from '../../Pages/Home/Contact/Contact';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Privacy from '../../Pages/Privacy/Privacy';
import Reviews from '../../Pages/Reviews/Reviews';
import ErrorPage from '../../Pages/Shared/error-page';
import SignUp from '../../Pages/SignUp/SignUp';
import Terms from '../../Pages/Terms/Terms';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/advertise',
        element: <Advertised></Advertised>,
      },
      {
        path: '/categories',
        element: (
          <PrivateRoute>
            <Categories></Categories>
          </PrivateRoute>
        ),
      },
      {
        path: '/bmw',
        element: (
          <PrivateRoute>
            <Bmw></Bmw>
          </PrivateRoute>
        ),
      },
      {
        path: '/mercedes',
        element: (
          <PrivateRoute>
            <Mercedes></Mercedes>
          </PrivateRoute>
        ),
      },
      {
        path: '/toyota',
        element: (
          <PrivateRoute>
            <Toyota></Toyota>
          </PrivateRoute>
        ),
      },
      {
        path: '/reviews',
        element: <Reviews></Reviews>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/privacy',
        element: <Privacy></Privacy>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },

      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/call',
        element: <CallUs></CallUs>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/allusers',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addseller',
        element: (
          <AdminRoute>
            <AddSeller></AddSeller>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/managesellers',
        element: (
          <AdminRoute>
            <ManageSellers></ManageSellers>
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/addproduct',
        element: (
          <AdminRoute>
            <AddProducts></AddProducts>{' '}
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/manageproducts',
        element: (
          <AdminRoute>
            <ManageProducts></ManageProducts>{' '}
          </AdminRoute>
        ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://car-reseller-server.vercel.app/bmwBookings/${params.id}`
          ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://car-reseller-server.vercel.app/mercedesBookings/${params.id}`
          ),
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://car-reseller-server.vercel.app/toyotBookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
