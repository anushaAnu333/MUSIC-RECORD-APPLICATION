import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

const ReqAuth = ({children}) => {
    const location=useLocation();
    const auth=useSelector((store)=>store.AuthReducer.isAuth);

    if(!auth)
    {
        return <Navigate to="/login" state={{from:location}} replace/>
    }

  return children
}

export default ReqAuth