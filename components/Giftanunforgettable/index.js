import React from 'react'
import BtnLearn from "../btn-learn";

import styles from "./index.module.scss"
const index = () => {
    return (
        <div className={styles.parents}>
            <section className={styles.cta}>
                <div className={styles.container2}>
                    <div className={styles.column4}>
                        <h1 className={styles.heading4}>
                            <p
                                className={styles.giftAnUnforgettable}
                            >{`Gift an Unforgettable Hot Air `}</p>
                            <p className={styles.giftAnUnforgettable}>
                                Balloon Adventure Today !!
                            </p>
                        </h1>
                    </div>
                    <div className={styles.column5}>
                        <div className={styles.text4}>
                            Customize and Gift a Hot Air Balloon Package for your loved one
                            and get a Free Adventure for Yourself ! for a limited Time Only !!
                        </div>
                        <div className={styles.actions}>
                            <BtnLearn
                                showBtnLearn
                                btnLearnBorder="1px solid #fff"
                                btnLearnBackgroundColor="#fff"
                                button="Book Now"
                                buttonHeight="24px"
                                buttonDisplay="inline-block"
                                buttonColor="#000"
                                buttonWidth="unset"
                            />
                            <BtnLearn
                                showBtnLearn
                                btnLearnBorder="1px solid #fff"
                                btnLearnBackgroundColor="unset"
                                button="WhatsApp Us"
                                buttonHeight="24px"
                                buttonDisplay="inline-block"
                                buttonColor="#fff"
                                buttonWidth="unset"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default index