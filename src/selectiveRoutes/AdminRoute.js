import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
const AdminRoute = () => {
    return (
        <>{
            isAuthenticated() && isAuthenticated().user.role === 1?
            <Outlet />: <Navigate to={'/login'}></Navigate>}
        </>
    )
}

export default AdminRoute