import React from 'react'
import styles from "../styles/Hero.module.css"
const Hero = () => {
    return (
        <div className={styles.main_wrapper} >
            <div className={styles.hero_grid_wrapper} >
                <div className={styles.char_one}>
                    📰
                </div>
                <div className={styles.char_two}>
                    🐦
                </div>

                <div className={styles.char_three}>
                    💡
                </div>

            </div>
            <div className={styles.hero_text_wrapper}>
                <h2 className={styles.hero_text} >
                    <span style={{ "color": "rgb(18, 180, 201)" }} >techiebirdie</span> is your <span
                        style={{ "color": "rgb(201, 189, 18)" }} >one stop shop </span>
                    for all <span style={{ "color": " rgb(156, 156, 156)" }}>news tech</span>
                </h2>
            </div>
        </div>
    )
}

export default Hero