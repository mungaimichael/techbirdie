import React from 'react'
import Header from '../../Components/Header'
import styles from "../../styles/LoggedInHome.module.scss"

const Home = () => {
    return (
        <div className={styles.main_wrapper} >
            <Header />
            <div className={styles.main_content_wrapper}>

                <div className={styles.trending_tech_news_wrapper} ></div>
                <div className={styles.trending_car_news_wrapper} ></div>
                <div className={styles.trending_bus_news_wrapper} > </div>
            </div>
        </div>
    )
}

export default Home