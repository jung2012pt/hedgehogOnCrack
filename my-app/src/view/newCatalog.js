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
import '../css/CategoryNew.css';
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

export default function newCatalog() {
    let activeIndex = 0;

    const groups = document.getElementsByClassName("card-group");

    const handleLoveClick = () => {
        const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "after";

        nextGroup.dataset.status = "becoming-active-from-before";

        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }

    const handleHateClick = () => {
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

        const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

        currentGroup.dataset.status = "before";

        nextGroup.dataset.status = "becoming-active-from-after";

        setTimeout(() => {
            nextGroup.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }

    // const classes = useStyles();

    return (
        <div >

            <div class="card-swiper">
                <div class="card-groups">
                    <div class="card-group" data-index="0" data-status="active">
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                    </div>
                    <div class="card-group" data-index="1" data-status="unknown">
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                    </div>
                    <div class="card-group" data-index="2" data-status="unknown">
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                        <div class="little-card card">

                        </div>
                        <div class="big-card card">

                        </div>
                    </div>
                </div>
                <div class="card-swiper-buttons">
                    <button id="hate-button" onClick={handleHateClick}>
                        <i class="fa-solid fa-x"></i>
                    </button>
                    <button id="love-button" onClick={handleLoveClick}>
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>

           
        </div>
    );
}