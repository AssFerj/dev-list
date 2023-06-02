import React from 'react';
import { RouterProvider, createBrowserRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Edit from '../pages/Edit';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DefaultLayout from '../configs/layout/DefaultLayout';

// const router = createBrowserRouter([
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/editar/:id',
//     element: <Edit />
//   },
//   {
//     path: '/',
//     element: <Login />
//   },
//   {
//     path: '/cadastro',
//     element: <Register />
//   }
// ]);

// const AppRoutes: React.FC = () => {
//   return <RouterProvider router={router} />;
// };

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
        <Route path="/editar" element={<DefaultLayout component={Edit} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
