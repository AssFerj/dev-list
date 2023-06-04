import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Edit from '../pages/Edit';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DefaultLayout from '../configs/layout/DefaultLayout';
import Perfil from '../pages/Perfil';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<DefaultLayout component={Home} />} />
        <Route path="/editar/:id" element={<DefaultLayout component={Edit} />} />
        <Route path="/perfil/:id" element={<DefaultLayout component={Perfil} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
