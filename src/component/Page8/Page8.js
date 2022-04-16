import styles from "./Page8.module.css"
import RoomIcon from '@mui/icons-material/Room';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';


const Page8=()=>{
    return(
        <div className={styles.page}>
            <div className={styles.contain}>
                <div className={styles.infor}>
                    <div className={styles.desc}>
                        <div className={styles.name}>
                            <img src="logo2.png" className={styles.logo}/>
                            <div className={styles.name_name}>
                                <div className={styles.n1}>THE</div>
                                <div className={styles.n2}>GEM</div>
                            </div>
                        </div>
                        <div className={styles.detail}>Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.title}>CONTACT</div>
                        <div className={styles.add}>
                            <div className={styles.address}>
                                <RoomIcon className={styles.icon_add}></RoomIcon>
                                <div>Address:</div>
                            </div>     
                            <div className={styles.add_}>908 New Hampshire Avenue Northwest #100, Washington, DC 20037, United States</div>
                        </div>
                        <div className={styles.phone}>
                            <HeadphonesIcon className={styles.icon_phone}/>
                            <div className={styles.phone_num}>Phone: +1916-875-2235</div>
                        </div>
                        <div className={styles.fax}>
                            <ArticleSharpIcon className={styles.icon_fax}/>
                            <div className={styles.fax_num}>Fax: +1916-875-2235</div>
                        </div>
                        <div className={styles.email}>
                            <MailOutlineSharpIcon className={styles.icon_email}/>
                            <div>Email:</div>
                            <a className={styles.email_num}>info@domain.ltd</a>
                        </div>
                        <div className={styles.web}>
                            <LanguageSharpIcon className={styles.icon_web}></LanguageSharpIcon>
                            <div>Web:</div>
                            <a className={styles.web_num}>www.codethemes.com</a>
                        </div>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.post_1}>
                        <div className={styles.post_title}>RECENT POSTS</div>
                        <div className={styles.post_title_1}>
                            <div className={styles.post_avatar}></div>
                            <div className={styles.post_text}>
                                <div className={styles.post_text_1}>Proin gravida nibh vel velit auctor aliquet aenean...</div>
                                <div className={styles.post_text_2}>
                                    <div className={styles.text_2_1}>27 Dec 2015</div>
                                    <ForumOutlinedIcon className={styles.post_icon}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.post_title_2}>
                            <div className={styles.post_avatar}></div>
                            <div className={styles.post_text}>
                                <div className={styles.post_text_1}>Proin gravida nibh vel velit auctor aliquet aenean...</div>
                                <div className={styles.post_text_2}>
                                    <div className={styles.text_2_1}>27 Dec 2015</div>
                                    <ForumOutlinedIcon className={styles.post_icon}/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.post_title_3}>
                            <div className={styles.post_avatar}></div>
                            <div className={styles.post_text}>
                                <div className={styles.post_text_1}>Proin gravida nibh vel velit auctor aliquet aenean...</div>
                                <div className={styles.post_text_2}>
                                    <div className={styles.text_2_1}>27 Dec 2015</div>
                                    <ForumOutlinedIcon className={styles.post_icon}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.post_2}>
                        <div className={styles.post_title}>USEFUL LINKS</div>
                        <div className={styles.post_2_list}>
                            <div className={styles.post_l}>
                                <div className={styles.point}></div>
                                <div className={styles.post_text_3}>General information for users</div>
                            </div>
                            <div className={styles.post_l}>
                                <div className={styles.point}></div>
                                <div className={styles.post_text_3}>Interactive Fairy Tales</div>
                            </div>
                            <div className={styles.post_l}>
                                <div className={styles.point}></div>
                                <div className={styles.post_text_3}>Official Storybook Maker Website</div>
                            </div>
                            <div className={styles.post_l}>
                                <div className={styles.point}></div>
                                <div className={styles.post_text_3}>Everyday Mathematics Links</div>
                            </div>
                            <div className={styles.post_l_}>
                                <div className={styles.point}></div>
                                <div className={styles.post_text_3}>Basic Knowledge and Experience </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.post_2}></div>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.feedback_1}>
                        <div className={styles.feedback_title}>EMAIL US</div>
                        <PersonIcon className={styles.icon_person}/>
                        <input className={styles.feedback_name} type="text" placeholder="Your name"></input>
                        <input className={styles.feedback_email} placeholder="Your email"></input>
                        <EmailIcon className={styles.icon_email}/>
                        <input className={styles.feedback_message} placeholder="Your message"></input>
                        <button className={styles.feedback_btn}>SEND MESSAGE</button>
                    </div>
                    <div className={styles.feedback_2}>
                        <div className={styles.feedback_title}>PROJECTS / CLIENTS ?</div>
                        <div className={styles.feedback_list}>
                            <div className={styles.fb_l1}>
                                <div className={styles.fb_l1_1}></div>
                                <div className={styles.fb_l1_2}></div>
                                <div className={styles.fb_l1_3}></div>
                            </div>
                            <div className={styles.fb_l2}>
                                <div className={styles.fb_l1_1}></div>
                                <div className={styles.fb_l1_2}></div>
                                <div className={styles.fb_l1_3}></div>
                            </div>
                        </div>
                        <div className={styles.fb_point}>
                            <div className={styles.fb_point1}></div>
                            <div className={styles.fb_point2}></div>
                            <div className={styles.fb_point3}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.feed}>
                    <div className={styles.feed_1}>
                        <div className={styles.feed_title}>FLICKR FEED</div>
                        <div className={styles.feed_list}>
                            <div className={styles.feed_l1}>
                                <div className={styles.feed_l1_1}></div>
                                <div className={styles.feed_l1_2}></div>
                                <div className={styles.feed_l1_3}></div>
                            </div>
                            <div className={styles.feed_l2}>
                                <div className={styles.feed_l1_1}></div>
                                <div className={styles.feed_l1_2}></div>
                                <div className={styles.feed_l1_3}></div>
                            </div>
                            <div className={styles.feed_l3}>
                                <div className={styles.feed_l1_1}></div>
                                <div className={styles.feed_l1_2}></div>
                                <div className={styles.feed_l1_3}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.feed_2}>
                        <div className={styles.feed_title}>NEWLETTERS</div>
                        <div className={styles.feed_text_1}>Subscribe to our MailChimp newsletter and stay up to date with all events coming straight in your mailbox:</div>
                        <div className={styles.feed_enter_email}>
                            <input className={styles.feed_email} placeholder="Your email address"></input>
                            <ArrowForwardIosIcon className={styles.feed_icon}/>
                        </div>
                        <div className={styles.feed_text_2}>* Personal information will be encrypted</div>
                    </div>
                </div>
            </div>
            <div className={styles.contain_footer}>
                <div className={styles.footer}>
                    <div className={styles.ft_1}>
                        <div className={styles.ft_text_1}>©_Copyright_2015</div>
                        <div className={styles.ft_text_2}>CodexThemes</div>
                    </div>
                    <div className={styles.ft_2}>
                        <div className={styles.ft_2_1}>Support</div>
                        <div className={styles.ft_2_2}>Contact US</div>
                        <div className={styles.ft_2_3}>Disclaimer</div>
                        <div className={styles.ft_2_4}>Privacy Policy</div>
                    </div>
                    <div className={styles.ft_3}>
                        <FacebookIcon/>
                        <YouTubeIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page8;

  