import { useParams } from "react-router-dom"
import { API } from "../config"

export const register = (user) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
export const confirmEmail = token => {

    return fetch(`${API}/confirm/${token}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const login = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
export const authenticte = (data) => {
    localStorage.setItem('jwt', JSON.stringify(data))
}
export const isAuthenticated = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else {
        return false
    }
}
export const signOut = () => {
    localStorage.removeItem('jwt')
    return fetch(`${API}/signout`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

//forget password
export const forgetPassword = ({email}) => {
    return fetch(`${API}/forgetpassword`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            return console.log(err)
        })
}
//reset password
export const resetPassword = (password, token) => {
    return fetch(`${API}/resetpassword/${token}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}
//get user by id
export const getUserDetails = (id) => {
    return fetch(`${API}/finduserbyid/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

// update user
export const updateUser = (id, role) => {
    return fetch(`${API}/updateuser/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ role })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}