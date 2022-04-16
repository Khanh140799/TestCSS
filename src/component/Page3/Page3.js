import styles from "./Page3.module.css"
import CheckIcon from '@mui/icons-material/Check';


const Page3=()=>{
    return(
        <div className={styles.page3}>
            <div className={styles.page}>
                <div className={styles.contain}>
                    <div className={styles.product1}>
                        <div className={styles.p1_tiny}>
                            <div className={styles.tiny_price}>
                                <div className={styles.p1_p1}>$99</div>
                                <div className={styles.p1_p2}>per month</div>
                            </div>
                            <div className={styles.p1_size}>TINY</div>
                            <div className={styles.p1_text}>
                                <div className={styles.p1_t1}>Subtitle goes here</div>
                                <div className={styles.p1_t2}>Subtitle second line goes here *</div>
                            </div>
                            <div className={styles.tiny_list}>
                                <div className={styles.tiny_l1}>
                                    <CheckIcon className={styles.tiny_l1_check}/>
                                    <div className={styles.tiny_title}>
                                        Photo sharing school
                                    </div>
                                </div>
                                <div className={styles.tiny_l2}>
                                    <CheckIcon className={styles.tiny_l2_check}/>
                                    <div className={styles.tiny_l2_title}>
                                        Drop out ramen hustle
                                    </div>
                                </div>
                                <div className={styles.tiny_l3}>Coworking virtal landing</div>
                                <div className={styles.tiny_l4}>Crush revenue traction</div>
                                <div className={styles.tiny_l5}>User base minimum viable</div>
                            </div>
                            <button className={styles.btn}>ORDER NOW</button>
                        </div>
                        <div className={styles.p1_tiny}>
                            <div className={styles.small_price}>
                                <div className={styles.p1_p1}>$99</div>
                                <div className={styles.p1_p2}>per month</div>
                            </div>
                            <div className={styles.p1_size}>SMALL</div>
                            <div className={styles.p1_text}>
                                <div className={styles.p1_t1}>Subtitle goes here</div>
                                <div className={styles.p1_t2}>Subtitle second line goes here *</div>
                            </div>
                            <div className={styles.small_list}>
                                <div className={styles.small_l1}>
                                    <CheckIcon className={styles.small_l1_check}/>
                                    <div className={styles.small_l1_title}>Photo sharing school</div>
                                </div>
                                <div className={styles.small_l2}>
                                    <CheckIcon className={styles.small_l2_check}/>
                                    <div className={styles.small_l2_title}>Drop out ramen hustle</div>
                                </div>
                                <div className={styles.small_l3}>
                                    <CheckIcon className={styles.small_l3_check}/>
                                    <div className={styles.small_l3_title}>Coworking virtal landing</div>
                                </div>
                                <div className={styles.small_l4}>Crush revenue traction</div>
                                <div className={styles.small_l5}>User base minimum viable</div>
                            </div>
                            <button className={styles.btn}>ORDER NOW</button>
                        </div>
                        <div className={styles.p1_tiny}>
                            <div className={styles.medium_price}>
                                <div className={styles.p1_p1}>$99</div>
                                <div className={styles.p1_p2}>per month</div>
                            </div>
                            <div className={styles.p1_size}>MEDIUM</div>
                            <div className={styles.p1_text}>
                                <div className={styles.p1_t1}>Subtitle goes here</div>
                                <div className={styles.p1_t2}>Subtitle second line goes here *</div>
                            </div>
                            <div className={styles.medium_list}>
                                <div className={styles.medium_l1}>
                                    <CheckIcon className={styles.medium_l1_check}/>
                                    <div className={styles.medium_l1_title}>Photo sharing school</div>
                                </div>
                                <div className={styles.medium_l2}>
                                    <CheckIcon className={styles.medium_l2_check}/>
                                    <div className={styles.medium_l2_title}>Drop out ramen hustle</div>
                                </div>
                                <div className={styles.medium_l3}>
                                    <CheckIcon className={styles.medium_l3_check}/>
                                    <div className={styles.medium_l3_title}>Coworking virtal landing</div>
                                </div>
                                <div className={styles.medium_l4}>
                                    <CheckIcon className={styles.medium_l4_check}/>
                                    <div className={styles.medium_l4_title}>Crush revenue traction</div>
                                </div>
                                <div className={styles.medium_l5}>User base minimum viable</div>
                            </div>
                            <button className={styles.btn}>ORDER NOW</button>
                        </div>
                        <div className={styles.p1_tiny}>
                            <div className={styles.large_new}>NEW</div>
                            <div className={styles.large_price}>
                                <div className={styles.p1_p1}>$99</div>
                                <div className={styles.p1_p2}>per month</div>
                            </div>
                            <div className={styles.p1_size}>LARGE</div>
                            <div className={styles.p1_text}>
                                <div className={styles.p1_t1}>Subtitle goes here</div>
                                <div className={styles.p1_t2}>Subtitle second line goes here *</div>
                            </div>
                            <div className={styles.large_list}>
                                <div className={styles.large_l1}>
                                    <CheckIcon className={styles.large_l1_check}/>
                                    <div className={styles.large_l1_title}>Photo sharing school</div>
                                </div>
                                <div className={styles.large_l2}>
                                    <CheckIcon className={styles.large_l2_check}/>
                                    <div className={styles.large_l2_title}>Drop out ramen hustle</div>
                                </div>
                                <div className={styles.large_l3}>
                                    <CheckIcon className={styles.large_l3_check}/>
                                    <div className={styles.large_l3_title}>Coworking virtal landing</div>
                                </div>
                                <div className={styles.large_l4}>
                                    <CheckIcon className={styles.large_l4_check}/>
                                    <div className={styles.large_l4_title}>Crush revenue traction</div>
                                </div>
                                <div className={styles.large_l5}>
                                    <CheckIcon className={styles.large_l5_check}/>
                                    <div className={styles.large_l5_title}>User base minimum viable</div>
                                </div>
                            </div>
                            <button className={styles.btn}>ORDER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page3;