import styles from "./Page2.module.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Page2=()=>{
    return(
        <div className={styles.page2}>
            <div className={styles.page}>
                <div className={styles.contain}>
                    <div className={styles.title}> 
                        LOREM IPSUM
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </div>
                    
                    <div className={styles.product1}>
                        <div className={styles.beginer}>
                            <div className={styles.level}>BEGINNER</div>
                            <div className={styles.price1}>
                                <div className={styles.p1}>$10</div>
                                <div className={styles.p2}>Per Month</div>
                            </div>
                            <div className={styles.subtitle}></div>
                            <div className={styles.list}>
                                <div className={styles.tt1}>Drop out ramen hustle</div>
                                <div className={styles.tt2}>Coworking viral landing</div>
                                <div className={styles.tt3}>Crush revenue traction</div>
                                <div className={styles.tt4}>User base minimum viable</div>
                                <div className={styles.tt5}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder}>
                                    <ArrowRightIcon className={styles.icon_arrow}/>
                                    <div className={styles.btnname}>ORDER</div>
                                </button>
                            </div>
                        </div>
                        <div className={styles.advanced}>
                            <div className={styles.level}>ADVANCED</div>
                            <div className={styles.price2}>
                                <div className={styles.p1}>$45</div>
                                <div className={styles.p2}>Per Month</div>
                            </div>
                            <div className={styles.subtitle}></div>
                            <div className={styles.list}>
                                <div className={styles.tt1}>Drop out ramen hustle</div>
                                <div className={styles.tt2}>Coworking viral landing</div>
                                <div className={styles.tt3}>Crush revenue traction</div>
                                <div className={styles.tt4}>User base minimum viable</div>
                                <div className={styles.tt5}>Lorem ipsum dolor</div>
                                <div className={styles.btn_contain}>
                                    <button className={styles.btnorder}>
                                        <ArrowRightIcon className={styles.icon_arrow}/>
                                        <div className={styles.btnname}>ORDER</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.master}>
                            <div className={styles.new}>
                                <div className={styles.new_text}>NEW</div>
                            </div>
                            <div className={styles.level}>MASTER</div>
                            <div className={styles.price3}>
                                <div className={styles.p1}>$245</div>
                                <div className={styles.p2}>Per Month</div>
                            </div>
                            <div className={styles.subtitle}>
                                <div className={styles.s1}>
                                    Subtitle Goes Here
                                </div>
                                <div className={styles.s2}>
                                    Subtitle second line goes here
                                </div>
                            </div>
                            <div className={styles.list}>
                                <div className={styles.tt1}>Drop out ramen hustle</div>
                                <div className={styles.tt2}>Coworking viral landing</div>
                                <div className={styles.tt3}>Crush revenue traction</div>
                                <div className={styles.tt4}>User base minimum viable</div>
                                <div className={styles.tt5}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder}>
                                    <ArrowRightIcon className={styles.icon_arrow}/>
                                    <div className={styles.btnname}>ORDER</div>
                                </button>
                            </div>
                        </div>
                        <div className={styles.insane}>
                            <div className={styles.level}>INSANE</div>
                            <div className={styles.price4}>
                                <div className={styles.p1}>$1399</div>
                                <div className={styles.p2}>Per Month</div>
                            </div>
                            <div className={styles.subtitle}></div>
                            <div className={styles.list}>
                                <div className={styles.tt1}>Drop out ramen hustle</div>
                                <div className={styles.tt2}>Coworking viral landing</div>
                                <div className={styles.tt3}>Crush revenue traction</div>
                                <div className={styles.tt4}>User base minimum viable</div>
                                <div className={styles.tt5}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder}>
                                    <ArrowRightIcon className={styles.icon_arrow}/>
                                    <div className={styles.btnname}>ORDER</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product2}>
                        <div className={styles.beginer_p2}>
                            <div className={styles.level_p2}>
                                <div className={styles.l1}>BEGINNER</div>
                                <div className={styles.l2}>
                                    <div className={styles.l2_1}>$99</div>
                                    <div className={styles.l2_2}>Per month</div>
                                </div>
                            </div>
                            <div className={styles.subtitle_p2}>
                                <div className={styles.s1}>Subtitle Goes Here</div>
                                <div clasName={styles.s2}>Subtitle second line goes here lorem ipsum</div>
                            </div>
                            <div className={styles.list_p2}>
                                <div className={styles.tt1_p2_beginer}>Drop out ramnen hustle</div>
                                <div className={styles.tt2_p2_beginer}>Coworking viable landing</div>
                                <div className={styles.tt3_p2_beginer}>Crush revenue traction</div>
                                <div className={styles.tt4_p2_beginer}>User base minimum viable</div>
                                <div className={styles.tt5_p2_beginer}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder_p2}>
                                    <ArrowRightIcon className={styles.icon_arrow_p2}/>
                                    <div className={styles.btnname_p2}>ORDER</div>
                                </button>
                            </div>           
                        </div>
                        <div className={styles.advanced_p2}>
                            <div className={styles.level_p2}>
                                <div className={styles.new_p2}>
                                    <div className={styles.new_text_p2}>NEW</div>
                                </div>
                                <div className={styles.l1}>ADVANCED</div>
                                <div className={styles.l2}>
                                    <div className={styles.l2_1}>$199</div>
                                    <div className={styles.l2_2}>Per month</div>
                                </div>
                            </div>
                            <div className={styles.subtitle_p2}>
                                <div className={styles.s1}>Subtitle Goes Here</div>
                                <div clasName={styles.s2}>Subtitle second line goes here lorem ipsum</div>
                            </div>
                            <div className={styles.list_p2}>
                                <div className={styles.tt1_p2_advanced}>Drop out ramnen hustle</div>
                                <div className={styles.tt2_p2_advanced}>Coworking viable landing</div>
                                <div className={styles.tt3_p2_advanced}>Crush revenue traction</div>
                                <div className={styles.tt4_p2_advanced}>User base minimum viable</div>
                                <div className={styles.tt5_p2_advanced}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder_p2}>
                                    <ArrowRightIcon className={styles.icon_arrow_p2}/>
                                    <div className={styles.btnname_p2}>ORDER</div>
                                </button>
                            </div>           
                        </div>
                        <div className={styles.ultimate_p2}>
                            <div className={styles.level_p2}>
                                <div className={styles.l1}>ULTIMATE</div>
                                <div className={styles.l2}>
                                    <div className={styles.l2_1}>$299</div>
                                    <div className={styles.l2_2}>Per month</div>
                                </div>
                            </div>
                            <div className={styles.subtitle_p2}>
                                <div className={styles.s1}>Subtitle Goes Here</div>
                                <div clasName={styles.s2}>Subtitle second line goes here lorem ipsum</div>
                            </div>
                            <div className={styles.list_p2}>
                                <div className={styles.tt1_p2_ultimate}>Drop out ramnen hustle</div>
                                <div className={styles.tt2_p2_ultimate}>Coworking viable landing</div>
                                <div className={styles.tt3_p2_ultimate}>Crush revenue traction</div>
                                <div className={styles.tt4_p2_ultimate}>User base minimum viable</div>
                                <div className={styles.tt5_p2_ultimate}>Lorem ipsum dolor</div>
                                <button className={styles.btnorder_p2}>
                                    <ArrowRightIcon className={styles.icon_arrow_p2}/>
                                    <div className={styles.btnname_p2}>ORDER</div>
                                </button>
                            </div>           
                        </div>
                    </div>
                    <div className={styles.product3}>
                        <div className={styles.p3_1}>
                            <div className={styles.p3_title}>
                                <div className={styles.p3_t1}>Lorem Ipsum</div>
                                <div className={styles.p3_t2}>Subtitle second line goes here</div>
                            </div>
                            <div className={styles.p3_price}>
                                <div className={styles.p3_p1}>$99</div>
                                <div className={styles.p3_p2}>per month</div>
                            </div>
                            <div className={styles.p3_level}>BASIC</div>
                            <hr className={styles.hr}/>
                            <div className={styles.p3_list}>
                                <div className={styles.p3_l1}>Photo sharing school</div>
                                <div className={styles.p3_l2}>Drop out ramen hustle</div>
                                <div className={styles.p3_l3}>Coworking viral landing</div>
                                <div className={styles.p3_l4}>Crush revenue traction</div>
                                <div className={styles.p3_l5}>User base minimum viable</div>
                                <div className={styles.p3_l6}>Lorem ipsum dolor</div>
                                <button className={styles.p3_btn}>ORDER</button>
                            </div>
                        </div>
                        <div className={styles.p3_2}>
                            <div className={styles.p3_new}>NEW</div>
                            <div className={styles.p3_title}>
                                <div className={styles.p3_t1}>Lorem Ipsum</div>
                                <div className={styles.p3_t2}>Subtitle second line goes here</div>
                            </div>
                            <div className={styles.p3_price}>
                                <div className={styles.p3_p1}>$199</div>
                                <div className={styles.p3_p2}>per month</div>
                            </div>
                            <div className={styles.p3_level}>STANDARD</div>
                            <hr className={styles.hr}/>
                            <div className={styles.p3_list}>
                                <div className={styles.p3_l1}>Photo sharing school</div>
                                <div className={styles.p3_l2}>Drop out ramen hustle</div>
                                <div className={styles.p3_l3}>Coworking viral landing</div>
                                <div className={styles.p3_l4}>Crush revenue traction</div>
                                <div className={styles.p3_l5}>User base minimum viable</div>
                                <div className={styles.p3_l6}>Lorem ipsum dolor</div>
                                <button className={styles.p3_btn}>ORDER</button>
                            </div>
                        </div>
                        <div className={styles.p3_3}>
                            <div className={styles.p3_title}>
                                <div className={styles.p3_t1}>Lorem Ipsum</div>
                                <div className={styles.p3_t2}>Subtitle second line goes here</div>
                            </div>
                            <div className={styles.p3_price}>
                                <div className={styles.p3_p1}>$299</div>
                                <div className={styles.p3_p2}>per month</div>
                            </div>
                            <div className={styles.p3_level}>ULTIMATE</div>
                            <hr className={styles.hr}/>
                            <div className={styles.p3_list}>
                                <div className={styles.p3_l1}>Photo sharing school</div>
                                <div className={styles.p3_l2}>Drop out ramen hustle</div>
                                <div className={styles.p3_l3}>Coworking viral landing</div>
                                <div className={styles.p3_l4}>Crush revenue traction</div>
                                <div className={styles.p3_l5}>User base minimum viable</div>
                                <div className={styles.p3_l6}>Lorem ipsum dolor</div>
                                <button className={styles.p3_btn}>ORDER</button>
                            </div>
                        </div>
                        <div className={styles.p3_4}>
                            <div className={styles.p3_title}>
                                <div className={styles.p3_t1}>Lorem Ipsum</div>
                                <div className={styles.p3_t2}>Subtitle second line goes here</div>
                            </div>
                            <div className={styles.p3_price}>
                                <div className={styles.p3_p1}>$399</div>
                                <div className={styles.p3_p2}>per month</div>
                            </div>
                            <div className={styles.p3_level}>PREMIUM</div>
                            <hr className={styles.hr}/>
                            <div className={styles.p3_list}>
                                <div className={styles.p3_l1}>Photo sharing school</div>
                                <div className={styles.p3_l2}>Drop out ramen hustle</div>
                                <div className={styles.p3_l3}>Coworking viral landing</div>
                                <div className={styles.p3_l4}>Crush revenue traction</div>
                                <div className={styles.p3_l5}>User base minimum viable</div>
                                <div className={styles.p3_l6}>Lorem ipsum dolor</div>
                                <button className={styles.p3_btn}>ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page2;