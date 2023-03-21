import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import '../css/Category.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/104213a58.jpg'; // Tell webpack this JS file uses this image
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Row, Col } from 'react-bootstrap';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



console.log(logo); // /logo.84287d09.png

export default function Category() {
    

    const classes = useStyles();

    return (
        <div className="heghtFig">

            <Row style={{ margin: "0px" }}>
                <Col xs={12} md={4} style={{ margin: "0px" }}>
                    Column 1
                </Col>
                <Col className="middleHidden" xs={12} md={4}>
                    <div class="contrainer">

                        <div class="heghtFig" >

                        </div>
                        <div class="square">
                            <img src={logo} class="center" alt="Logo" />

                        </div>


                    </div>

                    {/* <div class="gallery slides">
                        <div class="gallery__img slides__img slides__img--current">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(1.04213a58.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(2.3ff1fdb6.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(3.b606be87.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(4.24fd614c.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(5.d13f5e61.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(6.786c7db4.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(7.df95fe5c.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(8.e7faf38e.jpg)">
                            </div>
                        </div>
                        <div class="gallery__img slides__img">
                            <div class="gallery__img-inner slides__img-inner" style="background-image:url(9.ea63bab4.jpg)">
                            </div>
                        </div>
                    </div> */}
                </Col>
                <Col xs={12} md={4}>
                    Column 3
                </Col>
            </Row>
        </div>
    );
}