import styles from "./Page6.module.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Page6=()=>{
    return(
        <div className={styles.page}>
            <div className={styles.contain}>
                <div className={styles.product}>
                    <div className={styles.newborn}>
                        <div className={styles.newborn_head}>
                            <div className={styles.newborn_name}>NEWBORNS</div>
                            <div className={styles.newborn_price}>
                                <div className={styles.newborn_p1}>$5</div>
                                <div className={styles.newborn_p2}>Permonth</div>
                            </div>
                        </div>
                        <div className={styles.newborn_detail}>
                            <div className={styles.a}>
                                <div className={styles.newborn_d1}></div>
                                <div className={styles.newborn_d2}></div>
                            </div>
                            <div className={styles.newborn_t1}>Subtitle here</div>
                            <div className={styles.newborn_t2}>Subtitle second line goes here</div>
                            <div className={styles.newborn_list}>
                                <div className={styles.newborn_l1}>Photo sharing school</div>
                                <div className={styles.newborn_l2}>Drop out ramen hustle</div>
                                <div className={styles.newborn_l3}>Coworking viral landing</div>
                                <div className={styles.newborn_l4}>Crush revenue traction</div>
                                <div className={styles.newborn_l5}>User base minimum viable</div>
                                <div className={styles.newborn_b}>
                                    <btn className={styles.newborn_btn}>
                                        <ArrowRightIcon/>
                                        <div className={styles.newborn_btnname}>ORDER</div>
                                    </btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.kids}>
                        <div className={styles.kids_head}>
                            <div className={styles.kids_name}>KIDS</div>
                            <div className={styles.kids_price}>
                                <div className={styles.kids_p1}>$10</div>
                                <div className={styles.kids_p2}>Permonth</div>
                            </div>
                        </div>
                        <div className={styles.kids_detail}>
                            <div className={styles.a}>
                                <div className={styles.kids_d1}></div>
                                <div className={styles.kids_d2}></div>
                            </div>
                            <div className={styles.kids_t1}>Subtitle here</div>
                            <div className={styles.kids_t2}>Subtitle second line goes here</div>
                            <div className={styles.kids_list}>
                                <div className={styles.kids_l1}>Photo sharing school</div>
                                <div className={styles.kids_l2}>Drop out ramen hustle</div>
                                <div className={styles.kids_l3}>Coworking viral landing</div>
                                <div className={styles.kids_l4}>Crush revenue traction</div>
                                <div className={styles.kids_l5}>User base minimum viable</div>
                                <div className={styles.kids_b}>
                                    <btn className={styles.kids_btn}>
                                        <ArrowRightIcon/>
                                        <div className={styles.kids_btnname}>ORDER</div>
                                    </btn>
                                </div>
                                <div className={styles.kids_c}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teen}>
                        <div className={styles.teen_head}>
                            <div className={styles.teen_name}>TEENS</div>
                            <div className={styles.teen_n2}>Best price/quantity plan *</div>
                            <div className={styles.teen_price}>
                                <div className={styles.teen_p1}>$150</div>
                                <div className={styles.teen_p2}>Permonth</div>
                            </div>
                        </div>
                        <div className={styles.teen_detail}>
                            <div className={styles.a}>
                                <div className={styles.teen_d1}></div>
                                <div className={styles.teen_d2}></div>
                            </div>
                            <div className={styles.teen_t1}>Subtitle here</div>
                            <div className={styles.teen_t2}>Subtitle second line goes here</div>
                            <div className={styles.teen_list}>
                                <div className={styles.teen_l1}>Photo sharing school</div>
                                <div className={styles.teen_l2}>Drop out ramen hustle</div>
                                <div className={styles.teen_l3}>Coworking viral landing</div>
                                <div className={styles.teen_l4}>Crush revenue traction</div>
                                <div className={styles.teen_l5}>User base minimum viable</div>
                                <div className={styles.teen_b}>
                                    <btn className={styles.teen_btn}>
                                        <ArrowRightIcon/>
                                        <div className={styles.teen_btnname}>ORDER</div>
                                    </btn>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.adult}>
                        <div className={styles.adult_head}>
                            <div className={styles.adult_name}>ADULTS</div>
                            <div className={styles.adult_price}>
                                <div className={styles.adult_p1}>$500</div>
                                <div className={styles.adult_p2}>Permonth</div>
                            </div>
                        </div>
                        <div className={styles.adult_detail}>
                            <div className={styles.a}>
                                <div className={styles.adult_d1}></div>
                                <div className={styles.adult_d2}></div>
                            </div>
                            <div className={styles.adult_t1}>Subtitle here</div>
                            <div className={styles.adult_t2}>Subtitle second line goes here</div>
                            <div className={styles.adult_list}>
                                <div className={styles.adult_l1}>Photo sharing school</div>
                                <div className={styles.adult_l2}>Drop out ramen hustle</div>
                                <div className={styles.adult_l3}>Coworking viral landing</div>
                                <div className={styles.adult_l4}>Crush revenue traction</div>
                                <div className={styles.adult_l5}>User base minimum viable</div>
                                <div className={styles.adult_b}>
                                    <btn className={styles.adult_btn}>
                                        <ArrowRightIcon/>
                                        <div className={styles.adult_btnname}>ORDER</div>
                                    </btn>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page6;