import React from 'react'

import Login from '../../components/Authentication/Login'
import Header from '../../components/Authentication/Header'

const LoginPage = () => {
    return (
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />
        </>
    )
}

export default LoginPage