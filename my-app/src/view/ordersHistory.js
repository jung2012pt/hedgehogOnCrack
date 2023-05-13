import React, { useEffect, useState } from "react"
import savanna_OK from '../image/savanna_OK.webp'; // Tell webpack this JS file uses this image
import bottle_beach from '../image/bottle_beach.webp'; // Tell webpack this JS file uses this image
import Coral_OK from '../image/Coral_OK.webp'; // Tell webpack this JS file uses this image
import Glacier_OK from '../image/Glacier_OK.webp'; // Tell webpack this JS file uses this image
import styles from '../css/ordersHistory.module.css';
import { format } from "date-fns";
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        "& .MuiPaper-root": {
            background: '#FEF9EE',
            height: '100vh'
        }
    },

    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#000",
    },
    form: {
        width: '30%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function OrdersHistory() {
    const [bottle, setBottles] = useState([])
    const navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        // let response = await fetch('https://francexavimessi.github.io/demo/botton.json')
        console.log(localStorage.getItem("id"));
        const userId = localStorage.getItem("id");
        fetch("http://localhost:9000/api/user/" + userId + "/transaction", {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            },
            // body: JSON.stringify(myVar)
        }).then(function (response) {
            console.log("response");
            response.json().then(res => {
                console.log(res);
                // response = response
                setBottles(res)
                // swiperRender()
            })

        }).then(function (muutuja) {

            // document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
        });

    }
    const image = {

        savanna_OK: savanna_OK,
        bottle_beach: bottle_beach,
        Coral_OK: Coral_OK,
        Glacier_OK: Glacier_OK
    }
    return (
        <div className="container-2">
            <div className="header-2">
                {/* <a className="menu-icon" href="#">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </a> */}
                <a href="/2">

                    <img className="logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
                </a>
                {/* <div className="header-menu">
                    <a href="#">Mask</a>
                    <a href="#">Helmet</a>
                    <a href="#">Bottle</a>
                    <a href="#">Accessories</a>
                </div> */}

                <div className="header-icons">
                    <Button
                        style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            // width: "500px"
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={(e) => { navigate('/') }}
                    >
                        ออกจากระบบ</Button>
                    {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
                        <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
                    </svg> */}
                    {/* <Button
                        style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            // width: "500px"
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={(e) => { navigate('/5') }}
                    >
                        ประวัติการสั่งซื้อ
                    </Button> */}
                </div>
            </div>
            <div>
                <span className={styles.title}>My Orders</span>
                {bottle.length > 0 && (

                    bottle.map(b => (
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span>Order ID:</span>
                                <span className={styles.ID}>&nbsp;{b._id}</span>
                                <span className={styles.status}>Delivered</span>
                            </div>
                            <div className={styles.cardBody}>
                                <div className={styles.info}><img className={styles.pic} src={image[b._product.img]} alt="" /></div>
                                <div className={styles.info}><span>{b._product.title}</span></div>
                                <div className={styles.info}>
                                    <span className={styles.Date}>Purchase date</span>
                                    <span className={styles.Date}>{format(new Date(b.createdAt), "MMMM do, yyyy H:mm")}</span>
                                </div>
                                <div className={styles.info1}><span className={styles.price}> {b._product.price} บาท</span></div>
                            </div>
                        </div>
                    ))

                )}
                {/* <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>Order ID:</span>
                        <span className={styles.ID}>&nbsp;QUBZF1</span>
                        <span className={styles.status}>Delivered</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.info}><img className={styles.pic} src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/bottle_beach.png?v=11784267851598469514" alt="" /></div>
                        <div className={styles.info}><span>Beach</span></div>
                        <div className={styles.info}>
                            <span className={styles.Date}>Purchase date</span>
                            <span className={styles.Date}>11 May 2023</span>
                        </div>
                        <div className={styles.info1}><span className={styles.price}>$39.90</span></div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span>Order ID:</span>
                        <span className={styles.ID}>&nbsp;ZXCQB8</span>
                        <span className={styles.status}>Delivered</span>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.info}><img className={styles.pic} src="https://cdn.shopify.com/s/files/1/0689/1443/t/34/assets/savanna_OK.png?v=4783820813181844557" alt="" /></div>
                        <div className={styles.info}><span>Savanna</span></div>
                        <div className={styles.info}>
                            <span className={styles.Date}>Purchase date</span>
                            <span className={styles.Date}>9 May 2023</span>
                        </div>
                        <div className={styles.info1}><span className={styles.price}>$39.90</span></div>
                    </div>
                </div> */}
            </div>

        </div>

    );
}
