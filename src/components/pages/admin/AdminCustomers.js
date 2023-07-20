import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllUsers } from '../../../api/productApi'
import { getUserDetails, isAuthenticated, updateUser } from '../../../api/userApi'
import { makeAdmin } from '../../../finalReducers/cartActions'
import Footer from '../../layouts/Footer'
import Navbar from '../../layouts/Navbar'
import AdminSidebar from './AdminSidebar'

const AdminCustomers = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    // const [user, setUser] = useState([])
    const [user_role, setUser_role] = useState('') 
    const params = useParams()
    const id = params.id

    useEffect(() => {
        getAllUsers()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setUsers(data)
                }
            })
    }, [success])

    const handleRole = (id) => (e) => {
        e.preventDefault()
        setUser_role(1)
        updateUser(id, user_role)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    if (data.role === 1) {
                        data.role = 0
                        setUser_role(data.role)
                    }
                    else {
                        data.role = 1
                        setUser_role(data.role)
                    }
                    console.log(data)
                    console.log(users)
                }
            })
    }
    return (
        <>
            <Navbar />
            {/* {showError()}
    {showSuccess()} */}
            <div className='container-fluid customMargin'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9 p-5'>
                        <h3>Customers</h3>
                        <table className='table table-bordered table-hover align-middle text-center'>
                            <thead>
                                <tr className='table-dark'>
                                    <th>S.N</th>
                                    <th>User Name</th>
                                    <th>user Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role ? "Admin" : "Normal User"}</td>
                                        <td>
                                            <div className='btn-group m-2'>
                                                {user && user.role === 0 &&
                                                    <button className='btn btn-warning'
                                                        onClick={handleRole(user._id)}>Make Admin</button>
                                                }
                                                {user && user.role === 1 &&
                                                    <button className='btn btn-warning'
                                                     onClick={handleRole(user._id)}>Make User</button>
                                                }
                                                <button className="btn btn-success ms-2">Enable</button>
                                                <button className='btn btn-danger ms-2' >Disable</button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td colSpan={6}>
                                        <button className='btn btn-primary'>Load More</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminCustomers