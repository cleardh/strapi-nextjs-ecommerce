import { useContext } from 'react'
import { Router, useRouter } from 'next/router'
import styles from '../styles/BuyButton.module.css'
import AuthContext from '../context/AuthContext'

export default function BuyButton() {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    const redirectToLogin = () => {
        Router.push('/login')
    }
    return (
        <>
            {!user && (
                <button onClick={redirectToLogin} className={styles.buy}>Login to buy</button>
            )}
        </>
    )
}