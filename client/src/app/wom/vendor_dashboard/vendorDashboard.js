import React from 'react';
import { Route, Routes } from 'react-router-dom';

import VendorMain from './VendorMain';
import VendorRegister from './dashboard/VendorRegister';
import AddProduct from './dashboard/productRegister/AddProduct'; // example import
import ProductList from './dashboard/productRegister/ProductList'; // example import

function VendorDashboard() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<VendorMain />} />
                <Route path="register" element={<VendorRegister />} />
                <Route path="product/add" element={<AddProduct />} /> {/* Example route */}
                <Route path="product/list" element={<ProductList />} /> {/* Example route */}
                {/* Add other routes here */}
            </Routes>
        </div>
    );
}

export default VendorDashboard;
