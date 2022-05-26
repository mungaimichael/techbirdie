import Link from "next/link"
import styles from "../styles/Header.module.css"
const Header = () => {
    return (
        <div className={styles.main_wrapper} >
            <h1 className={styles.logo}>techiebirdie</h1>
            <ul className={styles.navbar} >
                <li className={styles.link}>
                    <Link href="/register" >
                        <button className={styles.register_button} >register</button>
                    </Link>
                </li>
                <li className={styles.link}>
                    <Link href="/login" >
                        <button className={styles.login_button} >login</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header