import styles from "./Page1.module.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ListRoundedIcon from '@mui/icons-material/ListRounded';



const Page1=()=>{
    return(
        <div className={styles.page}>
            <div className={styles.page1}>
                <div className={styles.contain}>
                    <div className={styles.header}>
                        <div className={styles.header_logo}>
                            <image src="Logo.png" className={styles.logo}/>
                            <div className={styles.text_logo}>THEGEM</div>
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.home}>HOME </div>
                            <div className={styles.pages}>PAGES </div>
                            <div className={styles.blog}>BLOG </div>
                            <div className={styles.portfolios}>PORTFOLIOS </div>
                            <div className={styles.shop}>SHOP </div>
                            <div className={styles.features}>FEATURES </div>
                            <div className={styles.element}>ELEMENT </div>
                        </div>
                        <div className={styles.taskbar}>
                            <image src="EnglandFlag" className={styles.flag}/>
                            <SearchIcon className={styles.icon_search}/>
                            <ShoppingBasketIcon className={styles.icon_cart}/>
                        </div>
                    </div>
                    <div className={styles.main}>
                        <ListRoundedIcon className={styles.icon_list}/>
                        <div className={styles.main_title}>PRICING TABLES</div>
                        <div className={styles.main_text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        </div>
                        <div className={styles.button}>
                            <button className={styles.bt1}>PURCHASE NOW</button>
                            <button className={styles.bt2}>MORE DETAILS</button>
                        </div>
                        <div className={styles.icon_radio}>
                            <input type="radio" className={styles.radio}/>
                            <input type="radio" className={styles.radio}/>
                            <input type="radio" className={styles.radio}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page1;