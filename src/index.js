import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import JoinUs from './JoinUs.jsx'

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/EGym",
      element: <App />,
    },
    {
        path:'/JoinUs',
        element: <JoinUs />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} basename='/EGym'/>
   
  
);


