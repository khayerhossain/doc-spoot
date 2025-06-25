import { createBrowserRouter } from 'react-router'; 
import Root from "../Components/Root/Root";
import Home from '../Components/Home/Home';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import Bokings from '../Pages/Bokings/Bokings';
import Blogs from '../Pages/Blogs/Blogs';
import Error from '../Pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[{
        path:'/',
        Component:Home,
        loader:()=>fetch('../Doctors.json')
         },
         {
path:'DoctorDetails/:id',
loader:()=>fetch('../Doctors.json'),
Component:DoctorDetails,
         },
         {
          path:'/bokings',
          Component:Bokings,
         },
         {
          path:'/blogs',
          Component:Blogs,
          loader:()=>fetch('../Blog.json')
         },
         {
          path:"*",
          Component:Error
         }
  ]
  },
]);
