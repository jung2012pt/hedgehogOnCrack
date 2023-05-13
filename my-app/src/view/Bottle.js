import React, { useEffect, useState } from "react"
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import '../css/Bottle.css';
import bg from '../image/bg.avif'; // Tell webpack this JS file uses this image
import bg2 from '../image/bg2.jpg'; // Tell webpack this JS file uses this image
import bg3 from '../image/bg3.avif'; // Tell webpack this JS file uses this image
import bg4 from '../image/bg4.webp'; // Tell webpack this JS file uses this image

import { makeStyles } from '@material-ui/core/styles';

import savanna_OK from '../image/savanna_OK.webp'; // Tell webpack this JS file uses this image
import bottle_beach from '../image/bottle_beach.webp'; // Tell webpack this JS file uses this image
import Coral_OK from '../image/Coral_OK.webp'; // Tell webpack this JS file uses this image
import Glacier_OK from '../image/Glacier_OK.webp'; // Tell webpack this JS file uses this image

import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
// import logo from '../image/104213a58.jpg'; // Tell webpack this JS file uses this image
// import logo from '../image/104213a58.jpg'; // Tell webpack this JS file uses this image
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

export default function Bottle() {

    const navigate = useNavigate();
    const classes = useStyles();

    const [bottle, setBottles] = useState([])
    // const [index, setIndex] = useState([])
    let index = 0;;
    const image = {
        bg: bg,
        bg2: bg2,
        bg3: bg3,
        bg4: bg4,
        savanna_OK: savanna_OK,
        bottle_beach: bottle_beach,
        Coral_OK: Coral_OK,
        Glacier_OK: Glacier_OK
    }
    const userId = localStorage.getItem("id");
    useEffect(() => {
        fetchUserData();
    }, []);
    const swiperRender = () => {
        const mySwiper = document.querySelector('.mySwiper');

        const swiper = new Swiper(mySwiper, {
            navigation: {
                nextEl: ".swiper-next-button",
                prevEl: ".swiper-prev-button"
            },
            effect: 'fade',
            loop: 'infinite',
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        });

        swiper.on('slideChange', function (sld) {
            console.log("FFFFFFFFFFFFFFFFF");
            console.log(sld.realIndex);
            // setIndex(sld.realIndex)
            // console.log(index);
            document.body.setAttribute('data-sld', sld.realIndex);
        });

    }
    const prevBotton = async () => {

        const mySwiper = document.querySelector('.mySwiper');

        const swiper = new Swiper(mySwiper, {
            navigation: {
                nextEl: ".swiper-next-button",
                prevEl: ".swiper-prev-button"
            },
            effect: 'fade',
            loop: 'infinite',
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        });
        swiper.slidePrev();
        index--;
        if (index < 0) {
            index = 3;
        }
        document.body.setAttribute('data-sld', index);

    }
    const nextBotton = async () => {

        const mySwiper = document.querySelector('.mySwiper');

        const swiper = new Swiper(mySwiper, {
            navigation: {
                nextEl: ".swiper-next-button",
                prevEl: ".swiper-prev-button"
            },
            effect: 'fade',
            loop: 'infinite',
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        });
        // swiper.slidePrev();
        index++;
        if (index > 3) {
            index = 0;
        }
        swiper.slideTo(index)
        console.log(index);
        document.body.setAttribute('data-sld', index);



    }


    const fetchUserData = async () => {
        // let response = await fetch('https://francexavimessi.github.io/demo/botton.json')
        console.log(localStorage.getItem("id"));

        fetch("http://localhost:9000/products", {
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
                swiperRender()
            })

        }).then(function (muutuja) {

            // document.getElementById('väljund').innerHTML = JSON.stringify(muutuja);
        });

    }
    async function buying(credentials) {
        const userId = localStorage.getItem("id");

        return fetch('http://localhost:9000/api/user/' + userId + '/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }
    const handleSubmit = async (e, id) => {
        // e.preventDefault();
        const userId = localStorage.getItem("id");
        e.preventDefault();
        console.log("FFFFFFFFFFFFF");
        console.log(id);
        console.log(userId);
        console.log("FFFFFFFFFFFFF");
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        })
            .then(async (value) => {
                if (value) {
                    const response = await buying({
                        userId: userId,
                        productId: id
                    });
                    console.log(response);
                    if (!response.message) {
                        // swal("Success", response.message, "success", {
                        //   buttons: false,
                        //   timer: 2000,
                        // })
                        swal({
                            title: "Are you sure ??",
                            text: response.message,
                            icon: "success",
                            buttons: false,
                            timer: 2000,
                            // dangerMode: true,
                        })
                            // navigate('/2')
                            .then((value) => {
                                console.log(response);
                                // localStorage.setItem('user', JSON.stringify(response['user']));
                                // localStorage.setItem('id', response.id);

                                // navigate('/2')
                            });
                    } else {
                        swal("Failed", response.message, "error");
                    }
                }

            });;

    }
    return (
        <div className="container">
            <div className="header">
                {/* <a className="menu-icon" href="#">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </a> */}
                <img className="logo" src="https://cdn.shopify.com/s/files/1/0689/1443/files/CLOSCA-LOGO-WEB-BLACK_130x@2x.png?v=1559116993" />
                {/* <div className="header-menu">
                    <a href="#">Mask</a>
                    <a href="#">Helmet</a>
                    <a href="#">Bottle</a>
                    <a href="#">Accessories</a>
                </div> */}

                <div className="header-icons">
                    {/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M437.02 330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521 243.251 404 198.548 404 148 404 66.393 337.607 0 256 0S108 66.393 108 148c0 50.548 25.479 95.251 64.262 121.962-36.21 12.495-69.398 33.136-97.281 61.018C26.629 379.333 0 443.62 0 512h40c0-119.103 96.897-216 216-216s216 96.897 216 216h40c0-68.38-26.629-132.667-74.98-181.02zM256 256c-59.551 0-108-48.448-108-108S196.449 40 256 40s108 48.448 108 108-48.449 108-108 108z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.955 208.955">
                        <path d="M190.85 200.227L178.135 58.626a7.5 7.5 0 00-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826H38.27a7.5 7.5 0 00-7.47 6.829L18.035 200.784a7.5 7.5 0 007.47 8.17h157.946a7.5 7.5 0 007.399-8.727zM79.509 39.971c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826H79.509V39.971zm-45.8 153.984L45.127 66.797h19.382v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h49.936v13.412a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5V66.797h19.364l11.418 127.158H33.709z" />
                    </svg> */}
                    <Button
                        style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            marginRight: 20
                            // width: "500px"
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        onClick={(e) => { navigate('/5') }}
                    >

                        ประวัติการสั่งซื้อ
                    </Button>
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
                </div>
            </div>
            <div className="mySwiper">
                <div className="main-wrapper swiper-wrapper">

                    {bottle.length > 0 && (

                        bottle.map(b => (
                            <div className="main swiper-slide" id="savanna">
                                <div className="left-side">
                                    <div className="main-wrapper">
                                        <h3 className="main-header">{b.name}</h3>
                                        <h1 className="main-title">{b.title}</h1>
                                        <h2 className="main-subtitle">{b.price} บาท</h2>
                                    </div>

                                    <div className="main-content">
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
                                            onClick={(e) => { handleSubmit(e, b._id) }}
                                        >
                                            BUY NOW
                                        </Button>
                                        <div className="main-content__title">{b.subtitle1}
                                        </div>
                                        <div className="main-content__subtitle">{b.subtitle2}</div>
                                        {/* <div className="more-menu">
                                            SNowhop
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="-5" y1="12" x2="19" y2="12" />
                                                <line x1="15" y1="16" x2="19" y2="12" />
                                                <line x1="15" y1="8" x2="19" y2="12" />
                                            </svg>
                                        </div> */}
                                        {/* <form className={classes.form} noValidate onSubmit={handleSubmit(b._id)}> */}


                                        {/* </form> */}
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="right-side__img">
                                        <img className="bottle-bg" src={image[b.bg]} alt="" />
                                        <img className="bottle-img" src={image[b.img]} />
                                    </div>
                                </div>
                            </div>
                            // <li key={user.id}>{user.name}</li>
                        ))

                    )}

                </div>
            </div>
            <div class="button-wrapper">
                <div class="swiper-button swiper-prev-button" onClick={(e) => { prevBotton() }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </div>
                <div class="swiper-button swiper-next-button" onClick={(e) => { nextBotton() }}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
