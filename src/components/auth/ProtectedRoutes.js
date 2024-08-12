import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({children,isVerified,redirect="/login"}) => {
    if(!isVerified){
        return <Navigate to={redirect} />
    }
    return children?children:<Outlet/>
}

export default ProtectedRoutes