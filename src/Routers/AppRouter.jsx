import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Login from '../Pages/Login'
import ProtectedRoute from './ProtectedRoute'
import Upd_pass from '../Pages/Upd_pass'
import Home from '../pages/Home'
import Register from '../Pages/Register'
import Sales from '../pages/Sales'
import AdminUsers from '../pages/AdminUsers'
import ProfitAnalysis from '../pages/ProfitAnalysis'
import Reports from '../pages/Reports'
import Purchases from '../pages/Purchases'

const NotFound = () => {
    return <h1>404 - Página no encontrada</h1>
}
const isAuthenticated = false

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={isAuthenticated ? <Navigate to="/Principal" /> : <Login />} />
                    <Route path="/Cambio-de-contrasena" element={<Upd_pass />} />
                    <Route path='/Registro' element={<Register />}/>

                    {/* Rutas protegidas */}
                    <Route path='/Principal' element={<Home />}/>
                    <Route path='/Ventas' element={<Sales />}/>
                    <Route path='/Administrar-usuarios' element={<AdminUsers />}/>
                    <Route path='/Analisis-de-rentabilidad' element={<ProfitAnalysis />}/>
                    <Route path='/Informes' element={<Reports />}/>
                    <Route path='/Compras' element={<Purchases />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter
