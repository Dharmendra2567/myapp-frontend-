import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../api/userApi'
const UserRoute = () => {
    return (
        <>{
            isAuthenticated() && isAuthenticated().user.role===0?
            <Outlet />: <Navigate to={'/login'}></Navigate>}
        </>
    )
}

export default UserRoute