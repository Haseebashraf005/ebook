import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HomePage, Login, ProductList } from '../pages';


export const AllRoutes = () => {
  return (
    <>
      <div className='main'>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </>
  )
}
