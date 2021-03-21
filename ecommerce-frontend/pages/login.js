import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

export default () => {
    const [email, setEmail] = useState('')
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        loginUser(email)
    }
    
    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name='description' content='Login here to make your purchase' />
            </Head>

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder='Email address'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
};
