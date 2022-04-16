
import styles from "./Layout.module.css"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { SliderData } from "../SliderData/SliderData";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import { useEffect, useState } from "react";

const Layout=()=>{
    const [current,setCurrent] = useState(0);
    const length=SliderData.length;
    if(!Array.isArray(SliderData)||SliderData.length<=0){
        return null;
    }
    const nextSlide=()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }
    useEffect(()=>{
        const a=setInterval(() => {
            nextSlide()
        }, 5000);
        return ()=>clearInterval(a)
    },[current])

    return(
        <div className={styles.layout}>
            <div className={styles.contain}>
                <ArrowCircleLeftIcon className={styles.arrleft} onClick={prevSlide}/>
                <ArrowCircleRight className={styles.arrright} onClick={nextSlide}/>
                {SliderData.map((slide,index)=>(
                    <div className={styles.contain_img} key={index}>
                        {index===current && <img src={slide.img} className={styles.img}/>}
                    </div>
                ))}
                <div className={styles.contain_dot}>
                     {Array.from({length:SliderData.length}).map((item,index)=>(
                         <div className={index===current?styles.dot:styles.dot_active} onClick={()=>setCurrent(index)} ></div>
                     ))}
                </div>
            </div>
        </div>
    )
}
export default Layout;