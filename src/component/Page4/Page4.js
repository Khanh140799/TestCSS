import styles from "./Page4.module.css"


const Page4=()=>{
    return(
        <div className={styles.page}>
            <div className={styles.contain}>
                <div className={styles.product}>
                    <div className={styles.ocean}>
                        <div className={styles.ocean_price}>
                            <div className={styles.ocean_p1}>$399</div>
                            <div className={styles.ocean_p2}>Per tour</div>
                        </div>
                        <div className={styles.ocean_place}>OCEAN</div>
                        <div className={styles.ocean_title}>
                            <div className={styles.ocean_t1}>Subtitle goes here</div>
                            <div className={styles.ocean_t2}>Subtitle second line goes here lorem ipsum</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.ocean_l1}>Drop out ramen hustle</div>
                            <div className={styles.ocean_l2}>Coworking vitual landing</div>
                            <div className={styles.ocean_l3}>Crush revenue traction</div>
                            <div className={styles.ocean_l4}>Use base minimum viable</div>
                            <div className={styles.ocean_l5}>Lorem ipsum dolor</div>
                        </div>
                        <button className={styles.ocean_btn}>BUY TOUR</button>
                    </div>
                    <div className={styles.mountain}>
                        <div className={styles.mountain_price}>
                            <div className={styles.mountain_p1}>$399</div>
                            <div className={styles.mountain_p2}>Per tour</div>
                        </div>
                        <div className={styles.mountain_place}>MOUNTAIN</div>
                        <div className={styles.mountain_a}>The best price/quantity plan *</div>
                        <div className={styles.mountain_title}>
                            <div className={styles.mountain_t1}>Subtitle goes here</div>
                            <div className={styles.mountain_t2}>Subtitle second line goes here lorem ipsum</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.mountain_l1}>Drop out ramen hustle</div>
                            <div className={styles.mountain_l2}>Coworking vitual landing</div>
                            <div className={styles.mountain_l3}>Crush revenue traction</div>
                            <div className={styles.mountain_l4}>Use base minimum viable</div>
                            <div className={styles.mountain_l5}>Lorem ipsum dolor</div>
                        </div>
                        <button className={styles.mountain_btn}>BUY TOUR</button>
                    </div>
                    <div className={styles.forest}>
                        <div className={styles.forest_price}>
                            <div className={styles.forest_p1}>$399</div>
                            <div className={styles.forest_p2}>Per tour</div>
                        </div>
                        <div className={styles.forest_place}>FOREST</div>
                        <div className={styles.forest_title}>
                            <div className={styles.forest_t1}>Subtitle goes here</div>
                            <div className={styles.forest_t2}>Subtitle second line goes here lorem ipsum</div>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.forest_l1}>Drop out ramen hustle</div>
                            <div className={styles.forest_l2}>Coworking vitual landing</div>
                            <div className={styles.forest_l3}>Crush revenue traction</div>
                            <div className={styles.forest_l4}>Use base minimum viable</div>
                            <div className={styles.forest_l5}>Lorem ipsum dolor</div>
                        </div>
                        <button className={styles.forest_btn}>BUY TOUR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Page4;