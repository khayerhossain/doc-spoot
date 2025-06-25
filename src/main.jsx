import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import App from './App.jsx'
import { router } from './Routes/Routes.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Toaster position='top-right'/> 
   <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
   <RouterProvider router={router} />
   </Suspense>
  </StrictMode>
);
